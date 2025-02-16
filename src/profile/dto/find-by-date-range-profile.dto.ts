import {
  findByDateRangeResponseSchema,
  findByDateRangeSchema,
} from '@/profile/schema/find-by-date-range-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindByDateRangeDto extends createZodDtoWithoutDate(
  findByDateRangeSchema,
) {}

export class FindByDateRangeResponseDto extends createZodDtoWithoutDate(
  findByDateRangeResponseSchema,
) {}
