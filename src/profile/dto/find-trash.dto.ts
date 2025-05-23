import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
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

export class FindTrashResponseDto extends createZodDtoWithoutDate(
  findTrashResponseSchema,
) {}
