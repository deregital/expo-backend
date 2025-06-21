import {
  dynamicOptionSchema,
  dynamicQuestionSchema,
} from '@/dynamic-form/dto/dynamic-form.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByIdDynamicQuestionResponseSchema =
  dynamicQuestionSchema.extend({
    options: z.array(
      dynamicOptionSchema.extend({
        tag: tagSchema,
      }),
    ),
  });

export class FindByNameDynamicFormsResponseDto extends createZodDtoWithoutDate(
  findByIdDynamicQuestionResponseSchema,
) {}
