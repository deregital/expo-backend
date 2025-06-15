import {
  updateProfileResponseSchema,
  updateProfileSchema,
} from '@/profile/dto/update-profile.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateMiExpoMeFirstTimeSchema = updateProfileSchema
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
  .extend({
    id: profileSchema.shape.id,
  })
  .required();

export class UpdateMiExpoMeFirstTimeDto extends createZodDtoWithoutDate(
  updateMiExpoMeFirstTimeSchema,
) {}

export const updateMiExpoMeFirstTimeResponseSchema =
  updateProfileResponseSchema.omit({
    password: true,
  });

export class UpdateMiExpoMeFirstTimeResponseDto extends createZodDtoWithoutDate(
  updateMiExpoMeFirstTimeResponseSchema,
) {}
