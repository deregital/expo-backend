import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const meResponseSchema = profileSchema.omit({ password: true });

export class MiExpoMeResponseDto extends createZodDtoWithoutDate(
  meResponseSchema,
) {}
