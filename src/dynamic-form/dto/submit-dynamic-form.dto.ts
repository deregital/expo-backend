import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { massiveAllocationResponseSchema } from '@/tag/dto/massive-allocation.dto';
import { dynamicOptionSchema, dynamicQuestionSchema } from './dynamic-form.dto';

export const submitDynamicFormsSchema = dynamicQuestionSchema
  .omit({
    created_at: true,
    updated_at: true,
  })
  .extend({
    answers: dynamicOptionSchema.shape.id.array(),
  })
  .array();

export class SubmitDynamicFormsDto extends createZodDtoWithoutDate(
  submitDynamicFormsSchema,
) {}

export const submitDynamicFormsResponseSchema = massiveAllocationResponseSchema;

export class SubmitDynamicFormsResponseDto extends createZodDtoWithoutDate(
  submitDynamicFormsResponseSchema,
) {}
