import { accountSchema } from '@/account/dto/account.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const loginSchema = accountSchema.pick({
  username: true,
  password: true,
});

export class LoginDto extends createZodDtoWithoutDate(loginSchema) {}

export const loginResponseSchema = z.object({
  user: accountSchema.omit({
    password: true,
  }),
  backendTokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresIn: z.number(),
  }),
});

export class LoginResponseDto extends createZodDtoWithoutDate(
  loginResponseSchema,
) {}
