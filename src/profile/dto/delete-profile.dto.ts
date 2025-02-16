import { deleteProfileResponseSchema } from '@/profile/schema/delete-profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class DeleteProfileResponseDto extends createZodDtoWithoutDate(
  deleteProfileResponseSchema,
) {}
