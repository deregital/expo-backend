import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';
import { ticketSchema } from './ticket.dto';

export const findByIdTicketResponseSchema = z.object({
  ticket: ticketSchema.merge(
    z.object({
      event: eventSchema.pick({
        name: true,
        date: true,
        location: true,
      }),
    }),
  ),
});

export class FindByIdTicketResponseDto extends createZodDtoWithoutDate(
  findByIdTicketResponseSchema,
) {}
