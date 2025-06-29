import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';
import { DynamicFormType } from '~/types/prisma-schema';

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
  type: z.nativeEnum(DynamicFormType),

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
  tagGroupId: tagGroupSchema.shape.id,

  created_at: z.date(),
  updated_at: z.date(),
});

export const dynamicOptionSchema = z.object({
  id: z.string().uuid({
    message: translate('model.dynamicOption.id.uuid'),
  }),
  text: z
    .string({
      required_error: translate('model.dynamicOption.text.required'),
    })
    .min(1, {
      message: translate('model.dynamicOption.text.min'),
    }),
  tagId: tagSchema.shape.id,

  questionId: dynamicQuestionSchema.shape.id,

  created_at: z.date(),
  updated_at: z.date(),
});

export class DynamicFormDto extends createZodDtoWithoutDate(
  dynamicFormSchema,
) {}

export class DynamicFormTypeDto extends createZodDtoWithoutDate(
  z.object({
    type: dynamicFormSchema.shape.type,
  }),
) {}

export class DynamicQuestionDto extends createZodDtoWithoutDate(
  dynamicQuestionSchema,
) {}

export class DynamicOptionDto extends createZodDtoWithoutDate(
  dynamicOptionSchema,
) {}
