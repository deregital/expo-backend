import { eventSchema } from '@/event/dto/event.dto';
import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { TicketGroupStatus } from '~/types/prisma-schema';

export const ticketGroupSchema = z.object({
  id: z.string().uuid({ message: translate('model.ticketGroup.id.uuid') }),
  amountTickets: z
    .number()
    .min(0, translate('model.ticketGroup.amountTickets')),
  status: z.nativeEnum(TicketGroupStatus, {
    message: translate('model.ticketGroup.status.invalid'),
  }),
  eventId: eventSchema.shape.id,

  referralCode: z.string().nullable().optional(),

  created_at: z.date(),
  updated_at: z.date(),
});

export class TicketGroupDto extends createZodDtoWithoutDate(
  ticketGroupSchema,
) {}
