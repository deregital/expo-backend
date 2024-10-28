import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { cannedResponseSchema } from './canned-response.dto';

export const deleteCannedResponseResponseSchema = cannedResponseSchema;

export class DeleteCannedResponseResponseDto extends createZodDtoWithoutDate(
  deleteCannedResponseResponseSchema,
) {}
