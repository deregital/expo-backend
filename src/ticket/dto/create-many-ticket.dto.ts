import { eventSchema } from '@/event/dto/event.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from './ticket.dto';

export const createManyTicketSchema = ticketSchema
  .pick({
    eventId: true,
    type: true,
    status: true,
    fullName: true,
    mail: true,
  })
  .extend({
    profileId: profileSchema.shape.id.optional(),
  })
  .array();

export class CreateManyTicketDto extends createZodDtoWithoutDate(
  createManyTicketSchema,
) {}

export const createManyTicketResponseSchema = ticketSchema
  .extend({
    event: eventSchema,
  })
  .array();

export class CreateManyTicketResponseDto extends createZodDtoWithoutDate(
  createManyTicketResponseSchema,
) {}
