import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketSchema } from './ticket.dto';

export const createTicketSchema = ticketSchema
  .pick({
    eventId: true,
    type: true,
    status: true,
    fullName: true,
    mail: true,
  })
  .extend({
    profileId: profileSchema.shape.id.optional(),
  });

export class CreateTicketDto extends createZodDtoWithoutDate(
  createTicketSchema,
) {}

export const createTicketResponseSchema = ticketSchema;

export class CreateTicketResponseDto extends createZodDtoWithoutDate(
  createTicketResponseSchema,
) {}
