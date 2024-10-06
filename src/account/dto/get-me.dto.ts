import z from 'zod';
import { accountSchema } from './account.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import { tagSchema } from '@/tag/dto/tag.dto';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';

export const getMeResponseSchema = accountSchema
  .omit({
    password: true,
  })
  .merge(
    z.object({
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
      tags: z.array(tagSchema),
    }),
  );

export class GetMeResponseDto extends createZodDto(getMeResponseSchema) {}
