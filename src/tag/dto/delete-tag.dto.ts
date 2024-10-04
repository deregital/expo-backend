import { tagSchema } from '@/tag/dto/tag.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const deleteTagResponseSchema = tagSchema;
export class DeleteTagResponseDto extends createZodDto(
  deleteTagResponseSchema,
) {}
