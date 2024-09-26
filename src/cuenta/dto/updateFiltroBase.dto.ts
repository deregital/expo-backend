import { etiquetaSchema } from '@/etiqueta/dto/etiqueta.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const updateFiltroBaseSchema = z.object({
  active: z.boolean(),
  etiquetas: z.array(etiquetaSchema.shape.id),
});

export class UpdateFiltroBaseDto extends createZodDto(updateFiltroBaseSchema) {}
