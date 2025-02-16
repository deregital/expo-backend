import { profileSchema } from '@/profile/schema/profile.schema';
import z from 'zod';

export const findTrashResponseSchema = z.object({
  profiles: z.array(
    profileSchema.pick({
      id: true,
      fullName: true,
      profilePictureUrl: true,
      created_at: true,
      isInTrash: true,
      phoneNumber: true,
      movedToTrashDate: true,
    }),
  ),
});
