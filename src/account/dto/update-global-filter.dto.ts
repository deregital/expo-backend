import { accountSchema } from '@/account/dto/account.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import { z } from 'zod';

export const updateGlobalFilterSchema = z.object({
  active: accountSchema.shape.isGlobalFilterActive,
  tagsIds: z.array(tagSchema.shape.id),
});

export class UpdateGlobalFilterDto extends createZodDtoWithoutDate(
  updateGlobalFilterSchema,
) {}

export const updateGlobalFilterResponseSchema = accountSchema.merge(
  z.object({
    globalFilter: z.array(tagSchema),
  }),
);

export class UpdateGlobalFilterResponseDto extends createZodDtoWithoutDate(
  updateGlobalFilterResponseSchema,
) {}
