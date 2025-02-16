import {
  updateProfileResponseSchema,
  updateProfileSchema,
} from '@/profile/schema/update-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
export class UpdateProfileDto extends createZodDtoWithoutDate(
  updateProfileSchema,
) {}

export class UpdateProfileResponseDto extends createZodDtoWithoutDate(
  updateProfileResponseSchema,
) {}
