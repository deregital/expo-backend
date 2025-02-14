import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const sendMessageToPhoneSchema = z.object({
  phone: profileSchema.shape.phoneNumber,
  message: z.string(),
});

export class SendMessageToPhoneDto extends createZodDtoWithoutDate(
  sendMessageToPhoneSchema,
) {}

export const sendMessageToPhoneResponseSchema = z.object({
  success: z.boolean(),
});

export class SendMessageToPhoneResponseDto extends createZodDtoWithoutDate(
  sendMessageToPhoneResponseSchema,
) {}
