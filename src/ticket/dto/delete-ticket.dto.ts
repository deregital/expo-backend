import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from './ticket.dto';

export const deleteTicketResponseSchema = ticketSchema;

export class DeleteTicketResponseDto extends createZodDtoWithoutDate(
  deleteTicketResponseSchema,
) {}
