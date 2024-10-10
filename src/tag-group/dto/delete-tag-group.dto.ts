import { createZodDtoWithoutDate } from '@/shared/dtoModification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';

export const deleteTagGroupResponseSchema = tagGroupSchema;

export class DeleteTagGroupResponseDto extends createZodDtoWithoutDate(
  deleteTagGroupResponseSchema,
) {}
