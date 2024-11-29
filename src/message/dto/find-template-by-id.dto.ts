import { templateSchema } from '@/message/dto/template.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findTemplateByIdResponseSchema = z.object({
  template: templateSchema.pick({
    name: true,
    language: true,
    status: true,
    id: true,
    category: true,
    components: true,
  }),
});

export class FindTemplateByIdResponseDto extends createZodDtoWithoutDate(
  findTemplateByIdResponseSchema,
) {}
