import { productionSchema } from '@/production/dto/production.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateProductionSchema = productionSchema
  .pick({
    name: true,
    administratorId: true,
  })
  .partial();

export class UpdateProductionDto extends createZodDtoWithoutDate(
  updateProductionSchema,
) {}

export const updateProductionResponseSchema = productionSchema;

export class UpdateProductionResponseDto extends createZodDtoWithoutDate(
  updateProductionResponseSchema,
) {}
