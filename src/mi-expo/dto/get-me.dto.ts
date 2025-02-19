import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const getMiExpoMeResponseSchema = profileSchema.omit({ password: true });

export class GetMiExpoMeResponseDto extends createZodDtoWithoutDate(
  getMiExpoMeResponseSchema,
) {}
