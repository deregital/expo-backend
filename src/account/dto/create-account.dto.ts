import { accountSchema } from '@/account/dto/account.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const createAccountSchema = accountSchema.pick({
  username: true,
  password: true,
  role: true,
});

export class CreateAccountDto extends createZodDto(createAccountSchema) {}

export const createAccountResponseSchema = accountSchema.omit({
  password: true,
  created_at: true,
  updated_at: true,
});

export class CreateAccountResponseDto extends createZodDto(
  createAccountResponseSchema,
) {}
