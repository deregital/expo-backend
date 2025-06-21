import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const deleteDynamicFormSchema = z.object({
  id: z.string(),
});

export class DeleteDynamicFormDto extends createZodDtoWithoutDate(
  deleteDynamicFormSchema,
) {}
