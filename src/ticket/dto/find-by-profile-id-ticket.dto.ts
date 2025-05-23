import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';

export const findByProfileIdTicketResponseSchema = z.object({
  tickets: z.array(
    ticketSchema.extend({
      event: eventSchema,
    }),
  ),
});

export class FindByProfileIdTicketResponseDto extends createZodDtoWithoutDate(
  findByProfileIdTicketResponseSchema,
) {}
