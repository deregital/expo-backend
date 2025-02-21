import { eventSchema } from '@/exports';
import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { TicketStatus, TicketType } from '~/types/prisma-schema';

export const ticketSchema = z.object({
  id: z.string().uuid({ message: translate('model.ticket.id.uuid') }),
  eventId: eventSchema.shape.id,

  type: z.nativeEnum(TicketType, {
    message: translate('model.ticket.type.invalid'),
  }),
  status: z.nativeEnum(TicketStatus, {
    message: translate('model.ticket.status.invalid'),
  }),

  fullName: z.string().min(1, translate('model.ticket.fullName.required')),
  mail: z.string().email(translate('model.ticket.mail.email')),

  created_at: z.date(),
  updated_at: z.date(),
});

export class TicketDto extends createZodDtoWithoutDate(ticketSchema) {}
