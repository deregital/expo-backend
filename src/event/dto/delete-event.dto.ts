import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const deleteEventResponseSchema = eventSchema;

export class DeleteEventResponseDto extends createZodDtoWithoutDate(
  deleteEventResponseSchema,
) {}
