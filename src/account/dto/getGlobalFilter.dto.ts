import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const getGlobalFilterResponse = z.object({
  active: z.boolean(),
  globalFilter: z.array(
    tagSchema
      .pick({
        id: true,
        name: true,
        type: true,
      })
      .merge(
        z.object({
          group: tagGroupSchema.pick({
            id: true,
            color: true,
            isExclusive: true,
          }),
        }),
      ),
  ),
});

export class GetGlobalFilterResponseDto extends createZodDto(
  getGlobalFilterResponse,
) {}
