import { etiquetaSchema, grupoEtiquetaSchema } from '@/exports';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const getFiltroBaseResponse = z.object({
  active: z.boolean(),
  filtroBase: z.array(
    etiquetaSchema
      .pick({
        id: true,
        name: true,
        type: true,
      })
      .merge(
        z.object({
          grupo: grupoEtiquetaSchema.pick({
            id: true,
            color: true,
            isExclusive: true,
          }),
        }),
      ),
  ),
});

export class GetFiltroBaseResponseDto extends createZodDto(
  getFiltroBaseResponse,
) {}
