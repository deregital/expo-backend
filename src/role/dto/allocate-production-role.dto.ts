import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const allocateProductionRoleSchema = z.object({
  profileId: profileSchema.shape.id,
});

export class AllocateProductionRoleDto extends createZodDtoWithoutDate(
  allocateProductionRoleSchema,
) {}

export const allocateProductionRoleResponseSchema = profileSchema.omit({
  password: true,
});

export class AllocateProductionRoleResponseDto extends createZodDtoWithoutDate(
  allocateProductionRoleResponseSchema,
) {}
