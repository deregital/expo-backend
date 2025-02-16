import { profileSchema } from '@/profile/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const nonReadMessagesSchema = z.object({
  messages: z.array(
    z.object({
      profilePhoneNumber: profileSchema.shape.phoneNumber,
      _count: z.object({
        id: z.number(),
      }),
    }),
  ),
});

export class NonReadMessagesDto extends createZodDtoWithoutDate(
  nonReadMessagesSchema,
) {}
