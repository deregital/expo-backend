import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { eventFolderSchema } from './event-folder.dto';

export const updateEventFolderSchema = eventFolderSchema
  .pick({
    name: true,
    color: true,
  })
  .partial();

export class UpdateEventFolderDto extends createZodDtoWithoutDate(
  updateEventFolderSchema,
) {}

export const updateEventFolderResponseSchema = eventFolderSchema;

export class UpdateEventFolderResponseDto extends createZodDtoWithoutDate(
  updateEventFolderResponseSchema,
) {}
