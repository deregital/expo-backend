import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const sendTemplateToTagsSchema = z.object({
  tags: z.array(tagSchema.shape.id),
  templateName: z.string(),
});

export class SendTemplateToTagsDto extends createZodDtoWithoutDate(
  sendTemplateToTagsSchema,
) {}

export const sendTemplateToTagsResponseSchema = z.object({
  success: z.boolean(),
});

export class SendTemplateToTagsResponseDto extends createZodDtoWithoutDate(
  sendTemplateToTagsResponseSchema,
) {}
