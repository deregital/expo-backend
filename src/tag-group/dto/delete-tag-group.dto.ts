import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const deleteTagGroupResponseSchema = tagGroupSchema;

export class DeleteTagGroupResponseDto extends createZodDto(
  deleteTagGroupResponseSchema,
) {}
