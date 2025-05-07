import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketGroupSchema } from '@/ticket-group/dto/ticket-group.dto';
import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';
import { eventTicketsSchema } from './event-tickets.dto';
import { eventSchema } from './event.dto';

export const getAllStatisticsSchema = z.array(
  eventSchema.merge(
    z.object({
      tickets: z.array(ticketSchema),
      eventTickets: z.array(eventTicketsSchema),
      ticketGroups: z.array(ticketGroupSchema),
    }),
  ),
);

export const getAllStatisticsResponseSchema = z.object({
  totalIncome: z.number(),
  emailByPurchasedTickets: z.array(
    z.object({
      mail: z.string().email(),
      ticketsPurchased: z.number().int(),
    }),
  ),
  attendancePercent: z.number(),
  maxTicketPerTypeAll: z.record(z.nativeEnum(TicketType), z.number()),
  emmitedticketPerTypeAll: z.record(z.nativeEnum(TicketType), z.number()),
  eventDataIndividual: z.array(
    z.object({
      id: eventSchema.shape.id,
      name: z.string(),
      price: z.number().nullable(),
      purchasePercent: z.number(),
      spectatorEventTicket: z.number().nullable(),
      spectatorTicketsSold: z.number(),
    }),
  ),
});

export class GetAllStatisticsResponseDto extends createZodDtoWithoutDate(
  getAllStatisticsResponseSchema,
) {}
