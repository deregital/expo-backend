import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';
import { eventTicketsSchema } from './event-tickets.dto';
import { eventSchema } from './event.dto';

export const getStatisticsByIdSchema = eventSchema.merge(
  z.object({
    tickets: z.array(ticketSchema),
    eventTickets: z.array(eventTicketsSchema),
  }),
);

export const getStatisticsByIdResponseSchema = z.object({
  maxTickets: z.number(),
  emmitedTickets: z.number(),
  emittedTicketsPercent: z.number(),
  emmitedticketPerType: z.record(z.nativeEnum(TicketType), z.number()),
  totalIncome: z.number(),
  maxTotalIncome: z.number(),
  maxTicketPerType: z.record(z.nativeEnum(TicketType), z.number()),
  totalTicketsScanned: z.number(),
  notScanned: z.number(),
  attendancePercent: z.number(),
  attendancePerHour: ticketSchema.shape.scannedAt.array(),
  avgAmountPerTicketGroup: z.number().nullable(),
  heatMapDates: z.date().array(),
});

export class GetStatisticsByIdResponseDto extends createZodDtoWithoutDate(
  getStatisticsByIdResponseSchema,
) {}
