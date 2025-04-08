import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { ticketSchema } from './ticket.dto';

export const findByTicketGroupTicketResponseSchema = z.object({
  tickets: z.array(ticketSchema),
});

export const getPdfsByTicketGroupResponseSchema = z.object({
  pdfs: z.array(
    z.object({
      ticketId: z.string(),
      pdfBase64: z.string(),
    }),
  ),
});
export class GetPdfsByTicketGroupResponseDto extends createZodDtoWithoutDate(
  getPdfsByTicketGroupResponseSchema,
) {}
