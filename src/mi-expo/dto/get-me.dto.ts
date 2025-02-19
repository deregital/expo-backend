import { locationSchema } from '@/schema/location.schema';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const getMiExpoMeResponseSchema = profileSchema
  .omit({ password: true })
  .extend({
    residenceLocation: locationSchema.nullable(),
    birthLocation: locationSchema.nullable(),
  });

export class GetMiExpoMeResponseDto extends createZodDtoWithoutDate(
  getMiExpoMeResponseSchema,
) {}
