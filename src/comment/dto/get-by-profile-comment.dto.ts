import { accountSchema } from '@/account/dto/account.dto';
import { commentSchema } from '@/comment/dto/comment.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const getByProfileCommentResponseSchema = z.object({
  comments: z.array(
    commentSchema.merge(
      z.object({
        account: accountSchema.pick({
          username: true,
        }),
      }),
    ),
  ),
});

export class GetByProfileCommentResponseDto extends createZodDtoWithoutDate(
  getByProfileCommentResponseSchema,
) {}
