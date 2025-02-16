import {
  createProfileResponseSchema,
  createProfileSchema,
} from '@/profile/schema/create-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class CreateProfileDto extends createZodDtoWithoutDate(
  createProfileSchema,
) {}

export class CreateProfileResponseDto extends createZodDtoWithoutDate(
  createProfileResponseSchema,
) {}
