import { etiquetaSchema } from '@/exports';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const eventoSchemaBase = z.object({
  id: z.string().uuid({ message: 'El ID debe ser un UUID' }),
  name: z.string().min(1, 'El nombre es requerido'),
  date: z.string().min(1, 'La fecha es requerida'),
  location: z.string().min(1, 'La ubicación es requerida'),

  etiquetaAsistioId: etiquetaSchema.shape.id,
  etiquetaAsistio: etiquetaSchema,
  etiquetaConfirmoId: etiquetaSchema.shape.id,
  etiquetaConfirmo: etiquetaSchema,

  eventoPadreId: z.string().uuid().optional(),

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
