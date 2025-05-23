import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByTagsProfileResponseSchema = z.object({
  profiles: z.array(
    profileSchema.merge(
      z.object({
        tags: z.array(
          tagSchema.merge(
            z.object({
              group: tagGroupSchema.pick({
                isExclusive: true,
                name: true,
                color: true,
              }),
            }),
          ),
        ),
      }),
    ),
  ),
});

export class FindByTagsProfileResponseDto extends createZodDtoWithoutDate(
  findByTagsProfileResponseSchema,
) {}
