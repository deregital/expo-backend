import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByGroupTagResponseSchema = z.object({
  tags: z.array(
    tagSchema.merge(
      z.object({
        group: tagGroupSchema,
      }),
    ),
  ),
});

export class FindByGroupTagResponseDto extends createZodDtoWithoutDate(
  findByGroupTagResponseSchema,
) {}
