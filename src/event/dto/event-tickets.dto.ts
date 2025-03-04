import { translate } from '@/i18n/translate';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';

export const eventTicketsSchema = z.object({
  id: z.string().uuid(),
  amount: z.number().min(1, {
    message: translate('model.eventTicket.amount.min'),
  }),
  type: z.nativeEnum(TicketType),
  price: z
    .number()
    .min(1, { message: translate('model.eventTicket.price.min') })
    .nullable(),
});
