import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const createTagSchema = tagSchema
  .pick({
    name: true,
    groupId: true,
  })
  .extend({
    type: tagSchema.shape.type.optional(),
  });

export class CreateTagDto extends createZodDtoWithoutDate(createTagSchema) {}

export const createTagResponseSchema = tagSchema;

export class CreateTagResponseDto extends createZodDtoWithoutDate(
  createTagResponseSchema,
) {}
