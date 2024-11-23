import { templateSchema } from '@/message/dto/template.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const updateTemplateSchema = templateSchema.pick({
  content: true,
  buttons: true,
});

export class UpdateTemplateDto extends createZodDtoWithoutDate(
  updateTemplateSchema,
) {}

export const updateTemplateResponseSchema = z.object({
  success: z.boolean(),
});

export class UpdateTemplateResponseDto extends createZodDtoWithoutDate(
  updateTemplateResponseSchema,
) {}
