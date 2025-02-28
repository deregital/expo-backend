import { eventTicketsSchema } from '@/event/dto/event-tickets.dto';
import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const getActiveEventsResponseSchema = z.object({
  events: z.array(
    eventSchema.extend({
      eventTickets: z.array(eventTicketsSchema),
    }),
  ),
});

export class GetActiveEventsResponseDto extends createZodDtoWithoutDate(
  getActiveEventsResponseSchema,
) {}
