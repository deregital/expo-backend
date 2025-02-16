import { findByIdProfileResponseSchema } from '@/profile/schema/find-by-id-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindByIdProfileResponseDto extends createZodDtoWithoutDate(
  findByIdProfileResponseSchema,
) {}
