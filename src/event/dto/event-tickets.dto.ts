import { translate } from '@/i18n/translate';
import z, { ZodEffects } from 'zod';
import { TicketType } from '~/types/prisma-schema';

export const baseEventTicketsSchema = z.object({
  id: z.string().uuid(),
  amount: z.number().nullable(),
  type: z.nativeEnum(TicketType),
  price: z
    .number()
    .min(1, { message: translate('model.eventTicket.price.min') })
    .nullable(),
});

export const eventTicketsSchema = addEventTicketRefinements(
  baseEventTicketsSchema,
);

export function addEventTicketRefinements<T extends z.ZodTypeAny>(
  schema: T,
): ZodEffects<T, T['_output'], T['_input']> {
  return schema.superRefine((data: z.infer<T>, ctx) => {
    console.log('amount', data.amount, data.type);
    if (data.amount !== null && data.amount < 1) {
      ctx.addIssue({
        path: ['amount'],
        code: z.ZodIssueCode.custom,
        message: translate('model.eventTicket.amount.min', { type: data.type }),
      });
    }
  });
}
