import { createZodDtoWithoutDate } from '@/shared/dtoModification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';

export const updateTagGroupSchema = tagGroupSchema.pick({
  name: true,
  color: true,
  isExclusive: true,
});

export class UpdateTagGroupDto extends createZodDtoWithoutDate(
  updateTagGroupSchema,
) {}

export const updateTagGroupResponseSchema = tagGroupSchema;

export class UpdateTagGroupResponseDto extends createZodDtoWithoutDate(
  updateTagGroupResponseSchema,
) {}
