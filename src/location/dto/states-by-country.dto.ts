import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findAllStatesByCountryResponseSchema = z.object({
  states: z.array(
    z.object({
      name: z.string(),
      isoCode: z.string(),
      countryCode: z.string(),
      countryName: z.string(),
      latitude: z.string().nullish(),
      longitude: z.string().nullish(),
    }),
  ),
});

export class FindAllStatesByCountryResponseDto extends createZodDtoWithoutDate(
  findAllStatesByCountryResponseSchema,
) {}
