import { findAllProfileResponseSchema } from '@/profile/schema/find-all-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindAllProfileResponseDto extends createZodDtoWithoutDate(
  findAllProfileResponseSchema,
) {}
