import { translate } from '@/i18n/translate';
import { productionSchema } from '@/production/dto/production.dto';
import { profileSchema } from '@/schema/profile.schema';
import z from 'zod';
import { AffiliationStatus } from '~/types/prisma-schema';

export const productionAffiliationRequestSchema = z.object({
  id: z.string().uuid({
    message: translate('model.productionAffiliationRequest.id.uuid'),
  }),
  productionId: productionSchema.shape.id,
  profileId: profileSchema.shape.id,
  status: z.nativeEnum(AffiliationStatus),

  created_at: z.date(),
  updated_at: z.date(),
});
