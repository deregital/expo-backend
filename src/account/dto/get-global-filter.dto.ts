import { accountSchema } from '@/account/dto/account.dto';
import { createZodDtoWithoutDate } from '@/shared/dtoModification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const getGlobalFilterResponseSchema = accountSchema
  .pick({
    isGlobalFilterActive: true,
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
    }),
  );

export class GetGlobalFilterResponseDto extends createZodDtoWithoutDate(
  getGlobalFilterResponseSchema,
) {}
