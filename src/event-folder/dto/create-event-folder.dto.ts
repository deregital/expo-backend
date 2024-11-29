import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { eventFolderSchema } from './event-folder.dto';

export const createEventFolderSchema = eventFolderSchema.pick({
  name: true,
  color: true,
});

export class CreateEventFolderDto extends createZodDtoWithoutDate(
  createEventFolderSchema,
) {}

export const createEventFolderResponseSchema = eventFolderSchema;

export class CreateEventFolderResponseDto extends createZodDtoWithoutDate(
  createEventFolderResponseSchema,
) {}
