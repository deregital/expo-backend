import { etiquetaSchema } from '@/etiqueta/dto/etiqueta.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const updateFiltroBaseSchema = z.object({
  active: z.boolean(),
  etiquetasIds: z.array(etiquetaSchema.shape.id),
});

export class UpdateFiltroBaseDto extends createZodDto(updateFiltroBaseSchema) {}

export const updateFiltroBaseResponseSchema = z.object({
  id: z.string(),
  nombreUsuario: z.string(),
  esAdmin: z.boolean(),
  fcmToken: z.string().nullable(),
  filtroBaseActivo: z.boolean(),
  filtroBase: z.object({
    active: z.boolean(),
    etiquetas: z.array(etiquetaSchema),
  }),
});

export class UpdateFiltroBaseResponseDto extends createZodDto(
  updateFiltroBaseResponseSchema,
) {}
