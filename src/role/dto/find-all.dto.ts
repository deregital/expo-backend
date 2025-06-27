import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const findAllRoleResponseSchema = tagSchema.array();

export class FindAllRoleResponseDto extends createZodDtoWithoutDate(
  findAllRoleResponseSchema,
) {}
