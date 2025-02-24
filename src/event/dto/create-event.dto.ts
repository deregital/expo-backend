import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';
import { eventSchema } from './event.dto';

export const createEventSchema = eventSchema
  .pick({
    name: true,
    date: true,
    startingDate: true,
    endingDate: true,
    location: true,
    folderId: true,
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
          }),
        )
        .optional(),

      tagsId: z.array(tagSchema.shape.id),

      eventTickets: z.array(
        z.object({
          amount: z.number().min(1),
          type: z.nativeEnum(TicketType),
          price: z.number().nullable(),
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
