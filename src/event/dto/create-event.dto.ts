import { eventTicketsSchema } from '@/event/dto/event-tickets.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';
import { eventSchema } from './event.dto';

export const createEventSchema = eventSchema
  .pick({
    name: true,
    date: true,
    startingDate: true,
    endingDate: true,
    location: true,
    folderId: true,
    mainPictureUrl: true,
    bannerUrl: true,
    description: true,
  })
  .merge(
    z.object({
      subEvents: z
        .array(
          eventSchema.pick({
            name: true,
            date: true,
            startingDate: true,
            endingDate: true,
            location: true,
            mainPictureUrl: true,
            bannerUrl: true,
            description: true,
          }),
        )
        .optional(),

      tagsId: z.array(tagSchema.shape.id),

      eventTickets: z.array(eventTicketsSchema.omit({ id: true })),
    }),
  );

export class CreateEventDto extends createZodDtoWithoutDate(
  createEventSchema,
) {}

export const createEventResponseSchema = eventSchema;

export class CreateEventResponseDto extends createZodDtoWithoutDate(
  createEventResponseSchema,
) {}
