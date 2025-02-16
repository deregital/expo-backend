import { accountSchema } from '@/account/dto/account.dto';
import { profileSchema } from '@/profile/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const loginMiExpoSchema = accountSchema.pick({
  username: true,
  password: true,
});

export class LoginMiExpoDto extends createZodDtoWithoutDate(
  loginMiExpoSchema,
) {}

export const loginMiExpoResponseSchema = z.object({
  user: profileSchema.omit({
    password: true,
  }),
  backendTokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresIn: z.number(),
  }),
});

export class LoginMiExpoResponseDto extends createZodDtoWithoutDate(
  loginMiExpoResponseSchema,
) {}
