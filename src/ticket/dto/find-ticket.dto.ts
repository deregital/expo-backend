import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/exports';

export const findTicketResponseSchema = ticketSchema;

export class FindTicketResponseDto extends createZodDtoWithoutDate(
  findTicketResponseSchema,
) {}
