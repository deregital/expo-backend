import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const dynamicFormSchema = z.object({
  id: z.string().uuid({
    message: translate('model.dynamicForm.id.uuid'),
  }),
  name: z
    .string({
      required_error: translate('model.dynamicForm.name.required'),
    })
    .min(1, {
      message: translate('model.dynamicForm.name.min'),
    }),

  created_at: z.date(),
  updated_at: z.date(),
});

export const dynamicQuestionSchema = z.object({
  id: z.string().uuid({
    message: translate('model.dynamicQuestion.id.uuid'),
  }),
  formId: dynamicFormSchema.shape.id,
  text: z
    .string({
      required_error: translate('model.dynamicQuestion.text.required'),
    })
    .min(1, {
      message: translate('model.dynamicQuestion.text.min'),
    }),

  disabled: z.boolean().default(false),
  required: z.boolean().default(true),
  multipleChoice: z.boolean().default(false),

  created_at: z.date(),
  updated_at: z.date(),
});

export const dynamicOptionSchema = z.object({
  id: z.string().uuid({
    message: translate('model.dynamicOption.id.uuid'),
  }),
  text: tagSchema.shape.name,
  tagId: tagSchema.shape.id,

  questionId: dynamicQuestionSchema.shape.id,

  created_at: z.date(),
  updated_at: z.date(),
});

export class DynamicFormDto extends createZodDtoWithoutDate(
  dynamicFormSchema,
) {}

export class DynamicQuestionDto extends createZodDtoWithoutDate(
  dynamicQuestionSchema,
) {}

export class DynamicOptionDto extends createZodDtoWithoutDate(
  dynamicOptionSchema,
) {}
