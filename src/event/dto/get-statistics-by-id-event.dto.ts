import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';
import { eventTicketsSchema } from './event-tickets.dto';
import { eventSchema } from './event.dto';

export const getStatisticsByIdResponseSchema = eventSchema.merge(
  z.object({
    tickets: z.array(ticketSchema),
    eventTickets: z.array(eventTicketsSchema),
    statistics: z
      .object({
        maxTickets: z.number(),
        emmitedTickets: z.number(),
        emittedTicketsPercent: z.number(),
        emmitedticketPerType: z.object({}),
        totalIncome: z.number(),
        maxTotalIncome: z.number(),
        maxTicketPerType: z.object({}),
        totalTicketsScanned: z.number(),
        notScanned: z.number(),
        attendancePercent: z.number(),
        attendancePerHour: z.object({}),
        avgAmountPerTicketGroup: z.object({}).nullable(),
      })
      .optional(),
  }),
);
