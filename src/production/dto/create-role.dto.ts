import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const createProductionRoleSchema = tagSchema.pick({
  name: true,
});

export class CreateProductionRoleDto extends createZodDtoWithoutDate(
  createProductionRoleSchema,
) {}

export const createProductionRoleResponseSchema = tagSchema;

export class CreateProductionRoleResponseDto extends createZodDtoWithoutDate(
  createProductionRoleResponseSchema,
) {}
