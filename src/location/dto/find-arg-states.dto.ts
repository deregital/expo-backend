import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findArgStatesResponseSchema = z.object({
  states: z.array(z.string()),
});

export class FindArgStatesResponseDto extends createZodDtoWithoutDate(
  findArgStatesResponseSchema,
) {}
