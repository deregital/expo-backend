import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/exports';
import z from 'zod';

export const findTicketSchema = z.object({
  barcode_value: z.string(),
});

export class FindTicketDto extends createZodDtoWithoutDate(findTicketSchema) {}

export const findTicketResponseSchema = ticketSchema;

export class FindTicketResponseDto extends createZodDtoWithoutDate(
  findTicketResponseSchema,
) {}
