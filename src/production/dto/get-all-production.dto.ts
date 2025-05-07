import { productionSchema } from '@/production/dto/production.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const getAllProductionResponseSchema = z.object({
  productions: productionSchema
    .extend({
      administrator: profileSchema.nullable(),
    })
    .array(),
});

export class GetAllProductionResponseDto extends createZodDtoWithoutDate(
  getAllProductionResponseSchema,
) {}
