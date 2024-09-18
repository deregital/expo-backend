import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const comentarioSchema = z.object({
  id: z.string().uuid({
    message: 'El ID debe ser un UUID',
  }),
  content: z.string().min(1, {
    message: 'El contenido debe tener al menos 1 caracter',
  }),
  createdBy: z.string().uuid({
    message: 'El createdBy debe ser un UUID',
  }),

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class ComentarioDto extends createZodDto(comentarioSchema) {}
