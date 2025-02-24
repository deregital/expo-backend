import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const generatePdfResponseSchema = z.object({
  pdf: z.instanceof(Buffer),
});

export class GeneratePdfResponseDto extends createZodDtoWithoutDate(
  generatePdfResponseSchema,
) {}
