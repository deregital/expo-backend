import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const allocateParticipantRoleSchema = z.object({
  roleIds: tagSchema.shape.id.array(),
  profileId: profileSchema.shape.id,
});

export class AllocateParticipantRoleDto extends createZodDtoWithoutDate(
  allocateParticipantRoleSchema,
) {}

export const allocateParticipantRoleResponseSchema = profileSchema.omit({
  password: true,
});

export class AllocateParticipantRoleResponseDto extends createZodDtoWithoutDate(
  allocateParticipantRoleResponseSchema,
) {}
