import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

const errorSchema = z.object({
  message: z.array(z.string()),
  statusCode: z.number(),
  error: z.string(),
});

export class ErrorDto extends createZodDto(errorSchema) {}
