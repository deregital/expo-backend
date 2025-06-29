import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const updateRoleSchema = tagSchema.pick({
  name: true,
});

export class UpdateRoleDto extends createZodDtoWithoutDate(updateRoleSchema) {}

export const updateRoleResponseSchema = tagSchema;

export class UpdateRoleResponseDto extends createZodDtoWithoutDate(
  updateRoleResponseSchema,
) {}
