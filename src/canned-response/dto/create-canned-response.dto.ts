import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { cannedResponseSchema } from './canned-response.dto';

export const createCannedResponseSchema = cannedResponseSchema.pick({
  name: true,
  content: true,
});

export class CreateCannedResponseDto extends createZodDtoWithoutDate(
  createCannedResponseSchema,
) {}

export const createCannedResponseResponseSchema = cannedResponseSchema;

export class CreateCannedResponseResponseDto extends createZodDtoWithoutDate(
  createCannedResponseResponseSchema,
) {}
