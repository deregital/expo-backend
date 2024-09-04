import { createZodDto } from '@anatine/zod-nestjs';
import { cuentaSchema } from 'src/cuenta/dto/cuenta.dto';

export const registerSchema = cuentaSchema.pick({
  username: true,
  password: true,
  isAdmin: true,
});

export class RegisterDto extends createZodDto(registerSchema) {}

export const RegisterResponseSchema = registerSchema.omit({
  password: true,
});

export class RegisterResponseDto extends createZodDto(RegisterResponseSchema) {}
