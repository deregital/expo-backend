import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findAllCountriesResponseSchema = z.object({
  countries: z.array(
    z.object({
      name: z.string(),
      isoCode: z.string(),
      latitude: z.number(),
      longitude: z.number(),
    }),
  ),
});

export class FindAllCountriesResponseDto extends createZodDtoWithoutDate(
  findAllCountriesResponseSchema,
) {}
