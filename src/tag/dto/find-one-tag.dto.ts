import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findOneTagResponseSchema = tagSchema.merge(
  z.object({
    group: tagGroupSchema,
  }),
);

export class FindOneTagResponseDto extends createZodDtoWithoutDate(
  findOneTagResponseSchema,
) {}
