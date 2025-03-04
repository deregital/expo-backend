import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from './ticket.dto';

export const createTicketSchema = ticketSchema.pick({
  eventId: true,
  type: true,
  status: true,
  fullName: true,
  mail: true,
});

export class CreateTicketDto extends createZodDtoWithoutDate(
  createTicketSchema,
) {}

export const createTicketResponseSchema = ticketSchema;

export class CreateTicketResponseDto extends createZodDtoWithoutDate(
  createTicketResponseSchema,
) {}
