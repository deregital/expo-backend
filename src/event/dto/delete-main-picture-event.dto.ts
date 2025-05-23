import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const deleteMainPictureEventResponseSchema = z.object({
  message: z.string(),
});

export class DeleteMainPictureEventResponseDto extends createZodDtoWithoutDate(
  deleteMainPictureEventResponseSchema,
) {}
