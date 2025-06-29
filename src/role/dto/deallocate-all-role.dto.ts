import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const deallocateAllRoleResponseSchema = profileSchema.omit({
  password: true,
});

export class DeallocateAllRoleResponseDto extends createZodDtoWithoutDate(
  deallocateAllRoleResponseSchema,
) {}
