import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const createTagGroupSchema = tagGroupSchema.pick({
  color: true,
  name: true,
  isExclusive: true,
});

export class CreateTagGroupDto extends createZodDto(createTagGroupSchema) {}

export const createTagGroupResponseSchema = tagGroupSchema;

export class CreateTagGroupResponseDto extends createZodDto(
  createTagGroupResponseSchema,
) {}
