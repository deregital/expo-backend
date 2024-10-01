import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const tagGroupSchema = z.object({
  id: z.string().uuid({
    message: translate('model.tagGroup.id.uuid'),
  }),
  name: z.string().min(1, {
    message: translate('model.tagGroup.name.required'),
  }),
  color: z
    .string()
    .length(7)
    .startsWith('#', {
      message: translate('model.tagGroup.color.invalid'),
    })
    .toLowerCase(),
  isExclusive: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class TagGroupDto extends createZodDto(tagGroupSchema) {}
