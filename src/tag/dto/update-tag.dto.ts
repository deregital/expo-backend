import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const updateTagSchema = tagSchema
  .pick({
    name: true,
    groupId: true,
  })
  .partial();

export class UpdateTagDto extends createZodDto(updateTagSchema) {}

export const updateTagResponseSchema = tagSchema;

export class UpdateTagResponseDto extends createZodDto(
  updateTagResponseSchema,
) {}
