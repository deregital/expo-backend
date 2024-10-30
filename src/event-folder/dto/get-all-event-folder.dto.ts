import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { eventFolderSchema } from './event-folder.dto';

export const getAllEventFolderResponseSchema = z.object({
  eventFolders: z.array(
    eventFolderSchema.merge(
      z.object({
        events: z.array(eventSchema),
      }),
    ),
  ),
});

export class GetAllEventFolderResponseDto extends createZodDtoWithoutDate(
  getAllEventFolderResponseSchema,
) {}
