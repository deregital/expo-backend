import { locationSchema } from '@/location/dto/location.dto';
import { profileSchema } from '@/profile/schema/profile.schema';
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
    username: true,
    password: true,
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

export const updateProfileResponseSchema = profileSchema;
