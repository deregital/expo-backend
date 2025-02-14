import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const sendOtpSchema = z.object({
  phoneNumber: profileSchema.shape.phoneNumber,
});

export class SendOtpDto extends createZodDtoWithoutDate(sendOtpSchema) {}

// success: false & message: string. Success:true & message:never, zod.

const baseResponseSchema = z.object({
  hasVerified: z.boolean(),
  hasUsername: z.boolean(),
});

export const discriminatedResponseSchema = z.discriminatedUnion('success', [
  baseResponseSchema.merge(
    z.object({
      success: z.literal(true),
    }),
  ),
  baseResponseSchema.merge(
    z.object({
      success: z.literal(false),
      message: z.string(),
    }),
  ),
]);

export const sendOtpResponseSchema = z.object({
  response: discriminatedResponseSchema,
});
export class SendOtpResponseDto extends createZodDtoWithoutDate(
  sendOtpResponseSchema,
) {}
