import {
  dynamicFormSchema,
  dynamicOptionSchema,
  dynamicQuestionSchema,
} from '@/dynamic-form/dto/dynamic-form.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const updateDynamicFormSchema = dynamicFormSchema
  .pick({
    name: true,
  })
  .merge(
    z.object({
      questions: dynamicQuestionSchema
        .pick({
          text: true,
          disabled: true,
          required: true,
          multipleChoice: true,
        })
        .extend({
          id: dynamicQuestionSchema.shape.id.nullable(),
          options: dynamicOptionSchema
            .pick({
              text: true,
            })
            .extend({
              id: dynamicOptionSchema.shape.id.nullable(),
            })
            .array(),
        })
        .array(),
    }),
  );

export class UpdateDynamicFormDto extends createZodDtoWithoutDate(
  updateDynamicFormSchema,
) {}

export const updateDynamicFormResponseSchema = z.object({
  success: z.boolean(),
});

export class UpdateDynamicFormResponseDto extends createZodDtoWithoutDate(
  updateDynamicFormResponseSchema,
) {}
