import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const scanTicketSchema = z.object({
  type: z.enum(['id', 'barcode']),
  value: z.string(),
});

export class ScanTicketDto extends createZodDtoWithoutDate(scanTicketSchema) {}

export const scanTicketResponseSchema = z.object({
  success: z.boolean(),
});

export class ScanTicketResponseDto extends createZodDtoWithoutDate(
  scanTicketResponseSchema,
) {}
