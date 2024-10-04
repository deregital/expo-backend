import { tagSchema } from '@/tag/dto/tag.dto';
import { accountSchema } from '@/account/dto/account.dto';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const updateGlobalFilterSchema = z.object({
  active: accountSchema.shape.isGlobalFilterActive,
  tagsIds: z.array(tagSchema.shape.id),
});

export class UpdateGlobalFilterDto extends createZodDto(
  updateGlobalFilterSchema,
) {}

export const updateGlobalFilterResponseSchema = accountSchema.merge(
  z.object({
    globalFilter: z.array(tagSchema),
  }),
);

export class UpdateGlobalFilterResponseDto extends createZodDto(
  updateGlobalFilterResponseSchema,
) {}
