import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

import z from 'zod';

export const getByIdEventResponseSchema = eventSchema.merge(
  z.object({
    subEvents: z.array(eventSchema),
    supraEvent: eventSchema.nullable(),
  }),
);

export class GetByIdEventResponseDto extends createZodDtoWithoutDate(
  getByIdEventResponseSchema,
) {}
