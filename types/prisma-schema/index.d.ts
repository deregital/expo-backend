/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Cuenta
 *
 */
export type Cuenta = $Result.DefaultSelection<Prisma.$CuentaPayload>;
/**
 * Model Perfil
 *
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>;
/**
 * Model Comentario
 *
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>;
/**
 * Model Etiqueta
 *
 */
export type Etiqueta = $Result.DefaultSelection<Prisma.$EtiquetaPayload>;
/**
 * Model EtiquetaGrupo
 *
 */
export type EtiquetaGrupo =
  $Result.DefaultSelection<Prisma.$EtiquetaGrupoPayload>;
/**
 * Model Evento
 *
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>;
/**
 * Model Mensaje
 *
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>;
/**
 * Model Enums
 *
 */
export type Enums = $Result.DefaultSelection<Prisma.$EnumsPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const TipoEtiqueta: {
    PERSONAL: 'PERSONAL';
    EVENTO: 'EVENTO';
    MODELO: 'MODELO';
    TENTATIVA: 'TENTATIVA';
  };

  export type TipoEtiqueta = (typeof TipoEtiqueta)[keyof typeof TipoEtiqueta];

  export const MensajeStatus: {
    ENVIADO: 'ENVIADO';
    RECIBIDO: 'RECIBIDO';
    LEIDO: 'LEIDO';
  };

  export type MensajeStatus =
    (typeof MensajeStatus)[keyof typeof MensajeStatus];

  export const EstadoPlantilla: {
    APRROVED: 'APRROVED';
    PENDING: 'PENDING';
    REJECTED: 'REJECTED';
  };

  export type EstadoPlantilla =
    (typeof EstadoPlantilla)[keyof typeof EstadoPlantilla];

  export const CategoriaPlantilla: {
    MARKETING: 'MARKETING';
    UTILITY: 'UTILITY';
    AUTHENTICATION: 'AUTHENTICATION';
  };

  export type CategoriaPlantilla =
    (typeof CategoriaPlantilla)[keyof typeof CategoriaPlantilla];
}

export type TipoEtiqueta = $Enums.TipoEtiqueta;

export const TipoEtiqueta: typeof $Enums.TipoEtiqueta;

export type MensajeStatus = $Enums.MensajeStatus;

export const MensajeStatus: typeof $Enums.MensajeStatus;

export type EstadoPlantilla = $Enums.EstadoPlantilla;

export const EstadoPlantilla: typeof $Enums.EstadoPlantilla;

export type CategoriaPlantilla = $Enums.CategoriaPlantilla;

export const CategoriaPlantilla: typeof $Enums.CategoriaPlantilla;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cuentas
 * const cuentas = await prisma.cuenta.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cuentas
   * const cuentas = await prisma.cuenta.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.cuenta`: Exposes CRUD operations for the **Cuenta** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cuentas
   * const cuentas = await prisma.cuenta.findMany()
   * ```
   */
  get cuenta(): Prisma.CuentaDelegate<ExtArgs>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Perfils
   * const perfils = await prisma.perfil.findMany()
   * ```
   */
  get perfil(): Prisma.PerfilDelegate<ExtArgs>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comentarios
   * const comentarios = await prisma.comentario.findMany()
   * ```
   */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs>;

  /**
   * `prisma.etiqueta`: Exposes CRUD operations for the **Etiqueta** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Etiquetas
   * const etiquetas = await prisma.etiqueta.findMany()
   * ```
   */
  get etiqueta(): Prisma.EtiquetaDelegate<ExtArgs>;

  /**
   * `prisma.etiquetaGrupo`: Exposes CRUD operations for the **EtiquetaGrupo** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more EtiquetaGrupos
   * const etiquetaGrupos = await prisma.etiquetaGrupo.findMany()
   * ```
   */
  get etiquetaGrupo(): Prisma.EtiquetaGrupoDelegate<ExtArgs>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Eventos
   * const eventos = await prisma.evento.findMany()
   * ```
   */
  get evento(): Prisma.EventoDelegate<ExtArgs>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Mensajes
   * const mensajes = await prisma.mensaje.findMany()
   * ```
   */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs>;

  /**
   * `prisma.enums`: Exposes CRUD operations for the **Enums** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Enums
   * const enums = await prisma.enums.findMany()
   * ```
   */
  get enums(): Prisma.EnumsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Cuenta: 'Cuenta';
    Perfil: 'Perfil';
    Comentario: 'Comentario';
    Etiqueta: 'Etiqueta';
    EtiquetaGrupo: 'EtiquetaGrupo';
    Evento: 'Evento';
    Mensaje: 'Mensaje';
    Enums: 'Enums';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps:
        | 'cuenta'
        | 'perfil'
        | 'comentario'
        | 'etiqueta'
        | 'etiquetaGrupo'
        | 'evento'
        | 'mensaje'
        | 'enums';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Cuenta: {
        payload: Prisma.$CuentaPayload<ExtArgs>;
        fields: Prisma.CuentaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CuentaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CuentaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>;
          };
          findFirst: {
            args: Prisma.CuentaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CuentaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>;
          };
          findMany: {
            args: Prisma.CuentaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>[];
          };
          create: {
            args: Prisma.CuentaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>;
          };
          createMany: {
            args: Prisma.CuentaCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CuentaCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>[];
          };
          delete: {
            args: Prisma.CuentaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>;
          };
          update: {
            args: Prisma.CuentaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>;
          };
          deleteMany: {
            args: Prisma.CuentaDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.CuentaUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.CuentaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>;
          };
          aggregate: {
            args: Prisma.CuentaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCuenta>;
          };
          groupBy: {
            args: Prisma.CuentaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CuentaGroupByOutputType>[];
          };
          count: {
            args: Prisma.CuentaCountArgs<ExtArgs>;
            result: $Utils.Optional<CuentaCountAggregateOutputType> | number;
          };
        };
      };
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>;
        fields: Prisma.PerfilFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>;
          };
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>;
          };
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[];
          };
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>;
          };
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PerfilCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[];
          };
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>;
          };
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>;
          };
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>;
          };
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerfil>;
          };
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PerfilGroupByOutputType>[];
          };
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>;
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number;
          };
        };
      };
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>;
        fields: Prisma.ComentarioFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>;
          };
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>;
          };
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[];
          };
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>;
          };
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[];
          };
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>;
          };
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>;
          };
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>;
          };
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComentario>;
          };
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ComentarioGroupByOutputType>[];
          };
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ComentarioCountAggregateOutputType>
              | number;
          };
        };
      };
      Etiqueta: {
        payload: Prisma.$EtiquetaPayload<ExtArgs>;
        fields: Prisma.EtiquetaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EtiquetaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EtiquetaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>;
          };
          findFirst: {
            args: Prisma.EtiquetaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EtiquetaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>;
          };
          findMany: {
            args: Prisma.EtiquetaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[];
          };
          create: {
            args: Prisma.EtiquetaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>;
          };
          createMany: {
            args: Prisma.EtiquetaCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EtiquetaCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[];
          };
          delete: {
            args: Prisma.EtiquetaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>;
          };
          update: {
            args: Prisma.EtiquetaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>;
          };
          deleteMany: {
            args: Prisma.EtiquetaDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EtiquetaUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EtiquetaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>;
          };
          aggregate: {
            args: Prisma.EtiquetaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEtiqueta>;
          };
          groupBy: {
            args: Prisma.EtiquetaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EtiquetaGroupByOutputType>[];
          };
          count: {
            args: Prisma.EtiquetaCountArgs<ExtArgs>;
            result: $Utils.Optional<EtiquetaCountAggregateOutputType> | number;
          };
        };
      };
      EtiquetaGrupo: {
        payload: Prisma.$EtiquetaGrupoPayload<ExtArgs>;
        fields: Prisma.EtiquetaGrupoFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EtiquetaGrupoFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EtiquetaGrupoFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>;
          };
          findFirst: {
            args: Prisma.EtiquetaGrupoFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EtiquetaGrupoFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>;
          };
          findMany: {
            args: Prisma.EtiquetaGrupoFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>[];
          };
          create: {
            args: Prisma.EtiquetaGrupoCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>;
          };
          createMany: {
            args: Prisma.EtiquetaGrupoCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EtiquetaGrupoCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>[];
          };
          delete: {
            args: Prisma.EtiquetaGrupoDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>;
          };
          update: {
            args: Prisma.EtiquetaGrupoUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>;
          };
          deleteMany: {
            args: Prisma.EtiquetaGrupoDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EtiquetaGrupoUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EtiquetaGrupoUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EtiquetaGrupoPayload>;
          };
          aggregate: {
            args: Prisma.EtiquetaGrupoAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEtiquetaGrupo>;
          };
          groupBy: {
            args: Prisma.EtiquetaGrupoGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EtiquetaGrupoGroupByOutputType>[];
          };
          count: {
            args: Prisma.EtiquetaGrupoCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<EtiquetaGrupoCountAggregateOutputType>
              | number;
          };
        };
      };
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>;
        fields: Prisma.EventoFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>;
          };
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>;
          };
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[];
          };
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>;
          };
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[];
          };
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>;
          };
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>;
          };
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>;
          };
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvento>;
          };
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventoGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>;
            result: $Utils.Optional<EventoCountAggregateOutputType> | number;
          };
        };
      };
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>;
        fields: Prisma.MensajeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>;
          };
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>;
          };
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[];
          };
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>;
          };
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MensajeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[];
          };
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>;
          };
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>;
          };
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>;
          };
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMensaje>;
          };
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MensajeGroupByOutputType>[];
          };
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>;
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number;
          };
        };
      };
      Enums: {
        payload: Prisma.$EnumsPayload<ExtArgs>;
        fields: Prisma.EnumsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EnumsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EnumsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>;
          };
          findFirst: {
            args: Prisma.EnumsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EnumsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>;
          };
          findMany: {
            args: Prisma.EnumsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>[];
          };
          create: {
            args: Prisma.EnumsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>;
          };
          createMany: {
            args: Prisma.EnumsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EnumsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>[];
          };
          delete: {
            args: Prisma.EnumsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>;
          };
          update: {
            args: Prisma.EnumsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>;
          };
          deleteMany: {
            args: Prisma.EnumsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EnumsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EnumsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EnumsPayload>;
          };
          aggregate: {
            args: Prisma.EnumsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEnums>;
          };
          groupBy: {
            args: Prisma.EnumsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EnumsGroupByOutputType>[];
          };
          count: {
            args: Prisma.EnumsCountArgs<ExtArgs>;
            result: $Utils.Optional<EnumsCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CuentaCountOutputType
   */

  export type CuentaCountOutputType = {
    comentarios: number;
    etiquetas: number;
    filtroBase: number;
  };

  export type CuentaCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comentarios?: boolean | CuentaCountOutputTypeCountComentariosArgs;
    etiquetas?: boolean | CuentaCountOutputTypeCountEtiquetasArgs;
    filtroBase?: boolean | CuentaCountOutputTypeCountFiltroBaseArgs;
  };

  // Custom InputTypes
  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CuentaCountOutputType
     */
    select?: CuentaCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountComentariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ComentarioWhereInput;
  };

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountEtiquetasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EtiquetaWhereInput;
  };

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountFiltroBaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EtiquetaWhereInput;
  };

  /**
   * Count Type PerfilCountOutputType
   */

  export type PerfilCountOutputType = {
    comentarios: number;
    mensajes: number;
    etiquetas: number;
  };

  export type PerfilCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comentarios?: boolean | PerfilCountOutputTypeCountComentariosArgs;
    mensajes?: boolean | PerfilCountOutputTypeCountMensajesArgs;
    etiquetas?: boolean | PerfilCountOutputTypeCountEtiquetasArgs;
  };

  // Custom InputTypes
  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PerfilCountOutputType
     */
    select?: PerfilCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountComentariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ComentarioWhereInput;
  };

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountMensajesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MensajeWhereInput;
  };

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountEtiquetasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EtiquetaWhereInput;
  };

  /**
   * Count Type EtiquetaCountOutputType
   */

  export type EtiquetaCountOutputType = {
    eventosAsistidos: number;
    eventosConfirmados: number;
    cuentas: number;
    perfiles: number;
    cuentasFiltroBase: number;
  };

  export type EtiquetaCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    eventosAsistidos?:
      | boolean
      | EtiquetaCountOutputTypeCountEventosAsistidosArgs;
    eventosConfirmados?:
      | boolean
      | EtiquetaCountOutputTypeCountEventosConfirmadosArgs;
    cuentas?: boolean | EtiquetaCountOutputTypeCountCuentasArgs;
    perfiles?: boolean | EtiquetaCountOutputTypeCountPerfilesArgs;
    cuentasFiltroBase?:
      | boolean
      | EtiquetaCountOutputTypeCountCuentasFiltroBaseArgs;
  };

  // Custom InputTypes
  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaCountOutputType
     */
    select?: EtiquetaCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountEventosAsistidosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventoWhereInput;
  };

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountEventosConfirmadosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventoWhereInput;
  };

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountCuentasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CuentaWhereInput;
  };

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountPerfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PerfilWhereInput;
  };

  /**
   * EtiquetaCountOutputType without action
   */
  export type EtiquetaCountOutputTypeCountCuentasFiltroBaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CuentaWhereInput;
  };

  /**
   * Count Type EtiquetaGrupoCountOutputType
   */

  export type EtiquetaGrupoCountOutputType = {
    etiquetas: number;
  };

  export type EtiquetaGrupoCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    etiquetas?: boolean | EtiquetaGrupoCountOutputTypeCountEtiquetasArgs;
  };

  // Custom InputTypes
  /**
   * EtiquetaGrupoCountOutputType without action
   */
  export type EtiquetaGrupoCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupoCountOutputType
     */
    select?: EtiquetaGrupoCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EtiquetaGrupoCountOutputType without action
   */
  export type EtiquetaGrupoCountOutputTypeCountEtiquetasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EtiquetaWhereInput;
  };

  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    subEventos: number;
  };

  export type EventoCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subEventos?: boolean | EventoCountOutputTypeCountSubEventosArgs;
  };

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountSubEventosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventoWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Cuenta
   */

  export type AggregateCuenta = {
    _count: CuentaCountAggregateOutputType | null;
    _min: CuentaMinAggregateOutputType | null;
    _max: CuentaMaxAggregateOutputType | null;
  };

  export type CuentaMinAggregateOutputType = {
    id: string | null;
    nombreUsuario: string | null;
    contrasena: string | null;
    esAdmin: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    filtroBaseActivo: boolean | null;
  };

  export type CuentaMaxAggregateOutputType = {
    id: string | null;
    nombreUsuario: string | null;
    contrasena: string | null;
    esAdmin: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    filtroBaseActivo: boolean | null;
  };

  export type CuentaCountAggregateOutputType = {
    id: number;
    nombreUsuario: number;
    contrasena: number;
    esAdmin: number;
    created_at: number;
    updated_at: number;
    filtroBaseActivo: number;
    fcmToken: number;
    _all: number;
  };

  export type CuentaMinAggregateInputType = {
    id?: true;
    nombreUsuario?: true;
    contrasena?: true;
    esAdmin?: true;
    created_at?: true;
    updated_at?: true;
    filtroBaseActivo?: true;
  };

  export type CuentaMaxAggregateInputType = {
    id?: true;
    nombreUsuario?: true;
    contrasena?: true;
    esAdmin?: true;
    created_at?: true;
    updated_at?: true;
    filtroBaseActivo?: true;
  };

  export type CuentaCountAggregateInputType = {
    id?: true;
    nombreUsuario?: true;
    contrasena?: true;
    esAdmin?: true;
    created_at?: true;
    updated_at?: true;
    filtroBaseActivo?: true;
    fcmToken?: true;
    _all?: true;
  };

  export type CuentaAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Cuenta to aggregate.
     */
    where?: CuentaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CuentaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cuentas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cuentas
     **/
    _count?: true | CuentaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CuentaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CuentaMaxAggregateInputType;
  };

  export type GetCuentaAggregateType<T extends CuentaAggregateArgs> = {
    [P in keyof T & keyof AggregateCuenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuenta[P]>
      : GetScalarType<T[P], AggregateCuenta[P]>;
  };

  export type CuentaGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CuentaWhereInput;
    orderBy?:
      | CuentaOrderByWithAggregationInput
      | CuentaOrderByWithAggregationInput[];
    by: CuentaScalarFieldEnum[] | CuentaScalarFieldEnum;
    having?: CuentaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CuentaCountAggregateInputType | true;
    _min?: CuentaMinAggregateInputType;
    _max?: CuentaMaxAggregateInputType;
  };

  export type CuentaGroupByOutputType = {
    id: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin: boolean;
    created_at: Date;
    updated_at: Date;
    filtroBaseActivo: boolean;
    fcmToken: string[];
    _count: CuentaCountAggregateOutputType | null;
    _min: CuentaMinAggregateOutputType | null;
    _max: CuentaMaxAggregateOutputType | null;
  };

  type GetCuentaGroupByPayload<T extends CuentaGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CuentaGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CuentaGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuentaGroupByOutputType[P]>
            : GetScalarType<T[P], CuentaGroupByOutputType[P]>;
        }
      >
    >;

  export type CuentaSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombreUsuario?: boolean;
      contrasena?: boolean;
      esAdmin?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      filtroBaseActivo?: boolean;
      fcmToken?: boolean;
      comentarios?: boolean | Cuenta$comentariosArgs<ExtArgs>;
      etiquetas?: boolean | Cuenta$etiquetasArgs<ExtArgs>;
      filtroBase?: boolean | Cuenta$filtroBaseArgs<ExtArgs>;
      _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cuenta']
  >;

  export type CuentaSelectScalar = {
    id?: boolean;
    nombreUsuario?: boolean;
    contrasena?: boolean;
    esAdmin?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    filtroBaseActivo?: boolean;
    fcmToken?: boolean;
  };

  export type CuentaInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comentarios?: boolean | Cuenta$comentariosArgs<ExtArgs>;
    etiquetas?: boolean | Cuenta$etiquetasArgs<ExtArgs>;
    filtroBase?: boolean | Cuenta$filtroBaseArgs<ExtArgs>;
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CuentaPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Cuenta';
    objects: {
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[];
      etiquetas: Prisma.$EtiquetaPayload<ExtArgs>[];
      filtroBase: Prisma.$EtiquetaPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        nombreUsuario: string;
        contrasena: string;
        esAdmin: boolean;
        created_at: Date;
        updated_at: Date;
        filtroBaseActivo: boolean;
        fcmToken: string[];
      },
      ExtArgs['result']['cuenta']
    >;
    composites: {};
  };

  type CuentaGetPayload<
    S extends boolean | null | undefined | CuentaDefaultArgs,
  > = $Result.GetResult<Prisma.$CuentaPayload, S>;

  type CuentaCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CuentaFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: CuentaCountAggregateInputType | true;
  };

  export interface CuentaDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Cuenta'];
      meta: { name: 'Cuenta' };
    };
    /**
     * Find zero or one Cuenta that matches the filter.
     * @param {CuentaFindUniqueArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CuentaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CuentaFindUniqueArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Cuenta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuentaFindUniqueOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CuentaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Cuenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindFirstArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CuentaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaFindFirstArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Cuenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindFirstOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CuentaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentas
     * const cuentas = await prisma.cuenta.findMany()
     *
     * // Get first 10 Cuentas
     * const cuentas = await prisma.cuenta.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cuentaWithIdOnly = await prisma.cuenta.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CuentaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Cuenta.
     * @param {CuentaCreateArgs} args - Arguments to create a Cuenta.
     * @example
     * // Create one Cuenta
     * const Cuenta = await prisma.cuenta.create({
     *   data: {
     *     // ... data to create a Cuenta
     *   }
     * })
     *
     **/
    create<T extends CuentaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CuentaCreateArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Cuentas.
     * @param {CuentaCreateManyArgs} args - Arguments to create many Cuentas.
     * @example
     * // Create many Cuentas
     * const cuenta = await prisma.cuenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends CuentaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Cuentas and returns the data saved in the database.
     * @param {CuentaCreateManyAndReturnArgs} args - Arguments to create many Cuentas.
     * @example
     * // Create many Cuentas
     * const cuenta = await prisma.cuenta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cuentas and only return the `id`
     * const cuentaWithIdOnly = await prisma.cuenta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends CuentaCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CuentaPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Cuenta.
     * @param {CuentaDeleteArgs} args - Arguments to delete one Cuenta.
     * @example
     * // Delete one Cuenta
     * const Cuenta = await prisma.cuenta.delete({
     *   where: {
     *     // ... filter to delete one Cuenta
     *   }
     * })
     *
     **/
    delete<T extends CuentaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CuentaDeleteArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Cuenta.
     * @param {CuentaUpdateArgs} args - Arguments to update one Cuenta.
     * @example
     * // Update one Cuenta
     * const cuenta = await prisma.cuenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CuentaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CuentaUpdateArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Cuentas.
     * @param {CuentaDeleteManyArgs} args - Arguments to filter Cuentas to delete.
     * @example
     * // Delete a few Cuentas
     * const { count } = await prisma.cuenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CuentaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CuentaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentas
     * const cuenta = await prisma.cuenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CuentaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CuentaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Cuenta.
     * @param {CuentaUpsertArgs} args - Arguments to update or create a Cuenta.
     * @example
     * // Update or create a Cuenta
     * const cuenta = await prisma.cuenta.upsert({
     *   create: {
     *     // ... data to create a Cuenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuenta we want to update
     *   }
     * })
     **/
    upsert<T extends CuentaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CuentaUpsertArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaCountArgs} args - Arguments to filter Cuentas to count.
     * @example
     * // Count the number of Cuentas
     * const count = await prisma.cuenta.count({
     *   where: {
     *     // ... the filter for the Cuentas we want to count
     *   }
     * })
     **/
    count<T extends CuentaCountArgs>(
      args?: Subset<T, CuentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuentaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CuentaAggregateArgs>(
      args: Subset<T, CuentaAggregateArgs>,
    ): Prisma.PrismaPromise<GetCuentaAggregateType<T>>;

    /**
     * Group by Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CuentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuentaGroupByArgs['orderBy'] }
        : { orderBy?: CuentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CuentaGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCuentaGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cuenta model
     */
    readonly fields: CuentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuentaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comentarios<T extends Cuenta$comentariosArgs<ExtArgs> = {}>(
      args?: Subset<T, Cuenta$comentariosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;

    etiquetas<T extends Cuenta$etiquetasArgs<ExtArgs> = {}>(
      args?: Subset<T, Cuenta$etiquetasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    filtroBase<T extends Cuenta$filtroBaseArgs<ExtArgs> = {}>(
      args?: Subset<T, Cuenta$filtroBaseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Cuenta model
   */
  interface CuentaFieldRefs {
    readonly id: FieldRef<'Cuenta', 'String'>;
    readonly nombreUsuario: FieldRef<'Cuenta', 'String'>;
    readonly contrasena: FieldRef<'Cuenta', 'String'>;
    readonly esAdmin: FieldRef<'Cuenta', 'Boolean'>;
    readonly created_at: FieldRef<'Cuenta', 'DateTime'>;
    readonly updated_at: FieldRef<'Cuenta', 'DateTime'>;
    readonly filtroBaseActivo: FieldRef<'Cuenta', 'Boolean'>;
    readonly fcmToken: FieldRef<'Cuenta', 'String[]'>;
  }

  // Custom InputTypes
  /**
   * Cuenta findUnique
   */
  export type CuentaFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * Filter, which Cuenta to fetch.
     */
    where: CuentaWhereUniqueInput;
  };

  /**
   * Cuenta findUniqueOrThrow
   */
  export type CuentaFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * Filter, which Cuenta to fetch.
     */
    where: CuentaWhereUniqueInput;
  };

  /**
   * Cuenta findFirst
   */
  export type CuentaFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * Filter, which Cuenta to fetch.
     */
    where?: CuentaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cuentas.
     */
    cursor?: CuentaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cuentas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[];
  };

  /**
   * Cuenta findFirstOrThrow
   */
  export type CuentaFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * Filter, which Cuenta to fetch.
     */
    where?: CuentaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cuentas.
     */
    cursor?: CuentaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cuentas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[];
  };

  /**
   * Cuenta findMany
   */
  export type CuentaFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * Filter, which Cuentas to fetch.
     */
    where?: CuentaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cuentas.
     */
    cursor?: CuentaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cuentas.
     */
    skip?: number;
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[];
  };

  /**
   * Cuenta create
   */
  export type CuentaCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Cuenta.
     */
    data: XOR<CuentaCreateInput, CuentaUncheckedCreateInput>;
  };

  /**
   * Cuenta createMany
   */
  export type CuentaCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Cuentas.
     */
    data: CuentaCreateManyInput | CuentaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Cuenta createManyAndReturn
   */
  export type CuentaCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * The data used to create many Cuentas.
     */
    data: CuentaCreateManyInput | CuentaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Cuenta update
   */
  export type CuentaUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Cuenta.
     */
    data: XOR<CuentaUpdateInput, CuentaUncheckedUpdateInput>;
    /**
     * Choose, which Cuenta to update.
     */
    where: CuentaWhereUniqueInput;
  };

  /**
   * Cuenta updateMany
   */
  export type CuentaUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Cuentas.
     */
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyInput>;
    /**
     * Filter which Cuentas to update
     */
    where?: CuentaWhereInput;
  };

  /**
   * Cuenta upsert
   */
  export type CuentaUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Cuenta to update in case it exists.
     */
    where: CuentaWhereUniqueInput;
    /**
     * In case the Cuenta found by the `where` argument doesn't exist, create a new Cuenta with this data.
     */
    create: XOR<CuentaCreateInput, CuentaUncheckedCreateInput>;
    /**
     * In case the Cuenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuentaUpdateInput, CuentaUncheckedUpdateInput>;
  };

  /**
   * Cuenta delete
   */
  export type CuentaDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    /**
     * Filter which Cuenta to delete.
     */
    where: CuentaWhereUniqueInput;
  };

  /**
   * Cuenta deleteMany
   */
  export type CuentaDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Cuentas to delete
     */
    where?: CuentaWhereInput;
  };

  /**
   * Cuenta.comentarios
   */
  export type Cuenta$comentariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    where?: ComentarioWhereInput;
    orderBy?:
      | ComentarioOrderByWithRelationInput
      | ComentarioOrderByWithRelationInput[];
    cursor?: ComentarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[];
  };

  /**
   * Cuenta.etiquetas
   */
  export type Cuenta$etiquetasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    where?: EtiquetaWhereInput;
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    cursor?: EtiquetaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * Cuenta.filtroBase
   */
  export type Cuenta$filtroBaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    where?: EtiquetaWhereInput;
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    cursor?: EtiquetaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * Cuenta without action
   */
  export type CuentaDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
  };

  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null;
    _avg: PerfilAvgAggregateOutputType | null;
    _sum: PerfilSumAggregateOutputType | null;
    _min: PerfilMinAggregateOutputType | null;
    _max: PerfilMaxAggregateOutputType | null;
  };

  export type PerfilAvgAggregateOutputType = {
    idLegible: number | null;
  };

  export type PerfilSumAggregateOutputType = {
    idLegible: number | null;
  };

  export type PerfilMinAggregateOutputType = {
    id: string | null;
    idLegible: number | null;
    telefono: string | null;
    nombreCompleto: string | null;
    nombrePila: string | null;
    genero: string | null;
    fechaNacimiento: Date | null;
    fotoUrl: string | null;
    instagram: string | null;
    mail: string | null;
    dni: string | null;
    esPapelera: boolean | null;
    fechaPapelera: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PerfilMaxAggregateOutputType = {
    id: string | null;
    idLegible: number | null;
    telefono: string | null;
    nombreCompleto: string | null;
    nombrePila: string | null;
    genero: string | null;
    fechaNacimiento: Date | null;
    fotoUrl: string | null;
    instagram: string | null;
    mail: string | null;
    dni: string | null;
    esPapelera: boolean | null;
    fechaPapelera: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PerfilCountAggregateOutputType = {
    id: number;
    idLegible: number;
    telefono: number;
    nombreCompleto: number;
    nombrePila: number;
    genero: number;
    fechaNacimiento: number;
    fotoUrl: number;
    instagram: number;
    mail: number;
    dni: number;
    nombresAlternativos: number;
    esPapelera: number;
    fechaPapelera: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PerfilAvgAggregateInputType = {
    idLegible?: true;
  };

  export type PerfilSumAggregateInputType = {
    idLegible?: true;
  };

  export type PerfilMinAggregateInputType = {
    id?: true;
    idLegible?: true;
    telefono?: true;
    nombreCompleto?: true;
    nombrePila?: true;
    genero?: true;
    fechaNacimiento?: true;
    fotoUrl?: true;
    instagram?: true;
    mail?: true;
    dni?: true;
    esPapelera?: true;
    fechaPapelera?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PerfilMaxAggregateInputType = {
    id?: true;
    idLegible?: true;
    telefono?: true;
    nombreCompleto?: true;
    nombrePila?: true;
    genero?: true;
    fechaNacimiento?: true;
    fotoUrl?: true;
    instagram?: true;
    mail?: true;
    dni?: true;
    esPapelera?: true;
    fechaPapelera?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PerfilCountAggregateInputType = {
    id?: true;
    idLegible?: true;
    telefono?: true;
    nombreCompleto?: true;
    nombrePila?: true;
    genero?: true;
    fechaNacimiento?: true;
    fotoUrl?: true;
    instagram?: true;
    mail?: true;
    dni?: true;
    nombresAlternativos?: true;
    esPapelera?: true;
    fechaPapelera?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PerfilAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Perfils.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Perfils
     **/
    _count?: true | PerfilCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PerfilAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PerfilSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PerfilMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PerfilMaxAggregateInputType;
  };

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
    [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>;
  };

  export type PerfilGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PerfilWhereInput;
    orderBy?:
      | PerfilOrderByWithAggregationInput
      | PerfilOrderByWithAggregationInput[];
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum;
    having?: PerfilScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerfilCountAggregateInputType | true;
    _avg?: PerfilAvgAggregateInputType;
    _sum?: PerfilSumAggregateInputType;
    _min?: PerfilMinAggregateInputType;
    _max?: PerfilMaxAggregateInputType;
  };

  export type PerfilGroupByOutputType = {
    id: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila: string | null;
    genero: string | null;
    fechaNacimiento: Date | null;
    fotoUrl: string | null;
    instagram: string | null;
    mail: string | null;
    dni: string | null;
    nombresAlternativos: string[];
    esPapelera: boolean;
    fechaPapelera: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: PerfilCountAggregateOutputType | null;
    _avg: PerfilAvgAggregateOutputType | null;
    _sum: PerfilSumAggregateOutputType | null;
    _min: PerfilMinAggregateOutputType | null;
    _max: PerfilMaxAggregateOutputType | null;
  };

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PerfilGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PerfilGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>;
        }
      >
    >;

  export type PerfilSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      idLegible?: boolean;
      telefono?: boolean;
      nombreCompleto?: boolean;
      nombrePila?: boolean;
      genero?: boolean;
      fechaNacimiento?: boolean;
      fotoUrl?: boolean;
      instagram?: boolean;
      mail?: boolean;
      dni?: boolean;
      nombresAlternativos?: boolean;
      esPapelera?: boolean;
      fechaPapelera?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      comentarios?: boolean | Perfil$comentariosArgs<ExtArgs>;
      mensajes?: boolean | Perfil$mensajesArgs<ExtArgs>;
      etiquetas?: boolean | Perfil$etiquetasArgs<ExtArgs>;
      _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['perfil']
  >;

  export type PerfilSelectScalar = {
    id?: boolean;
    idLegible?: boolean;
    telefono?: boolean;
    nombreCompleto?: boolean;
    nombrePila?: boolean;
    genero?: boolean;
    fechaNacimiento?: boolean;
    fotoUrl?: boolean;
    instagram?: boolean;
    mail?: boolean;
    dni?: boolean;
    nombresAlternativos?: boolean;
    esPapelera?: boolean;
    fechaPapelera?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type PerfilInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comentarios?: boolean | Perfil$comentariosArgs<ExtArgs>;
    mensajes?: boolean | Perfil$mensajesArgs<ExtArgs>;
    etiquetas?: boolean | Perfil$etiquetasArgs<ExtArgs>;
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $PerfilPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Perfil';
    objects: {
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[];
      mensajes: Prisma.$MensajePayload<ExtArgs>[];
      etiquetas: Prisma.$EtiquetaPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        idLegible: number;
        telefono: string;
        nombreCompleto: string;
        nombrePila: string | null;
        genero: string | null;
        fechaNacimiento: Date | null;
        fotoUrl: string | null;
        instagram: string | null;
        mail: string | null;
        dni: string | null;
        nombresAlternativos: string[];
        esPapelera: boolean;
        fechaPapelera: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['perfil']
    >;
    composites: {};
  };

  type PerfilGetPayload<
    S extends boolean | null | undefined | PerfilDefaultArgs,
  > = $Result.GetResult<Prisma.$PerfilPayload, S>;

  type PerfilCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: PerfilCountAggregateInputType | true;
  };

  export interface PerfilDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Perfil'];
      meta: { name: 'Perfil' };
    };
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends PerfilFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends PerfilFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     *
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PerfilFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     *
     **/
    create<T extends PerfilCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends PerfilCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Perfils and returns the data saved in the database.
     * @param {PerfilCreateManyAndReturnArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends PerfilCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PerfilPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     *
     **/
    delete<T extends PerfilDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PerfilUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PerfilDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PerfilUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     **/
    upsert<T extends PerfilUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
     **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PerfilAggregateArgs>(
      args: Subset<T, PerfilAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerfilAggregateType<T>>;

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPerfilGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Perfil model
     */
    readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comentarios<T extends Perfil$comentariosArgs<ExtArgs> = {}>(
      args?: Subset<T, Perfil$comentariosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'findMany'>
      | Null
    >;

    mensajes<T extends Perfil$mensajesArgs<ExtArgs> = {}>(
      args?: Subset<T, Perfil$mensajesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'findMany'> | Null
    >;

    etiquetas<T extends Perfil$etiquetasArgs<ExtArgs> = {}>(
      args?: Subset<T, Perfil$etiquetasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<'Perfil', 'String'>;
    readonly idLegible: FieldRef<'Perfil', 'Int'>;
    readonly telefono: FieldRef<'Perfil', 'String'>;
    readonly nombreCompleto: FieldRef<'Perfil', 'String'>;
    readonly nombrePila: FieldRef<'Perfil', 'String'>;
    readonly genero: FieldRef<'Perfil', 'String'>;
    readonly fechaNacimiento: FieldRef<'Perfil', 'DateTime'>;
    readonly fotoUrl: FieldRef<'Perfil', 'String'>;
    readonly instagram: FieldRef<'Perfil', 'String'>;
    readonly mail: FieldRef<'Perfil', 'String'>;
    readonly dni: FieldRef<'Perfil', 'String'>;
    readonly nombresAlternativos: FieldRef<'Perfil', 'String[]'>;
    readonly esPapelera: FieldRef<'Perfil', 'Boolean'>;
    readonly fechaPapelera: FieldRef<'Perfil', 'DateTime'>;
    readonly created_at: FieldRef<'Perfil', 'DateTime'>;
    readonly updated_at: FieldRef<'Perfil', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput;
  };

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput;
  };

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Perfils.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[];
  };

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Perfils.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[];
  };

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Perfils.
     */
    skip?: number;
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[];
  };

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>;
  };

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Perfil createManyAndReturn
   */
  export type PerfilCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>;
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput;
  };

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>;
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput;
  };

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput;
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>;
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>;
  };

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput;
  };

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput;
  };

  /**
   * Perfil.comentarios
   */
  export type Perfil$comentariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    where?: ComentarioWhereInput;
    orderBy?:
      | ComentarioOrderByWithRelationInput
      | ComentarioOrderByWithRelationInput[];
    cursor?: ComentarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[];
  };

  /**
   * Perfil.mensajes
   */
  export type Perfil$mensajesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    where?: MensajeWhereInput;
    orderBy?:
      | MensajeOrderByWithRelationInput
      | MensajeOrderByWithRelationInput[];
    cursor?: MensajeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[];
  };

  /**
   * Perfil.etiquetas
   */
  export type Perfil$etiquetasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    where?: EtiquetaWhereInput;
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    cursor?: EtiquetaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
  };

  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null;
    _min: ComentarioMinAggregateOutputType | null;
    _max: ComentarioMaxAggregateOutputType | null;
  };

  export type ComentarioMinAggregateOutputType = {
    id: string | null;
    contenido: string | null;
    creadoPor: string | null;
    perfilId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ComentarioMaxAggregateOutputType = {
    id: string | null;
    contenido: string | null;
    creadoPor: string | null;
    perfilId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ComentarioCountAggregateOutputType = {
    id: number;
    contenido: number;
    creadoPor: number;
    perfilId: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ComentarioMinAggregateInputType = {
    id?: true;
    contenido?: true;
    creadoPor?: true;
    perfilId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ComentarioMaxAggregateInputType = {
    id?: true;
    contenido?: true;
    creadoPor?: true;
    perfilId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ComentarioCountAggregateInputType = {
    id?: true;
    contenido?: true;
    creadoPor?: true;
    perfilId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ComentarioAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comentarios to fetch.
     */
    orderBy?:
      | ComentarioOrderByWithRelationInput
      | ComentarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comentarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comentarios
     **/
    _count?: true | ComentarioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ComentarioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ComentarioMaxAggregateInputType;
  };

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
    [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>;
  };

  export type ComentarioGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ComentarioWhereInput;
    orderBy?:
      | ComentarioOrderByWithAggregationInput
      | ComentarioOrderByWithAggregationInput[];
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum;
    having?: ComentarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComentarioCountAggregateInputType | true;
    _min?: ComentarioMinAggregateInputType;
    _max?: ComentarioMaxAggregateInputType;
  };

  export type ComentarioGroupByOutputType = {
    id: string;
    contenido: string;
    creadoPor: string;
    perfilId: string;
    created_at: Date;
    updated_at: Date;
    _count: ComentarioCountAggregateOutputType | null;
    _min: ComentarioMinAggregateOutputType | null;
    _max: ComentarioMaxAggregateOutputType | null;
  };

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ComentarioGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ComentarioGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>;
        }
      >
    >;

  export type ComentarioSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      contenido?: boolean;
      creadoPor?: boolean;
      perfilId?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      cuenta?: boolean | CuentaDefaultArgs<ExtArgs>;
      perfil?: boolean | PerfilDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comentario']
  >;

  export type ComentarioSelectScalar = {
    id?: boolean;
    contenido?: boolean;
    creadoPor?: boolean;
    perfilId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ComentarioInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>;
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>;
  };

  export type $ComentarioPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Comentario';
    objects: {
      cuenta: Prisma.$CuentaPayload<ExtArgs>;
      perfil: Prisma.$PerfilPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        contenido: string;
        creadoPor: string;
        perfilId: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['comentario']
    >;
    composites: {};
  };

  type ComentarioGetPayload<
    S extends boolean | null | undefined | ComentarioDefaultArgs,
  > = $Result.GetResult<Prisma.$ComentarioPayload, S>;

  type ComentarioCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ComentarioCountAggregateInputType | true;
  };

  export interface ComentarioDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Comentario'];
      meta: { name: 'Comentario' };
    };
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ComentarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<
        Prisma.$ComentarioPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<
        Prisma.$ComentarioPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ComentarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<
        Prisma.$ComentarioPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<
        Prisma.$ComentarioPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     *
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ComentarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     *
     **/
    create<T extends ComentarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends ComentarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ComentarioPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     *
     **/
    delete<T extends ComentarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ComentarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ComentarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ComentarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     **/
    upsert<T extends ComentarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>,
    ): Prisma__ComentarioClient<
      $Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
     **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ComentarioAggregateArgs>(
      args: Subset<T, ComentarioAggregateArgs>,
    ): Prisma.PrismaPromise<GetComentarioAggregateType<T>>;

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetComentarioGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comentario model
     */
    readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cuenta<T extends CuentaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CuentaDefaultArgs<ExtArgs>>,
    ): Prisma__CuentaClient<
      | $Result.GetResult<
          Prisma.$CuentaPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    perfil<T extends PerfilDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PerfilDefaultArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      | $Result.GetResult<
          Prisma.$PerfilPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<'Comentario', 'String'>;
    readonly contenido: FieldRef<'Comentario', 'String'>;
    readonly creadoPor: FieldRef<'Comentario', 'String'>;
    readonly perfilId: FieldRef<'Comentario', 'String'>;
    readonly created_at: FieldRef<'Comentario', 'DateTime'>;
    readonly updated_at: FieldRef<'Comentario', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput;
  };

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput;
  };

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comentarios to fetch.
     */
    orderBy?:
      | ComentarioOrderByWithRelationInput
      | ComentarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comentarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[];
  };

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comentarios to fetch.
     */
    orderBy?:
      | ComentarioOrderByWithRelationInput
      | ComentarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comentarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[];
  };

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comentarios to fetch.
     */
    orderBy?:
      | ComentarioOrderByWithRelationInput
      | ComentarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comentarios.
     */
    skip?: number;
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[];
  };

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>;
  };

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>;
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput;
  };

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<
      ComentarioUpdateManyMutationInput,
      ComentarioUncheckedUpdateManyInput
    >;
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput;
  };

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput;
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>;
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>;
  };

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput;
  };

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput;
  };

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null;
  };

  /**
   * Model Etiqueta
   */

  export type AggregateEtiqueta = {
    _count: EtiquetaCountAggregateOutputType | null;
    _min: EtiquetaMinAggregateOutputType | null;
    _max: EtiquetaMaxAggregateOutputType | null;
  };

  export type EtiquetaMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    grupoId: string | null;
    tipo: $Enums.TipoEtiqueta | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EtiquetaMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    grupoId: string | null;
    tipo: $Enums.TipoEtiqueta | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EtiquetaCountAggregateOutputType = {
    id: number;
    nombre: number;
    grupoId: number;
    tipo: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EtiquetaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    grupoId?: true;
    tipo?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EtiquetaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    grupoId?: true;
    tipo?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EtiquetaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    grupoId?: true;
    tipo?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EtiquetaAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Etiqueta to aggregate.
     */
    where?: EtiquetaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EtiquetaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etiquetas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Etiquetas
     **/
    _count?: true | EtiquetaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EtiquetaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EtiquetaMaxAggregateInputType;
  };

  export type GetEtiquetaAggregateType<T extends EtiquetaAggregateArgs> = {
    [P in keyof T & keyof AggregateEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiqueta[P]>
      : GetScalarType<T[P], AggregateEtiqueta[P]>;
  };

  export type EtiquetaGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EtiquetaWhereInput;
    orderBy?:
      | EtiquetaOrderByWithAggregationInput
      | EtiquetaOrderByWithAggregationInput[];
    by: EtiquetaScalarFieldEnum[] | EtiquetaScalarFieldEnum;
    having?: EtiquetaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EtiquetaCountAggregateInputType | true;
    _min?: EtiquetaMinAggregateInputType;
    _max?: EtiquetaMaxAggregateInputType;
  };

  export type EtiquetaGroupByOutputType = {
    id: string;
    nombre: string;
    grupoId: string;
    tipo: $Enums.TipoEtiqueta;
    created_at: Date;
    updated_at: Date;
    _count: EtiquetaCountAggregateOutputType | null;
    _min: EtiquetaMinAggregateOutputType | null;
    _max: EtiquetaMaxAggregateOutputType | null;
  };

  type GetEtiquetaGroupByPayload<T extends EtiquetaGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EtiquetaGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EtiquetaGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>;
        }
      >
    >;

  export type EtiquetaSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombre?: boolean;
      grupoId?: boolean;
      tipo?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      grupo?: boolean | EtiquetaGrupoDefaultArgs<ExtArgs>;
      eventosAsistidos?: boolean | Etiqueta$eventosAsistidosArgs<ExtArgs>;
      eventosConfirmados?: boolean | Etiqueta$eventosConfirmadosArgs<ExtArgs>;
      cuentas?: boolean | Etiqueta$cuentasArgs<ExtArgs>;
      perfiles?: boolean | Etiqueta$perfilesArgs<ExtArgs>;
      cuentasFiltroBase?: boolean | Etiqueta$cuentasFiltroBaseArgs<ExtArgs>;
      _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['etiqueta']
  >;

  export type EtiquetaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    grupoId?: boolean;
    tipo?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type EtiquetaInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    grupo?: boolean | EtiquetaGrupoDefaultArgs<ExtArgs>;
    eventosAsistidos?: boolean | Etiqueta$eventosAsistidosArgs<ExtArgs>;
    eventosConfirmados?: boolean | Etiqueta$eventosConfirmadosArgs<ExtArgs>;
    cuentas?: boolean | Etiqueta$cuentasArgs<ExtArgs>;
    perfiles?: boolean | Etiqueta$perfilesArgs<ExtArgs>;
    cuentasFiltroBase?: boolean | Etiqueta$cuentasFiltroBaseArgs<ExtArgs>;
    _count?: boolean | EtiquetaCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $EtiquetaPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Etiqueta';
    objects: {
      grupo: Prisma.$EtiquetaGrupoPayload<ExtArgs>;
      eventosAsistidos: Prisma.$EventoPayload<ExtArgs>[];
      eventosConfirmados: Prisma.$EventoPayload<ExtArgs>[];
      cuentas: Prisma.$CuentaPayload<ExtArgs>[];
      perfiles: Prisma.$PerfilPayload<ExtArgs>[];
      cuentasFiltroBase: Prisma.$CuentaPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        nombre: string;
        grupoId: string;
        tipo: $Enums.TipoEtiqueta;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['etiqueta']
    >;
    composites: {};
  };

  type EtiquetaGetPayload<
    S extends boolean | null | undefined | EtiquetaDefaultArgs,
  > = $Result.GetResult<Prisma.$EtiquetaPayload, S>;

  type EtiquetaCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EtiquetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: EtiquetaCountAggregateInputType | true;
  };

  export interface EtiquetaDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Etiqueta'];
      meta: { name: 'Etiqueta' };
    };
    /**
     * Find zero or one Etiqueta that matches the filter.
     * @param {EtiquetaFindUniqueArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EtiquetaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaFindUniqueArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<
        Prisma.$EtiquetaPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Etiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtiquetaFindUniqueOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EtiquetaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<
        Prisma.$EtiquetaPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EtiquetaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaFindFirstArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<
        Prisma.$EtiquetaPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Etiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EtiquetaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<
        Prisma.$EtiquetaPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany()
     *
     * // Get first 10 Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EtiquetaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Etiqueta.
     * @param {EtiquetaCreateArgs} args - Arguments to create a Etiqueta.
     * @example
     * // Create one Etiqueta
     * const Etiqueta = await prisma.etiqueta.create({
     *   data: {
     *     // ... data to create a Etiqueta
     *   }
     * })
     *
     **/
    create<T extends EtiquetaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaCreateArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Etiquetas.
     * @param {EtiquetaCreateManyArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends EtiquetaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Etiquetas and returns the data saved in the database.
     * @param {EtiquetaCreateManyAndReturnArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Etiquetas and only return the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends EtiquetaCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EtiquetaPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Etiqueta.
     * @param {EtiquetaDeleteArgs} args - Arguments to delete one Etiqueta.
     * @example
     * // Delete one Etiqueta
     * const Etiqueta = await prisma.etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Etiqueta
     *   }
     * })
     *
     **/
    delete<T extends EtiquetaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaDeleteArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Etiqueta.
     * @param {EtiquetaUpdateArgs} args - Arguments to update one Etiqueta.
     * @example
     * // Update one Etiqueta
     * const etiqueta = await prisma.etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EtiquetaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaUpdateArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Etiquetas.
     * @param {EtiquetaDeleteManyArgs} args - Arguments to filter Etiquetas to delete.
     * @example
     * // Delete a few Etiquetas
     * const { count } = await prisma.etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EtiquetaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EtiquetaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Etiqueta.
     * @param {EtiquetaUpsertArgs} args - Arguments to update or create a Etiqueta.
     * @example
     * // Update or create a Etiqueta
     * const etiqueta = await prisma.etiqueta.upsert({
     *   create: {
     *     // ... data to create a Etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etiqueta we want to update
     *   }
     * })
     **/
    upsert<T extends EtiquetaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaUpsertArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaCountArgs} args - Arguments to filter Etiquetas to count.
     * @example
     * // Count the number of Etiquetas
     * const count = await prisma.etiqueta.count({
     *   where: {
     *     // ... the filter for the Etiquetas we want to count
     *   }
     * })
     **/
    count<T extends EtiquetaCountArgs>(
      args?: Subset<T, EtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EtiquetaAggregateArgs>(
      args: Subset<T, EtiquetaAggregateArgs>,
    ): Prisma.PrismaPromise<GetEtiquetaAggregateType<T>>;

    /**
     * Group by Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: EtiquetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EtiquetaGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEtiquetaGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Etiqueta model
     */
    readonly fields: EtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtiquetaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    grupo<T extends EtiquetaGrupoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EtiquetaGrupoDefaultArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      | $Result.GetResult<
          Prisma.$EtiquetaGrupoPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    eventosAsistidos<T extends Etiqueta$eventosAsistidosArgs<ExtArgs> = {}>(
      args?: Subset<T, Etiqueta$eventosAsistidosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    eventosConfirmados<T extends Etiqueta$eventosConfirmadosArgs<ExtArgs> = {}>(
      args?: Subset<T, Etiqueta$eventosConfirmadosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    cuentas<T extends Etiqueta$cuentasArgs<ExtArgs> = {}>(
      args?: Subset<T, Etiqueta$cuentasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    perfiles<T extends Etiqueta$perfilesArgs<ExtArgs> = {}>(
      args?: Subset<T, Etiqueta$perfilesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    cuentasFiltroBase<T extends Etiqueta$cuentasFiltroBaseArgs<ExtArgs> = {}>(
      args?: Subset<T, Etiqueta$cuentasFiltroBaseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Etiqueta model
   */
  interface EtiquetaFieldRefs {
    readonly id: FieldRef<'Etiqueta', 'String'>;
    readonly nombre: FieldRef<'Etiqueta', 'String'>;
    readonly grupoId: FieldRef<'Etiqueta', 'String'>;
    readonly tipo: FieldRef<'Etiqueta', 'TipoEtiqueta'>;
    readonly created_at: FieldRef<'Etiqueta', 'DateTime'>;
    readonly updated_at: FieldRef<'Etiqueta', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Etiqueta findUnique
   */
  export type EtiquetaFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput;
  };

  /**
   * Etiqueta findUniqueOrThrow
   */
  export type EtiquetaFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput;
  };

  /**
   * Etiqueta findFirst
   */
  export type EtiquetaFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etiquetas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * Etiqueta findFirstOrThrow
   */
  export type EtiquetaFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etiquetas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * Etiqueta findMany
   */
  export type EtiquetaFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * Filter, which Etiquetas to fetch.
     */
    where?: EtiquetaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Etiquetas.
     */
    skip?: number;
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * Etiqueta create
   */
  export type EtiquetaCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Etiqueta.
     */
    data: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>;
  };

  /**
   * Etiqueta createMany
   */
  export type EtiquetaCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Etiqueta createManyAndReturn
   */
  export type EtiquetaCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Etiqueta update
   */
  export type EtiquetaUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Etiqueta.
     */
    data: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>;
    /**
     * Choose, which Etiqueta to update.
     */
    where: EtiquetaWhereUniqueInput;
  };

  /**
   * Etiqueta updateMany
   */
  export type EtiquetaUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<
      EtiquetaUpdateManyMutationInput,
      EtiquetaUncheckedUpdateManyInput
    >;
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput;
  };

  /**
   * Etiqueta upsert
   */
  export type EtiquetaUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Etiqueta to update in case it exists.
     */
    where: EtiquetaWhereUniqueInput;
    /**
     * In case the Etiqueta found by the `where` argument doesn't exist, create a new Etiqueta with this data.
     */
    create: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>;
    /**
     * In case the Etiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>;
  };

  /**
   * Etiqueta delete
   */
  export type EtiquetaDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    /**
     * Filter which Etiqueta to delete.
     */
    where: EtiquetaWhereUniqueInput;
  };

  /**
   * Etiqueta deleteMany
   */
  export type EtiquetaDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Etiquetas to delete
     */
    where?: EtiquetaWhereInput;
  };

  /**
   * Etiqueta.eventosAsistidos
   */
  export type Etiqueta$eventosAsistidosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    where?: EventoWhereInput;
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    cursor?: EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[];
  };

  /**
   * Etiqueta.eventosConfirmados
   */
  export type Etiqueta$eventosConfirmadosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    where?: EventoWhereInput;
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    cursor?: EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[];
  };

  /**
   * Etiqueta.cuentas
   */
  export type Etiqueta$cuentasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    where?: CuentaWhereInput;
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[];
    cursor?: CuentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[];
  };

  /**
   * Etiqueta.perfiles
   */
  export type Etiqueta$perfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null;
    where?: PerfilWhereInput;
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[];
    cursor?: PerfilWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[];
  };

  /**
   * Etiqueta.cuentasFiltroBase
   */
  export type Etiqueta$cuentasFiltroBaseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null;
    where?: CuentaWhereInput;
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[];
    cursor?: CuentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[];
  };

  /**
   * Etiqueta without action
   */
  export type EtiquetaDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
  };

  /**
   * Model EtiquetaGrupo
   */

  export type AggregateEtiquetaGrupo = {
    _count: EtiquetaGrupoCountAggregateOutputType | null;
    _min: EtiquetaGrupoMinAggregateOutputType | null;
    _max: EtiquetaGrupoMaxAggregateOutputType | null;
  };

  export type EtiquetaGrupoMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    color: string | null;
    esExclusivo: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EtiquetaGrupoMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    color: string | null;
    esExclusivo: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EtiquetaGrupoCountAggregateOutputType = {
    id: number;
    nombre: number;
    color: number;
    esExclusivo: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EtiquetaGrupoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    color?: true;
    esExclusivo?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EtiquetaGrupoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    color?: true;
    esExclusivo?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EtiquetaGrupoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    color?: true;
    esExclusivo?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EtiquetaGrupoAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EtiquetaGrupo to aggregate.
     */
    where?: EtiquetaGrupoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtiquetaGrupos to fetch.
     */
    orderBy?:
      | EtiquetaGrupoOrderByWithRelationInput
      | EtiquetaGrupoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EtiquetaGrupoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtiquetaGrupos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtiquetaGrupos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EtiquetaGrupos
     **/
    _count?: true | EtiquetaGrupoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EtiquetaGrupoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EtiquetaGrupoMaxAggregateInputType;
  };

  export type GetEtiquetaGrupoAggregateType<
    T extends EtiquetaGrupoAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateEtiquetaGrupo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiquetaGrupo[P]>
      : GetScalarType<T[P], AggregateEtiquetaGrupo[P]>;
  };

  export type EtiquetaGrupoGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EtiquetaGrupoWhereInput;
    orderBy?:
      | EtiquetaGrupoOrderByWithAggregationInput
      | EtiquetaGrupoOrderByWithAggregationInput[];
    by: EtiquetaGrupoScalarFieldEnum[] | EtiquetaGrupoScalarFieldEnum;
    having?: EtiquetaGrupoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EtiquetaGrupoCountAggregateInputType | true;
    _min?: EtiquetaGrupoMinAggregateInputType;
    _max?: EtiquetaGrupoMaxAggregateInputType;
  };

  export type EtiquetaGrupoGroupByOutputType = {
    id: string;
    nombre: string;
    color: string;
    esExclusivo: boolean;
    created_at: Date;
    updated_at: Date;
    _count: EtiquetaGrupoCountAggregateOutputType | null;
    _min: EtiquetaGrupoMinAggregateOutputType | null;
    _max: EtiquetaGrupoMaxAggregateOutputType | null;
  };

  type GetEtiquetaGrupoGroupByPayload<T extends EtiquetaGrupoGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EtiquetaGrupoGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof EtiquetaGrupoGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGrupoGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGrupoGroupByOutputType[P]>;
        }
      >
    >;

  export type EtiquetaGrupoSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombre?: boolean;
      color?: boolean;
      esExclusivo?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      etiquetas?: boolean | EtiquetaGrupo$etiquetasArgs<ExtArgs>;
      _count?: boolean | EtiquetaGrupoCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['etiquetaGrupo']
  >;

  export type EtiquetaGrupoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    color?: boolean;
    esExclusivo?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type EtiquetaGrupoInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    etiquetas?: boolean | EtiquetaGrupo$etiquetasArgs<ExtArgs>;
    _count?: boolean | EtiquetaGrupoCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $EtiquetaGrupoPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'EtiquetaGrupo';
    objects: {
      etiquetas: Prisma.$EtiquetaPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        nombre: string;
        color: string;
        esExclusivo: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['etiquetaGrupo']
    >;
    composites: {};
  };

  type EtiquetaGrupoGetPayload<
    S extends boolean | null | undefined | EtiquetaGrupoDefaultArgs,
  > = $Result.GetResult<Prisma.$EtiquetaGrupoPayload, S>;

  type EtiquetaGrupoCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EtiquetaGrupoFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: EtiquetaGrupoCountAggregateInputType | true;
  };

  export interface EtiquetaGrupoDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['EtiquetaGrupo'];
      meta: { name: 'EtiquetaGrupo' };
    };
    /**
     * Find zero or one EtiquetaGrupo that matches the filter.
     * @param {EtiquetaGrupoFindUniqueArgs} args - Arguments to find a EtiquetaGrupo
     * @example
     * // Get one EtiquetaGrupo
     * const etiquetaGrupo = await prisma.etiquetaGrupo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EtiquetaGrupoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaGrupoFindUniqueArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<
        Prisma.$EtiquetaGrupoPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one EtiquetaGrupo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtiquetaGrupoFindUniqueOrThrowArgs} args - Arguments to find a EtiquetaGrupo
     * @example
     * // Get one EtiquetaGrupo
     * const etiquetaGrupo = await prisma.etiquetaGrupo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EtiquetaGrupoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaGrupoFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<
        Prisma.$EtiquetaGrupoPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first EtiquetaGrupo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoFindFirstArgs} args - Arguments to find a EtiquetaGrupo
     * @example
     * // Get one EtiquetaGrupo
     * const etiquetaGrupo = await prisma.etiquetaGrupo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EtiquetaGrupoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaGrupoFindFirstArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<
        Prisma.$EtiquetaGrupoPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first EtiquetaGrupo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoFindFirstOrThrowArgs} args - Arguments to find a EtiquetaGrupo
     * @example
     * // Get one EtiquetaGrupo
     * const etiquetaGrupo = await prisma.etiquetaGrupo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EtiquetaGrupoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaGrupoFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<
        Prisma.$EtiquetaGrupoPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more EtiquetaGrupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtiquetaGrupos
     * const etiquetaGrupos = await prisma.etiquetaGrupo.findMany()
     *
     * // Get first 10 EtiquetaGrupos
     * const etiquetaGrupos = await prisma.etiquetaGrupo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const etiquetaGrupoWithIdOnly = await prisma.etiquetaGrupo.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EtiquetaGrupoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaGrupoFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EtiquetaGrupoPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a EtiquetaGrupo.
     * @param {EtiquetaGrupoCreateArgs} args - Arguments to create a EtiquetaGrupo.
     * @example
     * // Create one EtiquetaGrupo
     * const EtiquetaGrupo = await prisma.etiquetaGrupo.create({
     *   data: {
     *     // ... data to create a EtiquetaGrupo
     *   }
     * })
     *
     **/
    create<T extends EtiquetaGrupoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaGrupoCreateArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<Prisma.$EtiquetaGrupoPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many EtiquetaGrupos.
     * @param {EtiquetaGrupoCreateManyArgs} args - Arguments to create many EtiquetaGrupos.
     * @example
     * // Create many EtiquetaGrupos
     * const etiquetaGrupo = await prisma.etiquetaGrupo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends EtiquetaGrupoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaGrupoCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many EtiquetaGrupos and returns the data saved in the database.
     * @param {EtiquetaGrupoCreateManyAndReturnArgs} args - Arguments to create many EtiquetaGrupos.
     * @example
     * // Create many EtiquetaGrupos
     * const etiquetaGrupo = await prisma.etiquetaGrupo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EtiquetaGrupos and only return the `id`
     * const etiquetaGrupoWithIdOnly = await prisma.etiquetaGrupo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<
      T extends EtiquetaGrupoCreateManyAndReturnArgs<ExtArgs>,
    >(
      args?: SelectSubset<T, EtiquetaGrupoCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EtiquetaGrupoPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a EtiquetaGrupo.
     * @param {EtiquetaGrupoDeleteArgs} args - Arguments to delete one EtiquetaGrupo.
     * @example
     * // Delete one EtiquetaGrupo
     * const EtiquetaGrupo = await prisma.etiquetaGrupo.delete({
     *   where: {
     *     // ... filter to delete one EtiquetaGrupo
     *   }
     * })
     *
     **/
    delete<T extends EtiquetaGrupoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaGrupoDeleteArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<Prisma.$EtiquetaGrupoPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one EtiquetaGrupo.
     * @param {EtiquetaGrupoUpdateArgs} args - Arguments to update one EtiquetaGrupo.
     * @example
     * // Update one EtiquetaGrupo
     * const etiquetaGrupo = await prisma.etiquetaGrupo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EtiquetaGrupoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaGrupoUpdateArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<Prisma.$EtiquetaGrupoPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more EtiquetaGrupos.
     * @param {EtiquetaGrupoDeleteManyArgs} args - Arguments to filter EtiquetaGrupos to delete.
     * @example
     * // Delete a few EtiquetaGrupos
     * const { count } = await prisma.etiquetaGrupo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EtiquetaGrupoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EtiquetaGrupoDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EtiquetaGrupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtiquetaGrupos
     * const etiquetaGrupo = await prisma.etiquetaGrupo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EtiquetaGrupoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaGrupoUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one EtiquetaGrupo.
     * @param {EtiquetaGrupoUpsertArgs} args - Arguments to update or create a EtiquetaGrupo.
     * @example
     * // Update or create a EtiquetaGrupo
     * const etiquetaGrupo = await prisma.etiquetaGrupo.upsert({
     *   create: {
     *     // ... data to create a EtiquetaGrupo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtiquetaGrupo we want to update
     *   }
     * })
     **/
    upsert<T extends EtiquetaGrupoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EtiquetaGrupoUpsertArgs<ExtArgs>>,
    ): Prisma__EtiquetaGrupoClient<
      $Result.GetResult<Prisma.$EtiquetaGrupoPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of EtiquetaGrupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoCountArgs} args - Arguments to filter EtiquetaGrupos to count.
     * @example
     * // Count the number of EtiquetaGrupos
     * const count = await prisma.etiquetaGrupo.count({
     *   where: {
     *     // ... the filter for the EtiquetaGrupos we want to count
     *   }
     * })
     **/
    count<T extends EtiquetaGrupoCountArgs>(
      args?: Subset<T, EtiquetaGrupoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaGrupoCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a EtiquetaGrupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EtiquetaGrupoAggregateArgs>(
      args: Subset<T, EtiquetaGrupoAggregateArgs>,
    ): Prisma.PrismaPromise<GetEtiquetaGrupoAggregateType<T>>;

    /**
     * Group by EtiquetaGrupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGrupoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EtiquetaGrupoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtiquetaGrupoGroupByArgs['orderBy'] }
        : { orderBy?: EtiquetaGrupoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EtiquetaGrupoGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEtiquetaGrupoGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EtiquetaGrupo model
     */
    readonly fields: EtiquetaGrupoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EtiquetaGrupo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtiquetaGrupoClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    etiquetas<T extends EtiquetaGrupo$etiquetasArgs<ExtArgs> = {}>(
      args?: Subset<T, EtiquetaGrupo$etiquetasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the EtiquetaGrupo model
   */
  interface EtiquetaGrupoFieldRefs {
    readonly id: FieldRef<'EtiquetaGrupo', 'String'>;
    readonly nombre: FieldRef<'EtiquetaGrupo', 'String'>;
    readonly color: FieldRef<'EtiquetaGrupo', 'String'>;
    readonly esExclusivo: FieldRef<'EtiquetaGrupo', 'Boolean'>;
    readonly created_at: FieldRef<'EtiquetaGrupo', 'DateTime'>;
    readonly updated_at: FieldRef<'EtiquetaGrupo', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * EtiquetaGrupo findUnique
   */
  export type EtiquetaGrupoFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * Filter, which EtiquetaGrupo to fetch.
     */
    where: EtiquetaGrupoWhereUniqueInput;
  };

  /**
   * EtiquetaGrupo findUniqueOrThrow
   */
  export type EtiquetaGrupoFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * Filter, which EtiquetaGrupo to fetch.
     */
    where: EtiquetaGrupoWhereUniqueInput;
  };

  /**
   * EtiquetaGrupo findFirst
   */
  export type EtiquetaGrupoFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * Filter, which EtiquetaGrupo to fetch.
     */
    where?: EtiquetaGrupoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtiquetaGrupos to fetch.
     */
    orderBy?:
      | EtiquetaGrupoOrderByWithRelationInput
      | EtiquetaGrupoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EtiquetaGrupos.
     */
    cursor?: EtiquetaGrupoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtiquetaGrupos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtiquetaGrupos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EtiquetaGrupos.
     */
    distinct?: EtiquetaGrupoScalarFieldEnum | EtiquetaGrupoScalarFieldEnum[];
  };

  /**
   * EtiquetaGrupo findFirstOrThrow
   */
  export type EtiquetaGrupoFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * Filter, which EtiquetaGrupo to fetch.
     */
    where?: EtiquetaGrupoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtiquetaGrupos to fetch.
     */
    orderBy?:
      | EtiquetaGrupoOrderByWithRelationInput
      | EtiquetaGrupoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EtiquetaGrupos.
     */
    cursor?: EtiquetaGrupoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtiquetaGrupos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtiquetaGrupos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EtiquetaGrupos.
     */
    distinct?: EtiquetaGrupoScalarFieldEnum | EtiquetaGrupoScalarFieldEnum[];
  };

  /**
   * EtiquetaGrupo findMany
   */
  export type EtiquetaGrupoFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * Filter, which EtiquetaGrupos to fetch.
     */
    where?: EtiquetaGrupoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EtiquetaGrupos to fetch.
     */
    orderBy?:
      | EtiquetaGrupoOrderByWithRelationInput
      | EtiquetaGrupoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EtiquetaGrupos.
     */
    cursor?: EtiquetaGrupoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EtiquetaGrupos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EtiquetaGrupos.
     */
    skip?: number;
    distinct?: EtiquetaGrupoScalarFieldEnum | EtiquetaGrupoScalarFieldEnum[];
  };

  /**
   * EtiquetaGrupo create
   */
  export type EtiquetaGrupoCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * The data needed to create a EtiquetaGrupo.
     */
    data: XOR<EtiquetaGrupoCreateInput, EtiquetaGrupoUncheckedCreateInput>;
  };

  /**
   * EtiquetaGrupo createMany
   */
  export type EtiquetaGrupoCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many EtiquetaGrupos.
     */
    data: EtiquetaGrupoCreateManyInput | EtiquetaGrupoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EtiquetaGrupo createManyAndReturn
   */
  export type EtiquetaGrupoCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * The data used to create many EtiquetaGrupos.
     */
    data: EtiquetaGrupoCreateManyInput | EtiquetaGrupoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EtiquetaGrupo update
   */
  export type EtiquetaGrupoUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * The data needed to update a EtiquetaGrupo.
     */
    data: XOR<EtiquetaGrupoUpdateInput, EtiquetaGrupoUncheckedUpdateInput>;
    /**
     * Choose, which EtiquetaGrupo to update.
     */
    where: EtiquetaGrupoWhereUniqueInput;
  };

  /**
   * EtiquetaGrupo updateMany
   */
  export type EtiquetaGrupoUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update EtiquetaGrupos.
     */
    data: XOR<
      EtiquetaGrupoUpdateManyMutationInput,
      EtiquetaGrupoUncheckedUpdateManyInput
    >;
    /**
     * Filter which EtiquetaGrupos to update
     */
    where?: EtiquetaGrupoWhereInput;
  };

  /**
   * EtiquetaGrupo upsert
   */
  export type EtiquetaGrupoUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * The filter to search for the EtiquetaGrupo to update in case it exists.
     */
    where: EtiquetaGrupoWhereUniqueInput;
    /**
     * In case the EtiquetaGrupo found by the `where` argument doesn't exist, create a new EtiquetaGrupo with this data.
     */
    create: XOR<EtiquetaGrupoCreateInput, EtiquetaGrupoUncheckedCreateInput>;
    /**
     * In case the EtiquetaGrupo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtiquetaGrupoUpdateInput, EtiquetaGrupoUncheckedUpdateInput>;
  };

  /**
   * EtiquetaGrupo delete
   */
  export type EtiquetaGrupoDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
    /**
     * Filter which EtiquetaGrupo to delete.
     */
    where: EtiquetaGrupoWhereUniqueInput;
  };

  /**
   * EtiquetaGrupo deleteMany
   */
  export type EtiquetaGrupoDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EtiquetaGrupos to delete
     */
    where?: EtiquetaGrupoWhereInput;
  };

  /**
   * EtiquetaGrupo.etiquetas
   */
  export type EtiquetaGrupo$etiquetasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null;
    where?: EtiquetaWhereInput;
    orderBy?:
      | EtiquetaOrderByWithRelationInput
      | EtiquetaOrderByWithRelationInput[];
    cursor?: EtiquetaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[];
  };

  /**
   * EtiquetaGrupo without action
   */
  export type EtiquetaGrupoDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EtiquetaGrupo
     */
    select?: EtiquetaGrupoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaGrupoInclude<ExtArgs> | null;
  };

  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null;
    _min: EventoMinAggregateOutputType | null;
    _max: EventoMaxAggregateOutputType | null;
  };

  export type EventoMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    fecha: Date | null;
    ubicacion: string | null;
    etiquetaAsistioId: string | null;
    etiquetaConfirmoId: string | null;
    eventoPadreId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventoMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    fecha: Date | null;
    ubicacion: string | null;
    etiquetaAsistioId: string | null;
    etiquetaConfirmoId: string | null;
    eventoPadreId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventoCountAggregateOutputType = {
    id: number;
    nombre: number;
    fecha: number;
    ubicacion: number;
    etiquetaAsistioId: number;
    etiquetaConfirmoId: number;
    eventoPadreId: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EventoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    fecha?: true;
    ubicacion?: true;
    etiquetaAsistioId?: true;
    etiquetaConfirmoId?: true;
    eventoPadreId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    fecha?: true;
    ubicacion?: true;
    etiquetaAsistioId?: true;
    etiquetaConfirmoId?: true;
    eventoPadreId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    fecha?: true;
    ubicacion?: true;
    etiquetaAsistioId?: true;
    etiquetaConfirmoId?: true;
    eventoPadreId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EventoAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Eventos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Eventos
     **/
    _count?: true | EventoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventoMaxAggregateInputType;
  };

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
    [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>;
  };

  export type EventoGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventoWhereInput;
    orderBy?:
      | EventoOrderByWithAggregationInput
      | EventoOrderByWithAggregationInput[];
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum;
    having?: EventoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventoCountAggregateInputType | true;
    _min?: EventoMinAggregateInputType;
    _max?: EventoMaxAggregateInputType;
  };

  export type EventoGroupByOutputType = {
    id: string;
    nombre: string;
    fecha: Date;
    ubicacion: string;
    etiquetaAsistioId: string;
    etiquetaConfirmoId: string;
    eventoPadreId: string | null;
    created_at: Date;
    updated_at: Date;
    _count: EventoCountAggregateOutputType | null;
    _min: EventoMinAggregateOutputType | null;
    _max: EventoMaxAggregateOutputType | null;
  };

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventoGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EventoGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>;
        }
      >
    >;

  export type EventoSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      nombre?: boolean;
      fecha?: boolean;
      ubicacion?: boolean;
      etiquetaAsistioId?: boolean;
      etiquetaConfirmoId?: boolean;
      eventoPadreId?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      etiquetaAsistio?: boolean | EtiquetaDefaultArgs<ExtArgs>;
      etiquetaConfirmo?: boolean | EtiquetaDefaultArgs<ExtArgs>;
      eventoPadre?: boolean | Evento$eventoPadreArgs<ExtArgs>;
      subEventos?: boolean | Evento$subEventosArgs<ExtArgs>;
      _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['evento']
  >;

  export type EventoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    fecha?: boolean;
    ubicacion?: boolean;
    etiquetaAsistioId?: boolean;
    etiquetaConfirmoId?: boolean;
    eventoPadreId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type EventoInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    etiquetaAsistio?: boolean | EtiquetaDefaultArgs<ExtArgs>;
    etiquetaConfirmo?: boolean | EtiquetaDefaultArgs<ExtArgs>;
    eventoPadre?: boolean | Evento$eventoPadreArgs<ExtArgs>;
    subEventos?: boolean | Evento$subEventosArgs<ExtArgs>;
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $EventoPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Evento';
    objects: {
      etiquetaAsistio: Prisma.$EtiquetaPayload<ExtArgs>;
      etiquetaConfirmo: Prisma.$EtiquetaPayload<ExtArgs>;
      eventoPadre: Prisma.$EventoPayload<ExtArgs> | null;
      subEventos: Prisma.$EventoPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        nombre: string;
        fecha: Date;
        ubicacion: string;
        etiquetaAsistioId: string;
        etiquetaConfirmoId: string;
        eventoPadreId: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['evento']
    >;
    composites: {};
  };

  type EventoGetPayload<
    S extends boolean | null | undefined | EventoDefaultArgs,
  > = $Result.GetResult<Prisma.$EventoPayload, S>;

  type EventoCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: EventoCountAggregateInputType | true;
  };

  export interface EventoDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Evento'];
      meta: { name: 'Evento' };
    };
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EventoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EventoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     *
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EventoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     *
     **/
    create<T extends EventoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventoCreateArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends EventoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventoPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     *
     **/
    delete<T extends EventoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EventoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EventoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EventoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     **/
    upsert<T extends EventoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
     **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EventoAggregateArgs>(
      args: Subset<T, EventoAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventoAggregateType<T>>;

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEventoGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Evento model
     */
    readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    etiquetaAsistio<T extends EtiquetaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EtiquetaDefaultArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      | $Result.GetResult<
          Prisma.$EtiquetaPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    etiquetaConfirmo<T extends EtiquetaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EtiquetaDefaultArgs<ExtArgs>>,
    ): Prisma__EtiquetaClient<
      | $Result.GetResult<
          Prisma.$EtiquetaPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    eventoPadre<T extends Evento$eventoPadreArgs<ExtArgs> = {}>(
      args?: Subset<T, Evento$eventoPadreArgs<ExtArgs>>,
    ): Prisma__EventoClient<
      $Result.GetResult<
        Prisma.$EventoPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    subEventos<T extends Evento$subEventosArgs<ExtArgs> = {}>(
      args?: Subset<T, Evento$subEventosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<'Evento', 'String'>;
    readonly nombre: FieldRef<'Evento', 'String'>;
    readonly fecha: FieldRef<'Evento', 'DateTime'>;
    readonly ubicacion: FieldRef<'Evento', 'String'>;
    readonly etiquetaAsistioId: FieldRef<'Evento', 'String'>;
    readonly etiquetaConfirmoId: FieldRef<'Evento', 'String'>;
    readonly eventoPadreId: FieldRef<'Evento', 'String'>;
    readonly created_at: FieldRef<'Evento', 'DateTime'>;
    readonly updated_at: FieldRef<'Evento', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput;
  };

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput;
  };

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Eventos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[];
  };

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Eventos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[];
  };

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Eventos.
     */
    skip?: number;
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[];
  };

  /**
   * Evento create
   */
  export type EventoCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>;
  };

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Evento update
   */
  export type EventoUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>;
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput;
  };

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>;
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput;
  };

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput;
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>;
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>;
  };

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput;
  };

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput;
  };

  /**
   * Evento.eventoPadre
   */
  export type Evento$eventoPadreArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    where?: EventoWhereInput;
  };

  /**
   * Evento.subEventos
   */
  export type Evento$subEventosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
    where?: EventoWhereInput;
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[];
    cursor?: EventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[];
  };

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null;
  };

  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null;
    _min: MensajeMinAggregateOutputType | null;
    _max: MensajeMaxAggregateOutputType | null;
  };

  export type MensajeMinAggregateOutputType = {
    id: string | null;
    wamId: string | null;
    perfilTelefono: string | null;
    status: $Enums.MensajeStatus | null;
    statusAt: Date | null;
    visto: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MensajeMaxAggregateOutputType = {
    id: string | null;
    wamId: string | null;
    perfilTelefono: string | null;
    status: $Enums.MensajeStatus | null;
    statusAt: Date | null;
    visto: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MensajeCountAggregateOutputType = {
    id: number;
    wamId: number;
    message: number;
    perfilTelefono: number;
    status: number;
    statusAt: number;
    visto: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MensajeMinAggregateInputType = {
    id?: true;
    wamId?: true;
    perfilTelefono?: true;
    status?: true;
    statusAt?: true;
    visto?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MensajeMaxAggregateInputType = {
    id?: true;
    wamId?: true;
    perfilTelefono?: true;
    status?: true;
    statusAt?: true;
    visto?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MensajeCountAggregateInputType = {
    id?: true;
    wamId?: true;
    message?: true;
    perfilTelefono?: true;
    status?: true;
    statusAt?: true;
    visto?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MensajeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mensajes to fetch.
     */
    orderBy?:
      | MensajeOrderByWithRelationInput
      | MensajeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mensajes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Mensajes
     **/
    _count?: true | MensajeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MensajeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MensajeMaxAggregateInputType;
  };

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
    [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>;
  };

  export type MensajeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MensajeWhereInput;
    orderBy?:
      | MensajeOrderByWithAggregationInput
      | MensajeOrderByWithAggregationInput[];
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum;
    having?: MensajeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MensajeCountAggregateInputType | true;
    _min?: MensajeMinAggregateInputType;
    _max?: MensajeMaxAggregateInputType;
  };

  export type MensajeGroupByOutputType = {
    id: string;
    wamId: string;
    message: JsonValue;
    perfilTelefono: string;
    status: $Enums.MensajeStatus;
    statusAt: Date | null;
    visto: boolean;
    created_at: Date;
    updated_at: Date;
    _count: MensajeCountAggregateOutputType | null;
    _min: MensajeMinAggregateOutputType | null;
    _max: MensajeMaxAggregateOutputType | null;
  };

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MensajeGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MensajeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>;
        }
      >
    >;

  export type MensajeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      wamId?: boolean;
      message?: boolean;
      perfilTelefono?: boolean;
      status?: boolean;
      statusAt?: boolean;
      visto?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      perfil?: boolean | PerfilDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mensaje']
  >;

  export type MensajeSelectScalar = {
    id?: boolean;
    wamId?: boolean;
    message?: boolean;
    perfilTelefono?: boolean;
    status?: boolean;
    statusAt?: boolean;
    visto?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type MensajeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>;
  };

  export type $MensajePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Mensaje';
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        wamId: string;
        message: Prisma.JsonValue;
        perfilTelefono: string;
        status: $Enums.MensajeStatus;
        statusAt: Date | null;
        visto: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['mensaje']
    >;
    composites: {};
  };

  type MensajeGetPayload<
    S extends boolean | null | undefined | MensajeDefaultArgs,
  > = $Result.GetResult<Prisma.$MensajePayload, S>;

  type MensajeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: MensajeCountAggregateInputType | true;
  };

  export interface MensajeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'];
      meta: { name: 'Mensaje' };
    };
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends MensajeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<
        Prisma.$MensajePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<
        Prisma.$MensajePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends MensajeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     *
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends MensajeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     *
     **/
    create<T extends MensajeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends MensajeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {MensajeCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Mensajes and only return the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends MensajeCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MensajePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     *
     **/
    delete<T extends MensajeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends MensajeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends MensajeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends MensajeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     **/
    upsert<T extends MensajeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>,
    ): Prisma__MensajeClient<
      $Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
     **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MensajeAggregateArgs>(
      args: Subset<T, MensajeAggregateArgs>,
    ): Prisma.PrismaPromise<GetMensajeAggregateType<T>>;

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMensajeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Mensaje model
     */
    readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    perfil<T extends PerfilDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PerfilDefaultArgs<ExtArgs>>,
    ): Prisma__PerfilClient<
      | $Result.GetResult<
          Prisma.$PerfilPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Mensaje model
   */
  interface MensajeFieldRefs {
    readonly id: FieldRef<'Mensaje', 'String'>;
    readonly wamId: FieldRef<'Mensaje', 'String'>;
    readonly message: FieldRef<'Mensaje', 'Json'>;
    readonly perfilTelefono: FieldRef<'Mensaje', 'String'>;
    readonly status: FieldRef<'Mensaje', 'MensajeStatus'>;
    readonly statusAt: FieldRef<'Mensaje', 'DateTime'>;
    readonly visto: FieldRef<'Mensaje', 'Boolean'>;
    readonly created_at: FieldRef<'Mensaje', 'DateTime'>;
    readonly updated_at: FieldRef<'Mensaje', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput;
  };

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput;
  };

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mensajes to fetch.
     */
    orderBy?:
      | MensajeOrderByWithRelationInput
      | MensajeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mensajes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[];
  };

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mensajes to fetch.
     */
    orderBy?:
      | MensajeOrderByWithRelationInput
      | MensajeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mensajes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[];
  };

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mensajes to fetch.
     */
    orderBy?:
      | MensajeOrderByWithRelationInput
      | MensajeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mensajes.
     */
    skip?: number;
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[];
  };

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>;
  };

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Mensaje createManyAndReturn
   */
  export type MensajeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>;
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput;
  };

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>;
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput;
  };

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput;
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>;
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>;
  };

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput;
  };

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput;
  };

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null;
  };

  /**
   * Model Enums
   */

  export type AggregateEnums = {
    _count: EnumsCountAggregateOutputType | null;
    _min: EnumsMinAggregateOutputType | null;
    _max: EnumsMaxAggregateOutputType | null;
  };

  export type EnumsMinAggregateOutputType = {
    id: string | null;
    EstadoPlantilla: $Enums.EstadoPlantilla | null;
    CategoriaPlantilla: $Enums.CategoriaPlantilla | null;
  };

  export type EnumsMaxAggregateOutputType = {
    id: string | null;
    EstadoPlantilla: $Enums.EstadoPlantilla | null;
    CategoriaPlantilla: $Enums.CategoriaPlantilla | null;
  };

  export type EnumsCountAggregateOutputType = {
    id: number;
    EstadoPlantilla: number;
    CategoriaPlantilla: number;
    _all: number;
  };

  export type EnumsMinAggregateInputType = {
    id?: true;
    EstadoPlantilla?: true;
    CategoriaPlantilla?: true;
  };

  export type EnumsMaxAggregateInputType = {
    id?: true;
    EstadoPlantilla?: true;
    CategoriaPlantilla?: true;
  };

  export type EnumsCountAggregateInputType = {
    id?: true;
    EstadoPlantilla?: true;
    CategoriaPlantilla?: true;
    _all?: true;
  };

  export type EnumsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Enums to aggregate.
     */
    where?: EnumsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumsOrderByWithRelationInput | EnumsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EnumsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enums.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Enums
     **/
    _count?: true | EnumsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EnumsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EnumsMaxAggregateInputType;
  };

  export type GetEnumsAggregateType<T extends EnumsAggregateArgs> = {
    [P in keyof T & keyof AggregateEnums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnums[P]>
      : GetScalarType<T[P], AggregateEnums[P]>;
  };

  export type EnumsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EnumsWhereInput;
    orderBy?:
      | EnumsOrderByWithAggregationInput
      | EnumsOrderByWithAggregationInput[];
    by: EnumsScalarFieldEnum[] | EnumsScalarFieldEnum;
    having?: EnumsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnumsCountAggregateInputType | true;
    _min?: EnumsMinAggregateInputType;
    _max?: EnumsMaxAggregateInputType;
  };

  export type EnumsGroupByOutputType = {
    id: string;
    EstadoPlantilla: $Enums.EstadoPlantilla;
    CategoriaPlantilla: $Enums.CategoriaPlantilla;
    _count: EnumsCountAggregateOutputType | null;
    _min: EnumsMinAggregateOutputType | null;
    _max: EnumsMaxAggregateOutputType | null;
  };

  type GetEnumsGroupByPayload<T extends EnumsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EnumsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EnumsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnumsGroupByOutputType[P]>
            : GetScalarType<T[P], EnumsGroupByOutputType[P]>;
        }
      >
    >;

  export type EnumsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      EstadoPlantilla?: boolean;
      CategoriaPlantilla?: boolean;
    },
    ExtArgs['result']['enums']
  >;

  export type EnumsSelectScalar = {
    id?: boolean;
    EstadoPlantilla?: boolean;
    CategoriaPlantilla?: boolean;
  };

  export type $EnumsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Enums';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        EstadoPlantilla: $Enums.EstadoPlantilla;
        CategoriaPlantilla: $Enums.CategoriaPlantilla;
      },
      ExtArgs['result']['enums']
    >;
    composites: {};
  };

  type EnumsGetPayload<
    S extends boolean | null | undefined | EnumsDefaultArgs,
  > = $Result.GetResult<Prisma.$EnumsPayload, S>;

  type EnumsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EnumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: EnumsCountAggregateInputType | true;
  };

  export interface EnumsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Enums'];
      meta: { name: 'Enums' };
    };
    /**
     * Find zero or one Enums that matches the filter.
     * @param {EnumsFindUniqueArgs} args - Arguments to find a Enums
     * @example
     * // Get one Enums
     * const enums = await prisma.enums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EnumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EnumsFindUniqueArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Enums that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnumsFindUniqueOrThrowArgs} args - Arguments to find a Enums
     * @example
     * // Get one Enums
     * const enums = await prisma.enums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EnumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Enums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsFindFirstArgs} args - Arguments to find a Enums
     * @example
     * // Get one Enums
     * const enums = await prisma.enums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EnumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsFindFirstArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Enums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsFindFirstOrThrowArgs} args - Arguments to find a Enums
     * @example
     * // Get one Enums
     * const enums = await prisma.enums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EnumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Enums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enums
     * const enums = await prisma.enums.findMany()
     *
     * // Get first 10 Enums
     * const enums = await prisma.enums.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const enumsWithIdOnly = await prisma.enums.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EnumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Enums.
     * @param {EnumsCreateArgs} args - Arguments to create a Enums.
     * @example
     * // Create one Enums
     * const Enums = await prisma.enums.create({
     *   data: {
     *     // ... data to create a Enums
     *   }
     * })
     *
     **/
    create<T extends EnumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnumsCreateArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Enums.
     * @param {EnumsCreateManyArgs} args - Arguments to create many Enums.
     * @example
     * // Create many Enums
     * const enums = await prisma.enums.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends EnumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Enums and returns the data saved in the database.
     * @param {EnumsCreateManyAndReturnArgs} args - Arguments to create many Enums.
     * @example
     * // Create many Enums
     * const enums = await prisma.enums.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Enums and only return the `id`
     * const enumsWithIdOnly = await prisma.enums.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends EnumsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Enums.
     * @param {EnumsDeleteArgs} args - Arguments to delete one Enums.
     * @example
     * // Delete one Enums
     * const Enums = await prisma.enums.delete({
     *   where: {
     *     // ... filter to delete one Enums
     *   }
     * })
     *
     **/
    delete<T extends EnumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnumsDeleteArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Enums.
     * @param {EnumsUpdateArgs} args - Arguments to update one Enums.
     * @example
     * // Update one Enums
     * const enums = await prisma.enums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EnumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnumsUpdateArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Enums.
     * @param {EnumsDeleteManyArgs} args - Arguments to filter Enums to delete.
     * @example
     * // Delete a few Enums
     * const { count } = await prisma.enums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EnumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnumsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Enums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enums
     * const enums = await prisma.enums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EnumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnumsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Enums.
     * @param {EnumsUpsertArgs} args - Arguments to update or create a Enums.
     * @example
     * // Update or create a Enums
     * const enums = await prisma.enums.upsert({
     *   create: {
     *     // ... data to create a Enums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enums we want to update
     *   }
     * })
     **/
    upsert<T extends EnumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnumsUpsertArgs<ExtArgs>>,
    ): Prisma__EnumsClient<
      $Result.GetResult<Prisma.$EnumsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Enums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsCountArgs} args - Arguments to filter Enums to count.
     * @example
     * // Count the number of Enums
     * const count = await prisma.enums.count({
     *   where: {
     *     // ... the filter for the Enums we want to count
     *   }
     * })
     **/
    count<T extends EnumsCountArgs>(
      args?: Subset<T, EnumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnumsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Enums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EnumsAggregateArgs>(
      args: Subset<T, EnumsAggregateArgs>,
    ): Prisma.PrismaPromise<GetEnumsAggregateType<T>>;

    /**
     * Group by Enums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EnumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnumsGroupByArgs['orderBy'] }
        : { orderBy?: EnumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EnumsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEnumsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Enums model
     */
    readonly fields: EnumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnumsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Enums model
   */
  interface EnumsFieldRefs {
    readonly id: FieldRef<'Enums', 'String'>;
    readonly EstadoPlantilla: FieldRef<'Enums', 'EstadoPlantilla'>;
    readonly CategoriaPlantilla: FieldRef<'Enums', 'CategoriaPlantilla'>;
  }

  // Custom InputTypes
  /**
   * Enums findUnique
   */
  export type EnumsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * Filter, which Enums to fetch.
     */
    where: EnumsWhereUniqueInput;
  };

  /**
   * Enums findUniqueOrThrow
   */
  export type EnumsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * Filter, which Enums to fetch.
     */
    where: EnumsWhereUniqueInput;
  };

  /**
   * Enums findFirst
   */
  export type EnumsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * Filter, which Enums to fetch.
     */
    where?: EnumsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumsOrderByWithRelationInput | EnumsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Enums.
     */
    cursor?: EnumsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enums.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Enums.
     */
    distinct?: EnumsScalarFieldEnum | EnumsScalarFieldEnum[];
  };

  /**
   * Enums findFirstOrThrow
   */
  export type EnumsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * Filter, which Enums to fetch.
     */
    where?: EnumsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumsOrderByWithRelationInput | EnumsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Enums.
     */
    cursor?: EnumsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enums.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Enums.
     */
    distinct?: EnumsScalarFieldEnum | EnumsScalarFieldEnum[];
  };

  /**
   * Enums findMany
   */
  export type EnumsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * Filter, which Enums to fetch.
     */
    where?: EnumsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumsOrderByWithRelationInput | EnumsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Enums.
     */
    cursor?: EnumsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Enums.
     */
    skip?: number;
    distinct?: EnumsScalarFieldEnum | EnumsScalarFieldEnum[];
  };

  /**
   * Enums create
   */
  export type EnumsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * The data needed to create a Enums.
     */
    data: XOR<EnumsCreateInput, EnumsUncheckedCreateInput>;
  };

  /**
   * Enums createMany
   */
  export type EnumsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Enums.
     */
    data: EnumsCreateManyInput | EnumsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Enums createManyAndReturn
   */
  export type EnumsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * The data used to create many Enums.
     */
    data: EnumsCreateManyInput | EnumsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Enums update
   */
  export type EnumsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * The data needed to update a Enums.
     */
    data: XOR<EnumsUpdateInput, EnumsUncheckedUpdateInput>;
    /**
     * Choose, which Enums to update.
     */
    where: EnumsWhereUniqueInput;
  };

  /**
   * Enums updateMany
   */
  export type EnumsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Enums.
     */
    data: XOR<EnumsUpdateManyMutationInput, EnumsUncheckedUpdateManyInput>;
    /**
     * Filter which Enums to update
     */
    where?: EnumsWhereInput;
  };

  /**
   * Enums upsert
   */
  export type EnumsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * The filter to search for the Enums to update in case it exists.
     */
    where: EnumsWhereUniqueInput;
    /**
     * In case the Enums found by the `where` argument doesn't exist, create a new Enums with this data.
     */
    create: XOR<EnumsCreateInput, EnumsUncheckedCreateInput>;
    /**
     * In case the Enums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnumsUpdateInput, EnumsUncheckedUpdateInput>;
  };

  /**
   * Enums delete
   */
  export type EnumsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
    /**
     * Filter which Enums to delete.
     */
    where: EnumsWhereUniqueInput;
  };

  /**
   * Enums deleteMany
   */
  export type EnumsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Enums to delete
     */
    where?: EnumsWhereInput;
  };

  /**
   * Enums without action
   */
  export type EnumsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Enums
     */
    select?: EnumsSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CuentaScalarFieldEnum: {
    id: 'id';
    nombreUsuario: 'nombreUsuario';
    contrasena: 'contrasena';
    esAdmin: 'esAdmin';
    created_at: 'created_at';
    updated_at: 'updated_at';
    filtroBaseActivo: 'filtroBaseActivo';
    fcmToken: 'fcmToken';
  };

  export type CuentaScalarFieldEnum =
    (typeof CuentaScalarFieldEnum)[keyof typeof CuentaScalarFieldEnum];

  export const PerfilScalarFieldEnum: {
    id: 'id';
    idLegible: 'idLegible';
    telefono: 'telefono';
    nombreCompleto: 'nombreCompleto';
    nombrePila: 'nombrePila';
    genero: 'genero';
    fechaNacimiento: 'fechaNacimiento';
    fotoUrl: 'fotoUrl';
    instagram: 'instagram';
    mail: 'mail';
    dni: 'dni';
    nombresAlternativos: 'nombresAlternativos';
    esPapelera: 'esPapelera';
    fechaPapelera: 'fechaPapelera';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PerfilScalarFieldEnum =
    (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum];

  export const ComentarioScalarFieldEnum: {
    id: 'id';
    contenido: 'contenido';
    creadoPor: 'creadoPor';
    perfilId: 'perfilId';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ComentarioScalarFieldEnum =
    (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum];

  export const EtiquetaScalarFieldEnum: {
    id: 'id';
    nombre: 'nombre';
    grupoId: 'grupoId';
    tipo: 'tipo';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EtiquetaScalarFieldEnum =
    (typeof EtiquetaScalarFieldEnum)[keyof typeof EtiquetaScalarFieldEnum];

  export const EtiquetaGrupoScalarFieldEnum: {
    id: 'id';
    nombre: 'nombre';
    color: 'color';
    esExclusivo: 'esExclusivo';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EtiquetaGrupoScalarFieldEnum =
    (typeof EtiquetaGrupoScalarFieldEnum)[keyof typeof EtiquetaGrupoScalarFieldEnum];

  export const EventoScalarFieldEnum: {
    id: 'id';
    nombre: 'nombre';
    fecha: 'fecha';
    ubicacion: 'ubicacion';
    etiquetaAsistioId: 'etiquetaAsistioId';
    etiquetaConfirmoId: 'etiquetaConfirmoId';
    eventoPadreId: 'eventoPadreId';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EventoScalarFieldEnum =
    (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum];

  export const MensajeScalarFieldEnum: {
    id: 'id';
    wamId: 'wamId';
    message: 'message';
    perfilTelefono: 'perfilTelefono';
    status: 'status';
    statusAt: 'statusAt';
    visto: 'visto';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MensajeScalarFieldEnum =
    (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum];

  export const EnumsScalarFieldEnum: {
    id: 'id';
    EstadoPlantilla: 'EstadoPlantilla';
    CategoriaPlantilla: 'CategoriaPlantilla';
  };

  export type EnumsScalarFieldEnum =
    (typeof EnumsScalarFieldEnum)[keyof typeof EnumsScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'TipoEtiqueta'
   */
  export type EnumTipoEtiquetaFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TipoEtiqueta'
  >;

  /**
   * Reference to a field of type 'TipoEtiqueta[]'
   */
  export type ListEnumTipoEtiquetaFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TipoEtiqueta[]'>;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'MensajeStatus'
   */
  export type EnumMensajeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'MensajeStatus'
  >;

  /**
   * Reference to a field of type 'MensajeStatus[]'
   */
  export type ListEnumMensajeStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'MensajeStatus[]'>;

  /**
   * Reference to a field of type 'EstadoPlantilla'
   */
  export type EnumEstadoPlantillaFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'EstadoPlantilla'>;

  /**
   * Reference to a field of type 'EstadoPlantilla[]'
   */
  export type ListEnumEstadoPlantillaFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'EstadoPlantilla[]'>;

  /**
   * Reference to a field of type 'CategoriaPlantilla'
   */
  export type EnumCategoriaPlantillaFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'CategoriaPlantilla'>;

  /**
   * Reference to a field of type 'CategoriaPlantilla[]'
   */
  export type ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'CategoriaPlantilla[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type CuentaWhereInput = {
    AND?: CuentaWhereInput | CuentaWhereInput[];
    OR?: CuentaWhereInput[];
    NOT?: CuentaWhereInput | CuentaWhereInput[];
    id?: StringFilter<'Cuenta'> | string;
    nombreUsuario?: StringFilter<'Cuenta'> | string;
    contrasena?: StringFilter<'Cuenta'> | string;
    esAdmin?: BoolFilter<'Cuenta'> | boolean;
    created_at?: DateTimeFilter<'Cuenta'> | Date | string;
    updated_at?: DateTimeFilter<'Cuenta'> | Date | string;
    filtroBaseActivo?: BoolFilter<'Cuenta'> | boolean;
    fcmToken?: StringNullableListFilter<'Cuenta'>;
    comentarios?: ComentarioListRelationFilter;
    etiquetas?: EtiquetaListRelationFilter;
    filtroBase?: EtiquetaListRelationFilter;
  };

  export type CuentaOrderByWithRelationInput = {
    id?: SortOrder;
    nombreUsuario?: SortOrder;
    contrasena?: SortOrder;
    esAdmin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    filtroBaseActivo?: SortOrder;
    fcmToken?: SortOrder;
    comentarios?: ComentarioOrderByRelationAggregateInput;
    etiquetas?: EtiquetaOrderByRelationAggregateInput;
    filtroBase?: EtiquetaOrderByRelationAggregateInput;
  };

  export type CuentaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      nombreUsuario?: string;
      AND?: CuentaWhereInput | CuentaWhereInput[];
      OR?: CuentaWhereInput[];
      NOT?: CuentaWhereInput | CuentaWhereInput[];
      contrasena?: StringFilter<'Cuenta'> | string;
      esAdmin?: BoolFilter<'Cuenta'> | boolean;
      created_at?: DateTimeFilter<'Cuenta'> | Date | string;
      updated_at?: DateTimeFilter<'Cuenta'> | Date | string;
      filtroBaseActivo?: BoolFilter<'Cuenta'> | boolean;
      fcmToken?: StringNullableListFilter<'Cuenta'>;
      comentarios?: ComentarioListRelationFilter;
      etiquetas?: EtiquetaListRelationFilter;
      filtroBase?: EtiquetaListRelationFilter;
    },
    'id' | 'nombreUsuario'
  >;

  export type CuentaOrderByWithAggregationInput = {
    id?: SortOrder;
    nombreUsuario?: SortOrder;
    contrasena?: SortOrder;
    esAdmin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    filtroBaseActivo?: SortOrder;
    fcmToken?: SortOrder;
    _count?: CuentaCountOrderByAggregateInput;
    _max?: CuentaMaxOrderByAggregateInput;
    _min?: CuentaMinOrderByAggregateInput;
  };

  export type CuentaScalarWhereWithAggregatesInput = {
    AND?:
      | CuentaScalarWhereWithAggregatesInput
      | CuentaScalarWhereWithAggregatesInput[];
    OR?: CuentaScalarWhereWithAggregatesInput[];
    NOT?:
      | CuentaScalarWhereWithAggregatesInput
      | CuentaScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Cuenta'> | string;
    nombreUsuario?: StringWithAggregatesFilter<'Cuenta'> | string;
    contrasena?: StringWithAggregatesFilter<'Cuenta'> | string;
    esAdmin?: BoolWithAggregatesFilter<'Cuenta'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'Cuenta'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Cuenta'> | Date | string;
    filtroBaseActivo?: BoolWithAggregatesFilter<'Cuenta'> | boolean;
    fcmToken?: StringNullableListFilter<'Cuenta'>;
  };

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[];
    OR?: PerfilWhereInput[];
    NOT?: PerfilWhereInput | PerfilWhereInput[];
    id?: StringFilter<'Perfil'> | string;
    idLegible?: IntFilter<'Perfil'> | number;
    telefono?: StringFilter<'Perfil'> | string;
    nombreCompleto?: StringFilter<'Perfil'> | string;
    nombrePila?: StringNullableFilter<'Perfil'> | string | null;
    genero?: StringNullableFilter<'Perfil'> | string | null;
    fechaNacimiento?: DateTimeNullableFilter<'Perfil'> | Date | string | null;
    fotoUrl?: StringNullableFilter<'Perfil'> | string | null;
    instagram?: StringNullableFilter<'Perfil'> | string | null;
    mail?: StringNullableFilter<'Perfil'> | string | null;
    dni?: StringNullableFilter<'Perfil'> | string | null;
    nombresAlternativos?: StringNullableListFilter<'Perfil'>;
    esPapelera?: BoolFilter<'Perfil'> | boolean;
    fechaPapelera?: DateTimeNullableFilter<'Perfil'> | Date | string | null;
    created_at?: DateTimeFilter<'Perfil'> | Date | string;
    updated_at?: DateTimeFilter<'Perfil'> | Date | string;
    comentarios?: ComentarioListRelationFilter;
    mensajes?: MensajeListRelationFilter;
    etiquetas?: EtiquetaListRelationFilter;
  };

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder;
    idLegible?: SortOrder;
    telefono?: SortOrder;
    nombreCompleto?: SortOrder;
    nombrePila?: SortOrderInput | SortOrder;
    genero?: SortOrderInput | SortOrder;
    fechaNacimiento?: SortOrderInput | SortOrder;
    fotoUrl?: SortOrderInput | SortOrder;
    instagram?: SortOrderInput | SortOrder;
    mail?: SortOrderInput | SortOrder;
    dni?: SortOrderInput | SortOrder;
    nombresAlternativos?: SortOrder;
    esPapelera?: SortOrder;
    fechaPapelera?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    comentarios?: ComentarioOrderByRelationAggregateInput;
    mensajes?: MensajeOrderByRelationAggregateInput;
    etiquetas?: EtiquetaOrderByRelationAggregateInput;
  };

  export type PerfilWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      telefono?: string;
      AND?: PerfilWhereInput | PerfilWhereInput[];
      OR?: PerfilWhereInput[];
      NOT?: PerfilWhereInput | PerfilWhereInput[];
      idLegible?: IntFilter<'Perfil'> | number;
      nombreCompleto?: StringFilter<'Perfil'> | string;
      nombrePila?: StringNullableFilter<'Perfil'> | string | null;
      genero?: StringNullableFilter<'Perfil'> | string | null;
      fechaNacimiento?: DateTimeNullableFilter<'Perfil'> | Date | string | null;
      fotoUrl?: StringNullableFilter<'Perfil'> | string | null;
      instagram?: StringNullableFilter<'Perfil'> | string | null;
      mail?: StringNullableFilter<'Perfil'> | string | null;
      dni?: StringNullableFilter<'Perfil'> | string | null;
      nombresAlternativos?: StringNullableListFilter<'Perfil'>;
      esPapelera?: BoolFilter<'Perfil'> | boolean;
      fechaPapelera?: DateTimeNullableFilter<'Perfil'> | Date | string | null;
      created_at?: DateTimeFilter<'Perfil'> | Date | string;
      updated_at?: DateTimeFilter<'Perfil'> | Date | string;
      comentarios?: ComentarioListRelationFilter;
      mensajes?: MensajeListRelationFilter;
      etiquetas?: EtiquetaListRelationFilter;
    },
    'id' | 'telefono'
  >;

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder;
    idLegible?: SortOrder;
    telefono?: SortOrder;
    nombreCompleto?: SortOrder;
    nombrePila?: SortOrderInput | SortOrder;
    genero?: SortOrderInput | SortOrder;
    fechaNacimiento?: SortOrderInput | SortOrder;
    fotoUrl?: SortOrderInput | SortOrder;
    instagram?: SortOrderInput | SortOrder;
    mail?: SortOrderInput | SortOrder;
    dni?: SortOrderInput | SortOrder;
    nombresAlternativos?: SortOrder;
    esPapelera?: SortOrder;
    fechaPapelera?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: PerfilCountOrderByAggregateInput;
    _avg?: PerfilAvgOrderByAggregateInput;
    _max?: PerfilMaxOrderByAggregateInput;
    _min?: PerfilMinOrderByAggregateInput;
    _sum?: PerfilSumOrderByAggregateInput;
  };

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?:
      | PerfilScalarWhereWithAggregatesInput
      | PerfilScalarWhereWithAggregatesInput[];
    OR?: PerfilScalarWhereWithAggregatesInput[];
    NOT?:
      | PerfilScalarWhereWithAggregatesInput
      | PerfilScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Perfil'> | string;
    idLegible?: IntWithAggregatesFilter<'Perfil'> | number;
    telefono?: StringWithAggregatesFilter<'Perfil'> | string;
    nombreCompleto?: StringWithAggregatesFilter<'Perfil'> | string;
    nombrePila?: StringNullableWithAggregatesFilter<'Perfil'> | string | null;
    genero?: StringNullableWithAggregatesFilter<'Perfil'> | string | null;
    fechaNacimiento?:
      | DateTimeNullableWithAggregatesFilter<'Perfil'>
      | Date
      | string
      | null;
    fotoUrl?: StringNullableWithAggregatesFilter<'Perfil'> | string | null;
    instagram?: StringNullableWithAggregatesFilter<'Perfil'> | string | null;
    mail?: StringNullableWithAggregatesFilter<'Perfil'> | string | null;
    dni?: StringNullableWithAggregatesFilter<'Perfil'> | string | null;
    nombresAlternativos?: StringNullableListFilter<'Perfil'>;
    esPapelera?: BoolWithAggregatesFilter<'Perfil'> | boolean;
    fechaPapelera?:
      | DateTimeNullableWithAggregatesFilter<'Perfil'>
      | Date
      | string
      | null;
    created_at?: DateTimeWithAggregatesFilter<'Perfil'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Perfil'> | Date | string;
  };

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[];
    OR?: ComentarioWhereInput[];
    NOT?: ComentarioWhereInput | ComentarioWhereInput[];
    id?: StringFilter<'Comentario'> | string;
    contenido?: StringFilter<'Comentario'> | string;
    creadoPor?: StringFilter<'Comentario'> | string;
    perfilId?: StringFilter<'Comentario'> | string;
    created_at?: DateTimeFilter<'Comentario'> | Date | string;
    updated_at?: DateTimeFilter<'Comentario'> | Date | string;
    cuenta?: XOR<CuentaRelationFilter, CuentaWhereInput>;
    perfil?: XOR<PerfilRelationFilter, PerfilWhereInput>;
  };

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder;
    contenido?: SortOrder;
    creadoPor?: SortOrder;
    perfilId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    cuenta?: CuentaOrderByWithRelationInput;
    perfil?: PerfilOrderByWithRelationInput;
  };

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ComentarioWhereInput | ComentarioWhereInput[];
      OR?: ComentarioWhereInput[];
      NOT?: ComentarioWhereInput | ComentarioWhereInput[];
      contenido?: StringFilter<'Comentario'> | string;
      creadoPor?: StringFilter<'Comentario'> | string;
      perfilId?: StringFilter<'Comentario'> | string;
      created_at?: DateTimeFilter<'Comentario'> | Date | string;
      updated_at?: DateTimeFilter<'Comentario'> | Date | string;
      cuenta?: XOR<CuentaRelationFilter, CuentaWhereInput>;
      perfil?: XOR<PerfilRelationFilter, PerfilWhereInput>;
    },
    'id'
  >;

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder;
    contenido?: SortOrder;
    creadoPor?: SortOrder;
    perfilId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ComentarioCountOrderByAggregateInput;
    _max?: ComentarioMaxOrderByAggregateInput;
    _min?: ComentarioMinOrderByAggregateInput;
  };

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?:
      | ComentarioScalarWhereWithAggregatesInput
      | ComentarioScalarWhereWithAggregatesInput[];
    OR?: ComentarioScalarWhereWithAggregatesInput[];
    NOT?:
      | ComentarioScalarWhereWithAggregatesInput
      | ComentarioScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Comentario'> | string;
    contenido?: StringWithAggregatesFilter<'Comentario'> | string;
    creadoPor?: StringWithAggregatesFilter<'Comentario'> | string;
    perfilId?: StringWithAggregatesFilter<'Comentario'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Comentario'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Comentario'> | Date | string;
  };

  export type EtiquetaWhereInput = {
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[];
    OR?: EtiquetaWhereInput[];
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[];
    id?: StringFilter<'Etiqueta'> | string;
    nombre?: StringFilter<'Etiqueta'> | string;
    grupoId?: StringFilter<'Etiqueta'> | string;
    tipo?: EnumTipoEtiquetaFilter<'Etiqueta'> | $Enums.TipoEtiqueta;
    created_at?: DateTimeFilter<'Etiqueta'> | Date | string;
    updated_at?: DateTimeFilter<'Etiqueta'> | Date | string;
    grupo?: XOR<EtiquetaGrupoRelationFilter, EtiquetaGrupoWhereInput>;
    eventosAsistidos?: EventoListRelationFilter;
    eventosConfirmados?: EventoListRelationFilter;
    cuentas?: CuentaListRelationFilter;
    perfiles?: PerfilListRelationFilter;
    cuentasFiltroBase?: CuentaListRelationFilter;
  };

  export type EtiquetaOrderByWithRelationInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    grupoId?: SortOrder;
    tipo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    grupo?: EtiquetaGrupoOrderByWithRelationInput;
    eventosAsistidos?: EventoOrderByRelationAggregateInput;
    eventosConfirmados?: EventoOrderByRelationAggregateInput;
    cuentas?: CuentaOrderByRelationAggregateInput;
    perfiles?: PerfilOrderByRelationAggregateInput;
    cuentasFiltroBase?: CuentaOrderByRelationAggregateInput;
  };

  export type EtiquetaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EtiquetaWhereInput | EtiquetaWhereInput[];
      OR?: EtiquetaWhereInput[];
      NOT?: EtiquetaWhereInput | EtiquetaWhereInput[];
      nombre?: StringFilter<'Etiqueta'> | string;
      grupoId?: StringFilter<'Etiqueta'> | string;
      tipo?: EnumTipoEtiquetaFilter<'Etiqueta'> | $Enums.TipoEtiqueta;
      created_at?: DateTimeFilter<'Etiqueta'> | Date | string;
      updated_at?: DateTimeFilter<'Etiqueta'> | Date | string;
      grupo?: XOR<EtiquetaGrupoRelationFilter, EtiquetaGrupoWhereInput>;
      eventosAsistidos?: EventoListRelationFilter;
      eventosConfirmados?: EventoListRelationFilter;
      cuentas?: CuentaListRelationFilter;
      perfiles?: PerfilListRelationFilter;
      cuentasFiltroBase?: CuentaListRelationFilter;
    },
    'id'
  >;

  export type EtiquetaOrderByWithAggregationInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    grupoId?: SortOrder;
    tipo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: EtiquetaCountOrderByAggregateInput;
    _max?: EtiquetaMaxOrderByAggregateInput;
    _min?: EtiquetaMinOrderByAggregateInput;
  };

  export type EtiquetaScalarWhereWithAggregatesInput = {
    AND?:
      | EtiquetaScalarWhereWithAggregatesInput
      | EtiquetaScalarWhereWithAggregatesInput[];
    OR?: EtiquetaScalarWhereWithAggregatesInput[];
    NOT?:
      | EtiquetaScalarWhereWithAggregatesInput
      | EtiquetaScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Etiqueta'> | string;
    nombre?: StringWithAggregatesFilter<'Etiqueta'> | string;
    grupoId?: StringWithAggregatesFilter<'Etiqueta'> | string;
    tipo?:
      | EnumTipoEtiquetaWithAggregatesFilter<'Etiqueta'>
      | $Enums.TipoEtiqueta;
    created_at?: DateTimeWithAggregatesFilter<'Etiqueta'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Etiqueta'> | Date | string;
  };

  export type EtiquetaGrupoWhereInput = {
    AND?: EtiquetaGrupoWhereInput | EtiquetaGrupoWhereInput[];
    OR?: EtiquetaGrupoWhereInput[];
    NOT?: EtiquetaGrupoWhereInput | EtiquetaGrupoWhereInput[];
    id?: StringFilter<'EtiquetaGrupo'> | string;
    nombre?: StringFilter<'EtiquetaGrupo'> | string;
    color?: StringFilter<'EtiquetaGrupo'> | string;
    esExclusivo?: BoolFilter<'EtiquetaGrupo'> | boolean;
    created_at?: DateTimeFilter<'EtiquetaGrupo'> | Date | string;
    updated_at?: DateTimeFilter<'EtiquetaGrupo'> | Date | string;
    etiquetas?: EtiquetaListRelationFilter;
  };

  export type EtiquetaGrupoOrderByWithRelationInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    color?: SortOrder;
    esExclusivo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    etiquetas?: EtiquetaOrderByRelationAggregateInput;
  };

  export type EtiquetaGrupoWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EtiquetaGrupoWhereInput | EtiquetaGrupoWhereInput[];
      OR?: EtiquetaGrupoWhereInput[];
      NOT?: EtiquetaGrupoWhereInput | EtiquetaGrupoWhereInput[];
      nombre?: StringFilter<'EtiquetaGrupo'> | string;
      color?: StringFilter<'EtiquetaGrupo'> | string;
      esExclusivo?: BoolFilter<'EtiquetaGrupo'> | boolean;
      created_at?: DateTimeFilter<'EtiquetaGrupo'> | Date | string;
      updated_at?: DateTimeFilter<'EtiquetaGrupo'> | Date | string;
      etiquetas?: EtiquetaListRelationFilter;
    },
    'id'
  >;

  export type EtiquetaGrupoOrderByWithAggregationInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    color?: SortOrder;
    esExclusivo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: EtiquetaGrupoCountOrderByAggregateInput;
    _max?: EtiquetaGrupoMaxOrderByAggregateInput;
    _min?: EtiquetaGrupoMinOrderByAggregateInput;
  };

  export type EtiquetaGrupoScalarWhereWithAggregatesInput = {
    AND?:
      | EtiquetaGrupoScalarWhereWithAggregatesInput
      | EtiquetaGrupoScalarWhereWithAggregatesInput[];
    OR?: EtiquetaGrupoScalarWhereWithAggregatesInput[];
    NOT?:
      | EtiquetaGrupoScalarWhereWithAggregatesInput
      | EtiquetaGrupoScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'EtiquetaGrupo'> | string;
    nombre?: StringWithAggregatesFilter<'EtiquetaGrupo'> | string;
    color?: StringWithAggregatesFilter<'EtiquetaGrupo'> | string;
    esExclusivo?: BoolWithAggregatesFilter<'EtiquetaGrupo'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'EtiquetaGrupo'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'EtiquetaGrupo'> | Date | string;
  };

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[];
    OR?: EventoWhereInput[];
    NOT?: EventoWhereInput | EventoWhereInput[];
    id?: StringFilter<'Evento'> | string;
    nombre?: StringFilter<'Evento'> | string;
    fecha?: DateTimeFilter<'Evento'> | Date | string;
    ubicacion?: StringFilter<'Evento'> | string;
    etiquetaAsistioId?: StringFilter<'Evento'> | string;
    etiquetaConfirmoId?: StringFilter<'Evento'> | string;
    eventoPadreId?: StringNullableFilter<'Evento'> | string | null;
    created_at?: DateTimeFilter<'Evento'> | Date | string;
    updated_at?: DateTimeFilter<'Evento'> | Date | string;
    etiquetaAsistio?: XOR<EtiquetaRelationFilter, EtiquetaWhereInput>;
    etiquetaConfirmo?: XOR<EtiquetaRelationFilter, EtiquetaWhereInput>;
    eventoPadre?: XOR<EventoNullableRelationFilter, EventoWhereInput> | null;
    subEventos?: EventoListRelationFilter;
  };

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    fecha?: SortOrder;
    ubicacion?: SortOrder;
    etiquetaAsistioId?: SortOrder;
    etiquetaConfirmoId?: SortOrder;
    eventoPadreId?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    etiquetaAsistio?: EtiquetaOrderByWithRelationInput;
    etiquetaConfirmo?: EtiquetaOrderByWithRelationInput;
    eventoPadre?: EventoOrderByWithRelationInput;
    subEventos?: EventoOrderByRelationAggregateInput;
  };

  export type EventoWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventoWhereInput | EventoWhereInput[];
      OR?: EventoWhereInput[];
      NOT?: EventoWhereInput | EventoWhereInput[];
      nombre?: StringFilter<'Evento'> | string;
      fecha?: DateTimeFilter<'Evento'> | Date | string;
      ubicacion?: StringFilter<'Evento'> | string;
      etiquetaAsistioId?: StringFilter<'Evento'> | string;
      etiquetaConfirmoId?: StringFilter<'Evento'> | string;
      eventoPadreId?: StringNullableFilter<'Evento'> | string | null;
      created_at?: DateTimeFilter<'Evento'> | Date | string;
      updated_at?: DateTimeFilter<'Evento'> | Date | string;
      etiquetaAsistio?: XOR<EtiquetaRelationFilter, EtiquetaWhereInput>;
      etiquetaConfirmo?: XOR<EtiquetaRelationFilter, EtiquetaWhereInput>;
      eventoPadre?: XOR<EventoNullableRelationFilter, EventoWhereInput> | null;
      subEventos?: EventoListRelationFilter;
    },
    'id'
  >;

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    fecha?: SortOrder;
    ubicacion?: SortOrder;
    etiquetaAsistioId?: SortOrder;
    etiquetaConfirmoId?: SortOrder;
    eventoPadreId?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: EventoCountOrderByAggregateInput;
    _max?: EventoMaxOrderByAggregateInput;
    _min?: EventoMinOrderByAggregateInput;
  };

  export type EventoScalarWhereWithAggregatesInput = {
    AND?:
      | EventoScalarWhereWithAggregatesInput
      | EventoScalarWhereWithAggregatesInput[];
    OR?: EventoScalarWhereWithAggregatesInput[];
    NOT?:
      | EventoScalarWhereWithAggregatesInput
      | EventoScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Evento'> | string;
    nombre?: StringWithAggregatesFilter<'Evento'> | string;
    fecha?: DateTimeWithAggregatesFilter<'Evento'> | Date | string;
    ubicacion?: StringWithAggregatesFilter<'Evento'> | string;
    etiquetaAsistioId?: StringWithAggregatesFilter<'Evento'> | string;
    etiquetaConfirmoId?: StringWithAggregatesFilter<'Evento'> | string;
    eventoPadreId?:
      | StringNullableWithAggregatesFilter<'Evento'>
      | string
      | null;
    created_at?: DateTimeWithAggregatesFilter<'Evento'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Evento'> | Date | string;
  };

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[];
    OR?: MensajeWhereInput[];
    NOT?: MensajeWhereInput | MensajeWhereInput[];
    id?: StringFilter<'Mensaje'> | string;
    wamId?: StringFilter<'Mensaje'> | string;
    message?: JsonFilter<'Mensaje'>;
    perfilTelefono?: StringFilter<'Mensaje'> | string;
    status?: EnumMensajeStatusFilter<'Mensaje'> | $Enums.MensajeStatus;
    statusAt?: DateTimeNullableFilter<'Mensaje'> | Date | string | null;
    visto?: BoolFilter<'Mensaje'> | boolean;
    created_at?: DateTimeFilter<'Mensaje'> | Date | string;
    updated_at?: DateTimeFilter<'Mensaje'> | Date | string;
    perfil?: XOR<PerfilRelationFilter, PerfilWhereInput>;
  };

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    message?: SortOrder;
    perfilTelefono?: SortOrder;
    status?: SortOrder;
    statusAt?: SortOrderInput | SortOrder;
    visto?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    perfil?: PerfilOrderByWithRelationInput;
  };

  export type MensajeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      wamId?: string;
      AND?: MensajeWhereInput | MensajeWhereInput[];
      OR?: MensajeWhereInput[];
      NOT?: MensajeWhereInput | MensajeWhereInput[];
      message?: JsonFilter<'Mensaje'>;
      perfilTelefono?: StringFilter<'Mensaje'> | string;
      status?: EnumMensajeStatusFilter<'Mensaje'> | $Enums.MensajeStatus;
      statusAt?: DateTimeNullableFilter<'Mensaje'> | Date | string | null;
      visto?: BoolFilter<'Mensaje'> | boolean;
      created_at?: DateTimeFilter<'Mensaje'> | Date | string;
      updated_at?: DateTimeFilter<'Mensaje'> | Date | string;
      perfil?: XOR<PerfilRelationFilter, PerfilWhereInput>;
    },
    'id' | 'wamId'
  >;

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    message?: SortOrder;
    perfilTelefono?: SortOrder;
    status?: SortOrder;
    statusAt?: SortOrderInput | SortOrder;
    visto?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: MensajeCountOrderByAggregateInput;
    _max?: MensajeMaxOrderByAggregateInput;
    _min?: MensajeMinOrderByAggregateInput;
  };

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?:
      | MensajeScalarWhereWithAggregatesInput
      | MensajeScalarWhereWithAggregatesInput[];
    OR?: MensajeScalarWhereWithAggregatesInput[];
    NOT?:
      | MensajeScalarWhereWithAggregatesInput
      | MensajeScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Mensaje'> | string;
    wamId?: StringWithAggregatesFilter<'Mensaje'> | string;
    message?: JsonWithAggregatesFilter<'Mensaje'>;
    perfilTelefono?: StringWithAggregatesFilter<'Mensaje'> | string;
    status?:
      | EnumMensajeStatusWithAggregatesFilter<'Mensaje'>
      | $Enums.MensajeStatus;
    statusAt?:
      | DateTimeNullableWithAggregatesFilter<'Mensaje'>
      | Date
      | string
      | null;
    visto?: BoolWithAggregatesFilter<'Mensaje'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'Mensaje'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Mensaje'> | Date | string;
  };

  export type EnumsWhereInput = {
    AND?: EnumsWhereInput | EnumsWhereInput[];
    OR?: EnumsWhereInput[];
    NOT?: EnumsWhereInput | EnumsWhereInput[];
    id?: StringFilter<'Enums'> | string;
    EstadoPlantilla?:
      | EnumEstadoPlantillaFilter<'Enums'>
      | $Enums.EstadoPlantilla;
    CategoriaPlantilla?:
      | EnumCategoriaPlantillaFilter<'Enums'>
      | $Enums.CategoriaPlantilla;
  };

  export type EnumsOrderByWithRelationInput = {
    id?: SortOrder;
    EstadoPlantilla?: SortOrder;
    CategoriaPlantilla?: SortOrder;
  };

  export type EnumsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EnumsWhereInput | EnumsWhereInput[];
      OR?: EnumsWhereInput[];
      NOT?: EnumsWhereInput | EnumsWhereInput[];
      EstadoPlantilla?:
        | EnumEstadoPlantillaFilter<'Enums'>
        | $Enums.EstadoPlantilla;
      CategoriaPlantilla?:
        | EnumCategoriaPlantillaFilter<'Enums'>
        | $Enums.CategoriaPlantilla;
    },
    'id'
  >;

  export type EnumsOrderByWithAggregationInput = {
    id?: SortOrder;
    EstadoPlantilla?: SortOrder;
    CategoriaPlantilla?: SortOrder;
    _count?: EnumsCountOrderByAggregateInput;
    _max?: EnumsMaxOrderByAggregateInput;
    _min?: EnumsMinOrderByAggregateInput;
  };

  export type EnumsScalarWhereWithAggregatesInput = {
    AND?:
      | EnumsScalarWhereWithAggregatesInput
      | EnumsScalarWhereWithAggregatesInput[];
    OR?: EnumsScalarWhereWithAggregatesInput[];
    NOT?:
      | EnumsScalarWhereWithAggregatesInput
      | EnumsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Enums'> | string;
    EstadoPlantilla?:
      | EnumEstadoPlantillaWithAggregatesFilter<'Enums'>
      | $Enums.EstadoPlantilla;
    CategoriaPlantilla?:
      | EnumCategoriaPlantillaWithAggregatesFilter<'Enums'>
      | $Enums.CategoriaPlantilla;
  };

  export type CuentaCreateInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    comentarios?: ComentarioCreateNestedManyWithoutCuentaInput;
    etiquetas?: EtiquetaCreateNestedManyWithoutCuentasInput;
    filtroBase?: EtiquetaCreateNestedManyWithoutCuentasFiltroBaseInput;
  };

  export type CuentaUncheckedCreateInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutCuentaInput;
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutCuentasInput;
    filtroBase?: EtiquetaUncheckedCreateNestedManyWithoutCuentasFiltroBaseInput;
  };

  export type CuentaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    comentarios?: ComentarioUpdateManyWithoutCuentaNestedInput;
    etiquetas?: EtiquetaUpdateManyWithoutCuentasNestedInput;
    filtroBase?: EtiquetaUpdateManyWithoutCuentasFiltroBaseNestedInput;
  };

  export type CuentaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    comentarios?: ComentarioUncheckedUpdateManyWithoutCuentaNestedInput;
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutCuentasNestedInput;
    filtroBase?: EtiquetaUncheckedUpdateManyWithoutCuentasFiltroBaseNestedInput;
  };

  export type CuentaCreateManyInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
  };

  export type CuentaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
  };

  export type CuentaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
  };

  export type PerfilCreateInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comentarios?: ComentarioCreateNestedManyWithoutPerfilInput;
    mensajes?: MensajeCreateNestedManyWithoutPerfilInput;
    etiquetas?: EtiquetaCreateNestedManyWithoutPerfilesInput;
  };

  export type PerfilUncheckedCreateInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPerfilInput;
    mensajes?: MensajeUncheckedCreateNestedManyWithoutPerfilInput;
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutPerfilesInput;
  };

  export type PerfilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comentarios?: ComentarioUpdateManyWithoutPerfilNestedInput;
    mensajes?: MensajeUpdateManyWithoutPerfilNestedInput;
    etiquetas?: EtiquetaUpdateManyWithoutPerfilesNestedInput;
  };

  export type PerfilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comentarios?: ComentarioUncheckedUpdateManyWithoutPerfilNestedInput;
    mensajes?: MensajeUncheckedUpdateManyWithoutPerfilNestedInput;
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutPerfilesNestedInput;
  };

  export type PerfilCreateManyInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type PerfilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PerfilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ComentarioCreateInput = {
    id?: string;
    contenido: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cuenta: CuentaCreateNestedOneWithoutComentariosInput;
    perfil: PerfilCreateNestedOneWithoutComentariosInput;
  };

  export type ComentarioUncheckedCreateInput = {
    id?: string;
    contenido: string;
    creadoPor: string;
    perfilId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ComentarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cuenta?: CuentaUpdateOneRequiredWithoutComentariosNestedInput;
    perfil?: PerfilUpdateOneRequiredWithoutComentariosNestedInput;
  };

  export type ComentarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    creadoPor?: StringFieldUpdateOperationsInput | string;
    perfilId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ComentarioCreateManyInput = {
    id?: string;
    contenido: string;
    creadoPor: string;
    perfilId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ComentarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ComentarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    creadoPor?: StringFieldUpdateOperationsInput | string;
    perfilId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaCreateInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    grupo: EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput;
    eventosAsistidos?: EventoCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUncheckedCreateInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaUncheckedCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilUncheckedCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grupo?: EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput;
    eventosAsistidos?: EventoUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaCreateManyInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EtiquetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaGrupoCreateInput = {
    id?: string;
    nombre: string;
    color: string;
    esExclusivo: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetas?: EtiquetaCreateNestedManyWithoutGrupoInput;
  };

  export type EtiquetaGrupoUncheckedCreateInput = {
    id?: string;
    nombre: string;
    color: string;
    esExclusivo: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutGrupoInput;
  };

  export type EtiquetaGrupoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    esExclusivo?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetas?: EtiquetaUpdateManyWithoutGrupoNestedInput;
  };

  export type EtiquetaGrupoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    esExclusivo?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutGrupoNestedInput;
  };

  export type EtiquetaGrupoCreateManyInput = {
    id?: string;
    nombre: string;
    color: string;
    esExclusivo: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EtiquetaGrupoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    esExclusivo?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaGrupoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    esExclusivo?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoCreateInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetaAsistio: EtiquetaCreateNestedOneWithoutEventosAsistidosInput;
    etiquetaConfirmo: EtiquetaCreateNestedOneWithoutEventosConfirmadosInput;
    eventoPadre?: EventoCreateNestedOneWithoutSubEventosInput;
    subEventos?: EventoCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoUncheckedCreateInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    etiquetaConfirmoId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEventos?: EventoUncheckedCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetaAsistio?: EtiquetaUpdateOneRequiredWithoutEventosAsistidosNestedInput;
    etiquetaConfirmo?: EtiquetaUpdateOneRequiredWithoutEventosConfirmadosNestedInput;
    eventoPadre?: EventoUpdateOneWithoutSubEventosNestedInput;
    subEventos?: EventoUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEventos?: EventoUncheckedUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoCreateManyInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    etiquetaConfirmoId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MensajeCreateInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    status?: $Enums.MensajeStatus;
    statusAt?: Date | string | null;
    visto?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    perfil: PerfilCreateNestedOneWithoutMensajesInput;
  };

  export type MensajeUncheckedCreateInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    perfilTelefono: string;
    status?: $Enums.MensajeStatus;
    statusAt?: Date | string | null;
    visto?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MensajeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    perfil?: PerfilUpdateOneRequiredWithoutMensajesNestedInput;
  };

  export type MensajeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    perfilTelefono?: StringFieldUpdateOperationsInput | string;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MensajeCreateManyInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    perfilTelefono: string;
    status?: $Enums.MensajeStatus;
    statusAt?: Date | string | null;
    visto?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MensajeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MensajeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    perfilTelefono?: StringFieldUpdateOperationsInput | string;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnumsCreateInput = {
    id: string;
    EstadoPlantilla: $Enums.EstadoPlantilla;
    CategoriaPlantilla: $Enums.CategoriaPlantilla;
  };

  export type EnumsUncheckedCreateInput = {
    id: string;
    EstadoPlantilla: $Enums.EstadoPlantilla;
    CategoriaPlantilla: $Enums.CategoriaPlantilla;
  };

  export type EnumsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    EstadoPlantilla?:
      | EnumEstadoPlantillaFieldUpdateOperationsInput
      | $Enums.EstadoPlantilla;
    CategoriaPlantilla?:
      | EnumCategoriaPlantillaFieldUpdateOperationsInput
      | $Enums.CategoriaPlantilla;
  };

  export type EnumsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    EstadoPlantilla?:
      | EnumEstadoPlantillaFieldUpdateOperationsInput
      | $Enums.EstadoPlantilla;
    CategoriaPlantilla?:
      | EnumCategoriaPlantillaFieldUpdateOperationsInput
      | $Enums.CategoriaPlantilla;
  };

  export type EnumsCreateManyInput = {
    id: string;
    EstadoPlantilla: $Enums.EstadoPlantilla;
    CategoriaPlantilla: $Enums.CategoriaPlantilla;
  };

  export type EnumsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    EstadoPlantilla?:
      | EnumEstadoPlantillaFieldUpdateOperationsInput
      | $Enums.EstadoPlantilla;
    CategoriaPlantilla?:
      | EnumCategoriaPlantillaFieldUpdateOperationsInput
      | $Enums.CategoriaPlantilla;
  };

  export type EnumsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    EstadoPlantilla?:
      | EnumEstadoPlantillaFieldUpdateOperationsInput
      | $Enums.EstadoPlantilla;
    CategoriaPlantilla?:
      | EnumCategoriaPlantillaFieldUpdateOperationsInput
      | $Enums.CategoriaPlantilla;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput;
    some?: ComentarioWhereInput;
    none?: ComentarioWhereInput;
  };

  export type EtiquetaListRelationFilter = {
    every?: EtiquetaWhereInput;
    some?: EtiquetaWhereInput;
    none?: EtiquetaWhereInput;
  };

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EtiquetaOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CuentaCountOrderByAggregateInput = {
    id?: SortOrder;
    nombreUsuario?: SortOrder;
    contrasena?: SortOrder;
    esAdmin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    filtroBaseActivo?: SortOrder;
    fcmToken?: SortOrder;
  };

  export type CuentaMaxOrderByAggregateInput = {
    id?: SortOrder;
    nombreUsuario?: SortOrder;
    contrasena?: SortOrder;
    esAdmin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    filtroBaseActivo?: SortOrder;
  };

  export type CuentaMinOrderByAggregateInput = {
    id?: SortOrder;
    nombreUsuario?: SortOrder;
    contrasena?: SortOrder;
    esAdmin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    filtroBaseActivo?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput;
    some?: MensajeWhereInput;
    none?: MensajeWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder;
    idLegible?: SortOrder;
    telefono?: SortOrder;
    nombreCompleto?: SortOrder;
    nombrePila?: SortOrder;
    genero?: SortOrder;
    fechaNacimiento?: SortOrder;
    fotoUrl?: SortOrder;
    instagram?: SortOrder;
    mail?: SortOrder;
    dni?: SortOrder;
    nombresAlternativos?: SortOrder;
    esPapelera?: SortOrder;
    fechaPapelera?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type PerfilAvgOrderByAggregateInput = {
    idLegible?: SortOrder;
  };

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder;
    idLegible?: SortOrder;
    telefono?: SortOrder;
    nombreCompleto?: SortOrder;
    nombrePila?: SortOrder;
    genero?: SortOrder;
    fechaNacimiento?: SortOrder;
    fotoUrl?: SortOrder;
    instagram?: SortOrder;
    mail?: SortOrder;
    dni?: SortOrder;
    esPapelera?: SortOrder;
    fechaPapelera?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder;
    idLegible?: SortOrder;
    telefono?: SortOrder;
    nombreCompleto?: SortOrder;
    nombrePila?: SortOrder;
    genero?: SortOrder;
    fechaNacimiento?: SortOrder;
    fotoUrl?: SortOrder;
    instagram?: SortOrder;
    mail?: SortOrder;
    dni?: SortOrder;
    esPapelera?: SortOrder;
    fechaPapelera?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type PerfilSumOrderByAggregateInput = {
    idLegible?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type CuentaRelationFilter = {
    is?: CuentaWhereInput;
    isNot?: CuentaWhereInput;
  };

  export type PerfilRelationFilter = {
    is?: PerfilWhereInput;
    isNot?: PerfilWhereInput;
  };

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder;
    contenido?: SortOrder;
    creadoPor?: SortOrder;
    perfilId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder;
    contenido?: SortOrder;
    creadoPor?: SortOrder;
    perfilId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder;
    contenido?: SortOrder;
    creadoPor?: SortOrder;
    perfilId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumTipoEtiquetaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEtiqueta | EnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TipoEtiqueta[]
      | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TipoEtiqueta[]
      | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    not?: NestedEnumTipoEtiquetaFilter<$PrismaModel> | $Enums.TipoEtiqueta;
  };

  export type EtiquetaGrupoRelationFilter = {
    is?: EtiquetaGrupoWhereInput;
    isNot?: EtiquetaGrupoWhereInput;
  };

  export type EventoListRelationFilter = {
    every?: EventoWhereInput;
    some?: EventoWhereInput;
    none?: EventoWhereInput;
  };

  export type CuentaListRelationFilter = {
    every?: CuentaWhereInput;
    some?: CuentaWhereInput;
    none?: CuentaWhereInput;
  };

  export type PerfilListRelationFilter = {
    every?: PerfilWhereInput;
    some?: PerfilWhereInput;
    none?: PerfilWhereInput;
  };

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CuentaOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PerfilOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EtiquetaCountOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    grupoId?: SortOrder;
    tipo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EtiquetaMaxOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    grupoId?: SortOrder;
    tipo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EtiquetaMinOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    grupoId?: SortOrder;
    tipo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumTipoEtiquetaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEtiqueta | EnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TipoEtiqueta[]
      | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TipoEtiqueta[]
      | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTipoEtiquetaWithAggregatesFilter<$PrismaModel>
      | $Enums.TipoEtiqueta;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTipoEtiquetaFilter<$PrismaModel>;
    _max?: NestedEnumTipoEtiquetaFilter<$PrismaModel>;
  };

  export type EtiquetaGrupoCountOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    color?: SortOrder;
    esExclusivo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EtiquetaGrupoMaxOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    color?: SortOrder;
    esExclusivo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EtiquetaGrupoMinOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    color?: SortOrder;
    esExclusivo?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EtiquetaRelationFilter = {
    is?: EtiquetaWhereInput;
    isNot?: EtiquetaWhereInput;
  };

  export type EventoNullableRelationFilter = {
    is?: EventoWhereInput | null;
    isNot?: EventoWhereInput | null;
  };

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    fecha?: SortOrder;
    ubicacion?: SortOrder;
    etiquetaAsistioId?: SortOrder;
    etiquetaConfirmoId?: SortOrder;
    eventoPadreId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    fecha?: SortOrder;
    ubicacion?: SortOrder;
    etiquetaAsistioId?: SortOrder;
    etiquetaConfirmoId?: SortOrder;
    eventoPadreId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder;
    nombre?: SortOrder;
    fecha?: SortOrder;
    ubicacion?: SortOrder;
    etiquetaAsistioId?: SortOrder;
    etiquetaConfirmoId?: SortOrder;
    eventoPadreId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type EnumMensajeStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MensajeStatus
      | EnumMensajeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMensajeStatusFilter<$PrismaModel> | $Enums.MensajeStatus;
  };

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    message?: SortOrder;
    perfilTelefono?: SortOrder;
    status?: SortOrder;
    statusAt?: SortOrder;
    visto?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    perfilTelefono?: SortOrder;
    status?: SortOrder;
    statusAt?: SortOrder;
    visto?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    perfilTelefono?: SortOrder;
    status?: SortOrder;
    statusAt?: SortOrder;
    visto?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type EnumMensajeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MensajeStatus
      | EnumMensajeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMensajeStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.MensajeStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMensajeStatusFilter<$PrismaModel>;
    _max?: NestedEnumMensajeStatusFilter<$PrismaModel>;
  };

  export type EnumEstadoPlantillaFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EstadoPlantilla
      | EnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEstadoPlantillaFilter<$PrismaModel>
      | $Enums.EstadoPlantilla;
  };

  export type EnumCategoriaPlantillaFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CategoriaPlantilla
      | EnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CategoriaPlantilla[]
      | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CategoriaPlantilla[]
      | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCategoriaPlantillaFilter<$PrismaModel>
      | $Enums.CategoriaPlantilla;
  };

  export type EnumsCountOrderByAggregateInput = {
    id?: SortOrder;
    EstadoPlantilla?: SortOrder;
    CategoriaPlantilla?: SortOrder;
  };

  export type EnumsMaxOrderByAggregateInput = {
    id?: SortOrder;
    EstadoPlantilla?: SortOrder;
    CategoriaPlantilla?: SortOrder;
  };

  export type EnumsMinOrderByAggregateInput = {
    id?: SortOrder;
    EstadoPlantilla?: SortOrder;
    CategoriaPlantilla?: SortOrder;
  };

  export type EnumEstadoPlantillaWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EstadoPlantilla
      | EnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEstadoPlantillaWithAggregatesFilter<$PrismaModel>
      | $Enums.EstadoPlantilla;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEstadoPlantillaFilter<$PrismaModel>;
    _max?: NestedEnumEstadoPlantillaFilter<$PrismaModel>;
  };

  export type EnumCategoriaPlantillaWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.CategoriaPlantilla
        | EnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.CategoriaPlantilla[]
        | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.CategoriaPlantilla[]
        | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumCategoriaPlantillaWithAggregatesFilter<$PrismaModel>
        | $Enums.CategoriaPlantilla;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumCategoriaPlantillaFilter<$PrismaModel>;
      _max?: NestedEnumCategoriaPlantillaFilter<$PrismaModel>;
    };

  export type CuentaCreatefcmTokenInput = {
    set: string[];
  };

  export type ComentarioCreateNestedManyWithoutCuentaInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutCuentaInput,
          ComentarioUncheckedCreateWithoutCuentaInput
        >
      | ComentarioCreateWithoutCuentaInput[]
      | ComentarioUncheckedCreateWithoutCuentaInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutCuentaInput
      | ComentarioCreateOrConnectWithoutCuentaInput[];
    createMany?: ComentarioCreateManyCuentaInputEnvelope;
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
  };

  export type EtiquetaCreateNestedManyWithoutCuentasInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasInput,
          EtiquetaUncheckedCreateWithoutCuentasInput
        >
      | EtiquetaCreateWithoutCuentasInput[]
      | EtiquetaUncheckedCreateWithoutCuentasInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasInput
      | EtiquetaCreateOrConnectWithoutCuentasInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type EtiquetaCreateNestedManyWithoutCuentasFiltroBaseInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasFiltroBaseInput,
          EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput
        >
      | EtiquetaCreateWithoutCuentasFiltroBaseInput[]
      | EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type ComentarioUncheckedCreateNestedManyWithoutCuentaInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutCuentaInput,
          ComentarioUncheckedCreateWithoutCuentaInput
        >
      | ComentarioCreateWithoutCuentaInput[]
      | ComentarioUncheckedCreateWithoutCuentaInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutCuentaInput
      | ComentarioCreateOrConnectWithoutCuentaInput[];
    createMany?: ComentarioCreateManyCuentaInputEnvelope;
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
  };

  export type EtiquetaUncheckedCreateNestedManyWithoutCuentasInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasInput,
          EtiquetaUncheckedCreateWithoutCuentasInput
        >
      | EtiquetaCreateWithoutCuentasInput[]
      | EtiquetaUncheckedCreateWithoutCuentasInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasInput
      | EtiquetaCreateOrConnectWithoutCuentasInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type EtiquetaUncheckedCreateNestedManyWithoutCuentasFiltroBaseInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasFiltroBaseInput,
          EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput
        >
      | EtiquetaCreateWithoutCuentasFiltroBaseInput[]
      | EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CuentaUpdatefcmTokenInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ComentarioUpdateManyWithoutCuentaNestedInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutCuentaInput,
          ComentarioUncheckedCreateWithoutCuentaInput
        >
      | ComentarioCreateWithoutCuentaInput[]
      | ComentarioUncheckedCreateWithoutCuentaInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutCuentaInput
      | ComentarioCreateOrConnectWithoutCuentaInput[];
    upsert?:
      | ComentarioUpsertWithWhereUniqueWithoutCuentaInput
      | ComentarioUpsertWithWhereUniqueWithoutCuentaInput[];
    createMany?: ComentarioCreateManyCuentaInputEnvelope;
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    update?:
      | ComentarioUpdateWithWhereUniqueWithoutCuentaInput
      | ComentarioUpdateWithWhereUniqueWithoutCuentaInput[];
    updateMany?:
      | ComentarioUpdateManyWithWhereWithoutCuentaInput
      | ComentarioUpdateManyWithWhereWithoutCuentaInput[];
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[];
  };

  export type EtiquetaUpdateManyWithoutCuentasNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasInput,
          EtiquetaUncheckedCreateWithoutCuentasInput
        >
      | EtiquetaCreateWithoutCuentasInput[]
      | EtiquetaUncheckedCreateWithoutCuentasInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasInput
      | EtiquetaCreateOrConnectWithoutCuentasInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasInput
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasInput[];
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasInput
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutCuentasInput
      | EtiquetaUpdateManyWithWhereWithoutCuentasInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type EtiquetaUpdateManyWithoutCuentasFiltroBaseNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasFiltroBaseInput,
          EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput
        >
      | EtiquetaCreateWithoutCuentasFiltroBaseInput[]
      | EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasFiltroBaseInput
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasFiltroBaseInput[];
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasFiltroBaseInput
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasFiltroBaseInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutCuentasFiltroBaseInput
      | EtiquetaUpdateManyWithWhereWithoutCuentasFiltroBaseInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type ComentarioUncheckedUpdateManyWithoutCuentaNestedInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutCuentaInput,
          ComentarioUncheckedCreateWithoutCuentaInput
        >
      | ComentarioCreateWithoutCuentaInput[]
      | ComentarioUncheckedCreateWithoutCuentaInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutCuentaInput
      | ComentarioCreateOrConnectWithoutCuentaInput[];
    upsert?:
      | ComentarioUpsertWithWhereUniqueWithoutCuentaInput
      | ComentarioUpsertWithWhereUniqueWithoutCuentaInput[];
    createMany?: ComentarioCreateManyCuentaInputEnvelope;
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    update?:
      | ComentarioUpdateWithWhereUniqueWithoutCuentaInput
      | ComentarioUpdateWithWhereUniqueWithoutCuentaInput[];
    updateMany?:
      | ComentarioUpdateManyWithWhereWithoutCuentaInput
      | ComentarioUpdateManyWithWhereWithoutCuentaInput[];
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[];
  };

  export type EtiquetaUncheckedUpdateManyWithoutCuentasNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasInput,
          EtiquetaUncheckedCreateWithoutCuentasInput
        >
      | EtiquetaCreateWithoutCuentasInput[]
      | EtiquetaUncheckedCreateWithoutCuentasInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasInput
      | EtiquetaCreateOrConnectWithoutCuentasInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasInput
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasInput[];
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasInput
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutCuentasInput
      | EtiquetaUpdateManyWithWhereWithoutCuentasInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type EtiquetaUncheckedUpdateManyWithoutCuentasFiltroBaseNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutCuentasFiltroBaseInput,
          EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput
        >
      | EtiquetaCreateWithoutCuentasFiltroBaseInput[]
      | EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput
      | EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasFiltroBaseInput
      | EtiquetaUpsertWithWhereUniqueWithoutCuentasFiltroBaseInput[];
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasFiltroBaseInput
      | EtiquetaUpdateWithWhereUniqueWithoutCuentasFiltroBaseInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutCuentasFiltroBaseInput
      | EtiquetaUpdateManyWithWhereWithoutCuentasFiltroBaseInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type PerfilCreatenombresAlternativosInput = {
    set: string[];
  };

  export type ComentarioCreateNestedManyWithoutPerfilInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutPerfilInput,
          ComentarioUncheckedCreateWithoutPerfilInput
        >
      | ComentarioCreateWithoutPerfilInput[]
      | ComentarioUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutPerfilInput
      | ComentarioCreateOrConnectWithoutPerfilInput[];
    createMany?: ComentarioCreateManyPerfilInputEnvelope;
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
  };

  export type MensajeCreateNestedManyWithoutPerfilInput = {
    create?:
      | XOR<
          MensajeCreateWithoutPerfilInput,
          MensajeUncheckedCreateWithoutPerfilInput
        >
      | MensajeCreateWithoutPerfilInput[]
      | MensajeUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | MensajeCreateOrConnectWithoutPerfilInput
      | MensajeCreateOrConnectWithoutPerfilInput[];
    createMany?: MensajeCreateManyPerfilInputEnvelope;
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
  };

  export type EtiquetaCreateNestedManyWithoutPerfilesInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutPerfilesInput,
          EtiquetaUncheckedCreateWithoutPerfilesInput
        >
      | EtiquetaCreateWithoutPerfilesInput[]
      | EtiquetaUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutPerfilesInput
      | EtiquetaCreateOrConnectWithoutPerfilesInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type ComentarioUncheckedCreateNestedManyWithoutPerfilInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutPerfilInput,
          ComentarioUncheckedCreateWithoutPerfilInput
        >
      | ComentarioCreateWithoutPerfilInput[]
      | ComentarioUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutPerfilInput
      | ComentarioCreateOrConnectWithoutPerfilInput[];
    createMany?: ComentarioCreateManyPerfilInputEnvelope;
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
  };

  export type MensajeUncheckedCreateNestedManyWithoutPerfilInput = {
    create?:
      | XOR<
          MensajeCreateWithoutPerfilInput,
          MensajeUncheckedCreateWithoutPerfilInput
        >
      | MensajeCreateWithoutPerfilInput[]
      | MensajeUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | MensajeCreateOrConnectWithoutPerfilInput
      | MensajeCreateOrConnectWithoutPerfilInput[];
    createMany?: MensajeCreateManyPerfilInputEnvelope;
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
  };

  export type EtiquetaUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutPerfilesInput,
          EtiquetaUncheckedCreateWithoutPerfilesInput
        >
      | EtiquetaCreateWithoutPerfilesInput[]
      | EtiquetaUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutPerfilesInput
      | EtiquetaCreateOrConnectWithoutPerfilesInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type PerfilUpdatenombresAlternativosInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ComentarioUpdateManyWithoutPerfilNestedInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutPerfilInput,
          ComentarioUncheckedCreateWithoutPerfilInput
        >
      | ComentarioCreateWithoutPerfilInput[]
      | ComentarioUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutPerfilInput
      | ComentarioCreateOrConnectWithoutPerfilInput[];
    upsert?:
      | ComentarioUpsertWithWhereUniqueWithoutPerfilInput
      | ComentarioUpsertWithWhereUniqueWithoutPerfilInput[];
    createMany?: ComentarioCreateManyPerfilInputEnvelope;
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    update?:
      | ComentarioUpdateWithWhereUniqueWithoutPerfilInput
      | ComentarioUpdateWithWhereUniqueWithoutPerfilInput[];
    updateMany?:
      | ComentarioUpdateManyWithWhereWithoutPerfilInput
      | ComentarioUpdateManyWithWhereWithoutPerfilInput[];
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[];
  };

  export type MensajeUpdateManyWithoutPerfilNestedInput = {
    create?:
      | XOR<
          MensajeCreateWithoutPerfilInput,
          MensajeUncheckedCreateWithoutPerfilInput
        >
      | MensajeCreateWithoutPerfilInput[]
      | MensajeUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | MensajeCreateOrConnectWithoutPerfilInput
      | MensajeCreateOrConnectWithoutPerfilInput[];
    upsert?:
      | MensajeUpsertWithWhereUniqueWithoutPerfilInput
      | MensajeUpsertWithWhereUniqueWithoutPerfilInput[];
    createMany?: MensajeCreateManyPerfilInputEnvelope;
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    update?:
      | MensajeUpdateWithWhereUniqueWithoutPerfilInput
      | MensajeUpdateWithWhereUniqueWithoutPerfilInput[];
    updateMany?:
      | MensajeUpdateManyWithWhereWithoutPerfilInput
      | MensajeUpdateManyWithWhereWithoutPerfilInput[];
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[];
  };

  export type EtiquetaUpdateManyWithoutPerfilesNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutPerfilesInput,
          EtiquetaUncheckedCreateWithoutPerfilesInput
        >
      | EtiquetaCreateWithoutPerfilesInput[]
      | EtiquetaUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutPerfilesInput
      | EtiquetaCreateOrConnectWithoutPerfilesInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutPerfilesInput
      | EtiquetaUpsertWithWhereUniqueWithoutPerfilesInput[];
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutPerfilesInput
      | EtiquetaUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutPerfilesInput
      | EtiquetaUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type ComentarioUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?:
      | XOR<
          ComentarioCreateWithoutPerfilInput,
          ComentarioUncheckedCreateWithoutPerfilInput
        >
      | ComentarioCreateWithoutPerfilInput[]
      | ComentarioUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | ComentarioCreateOrConnectWithoutPerfilInput
      | ComentarioCreateOrConnectWithoutPerfilInput[];
    upsert?:
      | ComentarioUpsertWithWhereUniqueWithoutPerfilInput
      | ComentarioUpsertWithWhereUniqueWithoutPerfilInput[];
    createMany?: ComentarioCreateManyPerfilInputEnvelope;
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[];
    update?:
      | ComentarioUpdateWithWhereUniqueWithoutPerfilInput
      | ComentarioUpdateWithWhereUniqueWithoutPerfilInput[];
    updateMany?:
      | ComentarioUpdateManyWithWhereWithoutPerfilInput
      | ComentarioUpdateManyWithWhereWithoutPerfilInput[];
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[];
  };

  export type MensajeUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?:
      | XOR<
          MensajeCreateWithoutPerfilInput,
          MensajeUncheckedCreateWithoutPerfilInput
        >
      | MensajeCreateWithoutPerfilInput[]
      | MensajeUncheckedCreateWithoutPerfilInput[];
    connectOrCreate?:
      | MensajeCreateOrConnectWithoutPerfilInput
      | MensajeCreateOrConnectWithoutPerfilInput[];
    upsert?:
      | MensajeUpsertWithWhereUniqueWithoutPerfilInput
      | MensajeUpsertWithWhereUniqueWithoutPerfilInput[];
    createMany?: MensajeCreateManyPerfilInputEnvelope;
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[];
    update?:
      | MensajeUpdateWithWhereUniqueWithoutPerfilInput
      | MensajeUpdateWithWhereUniqueWithoutPerfilInput[];
    updateMany?:
      | MensajeUpdateManyWithWhereWithoutPerfilInput
      | MensajeUpdateManyWithWhereWithoutPerfilInput[];
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[];
  };

  export type EtiquetaUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutPerfilesInput,
          EtiquetaUncheckedCreateWithoutPerfilesInput
        >
      | EtiquetaCreateWithoutPerfilesInput[]
      | EtiquetaUncheckedCreateWithoutPerfilesInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutPerfilesInput
      | EtiquetaCreateOrConnectWithoutPerfilesInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutPerfilesInput
      | EtiquetaUpsertWithWhereUniqueWithoutPerfilesInput[];
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutPerfilesInput
      | EtiquetaUpdateWithWhereUniqueWithoutPerfilesInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutPerfilesInput
      | EtiquetaUpdateManyWithWhereWithoutPerfilesInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type CuentaCreateNestedOneWithoutComentariosInput = {
    create?: XOR<
      CuentaCreateWithoutComentariosInput,
      CuentaUncheckedCreateWithoutComentariosInput
    >;
    connectOrCreate?: CuentaCreateOrConnectWithoutComentariosInput;
    connect?: CuentaWhereUniqueInput;
  };

  export type PerfilCreateNestedOneWithoutComentariosInput = {
    create?: XOR<
      PerfilCreateWithoutComentariosInput,
      PerfilUncheckedCreateWithoutComentariosInput
    >;
    connectOrCreate?: PerfilCreateOrConnectWithoutComentariosInput;
    connect?: PerfilWhereUniqueInput;
  };

  export type CuentaUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<
      CuentaCreateWithoutComentariosInput,
      CuentaUncheckedCreateWithoutComentariosInput
    >;
    connectOrCreate?: CuentaCreateOrConnectWithoutComentariosInput;
    upsert?: CuentaUpsertWithoutComentariosInput;
    connect?: CuentaWhereUniqueInput;
    update?: XOR<
      XOR<
        CuentaUpdateToOneWithWhereWithoutComentariosInput,
        CuentaUpdateWithoutComentariosInput
      >,
      CuentaUncheckedUpdateWithoutComentariosInput
    >;
  };

  export type PerfilUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<
      PerfilCreateWithoutComentariosInput,
      PerfilUncheckedCreateWithoutComentariosInput
    >;
    connectOrCreate?: PerfilCreateOrConnectWithoutComentariosInput;
    upsert?: PerfilUpsertWithoutComentariosInput;
    connect?: PerfilWhereUniqueInput;
    update?: XOR<
      XOR<
        PerfilUpdateToOneWithWhereWithoutComentariosInput,
        PerfilUpdateWithoutComentariosInput
      >,
      PerfilUncheckedUpdateWithoutComentariosInput
    >;
  };

  export type EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput = {
    create?: XOR<
      EtiquetaGrupoCreateWithoutEtiquetasInput,
      EtiquetaGrupoUncheckedCreateWithoutEtiquetasInput
    >;
    connectOrCreate?: EtiquetaGrupoCreateOrConnectWithoutEtiquetasInput;
    connect?: EtiquetaGrupoWhereUniqueInput;
  };

  export type EventoCreateNestedManyWithoutEtiquetaAsistioInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaAsistioInput,
          EventoUncheckedCreateWithoutEtiquetaAsistioInput
        >
      | EventoCreateWithoutEtiquetaAsistioInput[]
      | EventoUncheckedCreateWithoutEtiquetaAsistioInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput[];
    createMany?: EventoCreateManyEtiquetaAsistioInputEnvelope;
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
  };

  export type EventoCreateNestedManyWithoutEtiquetaConfirmoInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaConfirmoInput,
          EventoUncheckedCreateWithoutEtiquetaConfirmoInput
        >
      | EventoCreateWithoutEtiquetaConfirmoInput[]
      | EventoUncheckedCreateWithoutEtiquetaConfirmoInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput[];
    createMany?: EventoCreateManyEtiquetaConfirmoInputEnvelope;
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
  };

  export type CuentaCreateNestedManyWithoutEtiquetasInput = {
    create?:
      | XOR<
          CuentaCreateWithoutEtiquetasInput,
          CuentaUncheckedCreateWithoutEtiquetasInput
        >
      | CuentaCreateWithoutEtiquetasInput[]
      | CuentaUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutEtiquetasInput
      | CuentaCreateOrConnectWithoutEtiquetasInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
  };

  export type PerfilCreateNestedManyWithoutEtiquetasInput = {
    create?:
      | XOR<
          PerfilCreateWithoutEtiquetasInput,
          PerfilUncheckedCreateWithoutEtiquetasInput
        >
      | PerfilCreateWithoutEtiquetasInput[]
      | PerfilUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | PerfilCreateOrConnectWithoutEtiquetasInput
      | PerfilCreateOrConnectWithoutEtiquetasInput[];
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
  };

  export type CuentaCreateNestedManyWithoutFiltroBaseInput = {
    create?:
      | XOR<
          CuentaCreateWithoutFiltroBaseInput,
          CuentaUncheckedCreateWithoutFiltroBaseInput
        >
      | CuentaCreateWithoutFiltroBaseInput[]
      | CuentaUncheckedCreateWithoutFiltroBaseInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutFiltroBaseInput
      | CuentaCreateOrConnectWithoutFiltroBaseInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
  };

  export type EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaAsistioInput,
          EventoUncheckedCreateWithoutEtiquetaAsistioInput
        >
      | EventoCreateWithoutEtiquetaAsistioInput[]
      | EventoUncheckedCreateWithoutEtiquetaAsistioInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput[];
    createMany?: EventoCreateManyEtiquetaAsistioInputEnvelope;
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
  };

  export type EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaConfirmoInput,
          EventoUncheckedCreateWithoutEtiquetaConfirmoInput
        >
      | EventoCreateWithoutEtiquetaConfirmoInput[]
      | EventoUncheckedCreateWithoutEtiquetaConfirmoInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput[];
    createMany?: EventoCreateManyEtiquetaConfirmoInputEnvelope;
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
  };

  export type CuentaUncheckedCreateNestedManyWithoutEtiquetasInput = {
    create?:
      | XOR<
          CuentaCreateWithoutEtiquetasInput,
          CuentaUncheckedCreateWithoutEtiquetasInput
        >
      | CuentaCreateWithoutEtiquetasInput[]
      | CuentaUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutEtiquetasInput
      | CuentaCreateOrConnectWithoutEtiquetasInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
  };

  export type PerfilUncheckedCreateNestedManyWithoutEtiquetasInput = {
    create?:
      | XOR<
          PerfilCreateWithoutEtiquetasInput,
          PerfilUncheckedCreateWithoutEtiquetasInput
        >
      | PerfilCreateWithoutEtiquetasInput[]
      | PerfilUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | PerfilCreateOrConnectWithoutEtiquetasInput
      | PerfilCreateOrConnectWithoutEtiquetasInput[];
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
  };

  export type CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput = {
    create?:
      | XOR<
          CuentaCreateWithoutFiltroBaseInput,
          CuentaUncheckedCreateWithoutFiltroBaseInput
        >
      | CuentaCreateWithoutFiltroBaseInput[]
      | CuentaUncheckedCreateWithoutFiltroBaseInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutFiltroBaseInput
      | CuentaCreateOrConnectWithoutFiltroBaseInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
  };

  export type EnumTipoEtiquetaFieldUpdateOperationsInput = {
    set?: $Enums.TipoEtiqueta;
  };

  export type EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput = {
    create?: XOR<
      EtiquetaGrupoCreateWithoutEtiquetasInput,
      EtiquetaGrupoUncheckedCreateWithoutEtiquetasInput
    >;
    connectOrCreate?: EtiquetaGrupoCreateOrConnectWithoutEtiquetasInput;
    upsert?: EtiquetaGrupoUpsertWithoutEtiquetasInput;
    connect?: EtiquetaGrupoWhereUniqueInput;
    update?: XOR<
      XOR<
        EtiquetaGrupoUpdateToOneWithWhereWithoutEtiquetasInput,
        EtiquetaGrupoUpdateWithoutEtiquetasInput
      >,
      EtiquetaGrupoUncheckedUpdateWithoutEtiquetasInput
    >;
  };

  export type EventoUpdateManyWithoutEtiquetaAsistioNestedInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaAsistioInput,
          EventoUncheckedCreateWithoutEtiquetaAsistioInput
        >
      | EventoCreateWithoutEtiquetaAsistioInput[]
      | EventoUncheckedCreateWithoutEtiquetaAsistioInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput[];
    upsert?:
      | EventoUpsertWithWhereUniqueWithoutEtiquetaAsistioInput
      | EventoUpsertWithWhereUniqueWithoutEtiquetaAsistioInput[];
    createMany?: EventoCreateManyEtiquetaAsistioInputEnvelope;
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    update?:
      | EventoUpdateWithWhereUniqueWithoutEtiquetaAsistioInput
      | EventoUpdateWithWhereUniqueWithoutEtiquetaAsistioInput[];
    updateMany?:
      | EventoUpdateManyWithWhereWithoutEtiquetaAsistioInput
      | EventoUpdateManyWithWhereWithoutEtiquetaAsistioInput[];
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[];
  };

  export type EventoUpdateManyWithoutEtiquetaConfirmoNestedInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaConfirmoInput,
          EventoUncheckedCreateWithoutEtiquetaConfirmoInput
        >
      | EventoCreateWithoutEtiquetaConfirmoInput[]
      | EventoUncheckedCreateWithoutEtiquetaConfirmoInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput[];
    upsert?:
      | EventoUpsertWithWhereUniqueWithoutEtiquetaConfirmoInput
      | EventoUpsertWithWhereUniqueWithoutEtiquetaConfirmoInput[];
    createMany?: EventoCreateManyEtiquetaConfirmoInputEnvelope;
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    update?:
      | EventoUpdateWithWhereUniqueWithoutEtiquetaConfirmoInput
      | EventoUpdateWithWhereUniqueWithoutEtiquetaConfirmoInput[];
    updateMany?:
      | EventoUpdateManyWithWhereWithoutEtiquetaConfirmoInput
      | EventoUpdateManyWithWhereWithoutEtiquetaConfirmoInput[];
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[];
  };

  export type CuentaUpdateManyWithoutEtiquetasNestedInput = {
    create?:
      | XOR<
          CuentaCreateWithoutEtiquetasInput,
          CuentaUncheckedCreateWithoutEtiquetasInput
        >
      | CuentaCreateWithoutEtiquetasInput[]
      | CuentaUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutEtiquetasInput
      | CuentaCreateOrConnectWithoutEtiquetasInput[];
    upsert?:
      | CuentaUpsertWithWhereUniqueWithoutEtiquetasInput
      | CuentaUpsertWithWhereUniqueWithoutEtiquetasInput[];
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    update?:
      | CuentaUpdateWithWhereUniqueWithoutEtiquetasInput
      | CuentaUpdateWithWhereUniqueWithoutEtiquetasInput[];
    updateMany?:
      | CuentaUpdateManyWithWhereWithoutEtiquetasInput
      | CuentaUpdateManyWithWhereWithoutEtiquetasInput[];
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[];
  };

  export type PerfilUpdateManyWithoutEtiquetasNestedInput = {
    create?:
      | XOR<
          PerfilCreateWithoutEtiquetasInput,
          PerfilUncheckedCreateWithoutEtiquetasInput
        >
      | PerfilCreateWithoutEtiquetasInput[]
      | PerfilUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | PerfilCreateOrConnectWithoutEtiquetasInput
      | PerfilCreateOrConnectWithoutEtiquetasInput[];
    upsert?:
      | PerfilUpsertWithWhereUniqueWithoutEtiquetasInput
      | PerfilUpsertWithWhereUniqueWithoutEtiquetasInput[];
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    update?:
      | PerfilUpdateWithWhereUniqueWithoutEtiquetasInput
      | PerfilUpdateWithWhereUniqueWithoutEtiquetasInput[];
    updateMany?:
      | PerfilUpdateManyWithWhereWithoutEtiquetasInput
      | PerfilUpdateManyWithWhereWithoutEtiquetasInput[];
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[];
  };

  export type CuentaUpdateManyWithoutFiltroBaseNestedInput = {
    create?:
      | XOR<
          CuentaCreateWithoutFiltroBaseInput,
          CuentaUncheckedCreateWithoutFiltroBaseInput
        >
      | CuentaCreateWithoutFiltroBaseInput[]
      | CuentaUncheckedCreateWithoutFiltroBaseInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutFiltroBaseInput
      | CuentaCreateOrConnectWithoutFiltroBaseInput[];
    upsert?:
      | CuentaUpsertWithWhereUniqueWithoutFiltroBaseInput
      | CuentaUpsertWithWhereUniqueWithoutFiltroBaseInput[];
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    update?:
      | CuentaUpdateWithWhereUniqueWithoutFiltroBaseInput
      | CuentaUpdateWithWhereUniqueWithoutFiltroBaseInput[];
    updateMany?:
      | CuentaUpdateManyWithWhereWithoutFiltroBaseInput
      | CuentaUpdateManyWithWhereWithoutFiltroBaseInput[];
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[];
  };

  export type EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaAsistioInput,
          EventoUncheckedCreateWithoutEtiquetaAsistioInput
        >
      | EventoCreateWithoutEtiquetaAsistioInput[]
      | EventoUncheckedCreateWithoutEtiquetaAsistioInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput
      | EventoCreateOrConnectWithoutEtiquetaAsistioInput[];
    upsert?:
      | EventoUpsertWithWhereUniqueWithoutEtiquetaAsistioInput
      | EventoUpsertWithWhereUniqueWithoutEtiquetaAsistioInput[];
    createMany?: EventoCreateManyEtiquetaAsistioInputEnvelope;
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    update?:
      | EventoUpdateWithWhereUniqueWithoutEtiquetaAsistioInput
      | EventoUpdateWithWhereUniqueWithoutEtiquetaAsistioInput[];
    updateMany?:
      | EventoUpdateManyWithWhereWithoutEtiquetaAsistioInput
      | EventoUpdateManyWithWhereWithoutEtiquetaAsistioInput[];
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[];
  };

  export type EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput = {
    create?:
      | XOR<
          EventoCreateWithoutEtiquetaConfirmoInput,
          EventoUncheckedCreateWithoutEtiquetaConfirmoInput
        >
      | EventoCreateWithoutEtiquetaConfirmoInput[]
      | EventoUncheckedCreateWithoutEtiquetaConfirmoInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput
      | EventoCreateOrConnectWithoutEtiquetaConfirmoInput[];
    upsert?:
      | EventoUpsertWithWhereUniqueWithoutEtiquetaConfirmoInput
      | EventoUpsertWithWhereUniqueWithoutEtiquetaConfirmoInput[];
    createMany?: EventoCreateManyEtiquetaConfirmoInputEnvelope;
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    update?:
      | EventoUpdateWithWhereUniqueWithoutEtiquetaConfirmoInput
      | EventoUpdateWithWhereUniqueWithoutEtiquetaConfirmoInput[];
    updateMany?:
      | EventoUpdateManyWithWhereWithoutEtiquetaConfirmoInput
      | EventoUpdateManyWithWhereWithoutEtiquetaConfirmoInput[];
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[];
  };

  export type CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput = {
    create?:
      | XOR<
          CuentaCreateWithoutEtiquetasInput,
          CuentaUncheckedCreateWithoutEtiquetasInput
        >
      | CuentaCreateWithoutEtiquetasInput[]
      | CuentaUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutEtiquetasInput
      | CuentaCreateOrConnectWithoutEtiquetasInput[];
    upsert?:
      | CuentaUpsertWithWhereUniqueWithoutEtiquetasInput
      | CuentaUpsertWithWhereUniqueWithoutEtiquetasInput[];
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    update?:
      | CuentaUpdateWithWhereUniqueWithoutEtiquetasInput
      | CuentaUpdateWithWhereUniqueWithoutEtiquetasInput[];
    updateMany?:
      | CuentaUpdateManyWithWhereWithoutEtiquetasInput
      | CuentaUpdateManyWithWhereWithoutEtiquetasInput[];
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[];
  };

  export type PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput = {
    create?:
      | XOR<
          PerfilCreateWithoutEtiquetasInput,
          PerfilUncheckedCreateWithoutEtiquetasInput
        >
      | PerfilCreateWithoutEtiquetasInput[]
      | PerfilUncheckedCreateWithoutEtiquetasInput[];
    connectOrCreate?:
      | PerfilCreateOrConnectWithoutEtiquetasInput
      | PerfilCreateOrConnectWithoutEtiquetasInput[];
    upsert?:
      | PerfilUpsertWithWhereUniqueWithoutEtiquetasInput
      | PerfilUpsertWithWhereUniqueWithoutEtiquetasInput[];
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[];
    update?:
      | PerfilUpdateWithWhereUniqueWithoutEtiquetasInput
      | PerfilUpdateWithWhereUniqueWithoutEtiquetasInput[];
    updateMany?:
      | PerfilUpdateManyWithWhereWithoutEtiquetasInput
      | PerfilUpdateManyWithWhereWithoutEtiquetasInput[];
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[];
  };

  export type CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput = {
    create?:
      | XOR<
          CuentaCreateWithoutFiltroBaseInput,
          CuentaUncheckedCreateWithoutFiltroBaseInput
        >
      | CuentaCreateWithoutFiltroBaseInput[]
      | CuentaUncheckedCreateWithoutFiltroBaseInput[];
    connectOrCreate?:
      | CuentaCreateOrConnectWithoutFiltroBaseInput
      | CuentaCreateOrConnectWithoutFiltroBaseInput[];
    upsert?:
      | CuentaUpsertWithWhereUniqueWithoutFiltroBaseInput
      | CuentaUpsertWithWhereUniqueWithoutFiltroBaseInput[];
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[];
    update?:
      | CuentaUpdateWithWhereUniqueWithoutFiltroBaseInput
      | CuentaUpdateWithWhereUniqueWithoutFiltroBaseInput[];
    updateMany?:
      | CuentaUpdateManyWithWhereWithoutFiltroBaseInput
      | CuentaUpdateManyWithWhereWithoutFiltroBaseInput[];
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[];
  };

  export type EtiquetaCreateNestedManyWithoutGrupoInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutGrupoInput,
          EtiquetaUncheckedCreateWithoutGrupoInput
        >
      | EtiquetaCreateWithoutGrupoInput[]
      | EtiquetaUncheckedCreateWithoutGrupoInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutGrupoInput
      | EtiquetaCreateOrConnectWithoutGrupoInput[];
    createMany?: EtiquetaCreateManyGrupoInputEnvelope;
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type EtiquetaUncheckedCreateNestedManyWithoutGrupoInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutGrupoInput,
          EtiquetaUncheckedCreateWithoutGrupoInput
        >
      | EtiquetaCreateWithoutGrupoInput[]
      | EtiquetaUncheckedCreateWithoutGrupoInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutGrupoInput
      | EtiquetaCreateOrConnectWithoutGrupoInput[];
    createMany?: EtiquetaCreateManyGrupoInputEnvelope;
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
  };

  export type EtiquetaUpdateManyWithoutGrupoNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutGrupoInput,
          EtiquetaUncheckedCreateWithoutGrupoInput
        >
      | EtiquetaCreateWithoutGrupoInput[]
      | EtiquetaUncheckedCreateWithoutGrupoInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutGrupoInput
      | EtiquetaCreateOrConnectWithoutGrupoInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutGrupoInput
      | EtiquetaUpsertWithWhereUniqueWithoutGrupoInput[];
    createMany?: EtiquetaCreateManyGrupoInputEnvelope;
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutGrupoInput
      | EtiquetaUpdateWithWhereUniqueWithoutGrupoInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutGrupoInput
      | EtiquetaUpdateManyWithWhereWithoutGrupoInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type EtiquetaUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?:
      | XOR<
          EtiquetaCreateWithoutGrupoInput,
          EtiquetaUncheckedCreateWithoutGrupoInput
        >
      | EtiquetaCreateWithoutGrupoInput[]
      | EtiquetaUncheckedCreateWithoutGrupoInput[];
    connectOrCreate?:
      | EtiquetaCreateOrConnectWithoutGrupoInput
      | EtiquetaCreateOrConnectWithoutGrupoInput[];
    upsert?:
      | EtiquetaUpsertWithWhereUniqueWithoutGrupoInput
      | EtiquetaUpsertWithWhereUniqueWithoutGrupoInput[];
    createMany?: EtiquetaCreateManyGrupoInputEnvelope;
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[];
    update?:
      | EtiquetaUpdateWithWhereUniqueWithoutGrupoInput
      | EtiquetaUpdateWithWhereUniqueWithoutGrupoInput[];
    updateMany?:
      | EtiquetaUpdateManyWithWhereWithoutGrupoInput
      | EtiquetaUpdateManyWithWhereWithoutGrupoInput[];
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
  };

  export type EtiquetaCreateNestedOneWithoutEventosAsistidosInput = {
    create?: XOR<
      EtiquetaCreateWithoutEventosAsistidosInput,
      EtiquetaUncheckedCreateWithoutEventosAsistidosInput
    >;
    connectOrCreate?: EtiquetaCreateOrConnectWithoutEventosAsistidosInput;
    connect?: EtiquetaWhereUniqueInput;
  };

  export type EtiquetaCreateNestedOneWithoutEventosConfirmadosInput = {
    create?: XOR<
      EtiquetaCreateWithoutEventosConfirmadosInput,
      EtiquetaUncheckedCreateWithoutEventosConfirmadosInput
    >;
    connectOrCreate?: EtiquetaCreateOrConnectWithoutEventosConfirmadosInput;
    connect?: EtiquetaWhereUniqueInput;
  };

  export type EventoCreateNestedOneWithoutSubEventosInput = {
    create?: XOR<
      EventoCreateWithoutSubEventosInput,
      EventoUncheckedCreateWithoutSubEventosInput
    >;
    connectOrCreate?: EventoCreateOrConnectWithoutSubEventosInput;
    connect?: EventoWhereUniqueInput;
  };

  export type EventoCreateNestedManyWithoutEventoPadreInput = {
    create?:
      | XOR<
          EventoCreateWithoutEventoPadreInput,
          EventoUncheckedCreateWithoutEventoPadreInput
        >
      | EventoCreateWithoutEventoPadreInput[]
      | EventoUncheckedCreateWithoutEventoPadreInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEventoPadreInput
      | EventoCreateOrConnectWithoutEventoPadreInput[];
    createMany?: EventoCreateManyEventoPadreInputEnvelope;
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
  };

  export type EventoUncheckedCreateNestedManyWithoutEventoPadreInput = {
    create?:
      | XOR<
          EventoCreateWithoutEventoPadreInput,
          EventoUncheckedCreateWithoutEventoPadreInput
        >
      | EventoCreateWithoutEventoPadreInput[]
      | EventoUncheckedCreateWithoutEventoPadreInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEventoPadreInput
      | EventoCreateOrConnectWithoutEventoPadreInput[];
    createMany?: EventoCreateManyEventoPadreInputEnvelope;
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
  };

  export type EtiquetaUpdateOneRequiredWithoutEventosAsistidosNestedInput = {
    create?: XOR<
      EtiquetaCreateWithoutEventosAsistidosInput,
      EtiquetaUncheckedCreateWithoutEventosAsistidosInput
    >;
    connectOrCreate?: EtiquetaCreateOrConnectWithoutEventosAsistidosInput;
    upsert?: EtiquetaUpsertWithoutEventosAsistidosInput;
    connect?: EtiquetaWhereUniqueInput;
    update?: XOR<
      XOR<
        EtiquetaUpdateToOneWithWhereWithoutEventosAsistidosInput,
        EtiquetaUpdateWithoutEventosAsistidosInput
      >,
      EtiquetaUncheckedUpdateWithoutEventosAsistidosInput
    >;
  };

  export type EtiquetaUpdateOneRequiredWithoutEventosConfirmadosNestedInput = {
    create?: XOR<
      EtiquetaCreateWithoutEventosConfirmadosInput,
      EtiquetaUncheckedCreateWithoutEventosConfirmadosInput
    >;
    connectOrCreate?: EtiquetaCreateOrConnectWithoutEventosConfirmadosInput;
    upsert?: EtiquetaUpsertWithoutEventosConfirmadosInput;
    connect?: EtiquetaWhereUniqueInput;
    update?: XOR<
      XOR<
        EtiquetaUpdateToOneWithWhereWithoutEventosConfirmadosInput,
        EtiquetaUpdateWithoutEventosConfirmadosInput
      >,
      EtiquetaUncheckedUpdateWithoutEventosConfirmadosInput
    >;
  };

  export type EventoUpdateOneWithoutSubEventosNestedInput = {
    create?: XOR<
      EventoCreateWithoutSubEventosInput,
      EventoUncheckedCreateWithoutSubEventosInput
    >;
    connectOrCreate?: EventoCreateOrConnectWithoutSubEventosInput;
    upsert?: EventoUpsertWithoutSubEventosInput;
    disconnect?: EventoWhereInput | boolean;
    delete?: EventoWhereInput | boolean;
    connect?: EventoWhereUniqueInput;
    update?: XOR<
      XOR<
        EventoUpdateToOneWithWhereWithoutSubEventosInput,
        EventoUpdateWithoutSubEventosInput
      >,
      EventoUncheckedUpdateWithoutSubEventosInput
    >;
  };

  export type EventoUpdateManyWithoutEventoPadreNestedInput = {
    create?:
      | XOR<
          EventoCreateWithoutEventoPadreInput,
          EventoUncheckedCreateWithoutEventoPadreInput
        >
      | EventoCreateWithoutEventoPadreInput[]
      | EventoUncheckedCreateWithoutEventoPadreInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEventoPadreInput
      | EventoCreateOrConnectWithoutEventoPadreInput[];
    upsert?:
      | EventoUpsertWithWhereUniqueWithoutEventoPadreInput
      | EventoUpsertWithWhereUniqueWithoutEventoPadreInput[];
    createMany?: EventoCreateManyEventoPadreInputEnvelope;
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    update?:
      | EventoUpdateWithWhereUniqueWithoutEventoPadreInput
      | EventoUpdateWithWhereUniqueWithoutEventoPadreInput[];
    updateMany?:
      | EventoUpdateManyWithWhereWithoutEventoPadreInput
      | EventoUpdateManyWithWhereWithoutEventoPadreInput[];
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[];
  };

  export type EventoUncheckedUpdateManyWithoutEventoPadreNestedInput = {
    create?:
      | XOR<
          EventoCreateWithoutEventoPadreInput,
          EventoUncheckedCreateWithoutEventoPadreInput
        >
      | EventoCreateWithoutEventoPadreInput[]
      | EventoUncheckedCreateWithoutEventoPadreInput[];
    connectOrCreate?:
      | EventoCreateOrConnectWithoutEventoPadreInput
      | EventoCreateOrConnectWithoutEventoPadreInput[];
    upsert?:
      | EventoUpsertWithWhereUniqueWithoutEventoPadreInput
      | EventoUpsertWithWhereUniqueWithoutEventoPadreInput[];
    createMany?: EventoCreateManyEventoPadreInputEnvelope;
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[];
    update?:
      | EventoUpdateWithWhereUniqueWithoutEventoPadreInput
      | EventoUpdateWithWhereUniqueWithoutEventoPadreInput[];
    updateMany?:
      | EventoUpdateManyWithWhereWithoutEventoPadreInput
      | EventoUpdateManyWithWhereWithoutEventoPadreInput[];
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[];
  };

  export type PerfilCreateNestedOneWithoutMensajesInput = {
    create?: XOR<
      PerfilCreateWithoutMensajesInput,
      PerfilUncheckedCreateWithoutMensajesInput
    >;
    connectOrCreate?: PerfilCreateOrConnectWithoutMensajesInput;
    connect?: PerfilWhereUniqueInput;
  };

  export type EnumMensajeStatusFieldUpdateOperationsInput = {
    set?: $Enums.MensajeStatus;
  };

  export type PerfilUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<
      PerfilCreateWithoutMensajesInput,
      PerfilUncheckedCreateWithoutMensajesInput
    >;
    connectOrCreate?: PerfilCreateOrConnectWithoutMensajesInput;
    upsert?: PerfilUpsertWithoutMensajesInput;
    connect?: PerfilWhereUniqueInput;
    update?: XOR<
      XOR<
        PerfilUpdateToOneWithWhereWithoutMensajesInput,
        PerfilUpdateWithoutMensajesInput
      >,
      PerfilUncheckedUpdateWithoutMensajesInput
    >;
  };

  export type EnumEstadoPlantillaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPlantilla;
  };

  export type EnumCategoriaPlantillaFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaPlantilla;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedEnumTipoEtiquetaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEtiqueta | EnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TipoEtiqueta[]
      | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TipoEtiqueta[]
      | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
    not?: NestedEnumTipoEtiquetaFilter<$PrismaModel> | $Enums.TipoEtiqueta;
  };

  export type NestedEnumTipoEtiquetaWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.TipoEtiqueta
        | EnumTipoEtiquetaFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.TipoEtiqueta[]
        | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.TipoEtiqueta[]
        | ListEnumTipoEtiquetaFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumTipoEtiquetaWithAggregatesFilter<$PrismaModel>
        | $Enums.TipoEtiqueta;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumTipoEtiquetaFilter<$PrismaModel>;
      _max?: NestedEnumTipoEtiquetaFilter<$PrismaModel>;
    };

  export type NestedEnumMensajeStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.MensajeStatus
      | EnumMensajeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMensajeStatusFilter<$PrismaModel> | $Enums.MensajeStatus;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedEnumMensajeStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.MensajeStatus
      | EnumMensajeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MensajeStatus[]
      | ListEnumMensajeStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMensajeStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.MensajeStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMensajeStatusFilter<$PrismaModel>;
    _max?: NestedEnumMensajeStatusFilter<$PrismaModel>;
  };

  export type NestedEnumEstadoPlantillaFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EstadoPlantilla
      | EnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEstadoPlantillaFilter<$PrismaModel>
      | $Enums.EstadoPlantilla;
  };

  export type NestedEnumCategoriaPlantillaFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CategoriaPlantilla
      | EnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CategoriaPlantilla[]
      | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CategoriaPlantilla[]
      | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCategoriaPlantillaFilter<$PrismaModel>
      | $Enums.CategoriaPlantilla;
  };

  export type NestedEnumEstadoPlantillaWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.EstadoPlantilla
      | EnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoPlantilla[]
      | ListEnumEstadoPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEstadoPlantillaWithAggregatesFilter<$PrismaModel>
      | $Enums.EstadoPlantilla;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEstadoPlantillaFilter<$PrismaModel>;
    _max?: NestedEnumEstadoPlantillaFilter<$PrismaModel>;
  };

  export type NestedEnumCategoriaPlantillaWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.CategoriaPlantilla
      | EnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CategoriaPlantilla[]
      | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CategoriaPlantilla[]
      | ListEnumCategoriaPlantillaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCategoriaPlantillaWithAggregatesFilter<$PrismaModel>
      | $Enums.CategoriaPlantilla;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCategoriaPlantillaFilter<$PrismaModel>;
    _max?: NestedEnumCategoriaPlantillaFilter<$PrismaModel>;
  };

  export type ComentarioCreateWithoutCuentaInput = {
    id?: string;
    contenido: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    perfil: PerfilCreateNestedOneWithoutComentariosInput;
  };

  export type ComentarioUncheckedCreateWithoutCuentaInput = {
    id?: string;
    contenido: string;
    perfilId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ComentarioCreateOrConnectWithoutCuentaInput = {
    where: ComentarioWhereUniqueInput;
    create: XOR<
      ComentarioCreateWithoutCuentaInput,
      ComentarioUncheckedCreateWithoutCuentaInput
    >;
  };

  export type ComentarioCreateManyCuentaInputEnvelope = {
    data: ComentarioCreateManyCuentaInput | ComentarioCreateManyCuentaInput[];
    skipDuplicates?: boolean;
  };

  export type EtiquetaCreateWithoutCuentasInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    grupo: EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput;
    eventosAsistidos?: EventoCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoCreateNestedManyWithoutEtiquetaConfirmoInput;
    perfiles?: PerfilCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUncheckedCreateWithoutCuentasInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput;
    perfiles?: PerfilUncheckedCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaCreateOrConnectWithoutCuentasInput = {
    where: EtiquetaWhereUniqueInput;
    create: XOR<
      EtiquetaCreateWithoutCuentasInput,
      EtiquetaUncheckedCreateWithoutCuentasInput
    >;
  };

  export type EtiquetaCreateWithoutCuentasFiltroBaseInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    grupo: EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput;
    eventosAsistidos?: EventoCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilCreateNestedManyWithoutEtiquetasInput;
  };

  export type EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaUncheckedCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilUncheckedCreateNestedManyWithoutEtiquetasInput;
  };

  export type EtiquetaCreateOrConnectWithoutCuentasFiltroBaseInput = {
    where: EtiquetaWhereUniqueInput;
    create: XOR<
      EtiquetaCreateWithoutCuentasFiltroBaseInput,
      EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput
    >;
  };

  export type ComentarioUpsertWithWhereUniqueWithoutCuentaInput = {
    where: ComentarioWhereUniqueInput;
    update: XOR<
      ComentarioUpdateWithoutCuentaInput,
      ComentarioUncheckedUpdateWithoutCuentaInput
    >;
    create: XOR<
      ComentarioCreateWithoutCuentaInput,
      ComentarioUncheckedCreateWithoutCuentaInput
    >;
  };

  export type ComentarioUpdateWithWhereUniqueWithoutCuentaInput = {
    where: ComentarioWhereUniqueInput;
    data: XOR<
      ComentarioUpdateWithoutCuentaInput,
      ComentarioUncheckedUpdateWithoutCuentaInput
    >;
  };

  export type ComentarioUpdateManyWithWhereWithoutCuentaInput = {
    where: ComentarioScalarWhereInput;
    data: XOR<
      ComentarioUpdateManyMutationInput,
      ComentarioUncheckedUpdateManyWithoutCuentaInput
    >;
  };

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[];
    OR?: ComentarioScalarWhereInput[];
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[];
    id?: StringFilter<'Comentario'> | string;
    contenido?: StringFilter<'Comentario'> | string;
    creadoPor?: StringFilter<'Comentario'> | string;
    perfilId?: StringFilter<'Comentario'> | string;
    created_at?: DateTimeFilter<'Comentario'> | Date | string;
    updated_at?: DateTimeFilter<'Comentario'> | Date | string;
  };

  export type EtiquetaUpsertWithWhereUniqueWithoutCuentasInput = {
    where: EtiquetaWhereUniqueInput;
    update: XOR<
      EtiquetaUpdateWithoutCuentasInput,
      EtiquetaUncheckedUpdateWithoutCuentasInput
    >;
    create: XOR<
      EtiquetaCreateWithoutCuentasInput,
      EtiquetaUncheckedCreateWithoutCuentasInput
    >;
  };

  export type EtiquetaUpdateWithWhereUniqueWithoutCuentasInput = {
    where: EtiquetaWhereUniqueInput;
    data: XOR<
      EtiquetaUpdateWithoutCuentasInput,
      EtiquetaUncheckedUpdateWithoutCuentasInput
    >;
  };

  export type EtiquetaUpdateManyWithWhereWithoutCuentasInput = {
    where: EtiquetaScalarWhereInput;
    data: XOR<
      EtiquetaUpdateManyMutationInput,
      EtiquetaUncheckedUpdateManyWithoutCuentasInput
    >;
  };

  export type EtiquetaScalarWhereInput = {
    AND?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
    OR?: EtiquetaScalarWhereInput[];
    NOT?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[];
    id?: StringFilter<'Etiqueta'> | string;
    nombre?: StringFilter<'Etiqueta'> | string;
    grupoId?: StringFilter<'Etiqueta'> | string;
    tipo?: EnumTipoEtiquetaFilter<'Etiqueta'> | $Enums.TipoEtiqueta;
    created_at?: DateTimeFilter<'Etiqueta'> | Date | string;
    updated_at?: DateTimeFilter<'Etiqueta'> | Date | string;
  };

  export type EtiquetaUpsertWithWhereUniqueWithoutCuentasFiltroBaseInput = {
    where: EtiquetaWhereUniqueInput;
    update: XOR<
      EtiquetaUpdateWithoutCuentasFiltroBaseInput,
      EtiquetaUncheckedUpdateWithoutCuentasFiltroBaseInput
    >;
    create: XOR<
      EtiquetaCreateWithoutCuentasFiltroBaseInput,
      EtiquetaUncheckedCreateWithoutCuentasFiltroBaseInput
    >;
  };

  export type EtiquetaUpdateWithWhereUniqueWithoutCuentasFiltroBaseInput = {
    where: EtiquetaWhereUniqueInput;
    data: XOR<
      EtiquetaUpdateWithoutCuentasFiltroBaseInput,
      EtiquetaUncheckedUpdateWithoutCuentasFiltroBaseInput
    >;
  };

  export type EtiquetaUpdateManyWithWhereWithoutCuentasFiltroBaseInput = {
    where: EtiquetaScalarWhereInput;
    data: XOR<
      EtiquetaUpdateManyMutationInput,
      EtiquetaUncheckedUpdateManyWithoutCuentasFiltroBaseInput
    >;
  };

  export type ComentarioCreateWithoutPerfilInput = {
    id?: string;
    contenido: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cuenta: CuentaCreateNestedOneWithoutComentariosInput;
  };

  export type ComentarioUncheckedCreateWithoutPerfilInput = {
    id?: string;
    contenido: string;
    creadoPor: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ComentarioCreateOrConnectWithoutPerfilInput = {
    where: ComentarioWhereUniqueInput;
    create: XOR<
      ComentarioCreateWithoutPerfilInput,
      ComentarioUncheckedCreateWithoutPerfilInput
    >;
  };

  export type ComentarioCreateManyPerfilInputEnvelope = {
    data: ComentarioCreateManyPerfilInput | ComentarioCreateManyPerfilInput[];
    skipDuplicates?: boolean;
  };

  export type MensajeCreateWithoutPerfilInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    status?: $Enums.MensajeStatus;
    statusAt?: Date | string | null;
    visto?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MensajeUncheckedCreateWithoutPerfilInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    status?: $Enums.MensajeStatus;
    statusAt?: Date | string | null;
    visto?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MensajeCreateOrConnectWithoutPerfilInput = {
    where: MensajeWhereUniqueInput;
    create: XOR<
      MensajeCreateWithoutPerfilInput,
      MensajeUncheckedCreateWithoutPerfilInput
    >;
  };

  export type MensajeCreateManyPerfilInputEnvelope = {
    data: MensajeCreateManyPerfilInput | MensajeCreateManyPerfilInput[];
    skipDuplicates?: boolean;
  };

  export type EtiquetaCreateWithoutPerfilesInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    grupo: EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput;
    eventosAsistidos?: EventoCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUncheckedCreateWithoutPerfilesInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaUncheckedCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaCreateOrConnectWithoutPerfilesInput = {
    where: EtiquetaWhereUniqueInput;
    create: XOR<
      EtiquetaCreateWithoutPerfilesInput,
      EtiquetaUncheckedCreateWithoutPerfilesInput
    >;
  };

  export type ComentarioUpsertWithWhereUniqueWithoutPerfilInput = {
    where: ComentarioWhereUniqueInput;
    update: XOR<
      ComentarioUpdateWithoutPerfilInput,
      ComentarioUncheckedUpdateWithoutPerfilInput
    >;
    create: XOR<
      ComentarioCreateWithoutPerfilInput,
      ComentarioUncheckedCreateWithoutPerfilInput
    >;
  };

  export type ComentarioUpdateWithWhereUniqueWithoutPerfilInput = {
    where: ComentarioWhereUniqueInput;
    data: XOR<
      ComentarioUpdateWithoutPerfilInput,
      ComentarioUncheckedUpdateWithoutPerfilInput
    >;
  };

  export type ComentarioUpdateManyWithWhereWithoutPerfilInput = {
    where: ComentarioScalarWhereInput;
    data: XOR<
      ComentarioUpdateManyMutationInput,
      ComentarioUncheckedUpdateManyWithoutPerfilInput
    >;
  };

  export type MensajeUpsertWithWhereUniqueWithoutPerfilInput = {
    where: MensajeWhereUniqueInput;
    update: XOR<
      MensajeUpdateWithoutPerfilInput,
      MensajeUncheckedUpdateWithoutPerfilInput
    >;
    create: XOR<
      MensajeCreateWithoutPerfilInput,
      MensajeUncheckedCreateWithoutPerfilInput
    >;
  };

  export type MensajeUpdateWithWhereUniqueWithoutPerfilInput = {
    where: MensajeWhereUniqueInput;
    data: XOR<
      MensajeUpdateWithoutPerfilInput,
      MensajeUncheckedUpdateWithoutPerfilInput
    >;
  };

  export type MensajeUpdateManyWithWhereWithoutPerfilInput = {
    where: MensajeScalarWhereInput;
    data: XOR<
      MensajeUpdateManyMutationInput,
      MensajeUncheckedUpdateManyWithoutPerfilInput
    >;
  };

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[];
    OR?: MensajeScalarWhereInput[];
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[];
    id?: StringFilter<'Mensaje'> | string;
    wamId?: StringFilter<'Mensaje'> | string;
    message?: JsonFilter<'Mensaje'>;
    perfilTelefono?: StringFilter<'Mensaje'> | string;
    status?: EnumMensajeStatusFilter<'Mensaje'> | $Enums.MensajeStatus;
    statusAt?: DateTimeNullableFilter<'Mensaje'> | Date | string | null;
    visto?: BoolFilter<'Mensaje'> | boolean;
    created_at?: DateTimeFilter<'Mensaje'> | Date | string;
    updated_at?: DateTimeFilter<'Mensaje'> | Date | string;
  };

  export type EtiquetaUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: EtiquetaWhereUniqueInput;
    update: XOR<
      EtiquetaUpdateWithoutPerfilesInput,
      EtiquetaUncheckedUpdateWithoutPerfilesInput
    >;
    create: XOR<
      EtiquetaCreateWithoutPerfilesInput,
      EtiquetaUncheckedCreateWithoutPerfilesInput
    >;
  };

  export type EtiquetaUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: EtiquetaWhereUniqueInput;
    data: XOR<
      EtiquetaUpdateWithoutPerfilesInput,
      EtiquetaUncheckedUpdateWithoutPerfilesInput
    >;
  };

  export type EtiquetaUpdateManyWithWhereWithoutPerfilesInput = {
    where: EtiquetaScalarWhereInput;
    data: XOR<
      EtiquetaUpdateManyMutationInput,
      EtiquetaUncheckedUpdateManyWithoutPerfilesInput
    >;
  };

  export type CuentaCreateWithoutComentariosInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    etiquetas?: EtiquetaCreateNestedManyWithoutCuentasInput;
    filtroBase?: EtiquetaCreateNestedManyWithoutCuentasFiltroBaseInput;
  };

  export type CuentaUncheckedCreateWithoutComentariosInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutCuentasInput;
    filtroBase?: EtiquetaUncheckedCreateNestedManyWithoutCuentasFiltroBaseInput;
  };

  export type CuentaCreateOrConnectWithoutComentariosInput = {
    where: CuentaWhereUniqueInput;
    create: XOR<
      CuentaCreateWithoutComentariosInput,
      CuentaUncheckedCreateWithoutComentariosInput
    >;
  };

  export type PerfilCreateWithoutComentariosInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    mensajes?: MensajeCreateNestedManyWithoutPerfilInput;
    etiquetas?: EtiquetaCreateNestedManyWithoutPerfilesInput;
  };

  export type PerfilUncheckedCreateWithoutComentariosInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    mensajes?: MensajeUncheckedCreateNestedManyWithoutPerfilInput;
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutPerfilesInput;
  };

  export type PerfilCreateOrConnectWithoutComentariosInput = {
    where: PerfilWhereUniqueInput;
    create: XOR<
      PerfilCreateWithoutComentariosInput,
      PerfilUncheckedCreateWithoutComentariosInput
    >;
  };

  export type CuentaUpsertWithoutComentariosInput = {
    update: XOR<
      CuentaUpdateWithoutComentariosInput,
      CuentaUncheckedUpdateWithoutComentariosInput
    >;
    create: XOR<
      CuentaCreateWithoutComentariosInput,
      CuentaUncheckedCreateWithoutComentariosInput
    >;
    where?: CuentaWhereInput;
  };

  export type CuentaUpdateToOneWithWhereWithoutComentariosInput = {
    where?: CuentaWhereInput;
    data: XOR<
      CuentaUpdateWithoutComentariosInput,
      CuentaUncheckedUpdateWithoutComentariosInput
    >;
  };

  export type CuentaUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    etiquetas?: EtiquetaUpdateManyWithoutCuentasNestedInput;
    filtroBase?: EtiquetaUpdateManyWithoutCuentasFiltroBaseNestedInput;
  };

  export type CuentaUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutCuentasNestedInput;
    filtroBase?: EtiquetaUncheckedUpdateManyWithoutCuentasFiltroBaseNestedInput;
  };

  export type PerfilUpsertWithoutComentariosInput = {
    update: XOR<
      PerfilUpdateWithoutComentariosInput,
      PerfilUncheckedUpdateWithoutComentariosInput
    >;
    create: XOR<
      PerfilCreateWithoutComentariosInput,
      PerfilUncheckedCreateWithoutComentariosInput
    >;
    where?: PerfilWhereInput;
  };

  export type PerfilUpdateToOneWithWhereWithoutComentariosInput = {
    where?: PerfilWhereInput;
    data: XOR<
      PerfilUpdateWithoutComentariosInput,
      PerfilUncheckedUpdateWithoutComentariosInput
    >;
  };

  export type PerfilUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    mensajes?: MensajeUpdateManyWithoutPerfilNestedInput;
    etiquetas?: EtiquetaUpdateManyWithoutPerfilesNestedInput;
  };

  export type PerfilUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    mensajes?: MensajeUncheckedUpdateManyWithoutPerfilNestedInput;
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutPerfilesNestedInput;
  };

  export type EtiquetaGrupoCreateWithoutEtiquetasInput = {
    id?: string;
    nombre: string;
    color: string;
    esExclusivo: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EtiquetaGrupoUncheckedCreateWithoutEtiquetasInput = {
    id?: string;
    nombre: string;
    color: string;
    esExclusivo: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EtiquetaGrupoCreateOrConnectWithoutEtiquetasInput = {
    where: EtiquetaGrupoWhereUniqueInput;
    create: XOR<
      EtiquetaGrupoCreateWithoutEtiquetasInput,
      EtiquetaGrupoUncheckedCreateWithoutEtiquetasInput
    >;
  };

  export type EventoCreateWithoutEtiquetaAsistioInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetaConfirmo: EtiquetaCreateNestedOneWithoutEventosConfirmadosInput;
    eventoPadre?: EventoCreateNestedOneWithoutSubEventosInput;
    subEventos?: EventoCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoUncheckedCreateWithoutEtiquetaAsistioInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaConfirmoId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEventos?: EventoUncheckedCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoCreateOrConnectWithoutEtiquetaAsistioInput = {
    where: EventoWhereUniqueInput;
    create: XOR<
      EventoCreateWithoutEtiquetaAsistioInput,
      EventoUncheckedCreateWithoutEtiquetaAsistioInput
    >;
  };

  export type EventoCreateManyEtiquetaAsistioInputEnvelope = {
    data:
      | EventoCreateManyEtiquetaAsistioInput
      | EventoCreateManyEtiquetaAsistioInput[];
    skipDuplicates?: boolean;
  };

  export type EventoCreateWithoutEtiquetaConfirmoInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetaAsistio: EtiquetaCreateNestedOneWithoutEventosAsistidosInput;
    eventoPadre?: EventoCreateNestedOneWithoutSubEventosInput;
    subEventos?: EventoCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoUncheckedCreateWithoutEtiquetaConfirmoInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEventos?: EventoUncheckedCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoCreateOrConnectWithoutEtiquetaConfirmoInput = {
    where: EventoWhereUniqueInput;
    create: XOR<
      EventoCreateWithoutEtiquetaConfirmoInput,
      EventoUncheckedCreateWithoutEtiquetaConfirmoInput
    >;
  };

  export type EventoCreateManyEtiquetaConfirmoInputEnvelope = {
    data:
      | EventoCreateManyEtiquetaConfirmoInput
      | EventoCreateManyEtiquetaConfirmoInput[];
    skipDuplicates?: boolean;
  };

  export type CuentaCreateWithoutEtiquetasInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    comentarios?: ComentarioCreateNestedManyWithoutCuentaInput;
    filtroBase?: EtiquetaCreateNestedManyWithoutCuentasFiltroBaseInput;
  };

  export type CuentaUncheckedCreateWithoutEtiquetasInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutCuentaInput;
    filtroBase?: EtiquetaUncheckedCreateNestedManyWithoutCuentasFiltroBaseInput;
  };

  export type CuentaCreateOrConnectWithoutEtiquetasInput = {
    where: CuentaWhereUniqueInput;
    create: XOR<
      CuentaCreateWithoutEtiquetasInput,
      CuentaUncheckedCreateWithoutEtiquetasInput
    >;
  };

  export type PerfilCreateWithoutEtiquetasInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comentarios?: ComentarioCreateNestedManyWithoutPerfilInput;
    mensajes?: MensajeCreateNestedManyWithoutPerfilInput;
  };

  export type PerfilUncheckedCreateWithoutEtiquetasInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPerfilInput;
    mensajes?: MensajeUncheckedCreateNestedManyWithoutPerfilInput;
  };

  export type PerfilCreateOrConnectWithoutEtiquetasInput = {
    where: PerfilWhereUniqueInput;
    create: XOR<
      PerfilCreateWithoutEtiquetasInput,
      PerfilUncheckedCreateWithoutEtiquetasInput
    >;
  };

  export type CuentaCreateWithoutFiltroBaseInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    comentarios?: ComentarioCreateNestedManyWithoutCuentaInput;
    etiquetas?: EtiquetaCreateNestedManyWithoutCuentasInput;
  };

  export type CuentaUncheckedCreateWithoutFiltroBaseInput = {
    id?: string;
    nombreUsuario: string;
    contrasena: string;
    esAdmin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    filtroBaseActivo?: boolean;
    fcmToken?: CuentaCreatefcmTokenInput | string[];
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutCuentaInput;
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutCuentasInput;
  };

  export type CuentaCreateOrConnectWithoutFiltroBaseInput = {
    where: CuentaWhereUniqueInput;
    create: XOR<
      CuentaCreateWithoutFiltroBaseInput,
      CuentaUncheckedCreateWithoutFiltroBaseInput
    >;
  };

  export type EtiquetaGrupoUpsertWithoutEtiquetasInput = {
    update: XOR<
      EtiquetaGrupoUpdateWithoutEtiquetasInput,
      EtiquetaGrupoUncheckedUpdateWithoutEtiquetasInput
    >;
    create: XOR<
      EtiquetaGrupoCreateWithoutEtiquetasInput,
      EtiquetaGrupoUncheckedCreateWithoutEtiquetasInput
    >;
    where?: EtiquetaGrupoWhereInput;
  };

  export type EtiquetaGrupoUpdateToOneWithWhereWithoutEtiquetasInput = {
    where?: EtiquetaGrupoWhereInput;
    data: XOR<
      EtiquetaGrupoUpdateWithoutEtiquetasInput,
      EtiquetaGrupoUncheckedUpdateWithoutEtiquetasInput
    >;
  };

  export type EtiquetaGrupoUpdateWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    esExclusivo?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaGrupoUncheckedUpdateWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    esExclusivo?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoUpsertWithWhereUniqueWithoutEtiquetaAsistioInput = {
    where: EventoWhereUniqueInput;
    update: XOR<
      EventoUpdateWithoutEtiquetaAsistioInput,
      EventoUncheckedUpdateWithoutEtiquetaAsistioInput
    >;
    create: XOR<
      EventoCreateWithoutEtiquetaAsistioInput,
      EventoUncheckedCreateWithoutEtiquetaAsistioInput
    >;
  };

  export type EventoUpdateWithWhereUniqueWithoutEtiquetaAsistioInput = {
    where: EventoWhereUniqueInput;
    data: XOR<
      EventoUpdateWithoutEtiquetaAsistioInput,
      EventoUncheckedUpdateWithoutEtiquetaAsistioInput
    >;
  };

  export type EventoUpdateManyWithWhereWithoutEtiquetaAsistioInput = {
    where: EventoScalarWhereInput;
    data: XOR<
      EventoUpdateManyMutationInput,
      EventoUncheckedUpdateManyWithoutEtiquetaAsistioInput
    >;
  };

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[];
    OR?: EventoScalarWhereInput[];
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[];
    id?: StringFilter<'Evento'> | string;
    nombre?: StringFilter<'Evento'> | string;
    fecha?: DateTimeFilter<'Evento'> | Date | string;
    ubicacion?: StringFilter<'Evento'> | string;
    etiquetaAsistioId?: StringFilter<'Evento'> | string;
    etiquetaConfirmoId?: StringFilter<'Evento'> | string;
    eventoPadreId?: StringNullableFilter<'Evento'> | string | null;
    created_at?: DateTimeFilter<'Evento'> | Date | string;
    updated_at?: DateTimeFilter<'Evento'> | Date | string;
  };

  export type EventoUpsertWithWhereUniqueWithoutEtiquetaConfirmoInput = {
    where: EventoWhereUniqueInput;
    update: XOR<
      EventoUpdateWithoutEtiquetaConfirmoInput,
      EventoUncheckedUpdateWithoutEtiquetaConfirmoInput
    >;
    create: XOR<
      EventoCreateWithoutEtiquetaConfirmoInput,
      EventoUncheckedCreateWithoutEtiquetaConfirmoInput
    >;
  };

  export type EventoUpdateWithWhereUniqueWithoutEtiquetaConfirmoInput = {
    where: EventoWhereUniqueInput;
    data: XOR<
      EventoUpdateWithoutEtiquetaConfirmoInput,
      EventoUncheckedUpdateWithoutEtiquetaConfirmoInput
    >;
  };

  export type EventoUpdateManyWithWhereWithoutEtiquetaConfirmoInput = {
    where: EventoScalarWhereInput;
    data: XOR<
      EventoUpdateManyMutationInput,
      EventoUncheckedUpdateManyWithoutEtiquetaConfirmoInput
    >;
  };

  export type CuentaUpsertWithWhereUniqueWithoutEtiquetasInput = {
    where: CuentaWhereUniqueInput;
    update: XOR<
      CuentaUpdateWithoutEtiquetasInput,
      CuentaUncheckedUpdateWithoutEtiquetasInput
    >;
    create: XOR<
      CuentaCreateWithoutEtiquetasInput,
      CuentaUncheckedCreateWithoutEtiquetasInput
    >;
  };

  export type CuentaUpdateWithWhereUniqueWithoutEtiquetasInput = {
    where: CuentaWhereUniqueInput;
    data: XOR<
      CuentaUpdateWithoutEtiquetasInput,
      CuentaUncheckedUpdateWithoutEtiquetasInput
    >;
  };

  export type CuentaUpdateManyWithWhereWithoutEtiquetasInput = {
    where: CuentaScalarWhereInput;
    data: XOR<
      CuentaUpdateManyMutationInput,
      CuentaUncheckedUpdateManyWithoutEtiquetasInput
    >;
  };

  export type CuentaScalarWhereInput = {
    AND?: CuentaScalarWhereInput | CuentaScalarWhereInput[];
    OR?: CuentaScalarWhereInput[];
    NOT?: CuentaScalarWhereInput | CuentaScalarWhereInput[];
    id?: StringFilter<'Cuenta'> | string;
    nombreUsuario?: StringFilter<'Cuenta'> | string;
    contrasena?: StringFilter<'Cuenta'> | string;
    esAdmin?: BoolFilter<'Cuenta'> | boolean;
    created_at?: DateTimeFilter<'Cuenta'> | Date | string;
    updated_at?: DateTimeFilter<'Cuenta'> | Date | string;
    filtroBaseActivo?: BoolFilter<'Cuenta'> | boolean;
    fcmToken?: StringNullableListFilter<'Cuenta'>;
  };

  export type PerfilUpsertWithWhereUniqueWithoutEtiquetasInput = {
    where: PerfilWhereUniqueInput;
    update: XOR<
      PerfilUpdateWithoutEtiquetasInput,
      PerfilUncheckedUpdateWithoutEtiquetasInput
    >;
    create: XOR<
      PerfilCreateWithoutEtiquetasInput,
      PerfilUncheckedCreateWithoutEtiquetasInput
    >;
  };

  export type PerfilUpdateWithWhereUniqueWithoutEtiquetasInput = {
    where: PerfilWhereUniqueInput;
    data: XOR<
      PerfilUpdateWithoutEtiquetasInput,
      PerfilUncheckedUpdateWithoutEtiquetasInput
    >;
  };

  export type PerfilUpdateManyWithWhereWithoutEtiquetasInput = {
    where: PerfilScalarWhereInput;
    data: XOR<
      PerfilUpdateManyMutationInput,
      PerfilUncheckedUpdateManyWithoutEtiquetasInput
    >;
  };

  export type PerfilScalarWhereInput = {
    AND?: PerfilScalarWhereInput | PerfilScalarWhereInput[];
    OR?: PerfilScalarWhereInput[];
    NOT?: PerfilScalarWhereInput | PerfilScalarWhereInput[];
    id?: StringFilter<'Perfil'> | string;
    idLegible?: IntFilter<'Perfil'> | number;
    telefono?: StringFilter<'Perfil'> | string;
    nombreCompleto?: StringFilter<'Perfil'> | string;
    nombrePila?: StringNullableFilter<'Perfil'> | string | null;
    genero?: StringNullableFilter<'Perfil'> | string | null;
    fechaNacimiento?: DateTimeNullableFilter<'Perfil'> | Date | string | null;
    fotoUrl?: StringNullableFilter<'Perfil'> | string | null;
    instagram?: StringNullableFilter<'Perfil'> | string | null;
    mail?: StringNullableFilter<'Perfil'> | string | null;
    dni?: StringNullableFilter<'Perfil'> | string | null;
    nombresAlternativos?: StringNullableListFilter<'Perfil'>;
    esPapelera?: BoolFilter<'Perfil'> | boolean;
    fechaPapelera?: DateTimeNullableFilter<'Perfil'> | Date | string | null;
    created_at?: DateTimeFilter<'Perfil'> | Date | string;
    updated_at?: DateTimeFilter<'Perfil'> | Date | string;
  };

  export type CuentaUpsertWithWhereUniqueWithoutFiltroBaseInput = {
    where: CuentaWhereUniqueInput;
    update: XOR<
      CuentaUpdateWithoutFiltroBaseInput,
      CuentaUncheckedUpdateWithoutFiltroBaseInput
    >;
    create: XOR<
      CuentaCreateWithoutFiltroBaseInput,
      CuentaUncheckedCreateWithoutFiltroBaseInput
    >;
  };

  export type CuentaUpdateWithWhereUniqueWithoutFiltroBaseInput = {
    where: CuentaWhereUniqueInput;
    data: XOR<
      CuentaUpdateWithoutFiltroBaseInput,
      CuentaUncheckedUpdateWithoutFiltroBaseInput
    >;
  };

  export type CuentaUpdateManyWithWhereWithoutFiltroBaseInput = {
    where: CuentaScalarWhereInput;
    data: XOR<
      CuentaUpdateManyMutationInput,
      CuentaUncheckedUpdateManyWithoutFiltroBaseInput
    >;
  };

  export type EtiquetaCreateWithoutGrupoInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUncheckedCreateWithoutGrupoInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput;
    eventosConfirmados?: EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaUncheckedCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilUncheckedCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaCreateOrConnectWithoutGrupoInput = {
    where: EtiquetaWhereUniqueInput;
    create: XOR<
      EtiquetaCreateWithoutGrupoInput,
      EtiquetaUncheckedCreateWithoutGrupoInput
    >;
  };

  export type EtiquetaCreateManyGrupoInputEnvelope = {
    data: EtiquetaCreateManyGrupoInput | EtiquetaCreateManyGrupoInput[];
    skipDuplicates?: boolean;
  };

  export type EtiquetaUpsertWithWhereUniqueWithoutGrupoInput = {
    where: EtiquetaWhereUniqueInput;
    update: XOR<
      EtiquetaUpdateWithoutGrupoInput,
      EtiquetaUncheckedUpdateWithoutGrupoInput
    >;
    create: XOR<
      EtiquetaCreateWithoutGrupoInput,
      EtiquetaUncheckedCreateWithoutGrupoInput
    >;
  };

  export type EtiquetaUpdateWithWhereUniqueWithoutGrupoInput = {
    where: EtiquetaWhereUniqueInput;
    data: XOR<
      EtiquetaUpdateWithoutGrupoInput,
      EtiquetaUncheckedUpdateWithoutGrupoInput
    >;
  };

  export type EtiquetaUpdateManyWithWhereWithoutGrupoInput = {
    where: EtiquetaScalarWhereInput;
    data: XOR<
      EtiquetaUpdateManyMutationInput,
      EtiquetaUncheckedUpdateManyWithoutGrupoInput
    >;
  };

  export type EtiquetaCreateWithoutEventosAsistidosInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    grupo: EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput;
    eventosConfirmados?: EventoCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUncheckedCreateWithoutEventosAsistidosInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosConfirmados?: EventoUncheckedCreateNestedManyWithoutEtiquetaConfirmoInput;
    cuentas?: CuentaUncheckedCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilUncheckedCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaCreateOrConnectWithoutEventosAsistidosInput = {
    where: EtiquetaWhereUniqueInput;
    create: XOR<
      EtiquetaCreateWithoutEventosAsistidosInput,
      EtiquetaUncheckedCreateWithoutEventosAsistidosInput
    >;
  };

  export type EtiquetaCreateWithoutEventosConfirmadosInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    grupo: EtiquetaGrupoCreateNestedOneWithoutEtiquetasInput;
    eventosAsistidos?: EventoCreateNestedManyWithoutEtiquetaAsistioInput;
    cuentas?: CuentaCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaUncheckedCreateWithoutEventosConfirmadosInput = {
    id?: string;
    nombre: string;
    grupoId: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
    eventosAsistidos?: EventoUncheckedCreateNestedManyWithoutEtiquetaAsistioInput;
    cuentas?: CuentaUncheckedCreateNestedManyWithoutEtiquetasInput;
    perfiles?: PerfilUncheckedCreateNestedManyWithoutEtiquetasInput;
    cuentasFiltroBase?: CuentaUncheckedCreateNestedManyWithoutFiltroBaseInput;
  };

  export type EtiquetaCreateOrConnectWithoutEventosConfirmadosInput = {
    where: EtiquetaWhereUniqueInput;
    create: XOR<
      EtiquetaCreateWithoutEventosConfirmadosInput,
      EtiquetaUncheckedCreateWithoutEventosConfirmadosInput
    >;
  };

  export type EventoCreateWithoutSubEventosInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetaAsistio: EtiquetaCreateNestedOneWithoutEventosAsistidosInput;
    etiquetaConfirmo: EtiquetaCreateNestedOneWithoutEventosConfirmadosInput;
    eventoPadre?: EventoCreateNestedOneWithoutSubEventosInput;
  };

  export type EventoUncheckedCreateWithoutSubEventosInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    etiquetaConfirmoId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventoCreateOrConnectWithoutSubEventosInput = {
    where: EventoWhereUniqueInput;
    create: XOR<
      EventoCreateWithoutSubEventosInput,
      EventoUncheckedCreateWithoutSubEventosInput
    >;
  };

  export type EventoCreateWithoutEventoPadreInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    etiquetaAsistio: EtiquetaCreateNestedOneWithoutEventosAsistidosInput;
    etiquetaConfirmo: EtiquetaCreateNestedOneWithoutEventosConfirmadosInput;
    subEventos?: EventoCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoUncheckedCreateWithoutEventoPadreInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    etiquetaConfirmoId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEventos?: EventoUncheckedCreateNestedManyWithoutEventoPadreInput;
  };

  export type EventoCreateOrConnectWithoutEventoPadreInput = {
    where: EventoWhereUniqueInput;
    create: XOR<
      EventoCreateWithoutEventoPadreInput,
      EventoUncheckedCreateWithoutEventoPadreInput
    >;
  };

  export type EventoCreateManyEventoPadreInputEnvelope = {
    data: EventoCreateManyEventoPadreInput | EventoCreateManyEventoPadreInput[];
    skipDuplicates?: boolean;
  };

  export type EtiquetaUpsertWithoutEventosAsistidosInput = {
    update: XOR<
      EtiquetaUpdateWithoutEventosAsistidosInput,
      EtiquetaUncheckedUpdateWithoutEventosAsistidosInput
    >;
    create: XOR<
      EtiquetaCreateWithoutEventosAsistidosInput,
      EtiquetaUncheckedCreateWithoutEventosAsistidosInput
    >;
    where?: EtiquetaWhereInput;
  };

  export type EtiquetaUpdateToOneWithWhereWithoutEventosAsistidosInput = {
    where?: EtiquetaWhereInput;
    data: XOR<
      EtiquetaUpdateWithoutEventosAsistidosInput,
      EtiquetaUncheckedUpdateWithoutEventosAsistidosInput
    >;
  };

  export type EtiquetaUpdateWithoutEventosAsistidosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grupo?: EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput;
    eventosConfirmados?: EventoUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateWithoutEventosAsistidosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosConfirmados?: EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUpsertWithoutEventosConfirmadosInput = {
    update: XOR<
      EtiquetaUpdateWithoutEventosConfirmadosInput,
      EtiquetaUncheckedUpdateWithoutEventosConfirmadosInput
    >;
    create: XOR<
      EtiquetaCreateWithoutEventosConfirmadosInput,
      EtiquetaUncheckedCreateWithoutEventosConfirmadosInput
    >;
    where?: EtiquetaWhereInput;
  };

  export type EtiquetaUpdateToOneWithWhereWithoutEventosConfirmadosInput = {
    where?: EtiquetaWhereInput;
    data: XOR<
      EtiquetaUpdateWithoutEventosConfirmadosInput,
      EtiquetaUncheckedUpdateWithoutEventosConfirmadosInput
    >;
  };

  export type EtiquetaUpdateWithoutEventosConfirmadosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grupo?: EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput;
    eventosAsistidos?: EventoUpdateManyWithoutEtiquetaAsistioNestedInput;
    cuentas?: CuentaUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateWithoutEventosConfirmadosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput;
    cuentas?: CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EventoUpsertWithoutSubEventosInput = {
    update: XOR<
      EventoUpdateWithoutSubEventosInput,
      EventoUncheckedUpdateWithoutSubEventosInput
    >;
    create: XOR<
      EventoCreateWithoutSubEventosInput,
      EventoUncheckedCreateWithoutSubEventosInput
    >;
    where?: EventoWhereInput;
  };

  export type EventoUpdateToOneWithWhereWithoutSubEventosInput = {
    where?: EventoWhereInput;
    data: XOR<
      EventoUpdateWithoutSubEventosInput,
      EventoUncheckedUpdateWithoutSubEventosInput
    >;
  };

  export type EventoUpdateWithoutSubEventosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetaAsistio?: EtiquetaUpdateOneRequiredWithoutEventosAsistidosNestedInput;
    etiquetaConfirmo?: EtiquetaUpdateOneRequiredWithoutEventosConfirmadosNestedInput;
    eventoPadre?: EventoUpdateOneWithoutSubEventosNestedInput;
  };

  export type EventoUncheckedUpdateWithoutSubEventosInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoUpsertWithWhereUniqueWithoutEventoPadreInput = {
    where: EventoWhereUniqueInput;
    update: XOR<
      EventoUpdateWithoutEventoPadreInput,
      EventoUncheckedUpdateWithoutEventoPadreInput
    >;
    create: XOR<
      EventoCreateWithoutEventoPadreInput,
      EventoUncheckedCreateWithoutEventoPadreInput
    >;
  };

  export type EventoUpdateWithWhereUniqueWithoutEventoPadreInput = {
    where: EventoWhereUniqueInput;
    data: XOR<
      EventoUpdateWithoutEventoPadreInput,
      EventoUncheckedUpdateWithoutEventoPadreInput
    >;
  };

  export type EventoUpdateManyWithWhereWithoutEventoPadreInput = {
    where: EventoScalarWhereInput;
    data: XOR<
      EventoUpdateManyMutationInput,
      EventoUncheckedUpdateManyWithoutEventoPadreInput
    >;
  };

  export type PerfilCreateWithoutMensajesInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comentarios?: ComentarioCreateNestedManyWithoutPerfilInput;
    etiquetas?: EtiquetaCreateNestedManyWithoutPerfilesInput;
  };

  export type PerfilUncheckedCreateWithoutMensajesInput = {
    id?: string;
    idLegible: number;
    telefono: string;
    nombreCompleto: string;
    nombrePila?: string | null;
    genero?: string | null;
    fechaNacimiento?: Date | string | null;
    fotoUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    nombresAlternativos?: PerfilCreatenombresAlternativosInput | string[];
    esPapelera?: boolean;
    fechaPapelera?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPerfilInput;
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutPerfilesInput;
  };

  export type PerfilCreateOrConnectWithoutMensajesInput = {
    where: PerfilWhereUniqueInput;
    create: XOR<
      PerfilCreateWithoutMensajesInput,
      PerfilUncheckedCreateWithoutMensajesInput
    >;
  };

  export type PerfilUpsertWithoutMensajesInput = {
    update: XOR<
      PerfilUpdateWithoutMensajesInput,
      PerfilUncheckedUpdateWithoutMensajesInput
    >;
    create: XOR<
      PerfilCreateWithoutMensajesInput,
      PerfilUncheckedCreateWithoutMensajesInput
    >;
    where?: PerfilWhereInput;
  };

  export type PerfilUpdateToOneWithWhereWithoutMensajesInput = {
    where?: PerfilWhereInput;
    data: XOR<
      PerfilUpdateWithoutMensajesInput,
      PerfilUncheckedUpdateWithoutMensajesInput
    >;
  };

  export type PerfilUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comentarios?: ComentarioUpdateManyWithoutPerfilNestedInput;
    etiquetas?: EtiquetaUpdateManyWithoutPerfilesNestedInput;
  };

  export type PerfilUncheckedUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comentarios?: ComentarioUncheckedUpdateManyWithoutPerfilNestedInput;
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutPerfilesNestedInput;
  };

  export type ComentarioCreateManyCuentaInput = {
    id?: string;
    contenido: string;
    perfilId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ComentarioUpdateWithoutCuentaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    perfil?: PerfilUpdateOneRequiredWithoutComentariosNestedInput;
  };

  export type ComentarioUncheckedUpdateWithoutCuentaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    perfilId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ComentarioUncheckedUpdateManyWithoutCuentaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    perfilId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaUpdateWithoutCuentasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grupo?: EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput;
    eventosAsistidos?: EventoUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUpdateManyWithoutEtiquetaConfirmoNestedInput;
    perfiles?: PerfilUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateWithoutCuentasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput;
    perfiles?: PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateManyWithoutCuentasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaUpdateWithoutCuentasFiltroBaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grupo?: EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput;
    eventosAsistidos?: EventoUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUpdateManyWithoutEtiquetasNestedInput;
  };

  export type EtiquetaUncheckedUpdateWithoutCuentasFiltroBaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput;
  };

  export type EtiquetaUncheckedUpdateManyWithoutCuentasFiltroBaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ComentarioCreateManyPerfilInput = {
    id?: string;
    contenido: string;
    creadoPor: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MensajeCreateManyPerfilInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    status?: $Enums.MensajeStatus;
    statusAt?: Date | string | null;
    visto?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ComentarioUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cuenta?: CuentaUpdateOneRequiredWithoutComentariosNestedInput;
  };

  export type ComentarioUncheckedUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    creadoPor?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ComentarioUncheckedUpdateManyWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string;
    contenido?: StringFieldUpdateOperationsInput | string;
    creadoPor?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MensajeUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MensajeUncheckedUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MensajeUncheckedUpdateManyWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    status?: EnumMensajeStatusFieldUpdateOperationsInput | $Enums.MensajeStatus;
    statusAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    visto?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EtiquetaUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grupo?: EtiquetaGrupoUpdateOneRequiredWithoutEtiquetasNestedInput;
    eventosAsistidos?: EventoUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateManyWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    grupoId?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoCreateManyEtiquetaAsistioInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaConfirmoId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventoCreateManyEtiquetaConfirmoInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    eventoPadreId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventoUpdateWithoutEtiquetaAsistioInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetaConfirmo?: EtiquetaUpdateOneRequiredWithoutEventosConfirmadosNestedInput;
    eventoPadre?: EventoUpdateOneWithoutSubEventosNestedInput;
    subEventos?: EventoUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateWithoutEtiquetaAsistioInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEventos?: EventoUncheckedUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateManyWithoutEtiquetaAsistioInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoUpdateWithoutEtiquetaConfirmoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetaAsistio?: EtiquetaUpdateOneRequiredWithoutEventosAsistidosNestedInput;
    eventoPadre?: EventoUpdateOneWithoutSubEventosNestedInput;
    subEventos?: EventoUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateWithoutEtiquetaConfirmoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEventos?: EventoUncheckedUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateManyWithoutEtiquetaConfirmoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    eventoPadreId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CuentaUpdateWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    comentarios?: ComentarioUpdateManyWithoutCuentaNestedInput;
    filtroBase?: EtiquetaUpdateManyWithoutCuentasFiltroBaseNestedInput;
  };

  export type CuentaUncheckedUpdateWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    comentarios?: ComentarioUncheckedUpdateManyWithoutCuentaNestedInput;
    filtroBase?: EtiquetaUncheckedUpdateManyWithoutCuentasFiltroBaseNestedInput;
  };

  export type CuentaUncheckedUpdateManyWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
  };

  export type PerfilUpdateWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comentarios?: ComentarioUpdateManyWithoutPerfilNestedInput;
    mensajes?: MensajeUpdateManyWithoutPerfilNestedInput;
  };

  export type PerfilUncheckedUpdateWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comentarios?: ComentarioUncheckedUpdateManyWithoutPerfilNestedInput;
    mensajes?: MensajeUncheckedUpdateManyWithoutPerfilNestedInput;
  };

  export type PerfilUncheckedUpdateManyWithoutEtiquetasInput = {
    id?: StringFieldUpdateOperationsInput | string;
    idLegible?: IntFieldUpdateOperationsInput | number;
    telefono?: StringFieldUpdateOperationsInput | string;
    nombreCompleto?: StringFieldUpdateOperationsInput | string;
    nombrePila?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    nombresAlternativos?: PerfilUpdatenombresAlternativosInput | string[];
    esPapelera?: BoolFieldUpdateOperationsInput | boolean;
    fechaPapelera?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CuentaUpdateWithoutFiltroBaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    comentarios?: ComentarioUpdateManyWithoutCuentaNestedInput;
    etiquetas?: EtiquetaUpdateManyWithoutCuentasNestedInput;
  };

  export type CuentaUncheckedUpdateWithoutFiltroBaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
    comentarios?: ComentarioUncheckedUpdateManyWithoutCuentaNestedInput;
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutCuentasNestedInput;
  };

  export type CuentaUncheckedUpdateManyWithoutFiltroBaseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombreUsuario?: StringFieldUpdateOperationsInput | string;
    contrasena?: StringFieldUpdateOperationsInput | string;
    esAdmin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    filtroBaseActivo?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: CuentaUpdatefcmTokenInput | string[];
  };

  export type EtiquetaCreateManyGrupoInput = {
    id?: string;
    nombre: string;
    tipo?: $Enums.TipoEtiqueta;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EtiquetaUpdateWithoutGrupoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateWithoutGrupoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    eventosAsistidos?: EventoUncheckedUpdateManyWithoutEtiquetaAsistioNestedInput;
    eventosConfirmados?: EventoUncheckedUpdateManyWithoutEtiquetaConfirmoNestedInput;
    cuentas?: CuentaUncheckedUpdateManyWithoutEtiquetasNestedInput;
    perfiles?: PerfilUncheckedUpdateManyWithoutEtiquetasNestedInput;
    cuentasFiltroBase?: CuentaUncheckedUpdateManyWithoutFiltroBaseNestedInput;
  };

  export type EtiquetaUncheckedUpdateManyWithoutGrupoInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    tipo?: EnumTipoEtiquetaFieldUpdateOperationsInput | $Enums.TipoEtiqueta;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventoCreateManyEventoPadreInput = {
    id?: string;
    nombre: string;
    fecha: Date | string;
    ubicacion: string;
    etiquetaAsistioId: string;
    etiquetaConfirmoId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventoUpdateWithoutEventoPadreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    etiquetaAsistio?: EtiquetaUpdateOneRequiredWithoutEventosAsistidosNestedInput;
    etiquetaConfirmo?: EtiquetaUpdateOneRequiredWithoutEventosConfirmadosNestedInput;
    subEventos?: EventoUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateWithoutEventoPadreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEventos?: EventoUncheckedUpdateManyWithoutEventoPadreNestedInput;
  };

  export type EventoUncheckedUpdateManyWithoutEventoPadreInput = {
    id?: StringFieldUpdateOperationsInput | string;
    nombre?: StringFieldUpdateOperationsInput | string;
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string;
    ubicacion?: StringFieldUpdateOperationsInput | string;
    etiquetaAsistioId?: StringFieldUpdateOperationsInput | string;
    etiquetaConfirmoId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CuentaCountOutputTypeDefaultArgs instead
   */
  export type CuentaCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CuentaCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PerfilCountOutputTypeDefaultArgs instead
   */
  export type PerfilCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = PerfilCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EtiquetaCountOutputTypeDefaultArgs instead
   */
  export type EtiquetaCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EtiquetaCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EtiquetaGrupoCountOutputTypeDefaultArgs instead
   */
  export type EtiquetaGrupoCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EtiquetaGrupoCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventoCountOutputTypeDefaultArgs instead
   */
  export type EventoCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EventoCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CuentaDefaultArgs instead
   */
  export type CuentaArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CuentaDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PerfilDefaultArgs instead
   */
  export type PerfilArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = PerfilDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ComentarioDefaultArgs instead
   */
  export type ComentarioArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ComentarioDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EtiquetaDefaultArgs instead
   */
  export type EtiquetaArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EtiquetaDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EtiquetaGrupoDefaultArgs instead
   */
  export type EtiquetaGrupoArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EtiquetaGrupoDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventoDefaultArgs instead
   */
  export type EventoArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EventoDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MensajeDefaultArgs instead
   */
  export type MensajeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MensajeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EnumsDefaultArgs instead
   */
  export type EnumsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EnumsDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
