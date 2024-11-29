import { translate } from '@/i18n/translate';
import { IMAGE_EXTENSIONS } from '@/image/constants';
import { DeleteImageResponseDto } from '@/image/exports';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as https from 'https';
import { Duplex } from 'stream';

@Injectable()
export class ImageService {
  constructor() {}

  async deleteImage(pictureUrl: string): Promise<DeleteImageResponseDto> {
    const options = {
      hostname: process.env.BUNNY_HOSTNAME,
      path: `/${process.env.BUNNY_STORAGE_ZONE_NAME}${new URL(pictureUrl).pathname}`,
      method: 'DELETE',
      headers: {
        AccessKey: process.env.BUNNY_ACCESS_KEY_CRUD,
      },
    };

    const reqCDN = https.request(options, (response) => {
      response.on('data', (_chunk) => {});
      response.on('end', async () => {
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          return new InternalServerErrorException([
            translate('route.image.delete.error'),
          ]);
        }
        return;
      });
    });

    reqCDN.on('error', (_error) => {
      return new InternalServerErrorException([
        translate('route.image.delete.error'),
      ]);
    });

    reqCDN.end();

    return {
      message: translate('route.image.delete.success'),
    };
  }

  async updateImage(id: string, file: Express.Multer.File): Promise<string> {
    const fileStream = this.bufferToStream(file.buffer);
    const path = `/${process.env.BUNNY_STORAGE_ZONE_NAME}/${id}.${IMAGE_EXTENSIONS[file.mimetype as keyof typeof IMAGE_EXTENSIONS]}`;
    const pictureUrl = `https://${process.env.BUNNY_CDN}/${id}.${IMAGE_EXTENSIONS[file.mimetype as keyof typeof IMAGE_EXTENSIONS]}`;

    const options = {
      hostname: process.env.BUNNY_HOSTNAME,
      path: path,
      method: 'PUT',
      headers: {
        AccessKey: process.env.BUNNY_ACCESS_KEY_CRUD,
        'Content-Type': 'application/octet-stream',
      },
    };

    const reqCDN = https.request(options, (response) => {
      response.on('data', (_chunk) => {});
      response.on('end', async () => {
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          throw new InternalServerErrorException([
            translate('route.image.update.error'),
          ]);
        }

        const options = {
          method: 'POST',
          headers: {
            AccessKey: process.env.BUNNY_ACCESS_KEY_PURGE!,
          },
        };
        const resPurge = await fetch(
          'https://api.bunny.net/purge?' +
            new URLSearchParams({ url: pictureUrl, async: 'false' }),
          options,
        );

        if (!resPurge.ok) {
          throw new InternalServerErrorException([
            translate('route.image.update.purge-error'),
          ]);
        }

        return translate('route.image.update.success');
      });
    });

    reqCDN.on('error', (_error) => {
      // console.error('Error uploading image to CDN:', error);
      throw new InternalServerErrorException([
        translate('route.image.update.error'),
      ]);
    });

    fileStream.pipe(reqCDN);

    return pictureUrl;
  }

  private bufferToStream(myBuffer: Buffer): Duplex {
    const tmp = new Duplex();
    tmp.push(myBuffer);
    tmp.push(null);
    return tmp;
  }
}
