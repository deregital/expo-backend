import { z } from 'zod';

export const CreateCuentaDto = z.object({
  username: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    .max(255, { message: 'El nombre debe tener como máximo 255 caracteres' }),
  password: z
    .string({
      message: 'La contraseña es requerida y debe tener al menos 6 caracteres',
    })
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  esAdmin: z.boolean().default(false),
});
