import { type OpenApiZodAny } from '@anatine/zod-openapi';
import {
  z,
  ZodArray,
  ZodDate,
  ZodIntersection,
  ZodNullable,
  ZodObject,
  ZodOptional,
  ZodRawShape,
  ZodTypeAny,
  ZodUnion,
} from 'zod';

export type ReplaceDatesWithStrings<T extends ZodTypeAny> = T extends ZodDate
  ? ReturnType<typeof z.string> // Replace ZodDate with z.string().datetime()
  : T extends ZodObject<infer Shape>
    ? ZodObject<{ [k in keyof Shape]: ReplaceDatesWithStrings<Shape[k]> }> // Recursively process object shape
    : T extends ZodArray<infer Item>
      ? ZodArray<ReplaceDatesWithStrings<Item>> // Process array item type
      : T extends ZodUnion<infer Options>
        ? ZodUnion<{
            [k in keyof Options]: ReplaceDatesWithStrings<Options[k]>;
          }> // Process each option in union
        : T extends ZodIntersection<infer Left, infer Right>
          ? ZodIntersection<
              ReplaceDatesWithStrings<Left>,
              ReplaceDatesWithStrings<Right>
            > // Process both sides of intersection
          : T extends ZodNullable<infer Inner>
            ? ZodNullable<ReplaceDatesWithStrings<Inner>> // Process nullable schema
            : T extends ZodOptional<infer Inner>
              ? ZodOptional<ReplaceDatesWithStrings<Inner>> // Process optional schema
              : T; // Otherwise, return the schema as is

// Function to replace z.date() with z.string().datetime() recursively
export const replaceDatesWithStrings = <T extends OpenApiZodAny>(
  schema: T,
): ReplaceDatesWithStrings<T> => {
  if (schema instanceof ZodDate) {
    return z.string().datetime() as ReplaceDatesWithStrings<T>; // Replace ZodDate with ZodString
  }

  if (schema instanceof ZodObject) {
    const newShape: ZodRawShape = {};
    for (const key in schema.shape) {
      newShape[key] = replaceDatesWithStrings(schema.shape[key]);
    }
    return z.object(newShape) as ReplaceDatesWithStrings<T>; // Return the new transformed object schema
  }

  if (schema instanceof ZodArray) {
    return z.array(
      replaceDatesWithStrings(schema.element),
    ) as ReplaceDatesWithStrings<T>; // Process array
  }

  if (schema instanceof ZodUnion) {
    return z.union(
      schema._def.options.map((option: T) => replaceDatesWithStrings(option)),
    ) as ReplaceDatesWithStrings<T>; // Process union
  }

  if (schema instanceof ZodIntersection) {
    return z.intersection(
      replaceDatesWithStrings(schema._def.left),
      replaceDatesWithStrings(schema._def.right),
    ) as ReplaceDatesWithStrings<T>; // Process intersection
  }

  // Return the schema as is if no transformation is needed
  return schema as ReplaceDatesWithStrings<T>;
};
