import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByTagsProfileResponseSchema = z.object({
  profiles: z.array(
    profileSchema.extend({
      tags: z.array(
        tagSchema.extend({
          group: tagGroupSchema.pick({
            isExclusive: true,
          }),
        }),
      ),
    }),
  ),
});

export class FindByTagsProfileResponseDto extends createZodDtoWithoutDate(
  findByTagsProfileResponseSchema,
) {}
