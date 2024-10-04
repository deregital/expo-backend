export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

type ArrayKey = number;

type IsTuple<T extends readonly any[]> = number extends T['length']
  ? false
  : true;

type TupleKeys<T extends readonly any[]> = Exclude<keyof T, keyof any[]>;

export type PathConcat<
  TKey extends string | number,
  TValue,
> = TValue extends Primitive
  ? `${TKey}`
  : `${TKey}` | `${TKey}.${Paths<TValue>}`;

// This is the key part that filters out keys leading to objects
export type Paths<T> = T extends string
  ? ''
  : T extends readonly (infer V)[]
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: T[K] extends string
            ? `${K & string}`
            : Paths<T[K]> extends infer P
              ? P extends `${string}`
                ? `${K & string}.${P}`
                : never
              : never;
        }[TupleKeys<T>]
      : V extends string
        ? `${ArrayKey}`
        : Paths<V> extends infer P
          ? P extends `${string}`
            ? `${ArrayKey}.${P}`
            : never
          : never
    : {
        [K in keyof T]-?: T[K] extends string
          ? `${K & string}`
          : Paths<T[K]> extends infer P
            ? P extends `${string}`
              ? `${K & string}.${P}`
              : never
            : never;
      }[keyof T];
