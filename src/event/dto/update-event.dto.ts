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
  })
  .merge(
    z.object({
      subEvents: z.array(
        eventSchema
          .pick({
            name: true,
            location: true,
            date: true,
          })
          .extend({
            id: eventSchema.shape.id.or(z.literal('')),
          }),
      ),
    }),
  );

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
  }),
);

export class UpdateEventResponseDto extends createZodDtoWithoutDate(
  updateEventResponseSchema,
) {}
