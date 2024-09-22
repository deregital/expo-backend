import { etiquetaSchema } from '@/etiqueta/dto/etiqueta.dto';
import { grupoEtiquetaSchema } from '@/grupo-etiqueta/dto/grupo-etiqueta.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const cuentaSchema = z.object({
  id: z
    .string({
      required_error: 'El id es requerido',
    })
    .uuid({
      message: 'El id debe ser un UUID',
    }),
  username: z.string({
    required_error: 'El nombre de usuario es requerido',
  }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  isAdmin: z.boolean().default(false),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  filtroBase: z.object({
    etiquetas: etiquetaSchema
      .pick({
        id: true,
        name: true,
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
    active: z.boolean(),
  }),
  filtroBaseActivo: z.boolean().default(false),
  fcmToken: z.array(z.string()).default([]),
});

export class CuentaDto extends createZodDto(cuentaSchema) {}
