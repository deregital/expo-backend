import { findByTagGroupsProfileResponseSchema } from '@/profile/schema/find-by-tag-groups-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindByTagGroupsProfileResponseDto extends createZodDtoWithoutDate(
  findByTagGroupsProfileResponseSchema,
) {}
