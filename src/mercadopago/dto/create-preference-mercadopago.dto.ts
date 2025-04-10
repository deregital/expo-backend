import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';

export const createPreferenceSchema = z.object({
  ticket_group_id: z.string(),
  ticket_type: z.nativeEnum(TicketType),
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

export const createPreferenceResponseSchema = z.object({
  response: z
    .object({
      id: z.string(),
      init_point: z.string(),
    })
    .or(typePreferenceError),
});

export class CreatePreferenceResponseDto extends createZodDtoWithoutDate(
  createPreferenceResponseSchema,
) {}
