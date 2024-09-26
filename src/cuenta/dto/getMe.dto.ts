import { cuentaSchema } from '@/exports';
import { createZodDto } from '@anatine/zod-nestjs';

export const getMeResponseSchema = cuentaSchema.omit({
  password: true,
});

export class GetMeResponseDto extends createZodDto(getMeResponseSchema) {}
