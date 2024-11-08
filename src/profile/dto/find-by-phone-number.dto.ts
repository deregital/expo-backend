import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const findByPhoneNumberResponseSchema = profileSchema;

export class FindByPhoneNumberResponseDto extends createZodDtoWithoutDate(
  findByPhoneNumberResponseSchema,
) {}
