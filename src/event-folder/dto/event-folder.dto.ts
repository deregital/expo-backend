import { translate } from '@/i18n/translate';
import z from 'zod';

export const eventFolderSchema = z.object({
  id: z.string().uuid({
    message: translate('model.eventFolder.id.uuid'),
  }),
  name: z.string().min(1),
  color: z
    .string()
    .length(7)
    .startsWith('#', {
      message: translate('model.eventFolder.color.invalid'),
    })
    .toLowerCase(),

  created_at: z.date(),
  updated_at: z.date(),
});
