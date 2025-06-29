import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const allocateProductionRoleResponseSchema = profileSchema.omit({
  password: true,
});

export class AllocateProductionRoleResponseDto extends createZodDtoWithoutDate(
  allocateProductionRoleResponseSchema,
) {}
