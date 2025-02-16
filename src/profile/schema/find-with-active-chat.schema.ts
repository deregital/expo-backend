import { messageSchema } from '@/message/dto/message.dto';
import { profileSchema } from '@/profile/schema/profile.schema';
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
