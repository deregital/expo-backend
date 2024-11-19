import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';
import { translate } from '@/i18n/translate';
import { tagSchema } from '@/tag/dto/tag.dto';
import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string().uuid({ message: translate('model.event.id.uuid') }),
  name: z.string().min(1, translate('model.event.name.required')),
  date: z.coerce.date({
    required_error: translate('model.event.date.required'),
    invalid_type_error: translate('model.event.date.invalid'),
  }),
  location: z.string().min(1, translate('model.event.location.required')),

  folderId: eventFolderSchema.shape.id.nullable(),
  tagAssistedId: tagSchema.shape.id,
  tagConfirmedId: tagSchema.shape.id,

  supraEventId: z
    .string()
    .uuid({
      message: translate('model.event.id.uuid'),
    })
    .nullable(),

  created_at: z.date(),
  updated_at: z.date(),
});
