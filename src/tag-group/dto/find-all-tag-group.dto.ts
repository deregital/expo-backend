import { createZodDtoWithoutDate } from '@/shared/dtoModification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findAllTagGroupResponseSchema = z.object({
  tagGroups: z.array(
    tagGroupSchema.merge(
      z.object({
        tags: z.array(tagSchema),
      }),
    ),
  ),
});

export class FindAllTagGroupResponseDto extends createZodDtoWithoutDate(
  findAllTagGroupResponseSchema,
) {}
