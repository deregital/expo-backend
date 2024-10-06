import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const findOneTagGroupResponseSchema = tagGroupSchema.merge(
  z.object({
    tags: z.array(tagSchema),
  }),
);

export class FindOneTagGroupResponseDto extends createZodDto(
  findOneTagGroupResponseSchema,
) {}
