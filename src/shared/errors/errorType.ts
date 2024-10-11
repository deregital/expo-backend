import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

const errorSchema = z.object({
  message: z.union([z.string(), z.array(z.string())]),
  statusCode: z.number(),
  error: z.string(),
});

export class ErrorDto extends createZodDtoWithoutDate(errorSchema) {}
