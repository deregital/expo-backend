import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { TipoEtiqueta } from '~/types/prisma-schema';

export const etiquetaSchema = z.object({
  id: z.string().uuid({
    message: 'El ID debe ser un UUID',
  }),
  name: z.string().min(1, {
    message: 'El nombre debe tener al menos 1 caracter',
  }),
  groupId: z.string().uuid({
    message: 'Debes seleccionar un grupo de etiquetas',
  }),
  type: z.nativeEnum(TipoEtiqueta, {
    message: 'El tipo de etiqueta no es válido',
  }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class EtiquetaDto extends createZodDto(etiquetaSchema) {}
