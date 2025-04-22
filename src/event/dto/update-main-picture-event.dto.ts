import {
  updateImageResponseSchema,
  updateImageSchema,
} from '@/image/dto/update-image.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateMainPictureEventSchema = updateImageSchema.pick({
  image: true,
});

export class UpdateMainPictureEventDto extends createZodDtoWithoutDate(
  updateMainPictureEventSchema,
) {}

export const updateMainPictureEventResponseSchema =
  updateImageResponseSchema.pick({
    message: true,
  });

export class UpdateMainPictureEventResponseDto extends createZodDtoWithoutDate(
  updateMainPictureEventResponseSchema,
) {}
