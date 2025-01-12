import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import z from 'zod';

extendZodWithOpenApi(z);

export const updateImageSchema = z.object({
  image: z.instanceof(FormData).openapi({ type: 'object', format: 'binary' }),
});

export class UpdateImageDto extends createZodDtoWithoutDate(
  updateImageSchema,
) {}

export const updateImageResponseSchema = z.object({
  message: z.string(),
});
export class UpdateImageResponseDto extends createZodDtoWithoutDate(
  updateImageResponseSchema,
) {}
