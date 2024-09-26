import { cuentaSchema } from '@/exports';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const comentarioSchema = z.object({
  id: z.string().uuid({
    message: translate('model.comentario.id.uuid'),
  }),
  content: z.string().min(1, {
    message: translate('model.comentario.content.min'),
  }),
  createdBy: cuentaSchema.shape.id,

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class ComentarioDto extends createZodDto(comentarioSchema) {}
