import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const cannedResponseSchema = z.object({
  id: z.string().uuid({
    message: translate('model.cannedResponse.id.uuid'),
  }),
  name: z.string().min(1, {
    message: translate('model.cannedResponse.name.min'),
  }),
  content: z.string().min(1, {
    message: translate('model.cannedResponse.content.min'),
  }),

  created_at: z.date(),
  updated_at: z.date(),
});

export class CannedResponseDto extends createZodDtoWithoutDate(
  cannedResponseSchema,
) {}
