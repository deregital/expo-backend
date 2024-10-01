import { accountSchema } from './account.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const getMeResponseSchema = accountSchema.omit({
  password: true,
});

export class GetMeResponseDto extends createZodDto(getMeResponseSchema) {}
