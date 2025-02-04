import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const sendOtpSchema = z.object({
  phoneNumber: profileSchema.shape.phoneNumber,
});

export class SendOtpDto extends createZodDtoWithoutDate(sendOtpSchema) {}

export const sendOtpResponseSchema = z.object({
  success: z.boolean(),
});

export class SendOtpResponseDto extends createZodDtoWithoutDate(
  sendOtpResponseSchema,
) {}
