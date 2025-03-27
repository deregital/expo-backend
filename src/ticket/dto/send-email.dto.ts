import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const sendEmailResponseSchema = z.object({
  mailId: z.string(),
});

export class SendEmailResponseDto extends createZodDtoWithoutDate(
  sendEmailResponseSchema,
) {}
