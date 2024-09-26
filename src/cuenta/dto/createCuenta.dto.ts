import { cuentaSchema } from '@/cuenta/dto/cuenta.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const createCuentaSchema = cuentaSchema.pick({
  username: true,
  password: true,
  isAdmin: true,
});

export class CreateCuentaDto extends createZodDto(createCuentaSchema) {}

export const createCuentaResponseSchema = cuentaSchema.omit({
  password: true,
  filtroBase: true,
  created_at: true,
  updated_at: true,
});

export class CreateCuentaResponseDto extends createZodDto(
  createCuentaResponseSchema,
) {}
