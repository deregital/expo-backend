import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const findAllTagResponseSchema = z.object({
  tags: z.array(
    tagSchema.merge(
      z.object({
        group: tagGroupSchema,
      }),
    ),
  ),
});

export class FindAllTagResponseDto extends createZodDto(
  findAllTagResponseSchema,
) {}
