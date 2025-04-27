import { productionAffiliationRequestSchema } from '@/production-affiliation-request/dto/production-affiliation-request.dto';
import { productionSchema } from '@/production/dto/production.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateProductionAffiliationRequestResponseSchema =
  productionAffiliationRequestSchema.extend({
    production: productionSchema,
    profile: profileSchema,
  });

export class UpdateProductionAffiliationRequestResponseDto extends createZodDtoWithoutDate(
  updateProductionAffiliationRequestResponseSchema,
) {}
