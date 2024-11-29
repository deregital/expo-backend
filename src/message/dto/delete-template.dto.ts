import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const deleteTemplateResponseSchema = z.object({
  success: z.boolean(),
});

export class DeleteTemplateResponseDto extends createZodDtoWithoutDate(
  deleteTemplateResponseSchema,
) {}
