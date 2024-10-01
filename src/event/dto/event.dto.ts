import { tagSchema } from '@/tag/dto/tag.dto';
import { translate } from '@/i18n/translate';
import { z } from 'zod';
import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';

const eventSchemaBase = z.object({
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

  eventoPadreId: z
    .string()
    .uuid({
      message: translate('model.event.id.uuid'),
    })
    .optional(),

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

type Event = z.infer<typeof eventSchemaBase> & {
  supraEvent: z.infer<typeof eventSchemaBase>;
  subEvents: Array<z.infer<typeof eventSchemaBase>>;
};

export const eventSchema: z.ZodType<Event> = eventSchemaBase.extend({
  supraEvent: z.lazy(() => eventSchema),
  subEvents: z.array(z.lazy(() => eventSchemaBase)),
});
