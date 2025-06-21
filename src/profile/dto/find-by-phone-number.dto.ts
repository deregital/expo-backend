import { locationSchema } from '@/schema/location.schema';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const findByPhoneNumberResponseSchema = profileSchema.extend({
  residenceLocation: locationSchema
    .pick({
      city: true,
      state: true,
      country: true,
      latitude: true,
      longitude: true,
    })
    .nullable(),
  birthLocation: locationSchema
    .pick({
      city: true,
      state: true,
      country: true,
      latitude: true,
      longitude: true,
    })
    .nullable(),
});

export class FindByPhoneNumberResponseDto extends createZodDtoWithoutDate(
  findByPhoneNumberResponseSchema,
) {}
