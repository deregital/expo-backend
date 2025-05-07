import { productionAffiliationRequestSchema } from '@/production-affiliation-request/dto/production-affiliation-request.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const createProductionAffiliationRequestSchema =
  productionAffiliationRequestSchema.pick({
    productionId: true,
  });

export class CreateProductionAffiliationRequestDto extends createZodDtoWithoutDate(
  createProductionAffiliationRequestSchema,
) {}

export const createProductionAffiliationRequestResponseSchema =
  productionAffiliationRequestSchema;

export class CreateProductionAffiliationRequestResponseDto extends createZodDtoWithoutDate(
  createProductionAffiliationRequestResponseSchema,
) {}
