import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const createRoleSchema = tagSchema.pick({
  name: true,
});

export class CreateRoleDto extends createZodDtoWithoutDate(createRoleSchema) {}

export const createRoleResponseSchema = tagSchema;

export class CreateRoleResponseDto extends createZodDtoWithoutDate(
  createRoleResponseSchema,
) {}
