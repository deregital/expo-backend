import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { eventSchema } from './event.dto';

export const createEventSchema = eventSchema
  .pick({
    name: true,
    date: true,
    location: true,
    folderId: true,
  })
  .merge(
    z.object({
      subEvents: z.array(
        eventSchema.pick({
          name: true,
          date: true,
          location: true,
        }),
      ),
    }),
  );

export class CreateEventDto extends createZodDtoWithoutDate(
  createEventSchema,
) {}

export const createEventResponseSchema = eventSchema;

export class CreateEventResponseDto extends createZodDtoWithoutDate(
  createEventResponseSchema,
) {}
