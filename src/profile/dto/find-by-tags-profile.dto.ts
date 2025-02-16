import { findByTagsProfileResponseSchema } from '@/profile/schema/find-by-tags-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindByTagsProfileResponseDto extends createZodDtoWithoutDate(
  findByTagsProfileResponseSchema,
) {}
