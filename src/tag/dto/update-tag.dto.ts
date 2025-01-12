import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const updateTagSchema = tagSchema.pick({
  name: true,
  groupId: true,
});

export class UpdateTagDto extends createZodDtoWithoutDate(updateTagSchema) {}

export const updateTagResponseSchema = tagSchema;

export class UpdateTagResponseDto extends createZodDtoWithoutDate(
  updateTagResponseSchema,
) {}
