import { translate } from '@/i18n/translate';
import { OTP_LENGTH } from '@/otp/constants';
import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const verifyOtpSchema = z.object({
  phoneNumber: profileSchema.shape.phoneNumber,
  code: z.string().length(OTP_LENGTH, {
    message: translate('route.otp.verify.error-format'),
  }),
});

export class VerifyOtpDto extends createZodDtoWithoutDate(verifyOtpSchema) {}

export const verifyOtpResponseSchema = z.object({
  success: z.boolean(),
  profile: profileSchema,
});

export class VerifyOtpResponseDto extends createZodDtoWithoutDate(
  verifyOtpResponseSchema,
) {}
