import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';
import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

import z from 'zod';

export const getByIdEventResponseSchema = eventSchema.merge(
  z.object({
    folder: eventFolderSchema.nullable(),
  }),
);

export class GetByIdEventResponseDto extends createZodDtoWithoutDate(
  getByIdEventResponseSchema,
) {}
