import { translate } from '@/i18n/translate';
import z from 'zod';

export const eventFolderSchema = z.object({
  id: z.string().uuid({
    message: translate('model.event-folder.id.uuid'),
  }),
  name: z.string().min(1, {
    message: translate('model.event-folder.name.min'),
  }),
  color: z
    .string()
    .length(7)
    .startsWith('#', {
      message: translate('model.event-folder.color.invalid'),
    })
    .toLowerCase(),

  created_at: z.date(),
  updated_at: z.date(),
});
