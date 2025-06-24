import { translate } from '@/i18n/translate';
import { profileSchema } from '@/schema/profile.schema';
import z from 'zod';

export const productionSchema = z.object({
  id: z.string().uuid({
    message: translate('model.production.id.uuid'),
  }),
  name: z.string().min(1, {
    message: translate('model.production.name.min'),
  }),
  description: z.string().min(1, {
    message: translate('model.production.description.min'),
  }),
  administratorId: profileSchema.shape.id.nullable(),

  created_at: z.date(),
  updated_at: z.date(),
});
