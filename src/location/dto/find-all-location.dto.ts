import { locationSchema } from '@/location/dto/location.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function locationPickedSchema() {
  return locationSchema.pick({
    city: true,
    longitude: true,
    latitude: true,
  });
}

export const findAllLocationResponseSchema = z.object({
  birthLocations: z.array(
    locationPickedSchema().merge(
      z.object({
        _count: z.object({
          birthProfiles: z.number(),
        }),
      }),
    ),
  ),
  residenceLocations: z.array(
    locationPickedSchema().merge(
      z.object({
        _count: z.object({
          residenceProfiles: z.number(),
        }),
      }),
    ),
  ),
});

export class FindAllLocationResponseDto extends createZodDtoWithoutDate(
  findAllLocationResponseSchema,
) {}
