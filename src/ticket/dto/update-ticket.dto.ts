import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from './ticket.dto';

export const updateTicketSchema = ticketSchema
  .pick({
    type: true,
    status: true,
    fullName: true,
    mail: true,
  })
  .partial();

export class UpdateTicketDto extends createZodDtoWithoutDate(
  updateTicketSchema,
) {}

export const updateTicketResponseSchema = ticketSchema;

export class UpdateTicketResponseDto extends createZodDtoWithoutDate(
  updateTicketResponseSchema,
) {}
