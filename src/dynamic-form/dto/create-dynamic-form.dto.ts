import {
  dynamicFormSchema,
  dynamicOptionSchema,
  dynamicQuestionSchema,
} from '@/dynamic-form/dto/dynamic-form.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const createDynamicFormSchema = dynamicFormSchema
  .pick({
    name: true,
  })
  .extend({
    questions: z.array(
      dynamicQuestionSchema
        .pick({
          text: true,
          disabled: true,
          required: true,
          multipleChoice: true,
        })
        .extend({
          options: z.array(
            dynamicOptionSchema.pick({
              text: true,
            }),
          ),
        }),
    ),
  });

export class CreateDynamicFormDto extends createZodDtoWithoutDate(
  createDynamicFormSchema,
) {}

export const createDynamicFormResponseSchema = dynamicFormSchema
  .pick({
    id: true,
    name: true,
  })
  .extend({
    questions: z.array(
      dynamicQuestionSchema
        .pick({
          text: true,
          disabled: true,
          required: true,
          multipleChoice: true,
          tagGroupId: true,
        })
        .extend({
          options: z.array(
            dynamicOptionSchema.pick({
              text: true,
              tagId: true,
            }),
          ),
        }),
    ),
  });

export class CreateDynamicFormResponseDto extends createZodDtoWithoutDate(
  createDynamicFormResponseSchema,
) {}
