import {
  updateProfileResponseSchema,
  updateProfileSchema,
} from '@/profile/dto/update-profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateMiExpoMeSchema = updateProfileSchema
  .pick({
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
  })
  .required();

export class UpdateMiExpoMeDto extends createZodDtoWithoutDate(
  updateMiExpoMeSchema,
) {}

export const updateMiExpoMeResponseSchema = updateProfileResponseSchema.omit({
  password: true,
});

export class UpdateMiExpoMeResponseDto extends createZodDtoWithoutDate(
  updateMiExpoMeResponseSchema,
) {}
