import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateEventSchema = eventSchema.pick({
  name: true,
  folderId: true,
  date: true,
  location: true,
  supraEventId: true,
});

export class UpdateEventDto extends createZodDtoWithoutDate(
  updateEventSchema,
) {}

export const updateEventResponseSchema = eventSchema;

export class UpdateEventResponseDto extends createZodDtoWithoutDate(
  updateEventResponseSchema,
) {}
