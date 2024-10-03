import { tagSchema } from '@/tag/dto/tag.dto';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const findByGroupTagResponseDto = z.array(
  tagSchema.merge(
    z.object({
      group: tagGroupSchema,
    }),
  ),
);

export class FindByGroupTagResponseDto extends createZodDto(
  findByGroupTagResponseDto,
) {}
