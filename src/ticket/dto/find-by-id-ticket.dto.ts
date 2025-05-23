import { eventSchema } from '@/event/dto/event.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';
import { ticketSchema } from './ticket.dto';

export const findByIdTicketResponseSchema = z.object({
  ticket: ticketSchema.merge(
    z.object({
      event: eventSchema,
      profile: profileSchema.nullable(),
      profileId: profileSchema.shape.id.nullable(),
    }),
  ),
});

export class FindByIdTicketResponseDto extends createZodDtoWithoutDate(
  findByIdTicketResponseSchema,
) {}
