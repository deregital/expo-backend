import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';
import { translate } from '@/i18n/translate';
import { tagSchema } from '@/tag/dto/tag.dto';
import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string().uuid({ message: translate('model.event.id.uuid') }),
  name: z.string().min(1, translate('model.event.name.required')),
  date: z
    .string({
      required_error: translate('model.event.date.required'),
    })
    .date(translate('model.event.date.invalid')),
  location: z.string().min(1, translate('model.event.location.required')),

  folderId: eventFolderSchema.shape.id,
  tagAssistedId: tagSchema.shape.id,
  tagConfirmedId: tagSchema.shape.id,

  supraEventId: z
    .string()
    .uuid({
      message: translate('model.event.id.uuid'),
    })
    .optional(),

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
