import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const findOneTagResponseSchema = tagSchema.merge(
  z.object({
    group: tagGroupSchema,
  }),
);

export class FindOneTagResponseDto extends createZodDto(
  findOneTagResponseSchema,
) {}
