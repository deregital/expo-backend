import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const deleteProfileResponseSchema = profileSchema;

export class DeleteProfileResponseDto extends createZodDtoWithoutDate(
  deleteProfileResponseSchema,
) {}
