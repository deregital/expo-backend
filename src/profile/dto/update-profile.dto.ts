import { locationSchema } from '@/location/dto/location.dto';
import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const updateProfileSchema = profileSchema
  .pick({
    alternativeNames: true,
    birthDate: true,
    dni: true,
    fullName: true,
    gender: true,
    instagram: true,
    mail: true,
    phoneNumber: true,
    profilePictureUrl: true,
    secondaryPhoneNumber: true,
    isInTrash: true,
    movedToTrashDate: true,
  })
  .partial()
  .merge(
    z.object({
      residence: locationSchema
        .pick({
          city: true,
          country: true,
          latitude: true,
          longitude: true,
          state: true,
        })
        .optional(),
      birth: locationSchema
        .pick({
          city: true,
          country: true,
          latitude: true,
          longitude: true,
          state: true,
        })
        .optional(),
      tags: z.array(tagSchema.shape.id).optional(),
    }),
  );

export class UpdateProfileDto extends createZodDtoWithoutDate(
  updateProfileSchema,
) {}

export const updateProfileResponseSchema = profileSchema;

export class UpdateProfileResponseDto extends createZodDtoWithoutDate(
  updateProfileResponseSchema,
) {}
