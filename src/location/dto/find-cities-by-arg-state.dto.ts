import { argCitySchema } from '@/location/dto/arg-city.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findCitiesByArgStateResponseSchema = z.object({
  cities: z.array(
    argCitySchema.pick({
      id: true,
      name: true,
      centroid: true,
    }),
  ),
});

export class FindCitiesByArgStateResponseDto extends createZodDtoWithoutDate(
  findCitiesByArgStateResponseSchema,
) {}
