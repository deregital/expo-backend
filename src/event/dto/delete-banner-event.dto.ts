import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const deleteBannerEventResponseSchema = z.object({
  message: z.string(),
});

export class DeleteBannerEventResponseDto extends createZodDtoWithoutDate(
  deleteBannerEventResponseSchema,
) {}
