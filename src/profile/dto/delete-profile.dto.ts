import { profileSchema } from '@/profile/dto/profile.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const deleteProfileResponseSchema = profileSchema;

export class DeleteProfileResponseDto extends createZodDtoWithoutDate(
  deleteProfileResponseSchema,
) {}
