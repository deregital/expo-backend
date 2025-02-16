import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findAllProfileResponseSchema = z.object({
  profiles: z.array(
    profileSchema.merge(
      z.object({
        tags: z.array(
          tagSchema.merge(
            z.object({
              group: tagGroupSchema.pick({
                color: true,
                isExclusive: true,
              }),
            }),
          ),
        ),
      }),
    ),
  ),
});

export class FindAllProfileResponseDto extends createZodDtoWithoutDate(
  findAllProfileResponseSchema,
) {}
