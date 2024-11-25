import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const getLastMessageTimestampResponseSchema = z.object({
  timestamp: z.number(),
});

export class GetLastMessageTimestampResponseDto extends createZodDtoWithoutDate(
  getLastMessageTimestampResponseSchema,
) {}
