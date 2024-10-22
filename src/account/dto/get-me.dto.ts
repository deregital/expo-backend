import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';
import { accountSchema } from './account.dto';

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

export class GetMeResponseDto extends createZodDtoWithoutDate(
  getMeResponseSchema,
) {}
