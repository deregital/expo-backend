import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/dto/ticket.dto';

export const emitTicketSchema = ticketSchema.pick({
  mail: true,
  type: true,
  fullName: true,
  eventId: true,
  status: true,
});

export class EmitTicketDto extends createZodDtoWithoutDate(emitTicketSchema) {}

export const emitTicketResponseSchema = ticketSchema.extend({
  event: eventSchema,
});

export class EmitTicketResponseDto extends createZodDtoWithoutDate(
  emitTicketResponseSchema,
) {}
