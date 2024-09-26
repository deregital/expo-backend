import { grupoEtiquetaSchema } from '@/grupo-etiqueta/dto/grupo-etiqueta.dto';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { TipoEtiqueta } from '~/types/prisma-schema';

export const etiquetaSchema = z.object({
  id: z.string().uuid({
    message: translate('model.etiqueta.id.uuid'),
  }),
  name: z
    .string({
      required_error: translate('model.etiqueta.name.required'),
    })
    .min(1, {
      message: translate('model.etiqueta.name.min'),
    }),
  groupId: grupoEtiquetaSchema.shape.id,
  type: z.nativeEnum(TipoEtiqueta, {
    message: translate('model.etiqueta.type.invalid'),
  }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class EtiquetaDto extends createZodDto(etiquetaSchema) {}
