import { tagSchema } from '@/tag/dto/tag.dto';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { Role } from '~/types/prisma-schema';

export const accountSchema = z.object({
  id: z
    .string({
      required_error: translate('model.account.id.required'),
    })
    .uuid({
      message: translate('model.account.id.uuid'),
    }),
  username: z.string({
    required_error: translate('model.account.username.required'),
  }),
  password: z
    .string({
      required_error: translate('model.account.password.required'),
    })
    .min(6, translate('model.account.password.min')),
  role: z.nativeEnum(Role, {
    message: translate('model.account.role.invalid'),
  }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  globalFilter: z.object({
    tags: tagSchema
      .pick({
        id: true,
        name: true,
      })
      .merge(
        z.object({
          group: tagGroupSchema.pick({
            id: true,
            color: true,
            isExclusive: true,
          }),
        }),
      ),
    active: z.boolean(),
  }),
  isGlobalFilterActive: z.boolean().default(false),
  fcmToken: z.array(z.string()).default([]),
});

export class CuentaDto extends createZodDto(accountSchema) {}
