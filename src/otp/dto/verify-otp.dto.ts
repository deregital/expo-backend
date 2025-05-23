import { translate } from '@/i18n/translate';
import { OTP_LENGTH } from '@/otp/constants';
import { locationSchema } from '@/schema/location.schema';
import { profileSchema } from '@/schema/profile.schema';
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
  profile: profileSchema.extend({
    residenceLocation: locationSchema
      .pick({
        city: true,
        country: true,
        latitude: true,
        longitude: true,
      })
      .nullable(),
    birthLocation: locationSchema
      .pick({
        city: true,
        country: true,
        latitude: true,
        longitude: true,
      })
      .nullable(),
  }),
});

export class VerifyOtpResponseDto extends createZodDtoWithoutDate(
  verifyOtpResponseSchema,
) {}
