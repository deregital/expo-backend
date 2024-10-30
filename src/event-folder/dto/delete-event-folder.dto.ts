import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { eventFolderSchema } from './event-folder.dto';

export const deleteEventFolderResponseSchema = eventFolderSchema;

export class DeleteEventFolderResponseDto extends createZodDtoWithoutDate(
  deleteEventFolderResponseSchema,
) {}
