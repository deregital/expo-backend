import { accountSchema } from '@/account/dto/account.dto';
import { translate } from '@/i18n/translate';
import { createZodDto } from '@anatine/zod-nestjs';
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
  solvedAt: z.string().datetime().optional(),
  solvedBy: accountSchema.shape.id.optional(),

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export class CommentDto extends createZodDto(commentSchema) {}
