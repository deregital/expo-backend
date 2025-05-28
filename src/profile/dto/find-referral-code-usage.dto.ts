import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findReferralCodeUsageResponseSchema = z.object({
  amount: z.number(),
});

export class FindReferralCodeUsageResponseDto extends createZodDtoWithoutDate(
  findReferralCodeUsageResponseSchema,
) {}
