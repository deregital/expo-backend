import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const loginWithPhoneSchema = z.object({
  phoneNumber: profileSchema.shape.phoneNumber,
});

export class LoginWithPhoneDto extends createZodDtoWithoutDate(
  loginWithPhoneSchema,
) {}

export const loginWithPhoneResponseSchema = z.object({
  tokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresIn: z.number(),
  }),
  profile: profileSchema.omit({
    password: true,
  }),
});

export class LoginWithPhoneResponseDto extends createZodDtoWithoutDate(
  loginWithPhoneResponseSchema,
) {}
