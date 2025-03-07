import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';
import { eventTicketsSchema } from '@/event/dto/event-tickets.dto';
import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

const eventWithAllThings = eventSchema.merge(
  z.object({
    supraEvent: eventSchema.nullable(),
    subEvents: z.array(eventSchema),
    tags: z.array(
      tagSchema
        .pick({
          id: true,
          name: true,
          type: true,
        })
        .extend({
          group: tagGroupSchema.pick({
            id: true,
            color: true,
            name: true,
            isExclusive: true,
          }),
        }),
    ),
    eventTickets: z.array(
      eventTicketsSchema.pick({
        id: true,
        amount: true,
        type: true,
        price: true,
      }),
    ),
  }),
);

export const getAllEventsResponseSchema = z.object({
  folders: z.array(
    eventFolderSchema.merge(
      z.object({
        events: z.array(eventWithAllThings),
      }),
    ),
  ),
  withoutFolder: z.array(eventWithAllThings),
});

export class GetAllEventsResponseDto extends createZodDtoWithoutDate(
  getAllEventsResponseSchema,
) {}
