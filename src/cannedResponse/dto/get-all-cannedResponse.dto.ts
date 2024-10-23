import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { cannedResponseSchema } from './cannedResponse.dto';

export const getAllCannedResponseSchema = z.object({
  cannedResponses: z.array(cannedResponseSchema),
});

export class GetAllCannedResponseDto extends createZodDtoWithoutDate(
  getAllCannedResponseSchema,
) {}
