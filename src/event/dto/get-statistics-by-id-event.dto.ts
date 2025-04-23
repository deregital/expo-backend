import z from 'zod';

export const getStatisticsByIdResponseSchema = z.object({
  test: z.string(),
  // event: eventSchema,
  // eventTickets: z.object({
  //   eventTickets: z.array(
  //       baseEventTicketsSchema.pick({
  //         id: true,
  //         amount: true,
  //         type: true,
  //         price: true,
  //       }),
  //   ),
  // })
});
