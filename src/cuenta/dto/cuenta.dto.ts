import { etiquetaSchema } from '@/etiqueta/dto/etiqueta.dto';
import { grupoEtiquetaSchema } from '@/grupo-etiqueta/dto/grupo-etiqueta.dto';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const cuentaSchema = z.object({
  id: z
    .string({
      required_error: translate('model.cuenta.id.required'),
    })
    .uuid({
      message: translate('model.cuenta.id.uuid'),
    }),
  username: z.string({
    required_error: translate('model.cuenta.username.required'),
  }),
  password: z
    .string({
      required_error: translate('model.cuenta.password.required'),
    })
    .min(6, translate('model.cuenta.password.min')),
  isAdmin: z.boolean().default(false),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  filtroBase: z.object({
    etiquetas: etiquetaSchema
      .pick({
        id: true,
        name: true,
      })
      .merge(
        z.object({
          grupo: grupoEtiquetaSchema.pick({
            id: true,
            color: true,
            isExclusive: true,
          }),
        }),
      ),
    active: z.boolean(),
  }),
  filtroBaseActivo: z.boolean().default(false),
  fcmToken: z.array(z.string()).default([]),
});

export class CuentaDto extends createZodDto(cuentaSchema) {}
