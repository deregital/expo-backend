import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const updateImageResponseSchema = z.object({
  message: z.string(),
});
export class UpdateImageResponseDto extends createZodDtoWithoutDate(
  updateImageResponseSchema,
) {}
