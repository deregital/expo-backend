import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findProvincesResponseSchema = z.object({
  provinces: z.array(z.string()),
});

export class FindProvincesResponseDto extends createZodDtoWithoutDate(
  findProvincesResponseSchema,
) {}
