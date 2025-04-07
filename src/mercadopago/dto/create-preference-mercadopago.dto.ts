import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const createPreferenceSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      quantity: z.number(),
      unit_price: z.number(),
    }),
  ),
  ticket_group_id: z.string(),
});

export class CreatePreferenceDto extends createZodDtoWithoutDate(
  createPreferenceSchema,
) {}

export const typePreferenceError = z.object({
  message: z.string(),
  error: z.string(),
  status: z.string(),
  cause: z.string(),
});

export const createPreferenceResponseSchema =
  z.object({
    id: z.string(),
    init_point: z.string(),
  }) || typePreferenceError;

export class CreatePreferenceResponseDto extends createZodDtoWithoutDate(
  createPreferenceResponseSchema,
) {}
