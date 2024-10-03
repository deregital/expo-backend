import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const createTagSchema = tagSchema.pick({
  name: true,
  groupId: true,
});

export class CreateTagDto extends createZodDto(createTagSchema) {}

export const createTagResponseSchema = tagSchema.omit({
  created_at: true,
  updated_at: true,
});

export class CreateTagResponseDto extends createZodDto(
  createTagResponseSchema,
) {}
