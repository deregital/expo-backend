import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export class ProfileDto extends createZodDtoWithoutDate(profileSchema) {}
