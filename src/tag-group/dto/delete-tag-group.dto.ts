import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';

export const deleteTagGroupResponseSchema = tagGroupSchema;

export class DeleteTagGroupResponseDto extends createZodDtoWithoutDate(
  deleteTagGroupResponseSchema,
) {}
