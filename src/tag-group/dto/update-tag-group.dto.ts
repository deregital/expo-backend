import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const updateTagGroupSchema = tagGroupSchema.pick({
  name: true,
  color: true,
  isExclusive: true,
});

export class UpdateTagGroupDto extends createZodDto(updateTagGroupSchema) {}

export const updateTagGroupResponseSchema = tagGroupSchema;

export class UpdateTagGroupResponseDto extends createZodDto(
  updateTagGroupResponseSchema,
) {}
