import { commentSchema } from '@/comment/dto/comment.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const createCommentSchema = commentSchema.pick({
  content: true,
  profileId: true,
  isSolvable: true,
});

export class CreateCommentDto extends createZodDtoWithoutDate(
  createCommentSchema,
) {}

export const createCommentResponseSchema = commentSchema;

export class CreateCommentResponseDto extends createZodDtoWithoutDate(
  createCommentResponseSchema,
) {}
