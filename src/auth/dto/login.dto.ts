import z from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { cuentaSchema } from '../../cuenta/dto/cuenta.dto';

export const loginSchema = cuentaSchema.pick({
  username: true,
  password: true,
});

export class LoginDto extends createZodDto(loginSchema) {}

export const loginResponseSchema = z.object({
  user: cuentaSchema.omit({
    password: true,
  }),
  backendTokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

export class LoginResponseDto extends createZodDto(loginResponseSchema) {}
