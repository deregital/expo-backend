import { productionSchema } from '@/production/dto/production.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const deleteProductionResponseSchema = productionSchema;

export class DeleteProductionResponseDto extends createZodDtoWithoutDate(
  deleteProductionResponseSchema,
) {}
