import { findByPhoneNumberResponseSchema } from '@/profile/schema/find-by-phone-number.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindByPhoneNumberResponseDto extends createZodDtoWithoutDate(
  findByPhoneNumberResponseSchema,
) {}
