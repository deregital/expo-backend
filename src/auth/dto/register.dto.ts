import { createZodDto } from '@anatine/zod-nestjs';
import { cuentaSchema } from '../../cuenta/dto/cuenta.dto';

export const registerSchema = cuentaSchema.pick({
  username: true,
  password: true,
  isAdmin: true,
});

export class RegisterDto extends createZodDto(registerSchema) {}

export const registerResponseSchema = registerSchema.omit({
  password: true,
});

export class RegisterResponseDto extends createZodDto(registerResponseSchema) {}
