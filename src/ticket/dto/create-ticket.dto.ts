import { eventSchema } from '@/event/dto/event.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from '@/ticket/dto/ticket.dto';

export const createTicketSchema = ticketSchema
  .pick({
    eventId: true,
    type: true,
    fullName: true,
    mail: true,
    dni: true,
    ticketGroupId: true,
  })
  .extend({
    profileId: profileSchema.shape.id.optional(),
  });

export class CreateTicketDto extends createZodDtoWithoutDate(
  createTicketSchema,
) {}

export const createTicketResponseSchema = ticketSchema.extend({
  event: eventSchema,
});

export class CreateTicketResponseDto extends createZodDtoWithoutDate(
  createTicketResponseSchema,
) {}
