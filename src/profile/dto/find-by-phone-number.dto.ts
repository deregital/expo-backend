import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const findByPhoneNumberResponseSchema = profileSchema;

export class FindByPhoneNumberResponseDto extends createZodDtoWithoutDate(
  findByPhoneNumberResponseSchema,
) {}
