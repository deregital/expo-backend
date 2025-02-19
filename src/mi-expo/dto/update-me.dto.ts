import {
  updateProfileResponseSchema,
  updateProfileSchema,
} from '@/profile/dto/update-profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { removeNullableValidation } from '@/shared/utils/zod';

export const updateMiExpoMeSchema = removeNullableValidation(
  updateProfileSchema,
).pick({
  birthDate: true,
  dni: true,
  fullName: true,
  gender: true,
  instagram: true,
  mail: true,
  password: true,
  phoneNumber: true,
  secondaryPhoneNumber: true,
  username: true,
  birth: true,
  residence: true,
});

export class UpdateMiExpoMeDto extends createZodDtoWithoutDate(
  updateMiExpoMeSchema,
) {}

export const updateMiExpoMeResponseSchema = updateProfileResponseSchema.omit({
  password: true,
});

export class UpdateMiExpoMeResponseDto extends createZodDtoWithoutDate(
  updateMiExpoMeResponseSchema,
) {}
