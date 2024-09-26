import { cuentaSchema } from '../dto/cuenta.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const getMeResponseSchema = cuentaSchema.omit({
  password: true,
});

export class GetMeResponseDto extends createZodDto(getMeResponseSchema) {}
