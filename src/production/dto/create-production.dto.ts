import { productionSchema } from '@/production/dto/production.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const createProductionSchema = productionSchema.pick({
  name: true,
});

export class CreateProductionDto extends createZodDtoWithoutDate(
  createProductionSchema,
) {}

export const createProductionResponseSchema = productionSchema.pick({
  id: true,
  name: true,
  created_at: true,
});
