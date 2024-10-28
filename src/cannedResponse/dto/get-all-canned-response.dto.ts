import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { cannedResponseSchema } from './canned-response.dto';

export const getAllCannedResponseResponseSchema = z.object({
  cannedResponses: z.array(cannedResponseSchema),
});

export class GetAllCannedResponseDto extends createZodDtoWithoutDate(
  getAllCannedResponseResponseSchema,
) {}
