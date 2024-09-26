import { etiquetaSchema } from '@/etiqueta/dto/etiqueta.dto';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const eventoSchemaBase = z.object({
  id: z.string().uuid({ message: translate('model.evento.id.uuid') }),
  name: z.string().min(1, translate('model.evento.name.required')),
  date: z
    .string({
      required_error: translate('model.evento.date.required'),
    })
    .date(translate('model.evento.date.invalid')),
  location: z.string().min(1, translate('model.evento.location.required')),

  etiquetaAsistioId: etiquetaSchema.shape.id,
  etiquetaAsistio: etiquetaSchema,
  etiquetaConfirmoId: etiquetaSchema.shape.id,
  etiquetaConfirmo: etiquetaSchema,

  eventoPadreId: z
    .string()
    .uuid({
      message: translate('model.evento.id.uuid'),
    })
    .optional(),

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

type Evento = z.infer<typeof eventoSchemaBase> & {
  eventoPadre: z.infer<typeof eventoSchemaBase>;
  subEventos: z.infer<typeof eventoSchemaBase>[];
};

const eventoSchema: z.ZodType<Evento> = eventoSchemaBase.extend({
  eventoPadre: z.lazy(() => eventoSchema),
  subEventos: z.array(z.lazy(() => eventoSchemaBase)),
});

export class EventoDto extends createZodDto(eventoSchema) {}
