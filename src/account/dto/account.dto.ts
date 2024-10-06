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
    required_error: translate('model.account.role.required'),
    message: translate('model.account.role.invalid'),
  }),
  isGlobalFilterActive: z.boolean().default(false),
  fcmToken: z.array(z.string()).default([]),
  created_at: z.date(),
  updated_at: z.date(),
});

export class CuentaDto extends createZodDto(accountSchema) {}
