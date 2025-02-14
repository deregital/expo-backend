import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const findByPhoneNumberResponseSchema = profileSchema;

export class FindByPhoneNumberResponseDto extends createZodDtoWithoutDate(
  findByPhoneNumberResponseSchema,
) {}
