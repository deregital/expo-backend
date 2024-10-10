import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const refreshResponseSchema = z.object({
  refreshToken: z.string(),
  accessToken: z.string(),
  expiresIn: z.number(),
});

export class RefreshResponseDto extends createZodDtoWithoutDate(
  refreshResponseSchema,
) {}
