import { translate } from '@/i18n/translate';
import z from 'zod';

export const locationSchema = z.object({
  id: z.string().uuid({
    message: translate('model.location.id.uuid'),
  }),
  latitude: z
    .number()
    .min(-90, {
      message: translate('model.location.latitude.minmax'),
    })
    .max(90, {
      message: translate('model.location.latitude.minmax'),
    }),
  longitude: z
    .number()
    .min(-180, {
      message: translate('model.location.longitude.minmax'),
    })
    .max(180, {
      message: translate('model.location.longitude.minmax'),
    }),

  country: z.string(),
  province: z.string(),
  city: z.string(),

  created_at: z.date(),
  updated_at: z.date(),
});
