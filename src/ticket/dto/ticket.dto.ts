import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { TicketStatus, TicketType } from '~/types';

export const ticketSchema = z.object({
  id: z.string().uuid({ message: translate('model.ticket.id.uuid') }),
  eventId: z.string().uuid({ message: translate('model.ticket.eventId.uuid') }),

  type: z.nativeEnum(TicketType),
  status: z.nativeEnum(TicketStatus),

  fullName: z.string().min(1, translate('model.ticket.fullName.required')),
  mail: z.string().email(translate('model.ticket.mail.email')),

  created_at: z.date(),
  updated_at: z.date(),
});

export class TicketDto extends createZodDtoWithoutDate(ticketSchema) {}
