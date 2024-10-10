import {
  ReplaceDatesWithStrings,
  replaceDatesWithStrings,
} from '@/shared/dtoModification/zod-without-dates';
import { createZodDto, ZodDtoStatic } from '@anatine/zod-nestjs';
import { OpenApiZodAny } from '@anatine/zod-openapi';

export function createZodDtoWithoutDate<T extends OpenApiZodAny>(
  schema: T,
): ZodDtoStatic<ReplaceDatesWithStrings<T>> {
  return createZodDto(replaceDatesWithStrings(schema)) as ZodDtoStatic<
    ReplaceDatesWithStrings<T>
  >;
}
