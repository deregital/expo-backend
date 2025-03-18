import { eventSchema } from '@/event/dto/event.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const getInvitationsResponseSchema = z.object({
  events: z.array(
    eventSchema.pick({
      date: true,
      startingDate: true,
      endingDate: true,
      name: true,
      location: true,
      id: true,
      active: true,
    }),
  ),
});

export class GetInvitationsResponseDto extends createZodDtoWithoutDate(
  getInvitationsResponseSchema,
) {}
