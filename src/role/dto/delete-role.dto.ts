import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const deleteRoleResponseSchema = tagSchema;

export class DeleteRoleResponseDto extends createZodDtoWithoutDate(
  deleteRoleResponseSchema,
) {}
