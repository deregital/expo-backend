import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class ProfileDto extends createZodDtoWithoutDate(profileSchema) {}
