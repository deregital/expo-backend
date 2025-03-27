import z from 'zod';

export const findTicketsByEventResponseSchema = z.object({
  tickets: z.number(),
});
