import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const createTagSchema = tagSchema.pick({
  name: true,
  groupId: true,
});

export class CreateTagDto extends createZodDtoWithoutDate(createTagSchema) {}

export const createTagResponseSchema = tagSchema.omit({
  created_at: true,
  updated_at: true,
});

export class CreateTagResponseDto extends createZodDtoWithoutDate(
  createTagResponseSchema,
) {}
