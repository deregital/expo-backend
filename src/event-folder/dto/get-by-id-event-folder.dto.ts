import { eventFolderSchema } from '@/event-folder/dto/event-folder.dto';
import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const getByIdEventFolderResponseSchema = z.object({
  id: z.string().uuid(),
  eventFolder: eventFolderSchema.merge(
    z.object({
      events: z.array(eventSchema),
    }),
  ),
});

export class GetByIdEventFolderResponseDto extends createZodDtoWithoutDate(
  getByIdEventFolderResponseSchema,
) {}
