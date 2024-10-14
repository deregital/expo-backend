import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findOneTagGroupResponseSchema = tagGroupSchema.merge(
  z.object({
    tags: z.array(tagSchema),
  }),
);

export class FindOneTagGroupResponseDto extends createZodDtoWithoutDate(
  findOneTagGroupResponseSchema,
) {}
