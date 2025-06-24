import {
  dynamicFormSchema,
  dynamicOptionSchema,
  dynamicQuestionSchema,
} from '@/dynamic-form/dto/dynamic-form.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findByTypeDynamicFormsResponseSchema = dynamicFormSchema.extend({
  questions: z.array(
    dynamicQuestionSchema.extend({
      options: z.array(dynamicOptionSchema),
    }),
  ),
});

export class FindByTypeDynamicFormsResponseDto extends createZodDtoWithoutDate(
  findByTypeDynamicFormsResponseSchema,
) {}
