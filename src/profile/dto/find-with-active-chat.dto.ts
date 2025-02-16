import { findWithActiveChatResponseSchema } from '@/profile/schema/find-with-active-chat.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class FindWithActiveChatResponseDto extends createZodDtoWithoutDate(
  findWithActiveChatResponseSchema,
) {}
