import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const deallocateAllRoleSchema = z.object({
  profileId: profileSchema.shape.id,
});

export class DeallocateAllRoleDto extends createZodDtoWithoutDate(
  deallocateAllRoleSchema,
) {}

export const deallocateAllRoleResponseSchema = profileSchema.omit({
  password: true,
});

export class DeallocateAllRoleResponseDto extends createZodDtoWithoutDate(
  deallocateAllRoleResponseSchema,
) {}
