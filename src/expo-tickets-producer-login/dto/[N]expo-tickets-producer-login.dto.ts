import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const loginProducerSchema = z.object({
  mail: z.string().email(),
  password: z.string(),
});

export class LoginProducerDto extends createZodDtoWithoutDate(
  loginProducerSchema,
) {}

export const loginProducerResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export class LoginProducerResponseDto extends createZodDtoWithoutDate(
  loginProducerResponseSchema,
) {}
