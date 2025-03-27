import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';
import { TicketType } from '~/types';

export const findByEventAndTypeTicketSchema = z.object({
  eventId: z.string(),
  type: z.nativeEnum(TicketType),
});

export class FindByEventAndTypeTicketDto extends createZodDtoWithoutDate(
  findByEventAndTypeTicketSchema,
) {}

export const findByEventAndTypeTicketResponseSchema = z.object({
  tickets: z.number(),
});

export class FindByEventAndTypeTicketResponseDto extends createZodDtoWithoutDate(
  findByEventAndTypeTicketResponseSchema,
) {}
