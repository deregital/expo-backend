import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const findAllTagGroupSchema = z.object({
  tagGroups: z.array(
    tagGroupSchema.merge(
      z.object({
        tags: z.array(tagSchema),
      }),
    ),
  ),
});

export class FindAllTagGroupResponseDto extends createZodDto(
  findAllTagGroupSchema,
) {}
