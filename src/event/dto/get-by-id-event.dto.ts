import { eventTicketsSchema } from '@/event/dto/event-tickets.dto';
import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

import z from 'zod';

export const getByIdEventResponseSchema = eventSchema.merge(
  z.object({
    subEvents: z.array(eventSchema),
    supraEvent: eventSchema.nullable(),
    eventTickets: z.array(eventTicketsSchema),
  }),
);

export class GetByIdEventResponseDto extends createZodDtoWithoutDate(
  getByIdEventResponseSchema,
) {}

export const getBySupraEventResponseSchema = z.array(
  eventSchema.merge(
    z.object({
      tagAssisted: tagSchema,
      tagConfirmed: tagSchema,
    }),
  ),
);

export class GetBySupraEventResponseDto extends createZodDtoWithoutDate(
  getBySupraEventResponseSchema,
) {}
