import { profileSchema } from '@/profile/schema/profile.schema';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByTagGroupsProfileResponseSchema = z.object({
  profiles: z.array(
    profileSchema.merge(
      z.object({
        tags: z.array(tagSchema),
      }),
    ),
  ),
});
