import { messageSchema } from '@/message/dto/message.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const findMessagesByPhoneResponseSchema = z
  .object({
    inChat: z.boolean(),
  })
  .merge(
    z.object({
      messages: z.array(
        messageSchema.pick({
          message: true,
          created_at: true,
          state: true,
        }),
      ),
    }),
  );

export class FindMessagesByPhoneNumberResponseDto extends createZodDtoWithoutDate(
  findMessagesByPhoneResponseSchema,
) {}
