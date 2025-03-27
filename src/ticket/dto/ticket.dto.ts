import { eventSchema } from '@/event/dto/event.dto';
import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketGroupSchema } from '@/ticket-group/dto/ticket-group.dto';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';

export const ticketSchema = z.object({
  id: z.string().uuid({ message: translate('model.ticket.id.uuid') }),
  eventId: eventSchema.shape.id,

  type: z.nativeEnum(TicketType, {
    message: translate('model.ticket.type.invalid'),
  }),

  fullName: z.string().min(1, translate('model.ticket.fullName.required')),
  mail: z.string().email(translate('model.ticket.mail.email')),

  ticketGroupId: ticketGroupSchema.shape.id,
  created_at: z.date(),
  updated_at: z.date(),
});

export class TicketDto extends createZodDtoWithoutDate(ticketSchema) {}
