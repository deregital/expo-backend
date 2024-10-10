import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';

export const createTagGroupSchema = tagGroupSchema.pick({
  color: true,
  name: true,
  isExclusive: true,
});

export class CreateTagGroupDto extends createZodDtoWithoutDate(
  createTagGroupSchema,
) {}

export const createTagGroupResponseSchema = tagGroupSchema;

export class CreateTagGroupResponseDto extends createZodDtoWithoutDate(
  createTagGroupResponseSchema,
) {}
