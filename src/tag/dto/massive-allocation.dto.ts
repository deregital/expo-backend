import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const massiveAllocationSchema = z.object({
  tagIds: z.array(tagSchema.shape.id),
  profileIds: z.array(profileSchema.shape.id),
});

export class MassiveAllocationDto extends createZodDtoWithoutDate(
  massiveAllocationSchema,
) {}

export const massiveAllocationResponseSchema = z.object({
  profiles: z.array(profileSchema),
});

export class MassiveAllocationResponseDto extends createZodDtoWithoutDate(
  massiveAllocationResponseSchema,
) {}
