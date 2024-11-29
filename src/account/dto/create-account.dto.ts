import { accountSchema } from '@/account/dto/account.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const createAccountSchema = accountSchema.pick({
  username: true,
  password: true,
  role: true,
});

export class CreateAccountDto extends createZodDtoWithoutDate(
  createAccountSchema,
) {}

export const createAccountResponseSchema = accountSchema.omit({
  password: true,
  created_at: true,
  updated_at: true,
});

export class CreateAccountResponseDto extends createZodDtoWithoutDate(
  createAccountResponseSchema,
) {}
