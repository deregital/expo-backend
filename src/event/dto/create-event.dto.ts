import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { eventSchema } from './event.dto';

export const createEventSchema = eventSchema.pick({
  name: true,
  date: true,
  location: true,
  folderId: true,
  tagAssistedId: true,
  tagConfirmedId: true,
  supraEventId: true,
});

export class CreateEventDto extends createZodDtoWithoutDate(
  createEventSchema,
) {}

export const createEventResponseSchema = eventSchema;

export class CreateEventResponseDto extends createZodDtoWithoutDate(
  createEventResponseSchema,
) {}
