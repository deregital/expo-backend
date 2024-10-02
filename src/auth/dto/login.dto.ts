import z from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { accountSchema } from '@/account/dto/account.dto';

export const loginSchema = accountSchema.pick({
  username: true,
  password: true,
});

export class LoginDto extends createZodDto(loginSchema) {}

export const loginResponseSchema = z.object({
  user: accountSchema.omit({
    password: true,
  }),
  backendTokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

export class LoginResponseDto extends createZodDto(loginResponseSchema) {}
