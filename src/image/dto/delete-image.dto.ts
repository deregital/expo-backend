import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';
import { imageSchema } from './image.dto';

export const deleteImageSchema = z.object({
  id: z.string(),
});

export const deleteImageResponseSchema = imageSchema;
export class DeleteImageDto extends createZodDtoWithoutDate(
  deleteImageSchema,
) {}
