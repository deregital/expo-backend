import { eventTicketsSchema } from '@/event/dto/event-tickets.dto';
import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const updateEventSchema = eventSchema
  .pick({
    name: true,
    folderId: true,
    date: true,
    location: true,
    startingDate: true,
    endingDate: true,
    bannerUrl: true,
    mainPictureUrl: true,
    description: true,
  })
  .merge(
    z.object({
      tagsId: z.array(tagSchema.shape.id),
      subEvents: z.array(
        eventSchema
          .pick({
            name: true,
            location: true,
            date: true,
            startingDate: true,
            endingDate: true,
            bannerUrl: true,
            mainPictureUrl: true,
            description: true,
          })
          .partial()
          .extend({
            id: eventSchema.shape.id.or(z.literal('')),
          }),
      ),
      eventTickets: z.array(
        eventTicketsSchema
          .omit({
            id: true,
          })
          .partial(),
      ),
    }),
  )
  .partial();

export class UpdateEventDto extends createZodDtoWithoutDate(
  updateEventSchema,
) {}

export const updateEventResponseSchema = eventSchema.merge(
  z.object({
    tagAssisted: tagSchema.merge(
      z.object({
        group: tagGroupSchema,
      }),
    ),
    eventTickets: z.array(eventTicketsSchema),
  }),
);

export class UpdateEventResponseDto extends createZodDtoWithoutDate(
  updateEventResponseSchema,
) {}
