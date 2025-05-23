import {
  updateImageResponseSchema,
  updateImageSchema,
} from '@/image/dto/update-image.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateImageProfileSchema = updateImageSchema.pick({
  image: true,
});

export class UpdateImageProfileDto extends createZodDtoWithoutDate(
  updateImageProfileSchema,
) {}

export const updateImageProfileResponseSchema = updateImageResponseSchema.pick({
  message: true,
});

export class UpdateImageProfileResponseDto extends createZodDtoWithoutDate(
  updateImageProfileResponseSchema,
) {}
