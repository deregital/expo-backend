import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';

export const scanTicketSchema = z.object({
  type: z.enum(['id', 'barcode']),
  value: z.string(),
});

export class ScanTicketDto extends createZodDtoWithoutDate(scanTicketSchema) {}

export const scanTicketResponseSchema = ticketSchema;

export class ScanTicketResponseDto extends createZodDtoWithoutDate(
  scanTicketResponseSchema,
) {}
