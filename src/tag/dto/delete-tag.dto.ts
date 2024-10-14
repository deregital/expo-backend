import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';

export const deleteTagResponseSchema = tagSchema;
export class DeleteTagResponseDto extends createZodDtoWithoutDate(
  deleteTagResponseSchema,
) {}
