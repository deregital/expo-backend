import { locationSchema } from '@/schema/location.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

function locationPickedSchema(): z.ZodObject<{
  city: z.ZodString;
  longitude: z.ZodNumber;
  latitude: z.ZodNumber;
}> {
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
