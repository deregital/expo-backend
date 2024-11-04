import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByDateRangeSchema = z.object({
  profiles: z.array(
    profileSchema.merge(
      z.object({
        tags: z.array(
          tagSchema.merge(
            z.object({
              group: tagGroupSchema.pick({
                id: true,
              }),
            }),
          ),
        ),
      }),
    ),
  ),
});

export class FindByDateRangeDto extends createZodDtoWithoutDate(
  findByDateRangeSchema,
) {}

export const findByDateRangeResponseSchema = z.record(
  z.string(),
  z.array(
    profileSchema.merge(
      z.object({
        tags: z.array(
          tagSchema.merge(
            z.object({
              group: tagGroupSchema.pick({
                id: true,
              }),
            }),
          ),
        ),
      }),
    ),
  ),
);

export class FindByDateRangeResponseDto extends createZodDtoWithoutDate(
  findByDateRangeResponseSchema,
) {}
