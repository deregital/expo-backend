import { eventSchema } from '@/event/dto/event.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { ticketSchema } from './ticket.dto';

export const createManyTicketSchema = z.object({
  tickets: z.array(
    ticketSchema
      .pick({
        eventId: true,
        type: true,
        fullName: true,
        mail: true,
        dni: true,
        ticketGroupId: true,
        referralCode: true,
      })
      .extend({
        profileId: profileSchema.shape.id.optional(),
      }),
  ),
});

export class CreateManyTicketDto extends createZodDtoWithoutDate(
  createManyTicketSchema,
) {}

export const generateMultiplePdfTicketsSchema = z
  .object({
    ticketId: z.string(),
    pdf: z.instanceof(Blob),
  })
  .array();

export const createManyTicketResponseSchema = ticketSchema
  .extend({
    event: eventSchema,
  })
  .array();

export class CreateManyTicketResponseDto extends createZodDtoWithoutDate(
  createManyTicketResponseSchema,
) {}
