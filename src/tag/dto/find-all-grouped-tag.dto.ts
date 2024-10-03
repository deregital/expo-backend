import { tagSchema } from '@/tag/dto/tag.dto';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const findAllGroupedTagResponseSchema = z.array(
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
);

export class FindAllGroupedTagResponseDto extends createZodDto(
  findAllGroupedTagResponseSchema,
) {}
