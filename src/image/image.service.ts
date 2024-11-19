import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import * as https from 'https';
import { NextResponse } from 'next/server';
import { Duplex } from 'stream';

@Injectable()
export class ImageService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async deleteImage(id: string): Promise<NextResponse> {
    const profile = await this.prisma.profile.findUnique({ where: { id } });

    if (!profile || !profile.profilePictureUrl) {
      return new NextResponse('Profile or photo not found', { status: 404 });
    }

    const currentFotoUrl = profile.profilePictureUrl;

    const options = {
      hostname: process.env.BUNNY_HOSTNAME,
      path: `/${process.env.BUNNY_STORAGE_ZONE_NAME}${new URL(currentFotoUrl).pathname}`,
      method: 'DELETE',
      headers: {
        AccessKey: process.env.BUNNY_ACCESS_KEY_CRUD,
      },
    };

    const reqCDN = https.request(options, (response) => {
      response.on('data', (chunk) => {});
      response.on('end', async () => {
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          return new NextResponse('Error deleting file from CDN', {
            status: 500,
          });
        }

        await this.prisma.profile.update({
          where: { id },
          data: { profilePictureUrl: null },
        });

        return new NextResponse('File deleted successfully', { status: 200 });
      });
    });

    reqCDN.on('error', (error) => {
      console.error('Error deleting file from CDN:', error);
      return new NextResponse('Error deleting file from CDN', { status: 500 });
    });

    reqCDN.end();

    return new NextResponse('File deletion initiated', { status: 200 });
  }

  async updateImage(
    id: string,
    updateImageDto: { url: string; description?: string; title?: string },
  ): Promise<NextResponse> {
    const { url, description, title } = updateImageDto;

    if (!url || !id) {
      return new NextResponse('Invalid parameters', { status: 400 });
    }

    const filePath = `/${process.env.BUNNY_STORAGE_ZONE_NAME}/${id}-${new URL(url).pathname.split('/').pop()}`;
    const profilePictureUrl = `https://${process.env.BUNNY_CDN}/${filePath}`;

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
      response.on('data', (chunk) => {});
      response.on('end', async () => {
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          return new NextResponse('Error uploading image to CDN', {
            status: 500,
          });
        }

        await this.prisma.profile.update({
          where: { id },
          data: {
            profilePictureUrl,
          },
        });

        return new NextResponse('Image updated successfully', { status: 200 });
      });
    });

    reqCDN.on('error', (error) => {
      console.error('Error uploading image to CDN:', error);
      return new NextResponse('Error uploading image to CDN', { status: 500 });
    });

    const fileBuffer = Buffer.from(
      await fetch(url).then((res) => res.arrayBuffer()),
    );
    const stream = this.bufferToStream(fileBuffer);
    stream.pipe(reqCDN);

    return new NextResponse('Image update initiated', { status: 200 });
  }

  private bufferToStream(myBuffer: Buffer) {
    const tmp = new Duplex();
    tmp.push(myBuffer);
    tmp.push(null);
    return tmp;
  }
}
