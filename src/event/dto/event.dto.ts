import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';
import { translate } from '@/i18n/translate';
import { tagSchema } from '@/tag/dto/tag.dto';
import { z } from 'zod';
import { TicketType } from '~/types/prisma-schema';

export const eventSchema = z.object({
  id: z.string().uuid({ message: translate('model.event.id.uuid') }),
  name: z.string().min(1, translate('model.event.name.required')),
  date: z.coerce.date({
    required_error: translate('model.event.date.required'),
    invalid_type_error: translate('model.event.date.invalid'),
  }),
  starting_date: z.coerce.date({
    required_error: translate('model.event.starting_date.required'),
    invalid_type_error: translate('model.event.starting_date.invalid'),
  }),
  ending_date: z.coerce.date({
    required_error: translate('model.event.ending_date.required'),
    invalid_type_error: translate('model.event.ending_date.invalid'),
  }),
  location: z.string().min(1, translate('model.event.location.required')),

  folderId: eventFolderSchema.shape.id.nullable(),
  tagAssistedId: tagSchema.shape.id,
  tagConfirmedId: tagSchema.shape.id,

  tags: z.array(tagSchema),
  eventTickets: z.array(
    z.object({
      amount: z.number().min(1),
      type: z.nativeEnum(TicketType),
      price: z.number().nullable(),
    }),
  ),

  supraEventId: z
    .string()
    .uuid({
      message: translate('model.event.id.uuid'),
    })
    .nullable(),

  created_at: z.date(),
  updated_at: z.date(),
});
