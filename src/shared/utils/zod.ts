import z from 'zod';

type RemoveNulls<Schema extends z.AnyZodObject> = {
  [key in keyof Schema['shape']]: Schema['shape'][key] extends z.ZodNullable<
    infer T
  >
    ? z.ZodDefault<T>
    : Schema['shape'][key];
};

export const removeNullableValidation = <Schema extends z.AnyZodObject>(
  schema: Schema,
): z.ZodObject<RemoveNulls<Schema>> => {
  const entries = Object.entries(schema.shape) as [
    keyof Schema['shape'],
    z.ZodTypeAny,
  ][];
  const newProps = entries.reduce((acc, [key, value]) => {
    acc[key] = value instanceof z.ZodNullable ? value.unwrap() : value;
    return acc;
  }, {} as RemoveNulls<Schema>);
  return z.object(newProps);
};
