import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { TagType } from '~/types/prisma-schema';

export const tagSchema = z.object({
  id: z.string().uuid({
    message: translate('model.tag.id.uuid'),
  }),
  name: z
    .string({
      required_error: translate('model.tag.name.required'),
    })
    .min(1, {
      message: translate('model.tag.name.min'),
    }),
  groupId: tagGroupSchema.shape.id,
  type: z.nativeEnum(TagType, {
    message: translate('model.tag.type.invalid'),
  }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class TagDto extends createZodDto(tagSchema) {}
