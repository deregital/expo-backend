import {
  dynamicFormSchema,
  dynamicOptionSchema,
  dynamicQuestionSchema,
} from '@/dynamic-form/dto/dynamic-form.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findAllDynamicFormsResponseSchema = z.array(
  dynamicFormSchema.extend({
    questions: z.array(
      dynamicQuestionSchema.extend({
        tagGroup: tagGroupSchema,
        options: z.array(
          dynamicOptionSchema.extend({
            tag: tagSchema,
          }),
        ),
      }),
    ),
  }),
);

export class FindAllDynamicFormsResponseDto extends createZodDtoWithoutDate(
  findAllDynamicFormsResponseSchema,
) {}
