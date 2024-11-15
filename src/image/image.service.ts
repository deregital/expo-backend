import { Injectable } from '@nestjs/common';
import { UpdateImageDto } from './exports';

@Injectable()
export class ImageService {
  deleteImage(
    id: string,
  ):
    | {
        id: string;
        description?: string | undefined;
        url?: string | undefined;
        title?: string | undefined;
      }
    | PromiseLike<{
        id: string;
        description?: string | undefined;
        url?: string | undefined;
        title?: string | undefined;
      }> {
    throw new Error('Method not implemented.');
  }
  updateImage(
    id: string,
    updateImageDto: UpdateImageDto,
  ):
    | {
        id: string;
        description?: string | undefined;
        url?: string | undefined;
        title?: string | undefined;
      }
    | PromiseLike<{
        id: string;
        description?: string | undefined;
        url?: string | undefined;
        title?: string | undefined;
      }> {
    throw new Error('Method not implemented.');
  }
}
