import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { TicketType } from '~/types';

export const findTicketsByEventSchema = z.object({
  eventId: z.string(),
  type: z.nativeEnum(TicketType),
});

export const findTicketsByEventResponseSchema = z.object({
  tickets: z.number(),
});

export class FindTicketsByEventDto extends createZodDtoWithoutDate(
  findTicketsByEventResponseSchema,
) {}
