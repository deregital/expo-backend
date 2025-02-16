import { findTrashResponseSchema } from '@/profile/schema/find-trash.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindTrashResponseDto extends createZodDtoWithoutDate(
  findTrashResponseSchema,
) {}
