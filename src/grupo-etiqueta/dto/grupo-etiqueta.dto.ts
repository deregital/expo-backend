import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const grupoEtiquetaSchema = z.object({
  id: z.string().uuid({
    message: 'El ID debe ser un UUID',
  }),
  name: z.string().min(1, {
    message: 'El nombre debe tener al menos 1 caracter',
  }),
  color: z
    .string()
    .length(7)
    .startsWith('#', {
      message: 'El color debe tener el formato #ABCDEF',
    })
    .toLowerCase(),
  isExclusive: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class GrupoEtiquetaDto extends createZodDto(grupoEtiquetaSchema) {}
