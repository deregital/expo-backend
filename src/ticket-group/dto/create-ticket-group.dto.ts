import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketGroupSchema } from '@/ticket-group/dto/ticket-group.dto';
import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';

export const createTicketGroupSchema = ticketGroupSchema.pick({
  eventId: true,
  amountTickets: true,
});

export class CreateTicketGroupDto extends createZodDtoWithoutDate(
  createTicketGroupSchema,
) {}

export const createTicketGroupResponseSchema = ticketGroupSchema.merge(
  z.object({
    tickets: z.array(ticketSchema),
    event: eventSchema,
  }),
);

export class CreateTicketGroupResponseDto extends createZodDtoWithoutDate(
  createTicketGroupResponseSchema,
) {}
