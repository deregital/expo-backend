import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const deleteImageResponseSchema = z.object({
  message: z.string(),
});
export class DeleteImageResponseDto extends createZodDtoWithoutDate(
  deleteImageResponseSchema,
) {}
