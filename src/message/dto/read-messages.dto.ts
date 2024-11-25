import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const readMessagesResponseSchema = z.object({
  success: z.boolean(),
});

export class ReadMessagesResponseDto extends createZodDtoWithoutDate(
  readMessagesResponseSchema,
) {}
