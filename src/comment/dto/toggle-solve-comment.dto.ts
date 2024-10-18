import { commentSchema } from '@/comment/dto/comment.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const toggleSolveCommentResponseSchema = commentSchema;

export class ToggleSolveCommentResponseDto extends createZodDtoWithoutDate(
  toggleSolveCommentResponseSchema,
) {}
