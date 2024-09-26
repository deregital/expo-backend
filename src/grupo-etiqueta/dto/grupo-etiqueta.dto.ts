import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const grupoEtiquetaSchema = z.object({
  id: z.string().uuid({
    message: translate('model.grupoEtiqueta.id.uuid'),
  }),
  name: z.string().min(1, {
    message: translate('model.grupoEtiqueta.name.required'),
  }),
  color: z
    .string()
    .length(7)
    .startsWith('#', {
      message: translate('model.grupoEtiqueta.color.invalid'),
    })
    .toLowerCase(),
  isExclusive: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class GrupoEtiquetaDto extends createZodDto(grupoEtiquetaSchema) {}
