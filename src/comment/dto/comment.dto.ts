import { accountSchema } from '@/account/dto/account.dto';
import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const commentSchema = z.object({
  id: z.string().uuid({
    message: translate('model.comment.id.uuid'),
  }),
  content: z.string().min(1, {
    message: translate('model.comment.content.min'),
  }),
  createdBy: accountSchema.shape.id,

  isSolvable: z.boolean().default(false),
  isSolved: z.boolean().default(false),
  solvedAt: z.date().optional(),
  solvedBy: accountSchema.shape.id.optional(),

  created_at: z.date(),
  updated_at: z.date(),
});

export class CommentDto extends createZodDtoWithoutDate(commentSchema) {}
