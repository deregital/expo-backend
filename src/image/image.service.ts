import { prisma } from '@/server/db';
import * as https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { Duplex } from 'stream';

export class ImageService {
  // Eliminar una imagen del CDN y actualizar el perfil
  async deleteImage(req: NextRequest): Promise<NextResponse> {
    const form = await req.formData();
    const currentFotoUrl = form.get('url') as string;

    if (currentFotoUrl !== '') {
      const options = {
        hostname: process.env.BUNNY_HOSTNAME,
        path: `/${process.env.BUNNY_STORAGE_ZONE_NAME}${new URL(currentFotoUrl).pathname}`,
        method: 'DELETE',
        headers: {
          AccessKey: process.env.BUNNY_ACCESS_KEY_CRUD,
        },
      };

      const reqCDN = https.request(options, (response) => {
        response.on('data', (chunk) => {
          // Aquí ya no necesitamos la variable responseBody
        });
        response.on('end', async () => {
          if (response.statusCode !== 200 && response.statusCode !== 201) {
            return new NextResponse('Error deleting file from CDN', {
              status: 500,
            });
          }

          // Actualizamos el perfil para establecer fotoUrl a null después de eliminar la imagen
          await prisma?.profile.update({
            where: {
              id: form.get('id') as string,
            },
            data: {
              fotoUrl: null,
            },
          });

          return new NextResponse('File deleted successfully', { status: 200 });
        });
      });

      reqCDN.on('error', (error) => {
        console.error('Error deleting file from CDN:', error);
        return new NextResponse('Error deleting file from CDN', {
          status: 500,
        });
      });

      reqCDN.end();

      // Retornamos un mensaje de éxito (esto podría ser redundante ya que el éxito se maneja en el callback de la petición)
      return new NextResponse('File deletion initiated', { status: 200 });
    }

    return new NextResponse('No file URL provided', { status: 400 });
  }

  // Actualizar una imagen en el CDN y actualizar el perfil
  async updateImage(
    id: string,
    updateImageDto: { url: string; description?: string; title?: string },
  ): Promise<NextResponse> {
    const { url, description, title } = updateImageDto;

    // Validamos los parámetros
    if (!url || !id) {
      return new NextResponse('Invalid parameters', { status: 400 });
    }

    // Definimos la ruta del archivo y la URL del CDN
    const filePath = `/${process.env.BUNNY_STORAGE_ZONE_NAME}/${id}-${new URL(url).pathname.split('/').pop()}`;
    const fotoUrl = `https://${process.env.BUNNY_CDN}/${filePath}`;

    // Opciones para la solicitud al CDN
    const options = {
      hostname: process.env.BUNNY_HOSTNAME,
      path: filePath,
      method: 'PUT',
      headers: {
        AccessKey: process.env.BUNNY_ACCESS_KEY_CRUD,
        'Content-Type': 'application/octet-stream',
      },
    };

    const reqCDN = https.request(options, (response) => {
      response.on('data', (chunk) => {
        // Aquí también no necesitamos la variable responseBody
      });
      response.on('end', async () => {
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          return new NextResponse('Error uploading image to CDN', {
            status: 500,
          });
        }

        // Actualizamos el perfil con la nueva foto URL y otros detalles
        await prisma?.profile.update({
          where: { id },
          data: {
            fotoUrl,
            description,
            title,
          },
        });

        return new NextResponse('Image updated successfully', { status: 200 });
      });
    });

    reqCDN.on('error', (error) => {
      console.error('Error uploading image to CDN:', error);
      return new NextResponse('Error uploading image to CDN', { status: 500 });
    });

    // Iniciamos el proceso de carga del archivo
    const fileBuffer = Buffer.from(
      await fetch(url).then((res) => res.arrayBuffer()),
    );
    const stream = this.bufferToStream(fileBuffer);
    stream.pipe(reqCDN);

    return new NextResponse('Image update initiated', { status: 200 });
  }

  // Función auxiliar para convertir un buffer a un stream
  private bufferToStream(myBuffer: Buffer) {
    const tmp = new Duplex();
    tmp.push(myBuffer);
    tmp.push(null);
    return tmp;
  }
}
