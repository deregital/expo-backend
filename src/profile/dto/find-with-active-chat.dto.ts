import { messageSchema } from '@/message/dto/message.dto';
import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findWithActiveChatResponseSchema = z.object({
  profiles: z.array(
    profileSchema.merge(
      z.object({
        tags: z.array(tagSchema),
        inChat: z.boolean(),
        messages: z.array(
          messageSchema.pick({
            state: true,
            message: true,
            created_at: true,
          }),
        ),
      }),
    ),
  ),
});

export class FindWithActiveChatResponseDto extends createZodDtoWithoutDate(
  findWithActiveChatResponseSchema,
) {}
