import { createZodDtoWithoutDate } from '@/shared/dtoModification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findAllWithTagsResponseSchema = z.object({
  groups: z.array(
    tagGroupSchema
      .pick({
        id: true,
        name: true,
        isExclusive: true,
        color: true,
      })
      .merge(
        z.object({
          tags: z.array(
            tagSchema.merge(
              z.object({
                _count: z.object({
                  profiles: z.number(),
                }),
              }),
            ),
          ),
          _count: z.object({
            tags: z.number(),
          }),
        }),
      ),
  ),
});

export class FindAllWithTagsResponseDto extends createZodDtoWithoutDate(
  findAllWithTagsResponseSchema,
) {}
