import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { imageSchema } from './image.dto';

export const updateImageSchema = imageSchema.pick({
  url: true,
  title: true,
  description: true,
});

export class UpdateImageDto extends createZodDtoWithoutDate(
  updateImageSchema,
) {}

export const updateImageResponseSchema = imageSchema;
export class UpdateImageResponseDto extends createZodDtoWithoutDate(
  updateImageResponseSchema,
) {}
