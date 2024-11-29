import { templateSchema } from '@/message/dto/template.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findTemplatesResponseSchema = z.object({
  templates: z.array(
    templateSchema.pick({
      name: true,
      id: true,
      status: true,
    }),
  ),
});

export class FindTemplatesResponseDto extends createZodDtoWithoutDate(
  findTemplatesResponseSchema,
) {}
