import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { cannedResponseSchema } from './canned-response.dto';

export const updateCannedResponseSchema = cannedResponseSchema.pick({
  name: true,
  content: true,
});

export class UpdateCannedResponseDto extends createZodDtoWithoutDate(
  updateCannedResponseSchema,
) {}

export const updateCannedResponseResponseSchema = cannedResponseSchema;

export class UpdateCannedResponseResponseDto extends createZodDtoWithoutDate(
  updateCannedResponseResponseSchema,
) {}
