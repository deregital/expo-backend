import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
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

export class FindByTagGroupsProfileResponseDto extends createZodDtoWithoutDate(
  findByTagGroupsProfileResponseSchema,
) {}
