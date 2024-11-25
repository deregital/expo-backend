import { templateSchema } from '@/message/dto/template.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const createTemplateSchema = templateSchema.pick({
  name: true,
  content: true,
  buttons: true,
});

export class CreateTemplateDto extends createZodDtoWithoutDate(
  createTemplateSchema,
) {}

export const createTemplateResponseSchema = z.object({
  message: z.string(),
});

export class CreateTemplateResponseDto extends createZodDtoWithoutDate(
  createTemplateResponseSchema,
) {}
