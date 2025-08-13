import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/dto/ticket.dto';
import z from 'zod';

export const getEventTicketsLoginProducerResponseSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  event: eventSchema.extend({
    tickets: z.array(
      ticketSchema.pick({
        id: true,
        dni: true,
        fullName: true,
        mail: true,
        phoneNumber: true,
        whoToWatch: true,
        instagrams: true,
      }),
    ),
  }),
});

export class GetEventTicketsLoginProducerResponseDto extends createZodDtoWithoutDate(
  getEventTicketsLoginProducerResponseSchema,
) {}
