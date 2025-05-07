import { productionAffiliationRequestSchema } from '@/production-affiliation-request/dto/production-affiliation-request.dto';
import { productionSchema } from '@/production/dto/production.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findByProductionAffiliationRequestResponseSchema = z.object({
  productions: z.array(
    productionAffiliationRequestSchema.extend({
      production: productionSchema,
      profile: profileSchema,
    }),
  ),
});

export class FindByProductionAffiliationRequestResponseDto extends createZodDtoWithoutDate(
  findByProductionAffiliationRequestResponseSchema,
) {}
