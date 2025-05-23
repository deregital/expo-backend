import { productionAffiliationRequestSchema } from '@/production-affiliation-request/dto/production-affiliation-request.dto';
import { productionSchema } from '@/production/dto/production.dto';
import { locationSchema } from '@/schema/location.schema';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const getMiExpoMeResponseSchema = profileSchema
  .omit({ password: true })
  .extend({
    residenceLocation: locationSchema.nullable(),
    birthLocation: locationSchema.nullable(),
    productionsAdministrated: productionSchema.array(),
    productionsParticipated: productionSchema.array(),
    productionRequestsSent: productionAffiliationRequestSchema.array(),
  });

export class GetMiExpoMeResponseDto extends createZodDtoWithoutDate(
  getMiExpoMeResponseSchema,
) {}
