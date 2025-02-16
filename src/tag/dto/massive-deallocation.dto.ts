import { profileSchema } from '@/profile/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const massiveDeallocationSchema = z.object({
  tagIds: z.array(tagSchema.shape.id),
  profileIds: z.array(profileSchema.shape.id),
});

export class MassiveDeallocationDto extends createZodDtoWithoutDate(
  massiveDeallocationSchema,
) {}

export const massiveDeallocationResponseSchema = z.object({
  profiles: z.array(profileSchema),
});

export class MassiveDeallocationResponseDto extends createZodDtoWithoutDate(
  massiveDeallocationResponseSchema,
) {}
