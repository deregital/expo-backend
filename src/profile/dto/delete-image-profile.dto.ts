import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const deleteImageProfileResponseSchema = z.object({
  message: z.string(),
});

export class DeleteImageProfileResponseDto extends createZodDtoWithoutDate(
  deleteImageProfileResponseSchema,
) {}
