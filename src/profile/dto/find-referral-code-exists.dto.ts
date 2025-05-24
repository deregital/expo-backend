import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findReferralCodeExistsResponseSchema = z.object({
  exists: z.boolean(),
});

export class FindReferralCodeExistsResponseDto extends createZodDtoWithoutDate(
  findReferralCodeExistsResponseSchema,
) {}
