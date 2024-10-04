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
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>;
/**
 * Model Profile
 *
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>;
/**
 * Model Location
 *
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model TagGroup
 *
 */
export type TagGroup = $Result.DefaultSelection<Prisma.$TagGroupPayload>;
/**
 * Model Event
 *
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>;
/**
 * Model EventFolder
 *
 */
export type EventFolder = $Result.DefaultSelection<Prisma.$EventFolderPayload>;
/**
 * Model Message
 *
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>;
/**
 * Model CannedResponse
 *
 */
export type CannedResponse =
  $Result.DefaultSelection<Prisma.$CannedResponsePayload>;
/**
 * Model Enums
 *
 */
export type Enums = $Result.DefaultSelection<Prisma.$EnumsPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    USER: 'USER';
    ADMIN: 'ADMIN';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const TagType: {
    PROFILE: 'PROFILE';
    EVENT: 'EVENT';
    PARTICIPANT: 'PARTICIPANT';
    NOT_IN_SYSTEM: 'NOT_IN_SYSTEM';
  };

  export type TagType = (typeof TagType)[keyof typeof TagType];

  export const MessageState: {
    SENT: 'SENT';
    RECEIVED: 'RECEIVED';
    SEEN: 'SEEN';
  };

  export type MessageState = (typeof MessageState)[keyof typeof MessageState];

  export const TemplateStatus: {
    APRROVED: 'APRROVED';
    PENDING: 'PENDING';
    REJECTED: 'REJECTED';
  };

  export type TemplateStatus =
    (typeof TemplateStatus)[keyof typeof TemplateStatus];

  export const TemplateCategory: {
    MARKETING: 'MARKETING';
    UTILITY: 'UTILITY';
    AUTHENTICATION: 'AUTHENTICATION';
  };

  export type TemplateCategory =
    (typeof TemplateCategory)[keyof typeof TemplateCategory];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type TagType = $Enums.TagType;

export const TagType: typeof $Enums.TagType;

export type MessageState = $Enums.MessageState;

export const MessageState: typeof $Enums.MessageState;

export type TemplateStatus = $Enums.TemplateStatus;

export const TemplateStatus: typeof $Enums.TemplateStatus;

export type TemplateCategory = $Enums.TemplateCategory;

export const TemplateCategory: typeof $Enums.TemplateCategory;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
   * ```
   */
  get location(): Prisma.LocationDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.tagGroup`: Exposes CRUD operations for the **TagGroup** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TagGroups
   * const tagGroups = await prisma.tagGroup.findMany()
   * ```
   */
  get tagGroup(): Prisma.TagGroupDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.eventFolder`: Exposes CRUD operations for the **EventFolder** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more EventFolders
   * const eventFolders = await prisma.eventFolder.findMany()
   * ```
   */
  get eventFolder(): Prisma.EventFolderDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
   * ```
   */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.cannedResponse`: Exposes CRUD operations for the **CannedResponse** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CannedResponses
   * const cannedResponses = await prisma.cannedResponse.findMany()
   * ```
   */
  get cannedResponse(): Prisma.CannedResponseDelegate<ExtArgs>;

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
    Account: 'Account';
    Profile: 'Profile';
    Location: 'Location';
    Comment: 'Comment';
    Tag: 'Tag';
    TagGroup: 'TagGroup';
    Event: 'Event';
    EventFolder: 'EventFolder';
    Message: 'Message';
    CannedResponse: 'CannedResponse';
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
        | 'account'
        | 'profile'
        | 'location'
        | 'comment'
        | 'tag'
        | 'tagGroup'
        | 'event'
        | 'eventFolder'
        | 'message'
        | 'cannedResponse'
        | 'enums';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>;
        fields: Prisma.AccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>;
        fields: Prisma.ProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>;
        fields: Prisma.LocationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>;
          };
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>;
          };
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[];
          };
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>;
          };
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[];
          };
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>;
          };
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>;
          };
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>;
          };
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLocation>;
          };
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LocationGroupByOutputType>[];
          };
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>;
            result: $Utils.Optional<LocationCountAggregateOutputType> | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result: $Utils.Optional<TagCountAggregateOutputType> | number;
          };
        };
      };
      TagGroup: {
        payload: Prisma.$TagGroupPayload<ExtArgs>;
        fields: Prisma.TagGroupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagGroupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagGroupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>;
          };
          findFirst: {
            args: Prisma.TagGroupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagGroupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>;
          };
          findMany: {
            args: Prisma.TagGroupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>[];
          };
          create: {
            args: Prisma.TagGroupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>;
          };
          createMany: {
            args: Prisma.TagGroupCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagGroupCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>[];
          };
          delete: {
            args: Prisma.TagGroupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>;
          };
          update: {
            args: Prisma.TagGroupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>;
          };
          deleteMany: {
            args: Prisma.TagGroupDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TagGroupUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TagGroupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagGroupPayload>;
          };
          aggregate: {
            args: Prisma.TagGroupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTagGroup>;
          };
          groupBy: {
            args: Prisma.TagGroupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagGroupCountArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupCountAggregateOutputType> | number;
          };
        };
      };
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>;
        fields: Prisma.EventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvent>;
          };
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventCountArgs<ExtArgs>;
            result: $Utils.Optional<EventCountAggregateOutputType> | number;
          };
        };
      };
      EventFolder: {
        payload: Prisma.$EventFolderPayload<ExtArgs>;
        fields: Prisma.EventFolderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventFolderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventFolderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>;
          };
          findFirst: {
            args: Prisma.EventFolderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventFolderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>;
          };
          findMany: {
            args: Prisma.EventFolderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>[];
          };
          create: {
            args: Prisma.EventFolderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>;
          };
          createMany: {
            args: Prisma.EventFolderCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventFolderCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>[];
          };
          delete: {
            args: Prisma.EventFolderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>;
          };
          update: {
            args: Prisma.EventFolderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>;
          };
          deleteMany: {
            args: Prisma.EventFolderDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EventFolderUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EventFolderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventFolderPayload>;
          };
          aggregate: {
            args: Prisma.EventFolderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEventFolder>;
          };
          groupBy: {
            args: Prisma.EventFolderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventFolderGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventFolderCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<EventFolderCountAggregateOutputType>
              | number;
          };
        };
      };
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>;
        fields: Prisma.MessageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[];
          };
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>;
          };
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMessage>;
          };
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MessageGroupByOutputType>[];
          };
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>;
            result: $Utils.Optional<MessageCountAggregateOutputType> | number;
          };
        };
      };
      CannedResponse: {
        payload: Prisma.$CannedResponsePayload<ExtArgs>;
        fields: Prisma.CannedResponseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CannedResponseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CannedResponseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>;
          };
          findFirst: {
            args: Prisma.CannedResponseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CannedResponseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>;
          };
          findMany: {
            args: Prisma.CannedResponseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>[];
          };
          create: {
            args: Prisma.CannedResponseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>;
          };
          createMany: {
            args: Prisma.CannedResponseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CannedResponseCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>[];
          };
          delete: {
            args: Prisma.CannedResponseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>;
          };
          update: {
            args: Prisma.CannedResponseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>;
          };
          deleteMany: {
            args: Prisma.CannedResponseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.CannedResponseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.CannedResponseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CannedResponsePayload>;
          };
          aggregate: {
            args: Prisma.CannedResponseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCannedResponse>;
          };
          groupBy: {
            args: Prisma.CannedResponseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CannedResponseGroupByOutputType>[];
          };
          count: {
            args: Prisma.CannedResponseCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CannedResponseCountAggregateOutputType>
              | number;
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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    comments: number;
    solvableComments: number;
    tags: number;
    globalFilter: number;
  };

  export type AccountCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | AccountCountOutputTypeCountCommentsArgs;
    solvableComments?:
      | boolean
      | AccountCountOutputTypeCountSolvableCommentsArgs;
    tags?: boolean | AccountCountOutputTypeCountTagsArgs;
    globalFilter?: boolean | AccountCountOutputTypeCountGlobalFilterArgs;
  };

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSolvableCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountGlobalFilterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    comments: number;
    messages: number;
    tags: number;
  };

  export type ProfileCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | ProfileCountOutputTypeCountCommentsArgs;
    messages?: boolean | ProfileCountOutputTypeCountMessagesArgs;
    tags?: boolean | ProfileCountOutputTypeCountTagsArgs;
  };

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountMessagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
  };

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    birthProfiles: number;
    residenceProfiles: number;
  };

  export type LocationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    birthProfiles?: boolean | LocationCountOutputTypeCountBirthProfilesArgs;
    residenceProfiles?:
      | boolean
      | LocationCountOutputTypeCountResidenceProfilesArgs;
  };

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountBirthProfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
  };

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountResidenceProfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    accounts: number;
    profiles: number;
    accountsGlobalFilter: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | TagCountOutputTypeCountAccountsArgs;
    profiles?: boolean | TagCountOutputTypeCountProfilesArgs;
    accountsGlobalFilter?:
      | boolean
      | TagCountOutputTypeCountAccountsGlobalFilterArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountAccountsGlobalFilterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * Count Type TagGroupCountOutputType
   */

  export type TagGroupCountOutputType = {
    tags: number;
  };

  export type TagGroupCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | TagGroupCountOutputTypeCountTagsArgs;
  };

  // Custom InputTypes
  /**
   * TagGroupCountOutputType without action
   */
  export type TagGroupCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroupCountOutputType
     */
    select?: TagGroupCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagGroupCountOutputType without action
   */
  export type TagGroupCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
  };

  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    subEvents: number;
  };

  export type EventCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subEvents?: boolean | EventCountOutputTypeCountSubEventsArgs;
  };

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountSubEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
  };

  /**
   * Count Type EventFolderCountOutputType
   */

  export type EventFolderCountOutputType = {
    events: number;
  };

  export type EventFolderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    events?: boolean | EventFolderCountOutputTypeCountEventsArgs;
  };

  // Custom InputTypes
  /**
   * EventFolderCountOutputType without action
   */
  export type EventFolderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolderCountOutputType
     */
    select?: EventFolderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventFolderCountOutputType without action
   */
  export type EventFolderCountOutputTypeCountEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
    role: $Enums.Role | null;
    isGlobalFilterActive: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
    role: $Enums.Role | null;
    isGlobalFilterActive: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    role: number;
    isGlobalFilterActive: number;
    fcmToken: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    role?: true;
    isGlobalFilterActive?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    role?: true;
    isGlobalFilterActive?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    role?: true;
    isGlobalFilterActive?: true;
    fcmToken?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithAggregationInput
      | AccountOrderByWithAggregationInput[];
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum;
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    username: string;
    password: string;
    role: $Enums.Role;
    isGlobalFilterActive: boolean;
    fcmToken: string[];
    created_at: Date;
    updated_at: Date;
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      password?: boolean;
      role?: boolean;
      isGlobalFilterActive?: boolean;
      fcmToken?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      comments?: boolean | Account$commentsArgs<ExtArgs>;
      solvableComments?: boolean | Account$solvableCommentsArgs<ExtArgs>;
      tags?: boolean | Account$tagsArgs<ExtArgs>;
      globalFilter?: boolean | Account$globalFilterArgs<ExtArgs>;
      _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['account']
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    role?: boolean;
    isGlobalFilterActive?: boolean;
    fcmToken?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type AccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | Account$commentsArgs<ExtArgs>;
    solvableComments?: boolean | Account$solvableCommentsArgs<ExtArgs>;
    tags?: boolean | Account$tagsArgs<ExtArgs>;
    globalFilter?: boolean | Account$globalFilterArgs<ExtArgs>;
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Account';
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[];
      solvableComments: Prisma.$CommentPayload<ExtArgs>[];
      tags: Prisma.$TagPayload<ExtArgs>[];
      globalFilter: Prisma.$TagPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        username: string;
        password: string;
        role: $Enums.Role;
        isGlobalFilterActive: boolean;
        fcmToken: string[];
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['account']
    >;
    composites: {};
  };

  type AccountGetPayload<
    S extends boolean | null | undefined | AccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Account'];
      meta: { name: 'Account' };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends Account$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$commentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    solvableComments<T extends Account$solvableCommentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$solvableCommentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    tags<T extends Account$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$tagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    globalFilter<T extends Account$globalFilterArgs<ExtArgs> = {}>(
      args?: Subset<T, Account$globalFilterArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'> | Null
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<'Account', 'String'>;
    readonly username: FieldRef<'Account', 'String'>;
    readonly password: FieldRef<'Account', 'String'>;
    readonly role: FieldRef<'Account', 'Role'>;
    readonly isGlobalFilterActive: FieldRef<'Account', 'Boolean'>;
    readonly fcmToken: FieldRef<'Account', 'String[]'>;
    readonly created_at: FieldRef<'Account', 'DateTime'>;
    readonly updated_at: FieldRef<'Account', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
  };

  /**
   * Account.comments
   */
  export type Account$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Account.solvableComments
   */
  export type Account$solvableCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Account.tags
   */
  export type Account$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Account.globalFilter
   */
  export type Account$globalFilterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileAvgAggregateOutputType = {
    shortId: number | null;
    birthLongitude: number | null;
    birthLatitude: number | null;
    residenceLongitude: number | null;
    residenceLatitude: number | null;
  };

  export type ProfileSumAggregateOutputType = {
    shortId: number | null;
    birthLongitude: number | null;
    birthLatitude: number | null;
    residenceLongitude: number | null;
    residenceLatitude: number | null;
  };

  export type ProfileMinAggregateOutputType = {
    id: string | null;
    shortId: number | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    fullName: string | null;
    fistName: string | null;
    gender: string | null;
    birthDate: Date | null;
    profilePictureUrl: string | null;
    instagram: string | null;
    mail: string | null;
    dni: string | null;
    birthLongitude: number | null;
    birthLatitude: number | null;
    residenceLongitude: number | null;
    residenceLatitude: number | null;
    isInTrash: boolean | null;
    movedToTrashDate: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProfileMaxAggregateOutputType = {
    id: string | null;
    shortId: number | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    fullName: string | null;
    fistName: string | null;
    gender: string | null;
    birthDate: Date | null;
    profilePictureUrl: string | null;
    instagram: string | null;
    mail: string | null;
    dni: string | null;
    birthLongitude: number | null;
    birthLatitude: number | null;
    residenceLongitude: number | null;
    residenceLatitude: number | null;
    isInTrash: boolean | null;
    movedToTrashDate: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProfileCountAggregateOutputType = {
    id: number;
    shortId: number;
    phoneNumber: number;
    secondaryPhoneNumber: number;
    fullName: number;
    fistName: number;
    gender: number;
    birthDate: number;
    profilePictureUrl: number;
    instagram: number;
    mail: number;
    dni: number;
    alternativeNames: number;
    birthLongitude: number;
    birthLatitude: number;
    residenceLongitude: number;
    residenceLatitude: number;
    isInTrash: number;
    movedToTrashDate: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProfileAvgAggregateInputType = {
    shortId?: true;
    birthLongitude?: true;
    birthLatitude?: true;
    residenceLongitude?: true;
    residenceLatitude?: true;
  };

  export type ProfileSumAggregateInputType = {
    shortId?: true;
    birthLongitude?: true;
    birthLatitude?: true;
    residenceLongitude?: true;
    residenceLatitude?: true;
  };

  export type ProfileMinAggregateInputType = {
    id?: true;
    shortId?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    fullName?: true;
    fistName?: true;
    gender?: true;
    birthDate?: true;
    profilePictureUrl?: true;
    instagram?: true;
    mail?: true;
    dni?: true;
    birthLongitude?: true;
    birthLatitude?: true;
    residenceLongitude?: true;
    residenceLatitude?: true;
    isInTrash?: true;
    movedToTrashDate?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProfileMaxAggregateInputType = {
    id?: true;
    shortId?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    fullName?: true;
    fistName?: true;
    gender?: true;
    birthDate?: true;
    profilePictureUrl?: true;
    instagram?: true;
    mail?: true;
    dni?: true;
    birthLongitude?: true;
    birthLatitude?: true;
    residenceLongitude?: true;
    residenceLatitude?: true;
    isInTrash?: true;
    movedToTrashDate?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProfileCountAggregateInputType = {
    id?: true;
    shortId?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    fullName?: true;
    fistName?: true;
    gender?: true;
    birthDate?: true;
    profilePictureUrl?: true;
    instagram?: true;
    mail?: true;
    dni?: true;
    alternativeNames?: true;
    birthLongitude?: true;
    birthLatitude?: true;
    residenceLongitude?: true;
    residenceLatitude?: true;
    isInTrash?: true;
    movedToTrashDate?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProfileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProfileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type ProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithAggregationInput
      | ProfileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _avg?: ProfileAvgAggregateInputType;
    _sum?: ProfileSumAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    id: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber: string | null;
    fullName: string;
    fistName: string | null;
    gender: string | null;
    birthDate: Date | null;
    profilePictureUrl: string | null;
    instagram: string | null;
    mail: string | null;
    dni: string | null;
    alternativeNames: string[];
    birthLongitude: number | null;
    birthLatitude: number | null;
    residenceLongitude: number | null;
    residenceLatitude: number | null;
    isInTrash: boolean;
    movedToTrashDate: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type ProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      shortId?: boolean;
      phoneNumber?: boolean;
      secondaryPhoneNumber?: boolean;
      fullName?: boolean;
      fistName?: boolean;
      gender?: boolean;
      birthDate?: boolean;
      profilePictureUrl?: boolean;
      instagram?: boolean;
      mail?: boolean;
      dni?: boolean;
      alternativeNames?: boolean;
      birthLongitude?: boolean;
      birthLatitude?: boolean;
      residenceLongitude?: boolean;
      residenceLatitude?: boolean;
      isInTrash?: boolean;
      movedToTrashDate?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      comments?: boolean | Profile$commentsArgs<ExtArgs>;
      messages?: boolean | Profile$messagesArgs<ExtArgs>;
      tags?: boolean | Profile$tagsArgs<ExtArgs>;
      birthLocation?: boolean | Profile$birthLocationArgs<ExtArgs>;
      residenceLocation?: boolean | Profile$residenceLocationArgs<ExtArgs>;
      _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectScalar = {
    id?: boolean;
    shortId?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    fullName?: boolean;
    fistName?: boolean;
    gender?: boolean;
    birthDate?: boolean;
    profilePictureUrl?: boolean;
    instagram?: boolean;
    mail?: boolean;
    dni?: boolean;
    alternativeNames?: boolean;
    birthLongitude?: boolean;
    birthLatitude?: boolean;
    residenceLongitude?: boolean;
    residenceLatitude?: boolean;
    isInTrash?: boolean;
    movedToTrashDate?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | Profile$commentsArgs<ExtArgs>;
    messages?: boolean | Profile$messagesArgs<ExtArgs>;
    tags?: boolean | Profile$tagsArgs<ExtArgs>;
    birthLocation?: boolean | Profile$birthLocationArgs<ExtArgs>;
    residenceLocation?: boolean | Profile$residenceLocationArgs<ExtArgs>;
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Profile';
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[];
      messages: Prisma.$MessagePayload<ExtArgs>[];
      tags: Prisma.$TagPayload<ExtArgs>[];
      birthLocation: Prisma.$LocationPayload<ExtArgs> | null;
      residenceLocation: Prisma.$LocationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        shortId: number;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        fullName: string;
        fistName: string | null;
        gender: string | null;
        birthDate: Date | null;
        profilePictureUrl: string | null;
        instagram: string | null;
        mail: string | null;
        dni: string | null;
        alternativeNames: string[];
        birthLongitude: number | null;
        birthLatitude: number | null;
        residenceLongitude: number | null;
        residenceLatitude: number | null;
        isInTrash: boolean;
        movedToTrashDate: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['profile']
    >;
    composites: {};
  };

  type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$ProfilePayload, S>;

  type ProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface ProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
      meta: { name: 'Profile' };
    };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Profile model
     */
    readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends Profile$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Profile$commentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    messages<T extends Profile$messagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Profile$messagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null
    >;

    tags<T extends Profile$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Profile$tagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    birthLocation<T extends Profile$birthLocationArgs<ExtArgs> = {}>(
      args?: Subset<T, Profile$birthLocationArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    residenceLocation<T extends Profile$residenceLocationArgs<ExtArgs> = {}>(
      args?: Subset<T, Profile$residenceLocationArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<'Profile', 'String'>;
    readonly shortId: FieldRef<'Profile', 'Int'>;
    readonly phoneNumber: FieldRef<'Profile', 'String'>;
    readonly secondaryPhoneNumber: FieldRef<'Profile', 'String'>;
    readonly fullName: FieldRef<'Profile', 'String'>;
    readonly fistName: FieldRef<'Profile', 'String'>;
    readonly gender: FieldRef<'Profile', 'String'>;
    readonly birthDate: FieldRef<'Profile', 'DateTime'>;
    readonly profilePictureUrl: FieldRef<'Profile', 'String'>;
    readonly instagram: FieldRef<'Profile', 'String'>;
    readonly mail: FieldRef<'Profile', 'String'>;
    readonly dni: FieldRef<'Profile', 'String'>;
    readonly alternativeNames: FieldRef<'Profile', 'String[]'>;
    readonly birthLongitude: FieldRef<'Profile', 'Float'>;
    readonly birthLatitude: FieldRef<'Profile', 'Float'>;
    readonly residenceLongitude: FieldRef<'Profile', 'Float'>;
    readonly residenceLatitude: FieldRef<'Profile', 'Float'>;
    readonly isInTrash: FieldRef<'Profile', 'Boolean'>;
    readonly movedToTrashDate: FieldRef<'Profile', 'DateTime'>;
    readonly created_at: FieldRef<'Profile', 'DateTime'>;
    readonly updated_at: FieldRef<'Profile', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile create
   */
  export type ProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
  };

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
  };

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput;
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
  };

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput;
  };

  /**
   * Profile.comments
   */
  export type Profile$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Profile.messages
   */
  export type Profile$messagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    cursor?: MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Profile.tags
   */
  export type Profile$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Profile.birthLocation
   */
  export type Profile$birthLocationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    where?: LocationWhereInput;
  };

  /**
   * Profile.residenceLocation
   */
  export type Profile$residenceLocationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    where?: LocationWhereInput;
  };

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
  };

  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null;
    _avg: LocationAvgAggregateOutputType | null;
    _sum: LocationSumAggregateOutputType | null;
    _min: LocationMinAggregateOutputType | null;
    _max: LocationMaxAggregateOutputType | null;
  };

  export type LocationAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
  };

  export type LocationSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
  };

  export type LocationMinAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    country: string | null;
    province: string | null;
    city: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LocationMaxAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    country: string | null;
    province: string | null;
    city: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LocationCountAggregateOutputType = {
    latitude: number;
    longitude: number;
    country: number;
    province: number;
    city: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LocationAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
  };

  export type LocationSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
  };

  export type LocationMinAggregateInputType = {
    latitude?: true;
    longitude?: true;
    country?: true;
    province?: true;
    city?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LocationMaxAggregateInputType = {
    latitude?: true;
    longitude?: true;
    country?: true;
    province?: true;
    city?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LocationCountAggregateInputType = {
    latitude?: true;
    longitude?: true;
    country?: true;
    province?: true;
    city?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LocationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?:
      | LocationOrderByWithRelationInput
      | LocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Locations
     **/
    _count?: true | LocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LocationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LocationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LocationMaxAggregateInputType;
  };

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
    [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>;
  };

  export type LocationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LocationWhereInput;
    orderBy?:
      | LocationOrderByWithAggregationInput
      | LocationOrderByWithAggregationInput[];
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum;
    having?: LocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationCountAggregateInputType | true;
    _avg?: LocationAvgAggregateInputType;
    _sum?: LocationSumAggregateInputType;
    _min?: LocationMinAggregateInputType;
    _max?: LocationMaxAggregateInputType;
  };

  export type LocationGroupByOutputType = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at: Date;
    updated_at: Date;
    _count: LocationCountAggregateOutputType | null;
    _avg: LocationAvgAggregateOutputType | null;
    _sum: LocationSumAggregateOutputType | null;
    _min: LocationMinAggregateOutputType | null;
    _max: LocationMaxAggregateOutputType | null;
  };

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LocationGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LocationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>;
        }
      >
    >;

  export type LocationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      latitude?: boolean;
      longitude?: boolean;
      country?: boolean;
      province?: boolean;
      city?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      birthProfiles?: boolean | Location$birthProfilesArgs<ExtArgs>;
      residenceProfiles?: boolean | Location$residenceProfilesArgs<ExtArgs>;
      _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['location']
  >;

  export type LocationSelectScalar = {
    latitude?: boolean;
    longitude?: boolean;
    country?: boolean;
    province?: boolean;
    city?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type LocationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    birthProfiles?: boolean | Location$birthProfilesArgs<ExtArgs>;
    residenceProfiles?: boolean | Location$residenceProfilesArgs<ExtArgs>;
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $LocationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Location';
    objects: {
      birthProfiles: Prisma.$ProfilePayload<ExtArgs>[];
      residenceProfiles: Prisma.$ProfilePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        latitude: number;
        longitude: number;
        country: string;
        province: string;
        city: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['location']
    >;
    composites: {};
  };

  type LocationGetPayload<
    S extends boolean | null | undefined | LocationDefaultArgs,
  > = $Result.GetResult<Prisma.$LocationPayload, S>;

  type LocationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: LocationCountAggregateInputType | true;
  };

  export interface LocationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Location'];
      meta: { name: 'Location' };
    };
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends LocationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends LocationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     *
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     *
     * // Only select the `latitude`
     * const locationWithLatitudeOnly = await prisma.location.findMany({ select: { latitude: true } })
     *
     **/
    findMany<T extends LocationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     *
     **/
    create<T extends LocationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationCreateArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends LocationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Locations and only return the `latitude`
     * const locationWithLatitudeOnly = await prisma.location.createManyAndReturn({
     *   select: { latitude: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LocationPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     *
     **/
    delete<T extends LocationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends LocationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends LocationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends LocationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     **/
    upsert<T extends LocationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>,
    ): Prisma__LocationClient<
      $Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
     **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(
      args: Subset<T, LocationAggregateArgs>,
    ): Prisma.PrismaPromise<GetLocationAggregateType<T>>;

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLocationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Location model
     */
    readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    birthProfiles<T extends Location$birthProfilesArgs<ExtArgs> = {}>(
      args?: Subset<T, Location$birthProfilesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'> | Null
    >;

    residenceProfiles<T extends Location$residenceProfilesArgs<ExtArgs> = {}>(
      args?: Subset<T, Location$residenceProfilesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'> | Null
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly latitude: FieldRef<'Location', 'Float'>;
    readonly longitude: FieldRef<'Location', 'Float'>;
    readonly country: FieldRef<'Location', 'String'>;
    readonly province: FieldRef<'Location', 'String'>;
    readonly city: FieldRef<'Location', 'String'>;
    readonly created_at: FieldRef<'Location', 'DateTime'>;
    readonly updated_at: FieldRef<'Location', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput;
  };

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput;
  };

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?:
      | LocationOrderByWithRelationInput
      | LocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?:
      | LocationOrderByWithRelationInput
      | LocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Locations to fetch.
     */
    orderBy?:
      | LocationOrderByWithRelationInput
      | LocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Locations.
     */
    skip?: number;
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[];
  };

  /**
   * Location create
   */
  export type LocationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>;
  };

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Location update
   */
  export type LocationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>;
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput;
  };

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Locations.
     */
    data: XOR<
      LocationUpdateManyMutationInput,
      LocationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput;
  };

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput;
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>;
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>;
  };

  /**
   * Location delete
   */
  export type LocationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput;
  };

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput;
  };

  /**
   * Location.birthProfiles
   */
  export type Location$birthProfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    cursor?: ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Location.residenceProfiles
   */
  export type Location$residenceProfilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    cursor?: ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Location without action
   */
  export type LocationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdBy: string | null;
    profileId: string | null;
    isSolvable: boolean | null;
    isSolved: boolean | null;
    solvedAt: Date | null;
    solvedById: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdBy: string | null;
    profileId: string | null;
    isSolvable: boolean | null;
    isSolved: boolean | null;
    solvedAt: Date | null;
    solvedById: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    createdBy: number;
    profileId: number;
    isSolvable: number;
    isSolved: number;
    solvedAt: number;
    solvedById: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    createdBy?: true;
    profileId?: true;
    isSolvable?: true;
    isSolved?: true;
    solvedAt?: true;
    solvedById?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdBy?: true;
    profileId?: true;
    isSolvable?: true;
    isSolved?: true;
    solvedAt?: true;
    solvedById?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    createdBy?: true;
    profileId?: true;
    isSolvable?: true;
    isSolved?: true;
    solvedAt?: true;
    solvedById?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithAggregationInput
      | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: string;
    content: string;
    createdBy: string;
    profileId: string;
    isSolvable: boolean;
    isSolved: boolean;
    solvedAt: Date | null;
    solvedById: string | null;
    created_at: Date;
    updated_at: Date;
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdBy?: boolean;
      profileId?: boolean;
      isSolvable?: boolean;
      isSolved?: boolean;
      solvedAt?: boolean;
      solvedById?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      account?: boolean | AccountDefaultArgs<ExtArgs>;
      profile?: boolean | ProfileDefaultArgs<ExtArgs>;
      solvedBy?: boolean | Comment$solvedByArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdBy?: boolean;
    profileId?: boolean;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: boolean;
    solvedById?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type CommentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    account?: boolean | AccountDefaultArgs<ExtArgs>;
    profile?: boolean | ProfileDefaultArgs<ExtArgs>;
    solvedBy?: boolean | Comment$solvedByArgs<ExtArgs>;
  };

  export type $CommentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Comment';
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>;
      profile: Prisma.$ProfilePayload<ExtArgs>;
      solvedBy: Prisma.$AccountPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        createdBy: string;
        profileId: string;
        isSolvable: boolean;
        isSolved: boolean;
        solvedAt: Date | null;
        solvedById: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['comment']
    >;
    composites: {};
  };

  type CommentGetPayload<
    S extends boolean | null | undefined | CommentDefaultArgs,
  > = $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Comment'];
      meta: { name: 'Comment' };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>,
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>,
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    account<T extends AccountDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AccountDefaultArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProfileDefaultArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      | $Result.GetResult<
          Prisma.$ProfilePayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    solvedBy<T extends Comment$solvedByArgs<ExtArgs> = {}>(
      args?: Subset<T, Comment$solvedByArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<'Comment', 'String'>;
    readonly content: FieldRef<'Comment', 'String'>;
    readonly createdBy: FieldRef<'Comment', 'String'>;
    readonly profileId: FieldRef<'Comment', 'String'>;
    readonly isSolvable: FieldRef<'Comment', 'Boolean'>;
    readonly isSolved: FieldRef<'Comment', 'Boolean'>;
    readonly solvedAt: FieldRef<'Comment', 'DateTime'>;
    readonly solvedById: FieldRef<'Comment', 'String'>;
    readonly created_at: FieldRef<'Comment', 'DateTime'>;
    readonly updated_at: FieldRef<'Comment', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
  };

  /**
   * Comment.solvedBy
   */
  export type Comment$solvedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.TagType | null;
    groupId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TagMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.TagType | null;
    groupId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    groupId: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    groupId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    groupId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    groupId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType;
  };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.TagType;
    groupId: string;
    created_at: Date;
    updated_at: Date;
    _count: TagCountAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      groupId?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      group?: boolean | TagGroupDefaultArgs<ExtArgs>;
      assistedEvent?: boolean | Tag$assistedEventArgs<ExtArgs>;
      confirmedEvent?: boolean | Tag$confirmedEventArgs<ExtArgs>;
      accounts?: boolean | Tag$accountsArgs<ExtArgs>;
      profiles?: boolean | Tag$profilesArgs<ExtArgs>;
      accountsGlobalFilter?: boolean | Tag$accountsGlobalFilterArgs<ExtArgs>;
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tag']
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    groupId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type TagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    group?: boolean | TagGroupDefaultArgs<ExtArgs>;
    assistedEvent?: boolean | Tag$assistedEventArgs<ExtArgs>;
    confirmedEvent?: boolean | Tag$confirmedEventArgs<ExtArgs>;
    accounts?: boolean | Tag$accountsArgs<ExtArgs>;
    profiles?: boolean | Tag$profilesArgs<ExtArgs>;
    accountsGlobalFilter?: boolean | Tag$accountsGlobalFilterArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $TagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Tag';
    objects: {
      group: Prisma.$TagGroupPayload<ExtArgs>;
      assistedEvent: Prisma.$EventPayload<ExtArgs> | null;
      confirmedEvent: Prisma.$EventPayload<ExtArgs> | null;
      accounts: Prisma.$AccountPayload<ExtArgs>[];
      profiles: Prisma.$ProfilePayload<ExtArgs>[];
      accountsGlobalFilter: Prisma.$AccountPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: $Enums.TagType;
        groupId: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tag']
    >;
    composites: {};
  };

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
    $Result.GetResult<Prisma.$TagPayload, S>;

  type TagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Tag'];
      meta: { name: 'Tag' };
    };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends TagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends TagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     **/
    create<T extends TagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends TagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends TagCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     **/
    delete<T extends TagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     **/
    upsert<T extends TagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>,
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends TagGroupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagGroupDefaultArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      | $Result.GetResult<
          Prisma.$TagGroupPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;

    assistedEvent<T extends Tag$assistedEventArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$assistedEventArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    confirmedEvent<T extends Tag$confirmedEventArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$confirmedEventArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    accounts<T extends Tag$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    profiles<T extends Tag$profilesArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$profilesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'> | Null
    >;

    accountsGlobalFilter<T extends Tag$accountsGlobalFilterArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$accountsGlobalFilterArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<'Tag', 'String'>;
    readonly name: FieldRef<'Tag', 'String'>;
    readonly type: FieldRef<'Tag', 'TagType'>;
    readonly groupId: FieldRef<'Tag', 'String'>;
    readonly created_at: FieldRef<'Tag', 'DateTime'>;
    readonly updated_at: FieldRef<'Tag', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
  };

  /**
   * Tag.assistedEvent
   */
  export type Tag$assistedEventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
  };

  /**
   * Tag.confirmedEvent
   */
  export type Tag$confirmedEventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
  };

  /**
   * Tag.accounts
   */
  export type Tag$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Tag.profiles
   */
  export type Tag$profilesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    cursor?: ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Tag.accountsGlobalFilter
   */
  export type Tag$accountsGlobalFilterArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model TagGroup
   */

  export type AggregateTagGroup = {
    _count: TagGroupCountAggregateOutputType | null;
    _min: TagGroupMinAggregateOutputType | null;
    _max: TagGroupMaxAggregateOutputType | null;
  };

  export type TagGroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    color: string | null;
    isExclusive: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TagGroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    color: string | null;
    isExclusive: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TagGroupCountAggregateOutputType = {
    id: number;
    name: number;
    color: number;
    isExclusive: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TagGroupMinAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    isExclusive?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TagGroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    isExclusive?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TagGroupCountAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    isExclusive?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TagGroupAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TagGroup to aggregate.
     */
    where?: TagGroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagGroups to fetch.
     */
    orderBy?:
      | TagGroupOrderByWithRelationInput
      | TagGroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagGroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TagGroups
     **/
    _count?: true | TagGroupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagGroupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagGroupMaxAggregateInputType;
  };

  export type GetTagGroupAggregateType<T extends TagGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateTagGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagGroup[P]>
      : GetScalarType<T[P], AggregateTagGroup[P]>;
  };

  export type TagGroupGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagGroupWhereInput;
    orderBy?:
      | TagGroupOrderByWithAggregationInput
      | TagGroupOrderByWithAggregationInput[];
    by: TagGroupScalarFieldEnum[] | TagGroupScalarFieldEnum;
    having?: TagGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagGroupCountAggregateInputType | true;
    _min?: TagGroupMinAggregateInputType;
    _max?: TagGroupMaxAggregateInputType;
  };

  export type TagGroupGroupByOutputType = {
    id: string;
    name: string;
    color: string;
    isExclusive: boolean;
    created_at: Date;
    updated_at: Date;
    _count: TagGroupCountAggregateOutputType | null;
    _min: TagGroupMinAggregateOutputType | null;
    _max: TagGroupMaxAggregateOutputType | null;
  };

  type GetTagGroupGroupByPayload<T extends TagGroupGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TagGroupGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TagGroupGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupGroupByOutputType[P]>;
        }
      >
    >;

  export type TagGroupSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      color?: boolean;
      isExclusive?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tags?: boolean | TagGroup$tagsArgs<ExtArgs>;
      _count?: boolean | TagGroupCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tagGroup']
  >;

  export type TagGroupSelectScalar = {
    id?: boolean;
    name?: boolean;
    color?: boolean;
    isExclusive?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type TagGroupInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | TagGroup$tagsArgs<ExtArgs>;
    _count?: boolean | TagGroupCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $TagGroupPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TagGroup';
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        color: string;
        isExclusive: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tagGroup']
    >;
    composites: {};
  };

  type TagGroupGetPayload<
    S extends boolean | null | undefined | TagGroupDefaultArgs,
  > = $Result.GetResult<Prisma.$TagGroupPayload, S>;

  type TagGroupCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: TagGroupCountAggregateInputType | true;
  };

  export interface TagGroupDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TagGroup'];
      meta: { name: 'TagGroup' };
    };
    /**
     * Find zero or one TagGroup that matches the filter.
     * @param {TagGroupFindUniqueArgs} args - Arguments to find a TagGroup
     * @example
     * // Get one TagGroup
     * const tagGroup = await prisma.tagGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends TagGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagGroupFindUniqueArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<
        Prisma.$TagGroupPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one TagGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagGroupFindUniqueOrThrowArgs} args - Arguments to find a TagGroup
     * @example
     * // Get one TagGroup
     * const tagGroup = await prisma.tagGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TagGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<
        Prisma.$TagGroupPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first TagGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupFindFirstArgs} args - Arguments to find a TagGroup
     * @example
     * // Get one TagGroup
     * const tagGroup = await prisma.tagGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends TagGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupFindFirstArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<
        Prisma.$TagGroupPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first TagGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupFindFirstOrThrowArgs} args - Arguments to find a TagGroup
     * @example
     * // Get one TagGroup
     * const tagGroup = await prisma.tagGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TagGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<
        Prisma.$TagGroupPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more TagGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagGroups
     * const tagGroups = await prisma.tagGroup.findMany()
     *
     * // Get first 10 TagGroups
     * const tagGroups = await prisma.tagGroup.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagGroupWithIdOnly = await prisma.tagGroup.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TagGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagGroupPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a TagGroup.
     * @param {TagGroupCreateArgs} args - Arguments to create a TagGroup.
     * @example
     * // Create one TagGroup
     * const TagGroup = await prisma.tagGroup.create({
     *   data: {
     *     // ... data to create a TagGroup
     *   }
     * })
     *
     **/
    create<T extends TagGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagGroupCreateArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<Prisma.$TagGroupPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many TagGroups.
     * @param {TagGroupCreateManyArgs} args - Arguments to create many TagGroups.
     * @example
     * // Create many TagGroups
     * const tagGroup = await prisma.tagGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends TagGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TagGroups and returns the data saved in the database.
     * @param {TagGroupCreateManyAndReturnArgs} args - Arguments to create many TagGroups.
     * @example
     * // Create many TagGroups
     * const tagGroup = await prisma.tagGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TagGroups and only return the `id`
     * const tagGroupWithIdOnly = await prisma.tagGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends TagGroupCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagGroupPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a TagGroup.
     * @param {TagGroupDeleteArgs} args - Arguments to delete one TagGroup.
     * @example
     * // Delete one TagGroup
     * const TagGroup = await prisma.tagGroup.delete({
     *   where: {
     *     // ... filter to delete one TagGroup
     *   }
     * })
     *
     **/
    delete<T extends TagGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagGroupDeleteArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<Prisma.$TagGroupPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one TagGroup.
     * @param {TagGroupUpdateArgs} args - Arguments to update one TagGroup.
     * @example
     * // Update one TagGroup
     * const tagGroup = await prisma.tagGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TagGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagGroupUpdateArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<Prisma.$TagGroupPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more TagGroups.
     * @param {TagGroupDeleteManyArgs} args - Arguments to filter TagGroups to delete.
     * @example
     * // Delete a few TagGroups
     * const { count } = await prisma.tagGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TagGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagGroupDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TagGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagGroups
     * const tagGroup = await prisma.tagGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TagGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagGroupUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one TagGroup.
     * @param {TagGroupUpsertArgs} args - Arguments to update or create a TagGroup.
     * @example
     * // Update or create a TagGroup
     * const tagGroup = await prisma.tagGroup.upsert({
     *   create: {
     *     // ... data to create a TagGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagGroup we want to update
     *   }
     * })
     **/
    upsert<T extends TagGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagGroupUpsertArgs<ExtArgs>>,
    ): Prisma__TagGroupClient<
      $Result.GetResult<Prisma.$TagGroupPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of TagGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupCountArgs} args - Arguments to filter TagGroups to count.
     * @example
     * // Count the number of TagGroups
     * const count = await prisma.tagGroup.count({
     *   where: {
     *     // ... the filter for the TagGroups we want to count
     *   }
     * })
     **/
    count<T extends TagGroupCountArgs>(
      args?: Subset<T, TagGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagGroupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TagGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagGroupAggregateArgs>(
      args: Subset<T, TagGroupAggregateArgs>,
    ): Prisma.PrismaPromise<GetTagGroupAggregateType<T>>;

    /**
     * Group by TagGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupGroupByArgs} args - Group by arguments.
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
      T extends TagGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, TagGroupGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTagGroupGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TagGroup model
     */
    readonly fields: TagGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagGroupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tags<T extends TagGroup$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, TagGroup$tagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'> | Null
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
   * Fields of the TagGroup model
   */
  interface TagGroupFieldRefs {
    readonly id: FieldRef<'TagGroup', 'String'>;
    readonly name: FieldRef<'TagGroup', 'String'>;
    readonly color: FieldRef<'TagGroup', 'String'>;
    readonly isExclusive: FieldRef<'TagGroup', 'Boolean'>;
    readonly created_at: FieldRef<'TagGroup', 'DateTime'>;
    readonly updated_at: FieldRef<'TagGroup', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * TagGroup findUnique
   */
  export type TagGroupFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * Filter, which TagGroup to fetch.
     */
    where: TagGroupWhereUniqueInput;
  };

  /**
   * TagGroup findUniqueOrThrow
   */
  export type TagGroupFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * Filter, which TagGroup to fetch.
     */
    where: TagGroupWhereUniqueInput;
  };

  /**
   * TagGroup findFirst
   */
  export type TagGroupFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * Filter, which TagGroup to fetch.
     */
    where?: TagGroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagGroups to fetch.
     */
    orderBy?:
      | TagGroupOrderByWithRelationInput
      | TagGroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TagGroups.
     */
    cursor?: TagGroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TagGroups.
     */
    distinct?: TagGroupScalarFieldEnum | TagGroupScalarFieldEnum[];
  };

  /**
   * TagGroup findFirstOrThrow
   */
  export type TagGroupFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * Filter, which TagGroup to fetch.
     */
    where?: TagGroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagGroups to fetch.
     */
    orderBy?:
      | TagGroupOrderByWithRelationInput
      | TagGroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TagGroups.
     */
    cursor?: TagGroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagGroups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TagGroups.
     */
    distinct?: TagGroupScalarFieldEnum | TagGroupScalarFieldEnum[];
  };

  /**
   * TagGroup findMany
   */
  export type TagGroupFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * Filter, which TagGroups to fetch.
     */
    where?: TagGroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagGroups to fetch.
     */
    orderBy?:
      | TagGroupOrderByWithRelationInput
      | TagGroupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TagGroups.
     */
    cursor?: TagGroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagGroups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagGroups.
     */
    skip?: number;
    distinct?: TagGroupScalarFieldEnum | TagGroupScalarFieldEnum[];
  };

  /**
   * TagGroup create
   */
  export type TagGroupCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * The data needed to create a TagGroup.
     */
    data: XOR<TagGroupCreateInput, TagGroupUncheckedCreateInput>;
  };

  /**
   * TagGroup createMany
   */
  export type TagGroupCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TagGroups.
     */
    data: TagGroupCreateManyInput | TagGroupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TagGroup createManyAndReturn
   */
  export type TagGroupCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * The data used to create many TagGroups.
     */
    data: TagGroupCreateManyInput | TagGroupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TagGroup update
   */
  export type TagGroupUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * The data needed to update a TagGroup.
     */
    data: XOR<TagGroupUpdateInput, TagGroupUncheckedUpdateInput>;
    /**
     * Choose, which TagGroup to update.
     */
    where: TagGroupWhereUniqueInput;
  };

  /**
   * TagGroup updateMany
   */
  export type TagGroupUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TagGroups.
     */
    data: XOR<
      TagGroupUpdateManyMutationInput,
      TagGroupUncheckedUpdateManyInput
    >;
    /**
     * Filter which TagGroups to update
     */
    where?: TagGroupWhereInput;
  };

  /**
   * TagGroup upsert
   */
  export type TagGroupUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * The filter to search for the TagGroup to update in case it exists.
     */
    where: TagGroupWhereUniqueInput;
    /**
     * In case the TagGroup found by the `where` argument doesn't exist, create a new TagGroup with this data.
     */
    create: XOR<TagGroupCreateInput, TagGroupUncheckedCreateInput>;
    /**
     * In case the TagGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagGroupUpdateInput, TagGroupUncheckedUpdateInput>;
  };

  /**
   * TagGroup delete
   */
  export type TagGroupDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
    /**
     * Filter which TagGroup to delete.
     */
    where: TagGroupWhereUniqueInput;
  };

  /**
   * TagGroup deleteMany
   */
  export type TagGroupDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TagGroups to delete
     */
    where?: TagGroupWhereInput;
  };

  /**
   * TagGroup.tags
   */
  export type TagGroup$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * TagGroup without action
   */
  export type TagGroupDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagGroup
     */
    select?: TagGroupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagGroupInclude<ExtArgs> | null;
  };

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    date: Date | null;
    location: string | null;
    folderId: string | null;
    tagAssistedId: string | null;
    tagConfirmedId: string | null;
    supraEventId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    date: Date | null;
    location: string | null;
    folderId: string | null;
    tagAssistedId: string | null;
    tagConfirmedId: string | null;
    supraEventId: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    name: number;
    date: number;
    location: number;
    folderId: number;
    tagAssistedId: number;
    tagConfirmedId: number;
    supraEventId: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    name?: true;
    date?: true;
    location?: true;
    folderId?: true;
    tagAssistedId?: true;
    tagConfirmedId?: true;
    supraEventId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    name?: true;
    date?: true;
    location?: true;
    folderId?: true;
    tagAssistedId?: true;
    tagConfirmedId?: true;
    supraEventId?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    name?: true;
    date?: true;
    location?: true;
    folderId?: true;
    tagAssistedId?: true;
    tagConfirmedId?: true;
    supraEventId?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EventAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
     **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type EventGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
    orderBy?:
      | EventOrderByWithAggregationInput
      | EventOrderByWithAggregationInput[];
    by: EventScalarFieldEnum[] | EventScalarFieldEnum;
    having?: EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    name: string;
    date: Date;
    location: string;
    folderId: string | null;
    tagAssistedId: string;
    tagConfirmedId: string;
    supraEventId: string | null;
    created_at: Date;
    updated_at: Date;
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends EventGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventGroupByOutputType, T['by']> & {
          [P in keyof T & keyof EventGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>;
        }
      >
    >;

  export type EventSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      date?: boolean;
      location?: boolean;
      folderId?: boolean;
      tagAssistedId?: boolean;
      tagConfirmedId?: boolean;
      supraEventId?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      folder?: boolean | Event$folderArgs<ExtArgs>;
      tagAssisted?: boolean | TagDefaultArgs<ExtArgs>;
      tagConfirmed?: boolean | TagDefaultArgs<ExtArgs>;
      supraEvent?: boolean | Event$supraEventArgs<ExtArgs>;
      subEvents?: boolean | Event$subEventsArgs<ExtArgs>;
      _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['event']
  >;

  export type EventSelectScalar = {
    id?: boolean;
    name?: boolean;
    date?: boolean;
    location?: boolean;
    folderId?: boolean;
    tagAssistedId?: boolean;
    tagConfirmedId?: boolean;
    supraEventId?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type EventInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    folder?: boolean | Event$folderArgs<ExtArgs>;
    tagAssisted?: boolean | TagDefaultArgs<ExtArgs>;
    tagConfirmed?: boolean | TagDefaultArgs<ExtArgs>;
    supraEvent?: boolean | Event$supraEventArgs<ExtArgs>;
    subEvents?: boolean | Event$subEventsArgs<ExtArgs>;
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $EventPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Event';
    objects: {
      folder: Prisma.$EventFolderPayload<ExtArgs> | null;
      tagAssisted: Prisma.$TagPayload<ExtArgs>;
      tagConfirmed: Prisma.$TagPayload<ExtArgs>;
      supraEvent: Prisma.$EventPayload<ExtArgs> | null;
      subEvents: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        date: Date;
        location: string;
        folderId: string | null;
        tagAssistedId: string;
        tagConfirmedId: string;
        supraEventId: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['event']
    >;
    composites: {};
  };

  type EventGetPayload<
    S extends boolean | null | undefined | EventDefaultArgs,
  > = $Result.GetResult<Prisma.$EventPayload, S>;

  type EventCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: EventCountAggregateInputType | true;
  };

  export interface EventDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Event'];
      meta: { name: 'Event' };
    };
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     **/
    create<T extends EventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends EventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends EventCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     **/
    delete<T extends EventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     **/
    upsert<T extends EventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEventGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Event model
     */
    readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    folder<T extends Event$folderArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$folderArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<
        Prisma.$EventFolderPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    tagAssisted<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>,
    ): Prisma__TagClient<
      | $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    tagConfirmed<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>,
    ): Prisma__TagClient<
      | $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;

    supraEvent<T extends Event$supraEventArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$supraEventArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;

    subEvents<T extends Event$subEventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$subEventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'> | Null
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<'Event', 'String'>;
    readonly name: FieldRef<'Event', 'String'>;
    readonly date: FieldRef<'Event', 'DateTime'>;
    readonly location: FieldRef<'Event', 'String'>;
    readonly folderId: FieldRef<'Event', 'String'>;
    readonly tagAssistedId: FieldRef<'Event', 'String'>;
    readonly tagConfirmedId: FieldRef<'Event', 'String'>;
    readonly supraEventId: FieldRef<'Event', 'String'>;
    readonly created_at: FieldRef<'Event', 'DateTime'>;
    readonly updated_at: FieldRef<'Event', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findMany
   */
  export type EventFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event create
   */
  export type EventCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>;
  };

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Event update
   */
  export type EventUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
  };

  /**
   * Event upsert
   */
  export type EventUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
  };

  /**
   * Event delete
   */
  export type EventDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput;
  };

  /**
   * Event.folder
   */
  export type Event$folderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    where?: EventFolderWhereInput;
  };

  /**
   * Event.supraEvent
   */
  export type Event$supraEventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
  };

  /**
   * Event.subEvents
   */
  export type Event$subEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    cursor?: EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event without action
   */
  export type EventDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
  };

  /**
   * Model EventFolder
   */

  export type AggregateEventFolder = {
    _count: EventFolderCountAggregateOutputType | null;
    _min: EventFolderMinAggregateOutputType | null;
    _max: EventFolderMaxAggregateOutputType | null;
  };

  export type EventFolderMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    color: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventFolderMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    color: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EventFolderCountAggregateOutputType = {
    id: number;
    name: number;
    color: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EventFolderMinAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventFolderMaxAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EventFolderCountAggregateInputType = {
    id?: true;
    name?: true;
    color?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EventFolderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EventFolder to aggregate.
     */
    where?: EventFolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFolders to fetch.
     */
    orderBy?:
      | EventFolderOrderByWithRelationInput
      | EventFolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventFolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFolders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFolders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventFolders
     **/
    _count?: true | EventFolderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventFolderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventFolderMaxAggregateInputType;
  };

  export type GetEventFolderAggregateType<T extends EventFolderAggregateArgs> =
    {
      [P in keyof T & keyof AggregateEventFolder]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateEventFolder[P]>
        : GetScalarType<T[P], AggregateEventFolder[P]>;
    };

  export type EventFolderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventFolderWhereInput;
    orderBy?:
      | EventFolderOrderByWithAggregationInput
      | EventFolderOrderByWithAggregationInput[];
    by: EventFolderScalarFieldEnum[] | EventFolderScalarFieldEnum;
    having?: EventFolderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventFolderCountAggregateInputType | true;
    _min?: EventFolderMinAggregateInputType;
    _max?: EventFolderMaxAggregateInputType;
  };

  export type EventFolderGroupByOutputType = {
    id: string;
    name: string;
    color: string;
    created_at: Date;
    updated_at: Date;
    _count: EventFolderCountAggregateOutputType | null;
    _min: EventFolderMinAggregateOutputType | null;
    _max: EventFolderMaxAggregateOutputType | null;
  };

  type GetEventFolderGroupByPayload<T extends EventFolderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventFolderGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof EventFolderGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventFolderGroupByOutputType[P]>
            : GetScalarType<T[P], EventFolderGroupByOutputType[P]>;
        }
      >
    >;

  export type EventFolderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      color?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      events?: boolean | EventFolder$eventsArgs<ExtArgs>;
      _count?: boolean | EventFolderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['eventFolder']
  >;

  export type EventFolderSelectScalar = {
    id?: boolean;
    name?: boolean;
    color?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type EventFolderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    events?: boolean | EventFolder$eventsArgs<ExtArgs>;
    _count?: boolean | EventFolderCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $EventFolderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'EventFolder';
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        color: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['eventFolder']
    >;
    composites: {};
  };

  type EventFolderGetPayload<
    S extends boolean | null | undefined | EventFolderDefaultArgs,
  > = $Result.GetResult<Prisma.$EventFolderPayload, S>;

  type EventFolderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EventFolderFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: EventFolderCountAggregateInputType | true;
  };

  export interface EventFolderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['EventFolder'];
      meta: { name: 'EventFolder' };
    };
    /**
     * Find zero or one EventFolder that matches the filter.
     * @param {EventFolderFindUniqueArgs} args - Arguments to find a EventFolder
     * @example
     * // Get one EventFolder
     * const eventFolder = await prisma.eventFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EventFolderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventFolderFindUniqueArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<
        Prisma.$EventFolderPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one EventFolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFolderFindUniqueOrThrowArgs} args - Arguments to find a EventFolder
     * @example
     * // Get one EventFolder
     * const eventFolder = await prisma.eventFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EventFolderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<
        Prisma.$EventFolderPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first EventFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderFindFirstArgs} args - Arguments to find a EventFolder
     * @example
     * // Get one EventFolder
     * const eventFolder = await prisma.eventFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EventFolderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderFindFirstArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<
        Prisma.$EventFolderPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first EventFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderFindFirstOrThrowArgs} args - Arguments to find a EventFolder
     * @example
     * // Get one EventFolder
     * const eventFolder = await prisma.eventFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EventFolderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<
        Prisma.$EventFolderPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more EventFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventFolders
     * const eventFolders = await prisma.eventFolder.findMany()
     *
     * // Get first 10 EventFolders
     * const eventFolders = await prisma.eventFolder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventFolderWithIdOnly = await prisma.eventFolder.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EventFolderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventFolderPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a EventFolder.
     * @param {EventFolderCreateArgs} args - Arguments to create a EventFolder.
     * @example
     * // Create one EventFolder
     * const EventFolder = await prisma.eventFolder.create({
     *   data: {
     *     // ... data to create a EventFolder
     *   }
     * })
     *
     **/
    create<T extends EventFolderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventFolderCreateArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<Prisma.$EventFolderPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many EventFolders.
     * @param {EventFolderCreateManyArgs} args - Arguments to create many EventFolders.
     * @example
     * // Create many EventFolders
     * const eventFolder = await prisma.eventFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends EventFolderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many EventFolders and returns the data saved in the database.
     * @param {EventFolderCreateManyAndReturnArgs} args - Arguments to create many EventFolders.
     * @example
     * // Create many EventFolders
     * const eventFolder = await prisma.eventFolder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventFolders and only return the `id`
     * const eventFolderWithIdOnly = await prisma.eventFolder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends EventFolderCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventFolderPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a EventFolder.
     * @param {EventFolderDeleteArgs} args - Arguments to delete one EventFolder.
     * @example
     * // Delete one EventFolder
     * const EventFolder = await prisma.eventFolder.delete({
     *   where: {
     *     // ... filter to delete one EventFolder
     *   }
     * })
     *
     **/
    delete<T extends EventFolderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventFolderDeleteArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<Prisma.$EventFolderPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one EventFolder.
     * @param {EventFolderUpdateArgs} args - Arguments to update one EventFolder.
     * @example
     * // Update one EventFolder
     * const eventFolder = await prisma.eventFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EventFolderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventFolderUpdateArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<Prisma.$EventFolderPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more EventFolders.
     * @param {EventFolderDeleteManyArgs} args - Arguments to filter EventFolders to delete.
     * @example
     * // Delete a few EventFolders
     * const { count } = await prisma.eventFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EventFolderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFolderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EventFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventFolders
     * const eventFolder = await prisma.eventFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EventFolderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventFolderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one EventFolder.
     * @param {EventFolderUpsertArgs} args - Arguments to update or create a EventFolder.
     * @example
     * // Update or create a EventFolder
     * const eventFolder = await prisma.eventFolder.upsert({
     *   create: {
     *     // ... data to create a EventFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventFolder we want to update
     *   }
     * })
     **/
    upsert<T extends EventFolderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventFolderUpsertArgs<ExtArgs>>,
    ): Prisma__EventFolderClient<
      $Result.GetResult<Prisma.$EventFolderPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of EventFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderCountArgs} args - Arguments to filter EventFolders to count.
     * @example
     * // Count the number of EventFolders
     * const count = await prisma.eventFolder.count({
     *   where: {
     *     // ... the filter for the EventFolders we want to count
     *   }
     * })
     **/
    count<T extends EventFolderCountArgs>(
      args?: Subset<T, EventFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventFolderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a EventFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventFolderAggregateArgs>(
      args: Subset<T, EventFolderAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventFolderAggregateType<T>>;

    /**
     * Group by EventFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFolderGroupByArgs} args - Group by arguments.
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
      T extends EventFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventFolderGroupByArgs['orderBy'] }
        : { orderBy?: EventFolderGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, EventFolderGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEventFolderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventFolder model
     */
    readonly fields: EventFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventFolderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    events<T extends EventFolder$eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, EventFolder$eventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'> | Null
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
   * Fields of the EventFolder model
   */
  interface EventFolderFieldRefs {
    readonly id: FieldRef<'EventFolder', 'String'>;
    readonly name: FieldRef<'EventFolder', 'String'>;
    readonly color: FieldRef<'EventFolder', 'String'>;
    readonly created_at: FieldRef<'EventFolder', 'DateTime'>;
    readonly updated_at: FieldRef<'EventFolder', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * EventFolder findUnique
   */
  export type EventFolderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * Filter, which EventFolder to fetch.
     */
    where: EventFolderWhereUniqueInput;
  };

  /**
   * EventFolder findUniqueOrThrow
   */
  export type EventFolderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * Filter, which EventFolder to fetch.
     */
    where: EventFolderWhereUniqueInput;
  };

  /**
   * EventFolder findFirst
   */
  export type EventFolderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * Filter, which EventFolder to fetch.
     */
    where?: EventFolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFolders to fetch.
     */
    orderBy?:
      | EventFolderOrderByWithRelationInput
      | EventFolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFolders.
     */
    cursor?: EventFolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFolders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFolders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFolders.
     */
    distinct?: EventFolderScalarFieldEnum | EventFolderScalarFieldEnum[];
  };

  /**
   * EventFolder findFirstOrThrow
   */
  export type EventFolderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * Filter, which EventFolder to fetch.
     */
    where?: EventFolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFolders to fetch.
     */
    orderBy?:
      | EventFolderOrderByWithRelationInput
      | EventFolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFolders.
     */
    cursor?: EventFolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFolders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFolders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFolders.
     */
    distinct?: EventFolderScalarFieldEnum | EventFolderScalarFieldEnum[];
  };

  /**
   * EventFolder findMany
   */
  export type EventFolderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * Filter, which EventFolders to fetch.
     */
    where?: EventFolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFolders to fetch.
     */
    orderBy?:
      | EventFolderOrderByWithRelationInput
      | EventFolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventFolders.
     */
    cursor?: EventFolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFolders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFolders.
     */
    skip?: number;
    distinct?: EventFolderScalarFieldEnum | EventFolderScalarFieldEnum[];
  };

  /**
   * EventFolder create
   */
  export type EventFolderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventFolder.
     */
    data: XOR<EventFolderCreateInput, EventFolderUncheckedCreateInput>;
  };

  /**
   * EventFolder createMany
   */
  export type EventFolderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many EventFolders.
     */
    data: EventFolderCreateManyInput | EventFolderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EventFolder createManyAndReturn
   */
  export type EventFolderCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * The data used to create many EventFolders.
     */
    data: EventFolderCreateManyInput | EventFolderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EventFolder update
   */
  export type EventFolderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventFolder.
     */
    data: XOR<EventFolderUpdateInput, EventFolderUncheckedUpdateInput>;
    /**
     * Choose, which EventFolder to update.
     */
    where: EventFolderWhereUniqueInput;
  };

  /**
   * EventFolder updateMany
   */
  export type EventFolderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update EventFolders.
     */
    data: XOR<
      EventFolderUpdateManyMutationInput,
      EventFolderUncheckedUpdateManyInput
    >;
    /**
     * Filter which EventFolders to update
     */
    where?: EventFolderWhereInput;
  };

  /**
   * EventFolder upsert
   */
  export type EventFolderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventFolder to update in case it exists.
     */
    where: EventFolderWhereUniqueInput;
    /**
     * In case the EventFolder found by the `where` argument doesn't exist, create a new EventFolder with this data.
     */
    create: XOR<EventFolderCreateInput, EventFolderUncheckedCreateInput>;
    /**
     * In case the EventFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventFolderUpdateInput, EventFolderUncheckedUpdateInput>;
  };

  /**
   * EventFolder delete
   */
  export type EventFolderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
    /**
     * Filter which EventFolder to delete.
     */
    where: EventFolderWhereUniqueInput;
  };

  /**
   * EventFolder deleteMany
   */
  export type EventFolderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EventFolders to delete
     */
    where?: EventFolderWhereInput;
  };

  /**
   * EventFolder.events
   */
  export type EventFolder$eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    cursor?: EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * EventFolder without action
   */
  export type EventFolderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventFolder
     */
    select?: EventFolderSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFolderInclude<ExtArgs> | null;
  };

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  export type MessageMinAggregateOutputType = {
    id: string | null;
    wamId: string | null;
    profilePhoneNumber: string | null;
    state: $Enums.MessageState | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MessageMaxAggregateOutputType = {
    id: string | null;
    wamId: string | null;
    profilePhoneNumber: string | null;
    state: $Enums.MessageState | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MessageCountAggregateOutputType = {
    id: number;
    wamId: number;
    message: number;
    profilePhoneNumber: number;
    state: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MessageMinAggregateInputType = {
    id?: true;
    wamId?: true;
    profilePhoneNumber?: true;
    state?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MessageMaxAggregateInputType = {
    id?: true;
    wamId?: true;
    profilePhoneNumber?: true;
    state?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MessageCountAggregateInputType = {
    id?: true;
    wamId?: true;
    message?: true;
    profilePhoneNumber?: true;
    state?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MessageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
     **/
    _count?: true | MessageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MessageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MessageMaxAggregateInputType;
  };

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>;
  };

  export type MessageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MessageWhereInput;
    orderBy?:
      | MessageOrderByWithAggregationInput
      | MessageOrderByWithAggregationInput[];
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum;
    having?: MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
  };

  export type MessageGroupByOutputType = {
    id: string;
    wamId: string;
    message: JsonValue;
    profilePhoneNumber: string;
    state: $Enums.MessageState;
    created_at: Date;
    updated_at: Date;
    _count: MessageCountAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
  };

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MessageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MessageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>;
        }
      >
    >;

  export type MessageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      wamId?: boolean;
      message?: boolean;
      profilePhoneNumber?: boolean;
      state?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      profile?: boolean | ProfileDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['message']
  >;

  export type MessageSelectScalar = {
    id?: boolean;
    wamId?: boolean;
    message?: boolean;
    profilePhoneNumber?: boolean;
    state?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type MessageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>;
  };

  export type $MessagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Message';
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        wamId: string;
        message: Prisma.JsonValue;
        profilePhoneNumber: string;
        state: $Enums.MessageState;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['message']
    >;
    composites: {};
  };

  type MessageGetPayload<
    S extends boolean | null | undefined | MessageDefaultArgs,
  > = $Result.GetResult<Prisma.$MessagePayload, S>;

  type MessageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: MessageCountAggregateInputType | true;
  };

  export interface MessageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Message'];
      meta: { name: 'Message' };
    };
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     *
     **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     **/
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MessagePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     *
     **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>,
    ): Prisma__MessageClient<
      $Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
     **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(
      args: Subset<T, MessageAggregateArgs>,
    ): Prisma.PrismaPromise<GetMessageAggregateType<T>>;

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMessageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Message model
     */
    readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProfileDefaultArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      | $Result.GetResult<
          Prisma.$ProfilePayload<ExtArgs>,
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<'Message', 'String'>;
    readonly wamId: FieldRef<'Message', 'String'>;
    readonly message: FieldRef<'Message', 'Json'>;
    readonly profilePhoneNumber: FieldRef<'Message', 'String'>;
    readonly state: FieldRef<'Message', 'MessageState'>;
    readonly created_at: FieldRef<'Message', 'DateTime'>;
    readonly updated_at: FieldRef<'Message', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?:
      | MessageOrderByWithRelationInput
      | MessageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[];
  };

  /**
   * Message create
   */
  export type MessageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
  };

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Message update
   */
  export type MessageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput;
  };

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput;
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>;
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>;
  };

  /**
   * Message delete
   */
  export type MessageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput;
  };

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput;
  };

  /**
   * Message without action
   */
  export type MessageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null;
  };

  /**
   * Model CannedResponse
   */

  export type AggregateCannedResponse = {
    _count: CannedResponseCountAggregateOutputType | null;
    _min: CannedResponseMinAggregateOutputType | null;
    _max: CannedResponseMaxAggregateOutputType | null;
  };

  export type CannedResponseMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    content: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CannedResponseMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    content: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CannedResponseCountAggregateOutputType = {
    id: number;
    name: number;
    content: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CannedResponseMinAggregateInputType = {
    id?: true;
    name?: true;
    content?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CannedResponseMaxAggregateInputType = {
    id?: true;
    name?: true;
    content?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CannedResponseCountAggregateInputType = {
    id?: true;
    name?: true;
    content?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CannedResponseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CannedResponse to aggregate.
     */
    where?: CannedResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CannedResponses to fetch.
     */
    orderBy?:
      | CannedResponseOrderByWithRelationInput
      | CannedResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CannedResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CannedResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CannedResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CannedResponses
     **/
    _count?: true | CannedResponseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CannedResponseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CannedResponseMaxAggregateInputType;
  };

  export type GetCannedResponseAggregateType<
    T extends CannedResponseAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateCannedResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCannedResponse[P]>
      : GetScalarType<T[P], AggregateCannedResponse[P]>;
  };

  export type CannedResponseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CannedResponseWhereInput;
    orderBy?:
      | CannedResponseOrderByWithAggregationInput
      | CannedResponseOrderByWithAggregationInput[];
    by: CannedResponseScalarFieldEnum[] | CannedResponseScalarFieldEnum;
    having?: CannedResponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CannedResponseCountAggregateInputType | true;
    _min?: CannedResponseMinAggregateInputType;
    _max?: CannedResponseMaxAggregateInputType;
  };

  export type CannedResponseGroupByOutputType = {
    id: string;
    name: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    _count: CannedResponseCountAggregateOutputType | null;
    _min: CannedResponseMinAggregateOutputType | null;
    _max: CannedResponseMaxAggregateOutputType | null;
  };

  type GetCannedResponseGroupByPayload<T extends CannedResponseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CannedResponseGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof CannedResponseGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CannedResponseGroupByOutputType[P]>
            : GetScalarType<T[P], CannedResponseGroupByOutputType[P]>;
        }
      >
    >;

  export type CannedResponseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      content?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['cannedResponse']
  >;

  export type CannedResponseSelectScalar = {
    id?: boolean;
    name?: boolean;
    content?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $CannedResponsePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CannedResponse';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        content: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['cannedResponse']
    >;
    composites: {};
  };

  type CannedResponseGetPayload<
    S extends boolean | null | undefined | CannedResponseDefaultArgs,
  > = $Result.GetResult<Prisma.$CannedResponsePayload, S>;

  type CannedResponseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CannedResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: CannedResponseCountAggregateInputType | true;
  };

  export interface CannedResponseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CannedResponse'];
      meta: { name: 'CannedResponse' };
    };
    /**
     * Find zero or one CannedResponse that matches the filter.
     * @param {CannedResponseFindUniqueArgs} args - Arguments to find a CannedResponse
     * @example
     * // Get one CannedResponse
     * const cannedResponse = await prisma.cannedResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CannedResponseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CannedResponseFindUniqueArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<
        Prisma.$CannedResponsePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one CannedResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CannedResponseFindUniqueOrThrowArgs} args - Arguments to find a CannedResponse
     * @example
     * // Get one CannedResponse
     * const cannedResponse = await prisma.cannedResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CannedResponseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CannedResponseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<
        Prisma.$CannedResponsePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first CannedResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseFindFirstArgs} args - Arguments to find a CannedResponse
     * @example
     * // Get one CannedResponse
     * const cannedResponse = await prisma.cannedResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CannedResponseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CannedResponseFindFirstArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<
        Prisma.$CannedResponsePayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first CannedResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseFindFirstOrThrowArgs} args - Arguments to find a CannedResponse
     * @example
     * // Get one CannedResponse
     * const cannedResponse = await prisma.cannedResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CannedResponseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CannedResponseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<
        Prisma.$CannedResponsePayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more CannedResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CannedResponses
     * const cannedResponses = await prisma.cannedResponse.findMany()
     *
     * // Get first 10 CannedResponses
     * const cannedResponses = await prisma.cannedResponse.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cannedResponseWithIdOnly = await prisma.cannedResponse.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CannedResponseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CannedResponseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CannedResponsePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a CannedResponse.
     * @param {CannedResponseCreateArgs} args - Arguments to create a CannedResponse.
     * @example
     * // Create one CannedResponse
     * const CannedResponse = await prisma.cannedResponse.create({
     *   data: {
     *     // ... data to create a CannedResponse
     *   }
     * })
     *
     **/
    create<T extends CannedResponseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CannedResponseCreateArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<Prisma.$CannedResponsePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many CannedResponses.
     * @param {CannedResponseCreateManyArgs} args - Arguments to create many CannedResponses.
     * @example
     * // Create many CannedResponses
     * const cannedResponse = await prisma.cannedResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     **/
    createMany<T extends CannedResponseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CannedResponseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CannedResponses and returns the data saved in the database.
     * @param {CannedResponseCreateManyAndReturnArgs} args - Arguments to create many CannedResponses.
     * @example
     * // Create many CannedResponses
     * const cannedResponse = await prisma.cannedResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CannedResponses and only return the `id`
     * const cannedResponseWithIdOnly = await prisma.cannedResponse.createManyAndReturn({
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
      T extends CannedResponseCreateManyAndReturnArgs<ExtArgs>,
    >(
      args?: SelectSubset<T, CannedResponseCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CannedResponsePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a CannedResponse.
     * @param {CannedResponseDeleteArgs} args - Arguments to delete one CannedResponse.
     * @example
     * // Delete one CannedResponse
     * const CannedResponse = await prisma.cannedResponse.delete({
     *   where: {
     *     // ... filter to delete one CannedResponse
     *   }
     * })
     *
     **/
    delete<T extends CannedResponseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CannedResponseDeleteArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<Prisma.$CannedResponsePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one CannedResponse.
     * @param {CannedResponseUpdateArgs} args - Arguments to update one CannedResponse.
     * @example
     * // Update one CannedResponse
     * const cannedResponse = await prisma.cannedResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CannedResponseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CannedResponseUpdateArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<Prisma.$CannedResponsePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more CannedResponses.
     * @param {CannedResponseDeleteManyArgs} args - Arguments to filter CannedResponses to delete.
     * @example
     * // Delete a few CannedResponses
     * const { count } = await prisma.cannedResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CannedResponseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CannedResponseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CannedResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CannedResponses
     * const cannedResponse = await prisma.cannedResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CannedResponseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CannedResponseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one CannedResponse.
     * @param {CannedResponseUpsertArgs} args - Arguments to update or create a CannedResponse.
     * @example
     * // Update or create a CannedResponse
     * const cannedResponse = await prisma.cannedResponse.upsert({
     *   create: {
     *     // ... data to create a CannedResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CannedResponse we want to update
     *   }
     * })
     **/
    upsert<T extends CannedResponseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CannedResponseUpsertArgs<ExtArgs>>,
    ): Prisma__CannedResponseClient<
      $Result.GetResult<Prisma.$CannedResponsePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of CannedResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseCountArgs} args - Arguments to filter CannedResponses to count.
     * @example
     * // Count the number of CannedResponses
     * const count = await prisma.cannedResponse.count({
     *   where: {
     *     // ... the filter for the CannedResponses we want to count
     *   }
     * })
     **/
    count<T extends CannedResponseCountArgs>(
      args?: Subset<T, CannedResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CannedResponseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CannedResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CannedResponseAggregateArgs>(
      args: Subset<T, CannedResponseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCannedResponseAggregateType<T>>;

    /**
     * Group by CannedResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CannedResponseGroupByArgs} args - Group by arguments.
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
      T extends CannedResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CannedResponseGroupByArgs['orderBy'] }
        : { orderBy?: CannedResponseGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CannedResponseGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCannedResponseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CannedResponse model
     */
    readonly fields: CannedResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CannedResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CannedResponseClient<
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
   * Fields of the CannedResponse model
   */
  interface CannedResponseFieldRefs {
    readonly id: FieldRef<'CannedResponse', 'String'>;
    readonly name: FieldRef<'CannedResponse', 'String'>;
    readonly content: FieldRef<'CannedResponse', 'String'>;
    readonly created_at: FieldRef<'CannedResponse', 'DateTime'>;
    readonly updated_at: FieldRef<'CannedResponse', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * CannedResponse findUnique
   */
  export type CannedResponseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * Filter, which CannedResponse to fetch.
     */
    where: CannedResponseWhereUniqueInput;
  };

  /**
   * CannedResponse findUniqueOrThrow
   */
  export type CannedResponseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * Filter, which CannedResponse to fetch.
     */
    where: CannedResponseWhereUniqueInput;
  };

  /**
   * CannedResponse findFirst
   */
  export type CannedResponseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * Filter, which CannedResponse to fetch.
     */
    where?: CannedResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CannedResponses to fetch.
     */
    orderBy?:
      | CannedResponseOrderByWithRelationInput
      | CannedResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CannedResponses.
     */
    cursor?: CannedResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CannedResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CannedResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CannedResponses.
     */
    distinct?: CannedResponseScalarFieldEnum | CannedResponseScalarFieldEnum[];
  };

  /**
   * CannedResponse findFirstOrThrow
   */
  export type CannedResponseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * Filter, which CannedResponse to fetch.
     */
    where?: CannedResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CannedResponses to fetch.
     */
    orderBy?:
      | CannedResponseOrderByWithRelationInput
      | CannedResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CannedResponses.
     */
    cursor?: CannedResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CannedResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CannedResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CannedResponses.
     */
    distinct?: CannedResponseScalarFieldEnum | CannedResponseScalarFieldEnum[];
  };

  /**
   * CannedResponse findMany
   */
  export type CannedResponseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * Filter, which CannedResponses to fetch.
     */
    where?: CannedResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CannedResponses to fetch.
     */
    orderBy?:
      | CannedResponseOrderByWithRelationInput
      | CannedResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CannedResponses.
     */
    cursor?: CannedResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CannedResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CannedResponses.
     */
    skip?: number;
    distinct?: CannedResponseScalarFieldEnum | CannedResponseScalarFieldEnum[];
  };

  /**
   * CannedResponse create
   */
  export type CannedResponseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * The data needed to create a CannedResponse.
     */
    data: XOR<CannedResponseCreateInput, CannedResponseUncheckedCreateInput>;
  };

  /**
   * CannedResponse createMany
   */
  export type CannedResponseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CannedResponses.
     */
    data: CannedResponseCreateManyInput | CannedResponseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CannedResponse createManyAndReturn
   */
  export type CannedResponseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * The data used to create many CannedResponses.
     */
    data: CannedResponseCreateManyInput | CannedResponseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CannedResponse update
   */
  export type CannedResponseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * The data needed to update a CannedResponse.
     */
    data: XOR<CannedResponseUpdateInput, CannedResponseUncheckedUpdateInput>;
    /**
     * Choose, which CannedResponse to update.
     */
    where: CannedResponseWhereUniqueInput;
  };

  /**
   * CannedResponse updateMany
   */
  export type CannedResponseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CannedResponses.
     */
    data: XOR<
      CannedResponseUpdateManyMutationInput,
      CannedResponseUncheckedUpdateManyInput
    >;
    /**
     * Filter which CannedResponses to update
     */
    where?: CannedResponseWhereInput;
  };

  /**
   * CannedResponse upsert
   */
  export type CannedResponseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * The filter to search for the CannedResponse to update in case it exists.
     */
    where: CannedResponseWhereUniqueInput;
    /**
     * In case the CannedResponse found by the `where` argument doesn't exist, create a new CannedResponse with this data.
     */
    create: XOR<CannedResponseCreateInput, CannedResponseUncheckedCreateInput>;
    /**
     * In case the CannedResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CannedResponseUpdateInput, CannedResponseUncheckedUpdateInput>;
  };

  /**
   * CannedResponse delete
   */
  export type CannedResponseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
    /**
     * Filter which CannedResponse to delete.
     */
    where: CannedResponseWhereUniqueInput;
  };

  /**
   * CannedResponse deleteMany
   */
  export type CannedResponseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CannedResponses to delete
     */
    where?: CannedResponseWhereInput;
  };

  /**
   * CannedResponse without action
   */
  export type CannedResponseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CannedResponse
     */
    select?: CannedResponseSelect<ExtArgs> | null;
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
    templateStatus: $Enums.TemplateStatus | null;
    templateCategory: $Enums.TemplateCategory | null;
  };

  export type EnumsMaxAggregateOutputType = {
    id: string | null;
    templateStatus: $Enums.TemplateStatus | null;
    templateCategory: $Enums.TemplateCategory | null;
  };

  export type EnumsCountAggregateOutputType = {
    id: number;
    templateStatus: number;
    templateCategory: number;
    _all: number;
  };

  export type EnumsMinAggregateInputType = {
    id?: true;
    templateStatus?: true;
    templateCategory?: true;
  };

  export type EnumsMaxAggregateInputType = {
    id?: true;
    templateStatus?: true;
    templateCategory?: true;
  };

  export type EnumsCountAggregateInputType = {
    id?: true;
    templateStatus?: true;
    templateCategory?: true;
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
    templateStatus: $Enums.TemplateStatus;
    templateCategory: $Enums.TemplateCategory;
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
      templateStatus?: boolean;
      templateCategory?: boolean;
    },
    ExtArgs['result']['enums']
  >;

  export type EnumsSelectScalar = {
    id?: boolean;
    templateStatus?: boolean;
    templateCategory?: boolean;
  };

  export type $EnumsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Enums';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        templateStatus: $Enums.TemplateStatus;
        templateCategory: $Enums.TemplateCategory;
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
    readonly templateStatus: FieldRef<'Enums', 'TemplateStatus'>;
    readonly templateCategory: FieldRef<'Enums', 'TemplateCategory'>;
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

  export const AccountScalarFieldEnum: {
    id: 'id';
    username: 'username';
    password: 'password';
    role: 'role';
    isGlobalFilterActive: 'isGlobalFilterActive';
    fcmToken: 'fcmToken';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const ProfileScalarFieldEnum: {
    id: 'id';
    shortId: 'shortId';
    phoneNumber: 'phoneNumber';
    secondaryPhoneNumber: 'secondaryPhoneNumber';
    fullName: 'fullName';
    fistName: 'fistName';
    gender: 'gender';
    birthDate: 'birthDate';
    profilePictureUrl: 'profilePictureUrl';
    instagram: 'instagram';
    mail: 'mail';
    dni: 'dni';
    alternativeNames: 'alternativeNames';
    birthLongitude: 'birthLongitude';
    birthLatitude: 'birthLatitude';
    residenceLongitude: 'residenceLongitude';
    residenceLatitude: 'residenceLatitude';
    isInTrash: 'isInTrash';
    movedToTrashDate: 'movedToTrashDate';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProfileScalarFieldEnum =
    (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const LocationScalarFieldEnum: {
    latitude: 'latitude';
    longitude: 'longitude';
    country: 'country';
    province: 'province';
    city: 'city';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LocationScalarFieldEnum =
    (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: 'id';
    content: 'content';
    createdBy: 'createdBy';
    profileId: 'profileId';
    isSolvable: 'isSolvable';
    isSolved: 'isSolved';
    solvedAt: 'solvedAt';
    solvedById: 'solvedById';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const TagScalarFieldEnum: {
    id: 'id';
    name: 'name';
    type: 'type';
    groupId: 'groupId';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const TagGroupScalarFieldEnum: {
    id: 'id';
    name: 'name';
    color: 'color';
    isExclusive: 'isExclusive';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TagGroupScalarFieldEnum =
    (typeof TagGroupScalarFieldEnum)[keyof typeof TagGroupScalarFieldEnum];

  export const EventScalarFieldEnum: {
    id: 'id';
    name: 'name';
    date: 'date';
    location: 'location';
    folderId: 'folderId';
    tagAssistedId: 'tagAssistedId';
    tagConfirmedId: 'tagConfirmedId';
    supraEventId: 'supraEventId';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EventScalarFieldEnum =
    (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

  export const EventFolderScalarFieldEnum: {
    id: 'id';
    name: 'name';
    color: 'color';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EventFolderScalarFieldEnum =
    (typeof EventFolderScalarFieldEnum)[keyof typeof EventFolderScalarFieldEnum];

  export const MessageScalarFieldEnum: {
    id: 'id';
    wamId: 'wamId';
    message: 'message';
    profilePhoneNumber: 'profilePhoneNumber';
    state: 'state';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MessageScalarFieldEnum =
    (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];

  export const CannedResponseScalarFieldEnum: {
    id: 'id';
    name: 'name';
    content: 'content';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CannedResponseScalarFieldEnum =
    (typeof CannedResponseScalarFieldEnum)[keyof typeof CannedResponseScalarFieldEnum];

  export const EnumsScalarFieldEnum: {
    id: 'id';
    templateStatus: 'templateStatus';
    templateCategory: 'templateCategory';
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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
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
   * Reference to a field of type 'TagType'
   */
  export type EnumTagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TagType'
  >;

  /**
   * Reference to a field of type 'TagType[]'
   */
  export type ListEnumTagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TagType[]'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'MessageState'
   */
  export type EnumMessageStateFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'MessageState'
  >;

  /**
   * Reference to a field of type 'MessageState[]'
   */
  export type ListEnumMessageStateFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'MessageState[]'>;

  /**
   * Reference to a field of type 'TemplateStatus'
   */
  export type EnumTemplateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TemplateStatus'
  >;

  /**
   * Reference to a field of type 'TemplateStatus[]'
   */
  export type ListEnumTemplateStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TemplateStatus[]'>;

  /**
   * Reference to a field of type 'TemplateCategory'
   */
  export type EnumTemplateCategoryFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TemplateCategory'>;

  /**
   * Reference to a field of type 'TemplateCategory[]'
   */
  export type ListEnumTemplateCategoryFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TemplateCategory[]'>;

  /**
   * Deep Input Types
   */

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[];
    OR?: AccountWhereInput[];
    NOT?: AccountWhereInput | AccountWhereInput[];
    id?: StringFilter<'Account'> | string;
    username?: StringFilter<'Account'> | string;
    password?: StringFilter<'Account'> | string;
    role?: EnumRoleFilter<'Account'> | $Enums.Role;
    isGlobalFilterActive?: BoolFilter<'Account'> | boolean;
    fcmToken?: StringNullableListFilter<'Account'>;
    created_at?: DateTimeFilter<'Account'> | Date | string;
    updated_at?: DateTimeFilter<'Account'> | Date | string;
    comments?: CommentListRelationFilter;
    solvableComments?: CommentListRelationFilter;
    tags?: TagListRelationFilter;
    globalFilter?: TagListRelationFilter;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isGlobalFilterActive?: SortOrder;
    fcmToken?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    comments?: CommentOrderByRelationAggregateInput;
    solvableComments?: CommentOrderByRelationAggregateInput;
    tags?: TagOrderByRelationAggregateInput;
    globalFilter?: TagOrderByRelationAggregateInput;
  };

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      username?: string;
      AND?: AccountWhereInput | AccountWhereInput[];
      OR?: AccountWhereInput[];
      NOT?: AccountWhereInput | AccountWhereInput[];
      password?: StringFilter<'Account'> | string;
      role?: EnumRoleFilter<'Account'> | $Enums.Role;
      isGlobalFilterActive?: BoolFilter<'Account'> | boolean;
      fcmToken?: StringNullableListFilter<'Account'>;
      created_at?: DateTimeFilter<'Account'> | Date | string;
      updated_at?: DateTimeFilter<'Account'> | Date | string;
      comments?: CommentListRelationFilter;
      solvableComments?: CommentListRelationFilter;
      tags?: TagListRelationFilter;
      globalFilter?: TagListRelationFilter;
    },
    'id' | 'username'
  >;

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isGlobalFilterActive?: SortOrder;
    fcmToken?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    OR?: AccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Account'> | string;
    username?: StringWithAggregatesFilter<'Account'> | string;
    password?: StringWithAggregatesFilter<'Account'> | string;
    role?: EnumRoleWithAggregatesFilter<'Account'> | $Enums.Role;
    isGlobalFilterActive?: BoolWithAggregatesFilter<'Account'> | boolean;
    fcmToken?: StringNullableListFilter<'Account'>;
    created_at?: DateTimeWithAggregatesFilter<'Account'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Account'> | Date | string;
  };

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[];
    OR?: ProfileWhereInput[];
    NOT?: ProfileWhereInput | ProfileWhereInput[];
    id?: StringFilter<'Profile'> | string;
    shortId?: IntFilter<'Profile'> | number;
    phoneNumber?: StringFilter<'Profile'> | string;
    secondaryPhoneNumber?: StringNullableFilter<'Profile'> | string | null;
    fullName?: StringFilter<'Profile'> | string;
    fistName?: StringNullableFilter<'Profile'> | string | null;
    gender?: StringNullableFilter<'Profile'> | string | null;
    birthDate?: DateTimeNullableFilter<'Profile'> | Date | string | null;
    profilePictureUrl?: StringNullableFilter<'Profile'> | string | null;
    instagram?: StringNullableFilter<'Profile'> | string | null;
    mail?: StringNullableFilter<'Profile'> | string | null;
    dni?: StringNullableFilter<'Profile'> | string | null;
    alternativeNames?: StringNullableListFilter<'Profile'>;
    birthLongitude?: FloatNullableFilter<'Profile'> | number | null;
    birthLatitude?: FloatNullableFilter<'Profile'> | number | null;
    residenceLongitude?: FloatNullableFilter<'Profile'> | number | null;
    residenceLatitude?: FloatNullableFilter<'Profile'> | number | null;
    isInTrash?: BoolFilter<'Profile'> | boolean;
    movedToTrashDate?: DateTimeNullableFilter<'Profile'> | Date | string | null;
    created_at?: DateTimeFilter<'Profile'> | Date | string;
    updated_at?: DateTimeFilter<'Profile'> | Date | string;
    comments?: CommentListRelationFilter;
    messages?: MessageListRelationFilter;
    tags?: TagListRelationFilter;
    birthLocation?: XOR<
      LocationNullableRelationFilter,
      LocationWhereInput
    > | null;
    residenceLocation?: XOR<
      LocationNullableRelationFilter,
      LocationWhereInput
    > | null;
  };

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder;
    shortId?: SortOrder;
    phoneNumber?: SortOrder;
    secondaryPhoneNumber?: SortOrderInput | SortOrder;
    fullName?: SortOrder;
    fistName?: SortOrderInput | SortOrder;
    gender?: SortOrderInput | SortOrder;
    birthDate?: SortOrderInput | SortOrder;
    profilePictureUrl?: SortOrderInput | SortOrder;
    instagram?: SortOrderInput | SortOrder;
    mail?: SortOrderInput | SortOrder;
    dni?: SortOrderInput | SortOrder;
    alternativeNames?: SortOrder;
    birthLongitude?: SortOrderInput | SortOrder;
    birthLatitude?: SortOrderInput | SortOrder;
    residenceLongitude?: SortOrderInput | SortOrder;
    residenceLatitude?: SortOrderInput | SortOrder;
    isInTrash?: SortOrder;
    movedToTrashDate?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    comments?: CommentOrderByRelationAggregateInput;
    messages?: MessageOrderByRelationAggregateInput;
    tags?: TagOrderByRelationAggregateInput;
    birthLocation?: LocationOrderByWithRelationInput;
    residenceLocation?: LocationOrderByWithRelationInput;
  };

  export type ProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      phoneNumber?: string;
      secondaryPhoneNumber?: string;
      AND?: ProfileWhereInput | ProfileWhereInput[];
      OR?: ProfileWhereInput[];
      NOT?: ProfileWhereInput | ProfileWhereInput[];
      shortId?: IntFilter<'Profile'> | number;
      fullName?: StringFilter<'Profile'> | string;
      fistName?: StringNullableFilter<'Profile'> | string | null;
      gender?: StringNullableFilter<'Profile'> | string | null;
      birthDate?: DateTimeNullableFilter<'Profile'> | Date | string | null;
      profilePictureUrl?: StringNullableFilter<'Profile'> | string | null;
      instagram?: StringNullableFilter<'Profile'> | string | null;
      mail?: StringNullableFilter<'Profile'> | string | null;
      dni?: StringNullableFilter<'Profile'> | string | null;
      alternativeNames?: StringNullableListFilter<'Profile'>;
      birthLongitude?: FloatNullableFilter<'Profile'> | number | null;
      birthLatitude?: FloatNullableFilter<'Profile'> | number | null;
      residenceLongitude?: FloatNullableFilter<'Profile'> | number | null;
      residenceLatitude?: FloatNullableFilter<'Profile'> | number | null;
      isInTrash?: BoolFilter<'Profile'> | boolean;
      movedToTrashDate?:
        | DateTimeNullableFilter<'Profile'>
        | Date
        | string
        | null;
      created_at?: DateTimeFilter<'Profile'> | Date | string;
      updated_at?: DateTimeFilter<'Profile'> | Date | string;
      comments?: CommentListRelationFilter;
      messages?: MessageListRelationFilter;
      tags?: TagListRelationFilter;
      birthLocation?: XOR<
        LocationNullableRelationFilter,
        LocationWhereInput
      > | null;
      residenceLocation?: XOR<
        LocationNullableRelationFilter,
        LocationWhereInput
      > | null;
    },
    'id' | 'phoneNumber' | 'secondaryPhoneNumber'
  >;

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    shortId?: SortOrder;
    phoneNumber?: SortOrder;
    secondaryPhoneNumber?: SortOrderInput | SortOrder;
    fullName?: SortOrder;
    fistName?: SortOrderInput | SortOrder;
    gender?: SortOrderInput | SortOrder;
    birthDate?: SortOrderInput | SortOrder;
    profilePictureUrl?: SortOrderInput | SortOrder;
    instagram?: SortOrderInput | SortOrder;
    mail?: SortOrderInput | SortOrder;
    dni?: SortOrderInput | SortOrder;
    alternativeNames?: SortOrder;
    birthLongitude?: SortOrderInput | SortOrder;
    birthLatitude?: SortOrderInput | SortOrder;
    residenceLongitude?: SortOrderInput | SortOrder;
    residenceLatitude?: SortOrderInput | SortOrder;
    isInTrash?: SortOrder;
    movedToTrashDate?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ProfileCountOrderByAggregateInput;
    _avg?: ProfileAvgOrderByAggregateInput;
    _max?: ProfileMaxOrderByAggregateInput;
    _min?: ProfileMinOrderByAggregateInput;
    _sum?: ProfileSumOrderByAggregateInput;
  };

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    OR?: ProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Profile'> | string;
    shortId?: IntWithAggregatesFilter<'Profile'> | number;
    phoneNumber?: StringWithAggregatesFilter<'Profile'> | string;
    secondaryPhoneNumber?:
      | StringNullableWithAggregatesFilter<'Profile'>
      | string
      | null;
    fullName?: StringWithAggregatesFilter<'Profile'> | string;
    fistName?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    gender?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    birthDate?:
      | DateTimeNullableWithAggregatesFilter<'Profile'>
      | Date
      | string
      | null;
    profilePictureUrl?:
      | StringNullableWithAggregatesFilter<'Profile'>
      | string
      | null;
    instagram?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    mail?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    dni?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    alternativeNames?: StringNullableListFilter<'Profile'>;
    birthLongitude?:
      | FloatNullableWithAggregatesFilter<'Profile'>
      | number
      | null;
    birthLatitude?:
      | FloatNullableWithAggregatesFilter<'Profile'>
      | number
      | null;
    residenceLongitude?:
      | FloatNullableWithAggregatesFilter<'Profile'>
      | number
      | null;
    residenceLatitude?:
      | FloatNullableWithAggregatesFilter<'Profile'>
      | number
      | null;
    isInTrash?: BoolWithAggregatesFilter<'Profile'> | boolean;
    movedToTrashDate?:
      | DateTimeNullableWithAggregatesFilter<'Profile'>
      | Date
      | string
      | null;
    created_at?: DateTimeWithAggregatesFilter<'Profile'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Profile'> | Date | string;
  };

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[];
    OR?: LocationWhereInput[];
    NOT?: LocationWhereInput | LocationWhereInput[];
    latitude?: FloatFilter<'Location'> | number;
    longitude?: FloatFilter<'Location'> | number;
    country?: StringFilter<'Location'> | string;
    province?: StringFilter<'Location'> | string;
    city?: StringFilter<'Location'> | string;
    created_at?: DateTimeFilter<'Location'> | Date | string;
    updated_at?: DateTimeFilter<'Location'> | Date | string;
    birthProfiles?: ProfileListRelationFilter;
    residenceProfiles?: ProfileListRelationFilter;
  };

  export type LocationOrderByWithRelationInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    country?: SortOrder;
    province?: SortOrder;
    city?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    birthProfiles?: ProfileOrderByRelationAggregateInput;
    residenceProfiles?: ProfileOrderByRelationAggregateInput;
  };

  export type LocationWhereUniqueInput = Prisma.AtLeast<
    {
      latitude_longitude?: LocationLatitudeLongitudeCompoundUniqueInput;
      AND?: LocationWhereInput | LocationWhereInput[];
      OR?: LocationWhereInput[];
      NOT?: LocationWhereInput | LocationWhereInput[];
      latitude?: FloatFilter<'Location'> | number;
      longitude?: FloatFilter<'Location'> | number;
      country?: StringFilter<'Location'> | string;
      province?: StringFilter<'Location'> | string;
      city?: StringFilter<'Location'> | string;
      created_at?: DateTimeFilter<'Location'> | Date | string;
      updated_at?: DateTimeFilter<'Location'> | Date | string;
      birthProfiles?: ProfileListRelationFilter;
      residenceProfiles?: ProfileListRelationFilter;
    },
    'latitude_longitude'
  >;

  export type LocationOrderByWithAggregationInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    country?: SortOrder;
    province?: SortOrder;
    city?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: LocationCountOrderByAggregateInput;
    _avg?: LocationAvgOrderByAggregateInput;
    _max?: LocationMaxOrderByAggregateInput;
    _min?: LocationMinOrderByAggregateInput;
    _sum?: LocationSumOrderByAggregateInput;
  };

  export type LocationScalarWhereWithAggregatesInput = {
    AND?:
      | LocationScalarWhereWithAggregatesInput
      | LocationScalarWhereWithAggregatesInput[];
    OR?: LocationScalarWhereWithAggregatesInput[];
    NOT?:
      | LocationScalarWhereWithAggregatesInput
      | LocationScalarWhereWithAggregatesInput[];
    latitude?: FloatWithAggregatesFilter<'Location'> | number;
    longitude?: FloatWithAggregatesFilter<'Location'> | number;
    country?: StringWithAggregatesFilter<'Location'> | string;
    province?: StringWithAggregatesFilter<'Location'> | string;
    city?: StringWithAggregatesFilter<'Location'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Location'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Location'> | Date | string;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: StringFilter<'Comment'> | string;
    content?: StringFilter<'Comment'> | string;
    createdBy?: StringFilter<'Comment'> | string;
    profileId?: StringFilter<'Comment'> | string;
    isSolvable?: BoolFilter<'Comment'> | boolean;
    isSolved?: BoolFilter<'Comment'> | boolean;
    solvedAt?: DateTimeNullableFilter<'Comment'> | Date | string | null;
    solvedById?: StringNullableFilter<'Comment'> | string | null;
    created_at?: DateTimeFilter<'Comment'> | Date | string;
    updated_at?: DateTimeFilter<'Comment'> | Date | string;
    account?: XOR<AccountRelationFilter, AccountWhereInput>;
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput>;
    solvedBy?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdBy?: SortOrder;
    profileId?: SortOrder;
    isSolvable?: SortOrder;
    isSolved?: SortOrder;
    solvedAt?: SortOrderInput | SortOrder;
    solvedById?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    account?: AccountOrderByWithRelationInput;
    profile?: ProfileOrderByWithRelationInput;
    solvedBy?: AccountOrderByWithRelationInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      content?: StringFilter<'Comment'> | string;
      createdBy?: StringFilter<'Comment'> | string;
      profileId?: StringFilter<'Comment'> | string;
      isSolvable?: BoolFilter<'Comment'> | boolean;
      isSolved?: BoolFilter<'Comment'> | boolean;
      solvedAt?: DateTimeNullableFilter<'Comment'> | Date | string | null;
      solvedById?: StringNullableFilter<'Comment'> | string | null;
      created_at?: DateTimeFilter<'Comment'> | Date | string;
      updated_at?: DateTimeFilter<'Comment'> | Date | string;
      account?: XOR<AccountRelationFilter, AccountWhereInput>;
      profile?: XOR<ProfileRelationFilter, ProfileWhereInput>;
      solvedBy?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null;
    },
    'id'
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdBy?: SortOrder;
    profileId?: SortOrder;
    isSolvable?: SortOrder;
    isSolved?: SortOrder;
    solvedAt?: SortOrderInput | SortOrder;
    solvedById?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Comment'> | string;
    content?: StringWithAggregatesFilter<'Comment'> | string;
    createdBy?: StringWithAggregatesFilter<'Comment'> | string;
    profileId?: StringWithAggregatesFilter<'Comment'> | string;
    isSolvable?: BoolWithAggregatesFilter<'Comment'> | boolean;
    isSolved?: BoolWithAggregatesFilter<'Comment'> | boolean;
    solvedAt?:
      | DateTimeNullableWithAggregatesFilter<'Comment'>
      | Date
      | string
      | null;
    solvedById?: StringNullableWithAggregatesFilter<'Comment'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: StringFilter<'Tag'> | string;
    name?: StringFilter<'Tag'> | string;
    type?: EnumTagTypeFilter<'Tag'> | $Enums.TagType;
    groupId?: StringFilter<'Tag'> | string;
    created_at?: DateTimeFilter<'Tag'> | Date | string;
    updated_at?: DateTimeFilter<'Tag'> | Date | string;
    group?: XOR<TagGroupRelationFilter, TagGroupWhereInput>;
    assistedEvent?: XOR<EventNullableRelationFilter, EventWhereInput> | null;
    confirmedEvent?: XOR<EventNullableRelationFilter, EventWhereInput> | null;
    accounts?: AccountListRelationFilter;
    profiles?: ProfileListRelationFilter;
    accountsGlobalFilter?: AccountListRelationFilter;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    groupId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    group?: TagGroupOrderByWithRelationInput;
    assistedEvent?: EventOrderByWithRelationInput;
    confirmedEvent?: EventOrderByWithRelationInput;
    accounts?: AccountOrderByRelationAggregateInput;
    profiles?: ProfileOrderByRelationAggregateInput;
    accountsGlobalFilter?: AccountOrderByRelationAggregateInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      name?: StringFilter<'Tag'> | string;
      type?: EnumTagTypeFilter<'Tag'> | $Enums.TagType;
      groupId?: StringFilter<'Tag'> | string;
      created_at?: DateTimeFilter<'Tag'> | Date | string;
      updated_at?: DateTimeFilter<'Tag'> | Date | string;
      group?: XOR<TagGroupRelationFilter, TagGroupWhereInput>;
      assistedEvent?: XOR<EventNullableRelationFilter, EventWhereInput> | null;
      confirmedEvent?: XOR<EventNullableRelationFilter, EventWhereInput> | null;
      accounts?: AccountListRelationFilter;
      profiles?: ProfileListRelationFilter;
      accountsGlobalFilter?: AccountListRelationFilter;
    },
    'id'
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    groupId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Tag'> | string;
    name?: StringWithAggregatesFilter<'Tag'> | string;
    type?: EnumTagTypeWithAggregatesFilter<'Tag'> | $Enums.TagType;
    groupId?: StringWithAggregatesFilter<'Tag'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Tag'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Tag'> | Date | string;
  };

  export type TagGroupWhereInput = {
    AND?: TagGroupWhereInput | TagGroupWhereInput[];
    OR?: TagGroupWhereInput[];
    NOT?: TagGroupWhereInput | TagGroupWhereInput[];
    id?: StringFilter<'TagGroup'> | string;
    name?: StringFilter<'TagGroup'> | string;
    color?: StringFilter<'TagGroup'> | string;
    isExclusive?: BoolFilter<'TagGroup'> | boolean;
    created_at?: DateTimeFilter<'TagGroup'> | Date | string;
    updated_at?: DateTimeFilter<'TagGroup'> | Date | string;
    tags?: TagListRelationFilter;
  };

  export type TagGroupOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    isExclusive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tags?: TagOrderByRelationAggregateInput;
  };

  export type TagGroupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TagGroupWhereInput | TagGroupWhereInput[];
      OR?: TagGroupWhereInput[];
      NOT?: TagGroupWhereInput | TagGroupWhereInput[];
      name?: StringFilter<'TagGroup'> | string;
      color?: StringFilter<'TagGroup'> | string;
      isExclusive?: BoolFilter<'TagGroup'> | boolean;
      created_at?: DateTimeFilter<'TagGroup'> | Date | string;
      updated_at?: DateTimeFilter<'TagGroup'> | Date | string;
      tags?: TagListRelationFilter;
    },
    'id'
  >;

  export type TagGroupOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    isExclusive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: TagGroupCountOrderByAggregateInput;
    _max?: TagGroupMaxOrderByAggregateInput;
    _min?: TagGroupMinOrderByAggregateInput;
  };

  export type TagGroupScalarWhereWithAggregatesInput = {
    AND?:
      | TagGroupScalarWhereWithAggregatesInput
      | TagGroupScalarWhereWithAggregatesInput[];
    OR?: TagGroupScalarWhereWithAggregatesInput[];
    NOT?:
      | TagGroupScalarWhereWithAggregatesInput
      | TagGroupScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'TagGroup'> | string;
    name?: StringWithAggregatesFilter<'TagGroup'> | string;
    color?: StringWithAggregatesFilter<'TagGroup'> | string;
    isExclusive?: BoolWithAggregatesFilter<'TagGroup'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'TagGroup'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'TagGroup'> | Date | string;
  };

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[];
    OR?: EventWhereInput[];
    NOT?: EventWhereInput | EventWhereInput[];
    id?: StringFilter<'Event'> | string;
    name?: StringFilter<'Event'> | string;
    date?: DateTimeFilter<'Event'> | Date | string;
    location?: StringFilter<'Event'> | string;
    folderId?: StringNullableFilter<'Event'> | string | null;
    tagAssistedId?: StringFilter<'Event'> | string;
    tagConfirmedId?: StringFilter<'Event'> | string;
    supraEventId?: StringNullableFilter<'Event'> | string | null;
    created_at?: DateTimeFilter<'Event'> | Date | string;
    updated_at?: DateTimeFilter<'Event'> | Date | string;
    folder?: XOR<
      EventFolderNullableRelationFilter,
      EventFolderWhereInput
    > | null;
    tagAssisted?: XOR<TagRelationFilter, TagWhereInput>;
    tagConfirmed?: XOR<TagRelationFilter, TagWhereInput>;
    supraEvent?: XOR<EventNullableRelationFilter, EventWhereInput> | null;
    subEvents?: EventListRelationFilter;
  };

  export type EventOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    folderId?: SortOrderInput | SortOrder;
    tagAssistedId?: SortOrder;
    tagConfirmedId?: SortOrder;
    supraEventId?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    folder?: EventFolderOrderByWithRelationInput;
    tagAssisted?: TagOrderByWithRelationInput;
    tagConfirmed?: TagOrderByWithRelationInput;
    supraEvent?: EventOrderByWithRelationInput;
    subEvents?: EventOrderByRelationAggregateInput;
  };

  export type EventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      tagAssistedId?: string;
      tagConfirmedId?: string;
      AND?: EventWhereInput | EventWhereInput[];
      OR?: EventWhereInput[];
      NOT?: EventWhereInput | EventWhereInput[];
      name?: StringFilter<'Event'> | string;
      date?: DateTimeFilter<'Event'> | Date | string;
      location?: StringFilter<'Event'> | string;
      folderId?: StringNullableFilter<'Event'> | string | null;
      supraEventId?: StringNullableFilter<'Event'> | string | null;
      created_at?: DateTimeFilter<'Event'> | Date | string;
      updated_at?: DateTimeFilter<'Event'> | Date | string;
      folder?: XOR<
        EventFolderNullableRelationFilter,
        EventFolderWhereInput
      > | null;
      tagAssisted?: XOR<TagRelationFilter, TagWhereInput>;
      tagConfirmed?: XOR<TagRelationFilter, TagWhereInput>;
      supraEvent?: XOR<EventNullableRelationFilter, EventWhereInput> | null;
      subEvents?: EventListRelationFilter;
    },
    'id' | 'tagAssistedId' | 'tagConfirmedId'
  >;

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    folderId?: SortOrderInput | SortOrder;
    tagAssistedId?: SortOrder;
    tagConfirmedId?: SortOrder;
    supraEventId?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: EventCountOrderByAggregateInput;
    _max?: EventMaxOrderByAggregateInput;
    _min?: EventMinOrderByAggregateInput;
  };

  export type EventScalarWhereWithAggregatesInput = {
    AND?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    OR?: EventScalarWhereWithAggregatesInput[];
    NOT?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Event'> | string;
    name?: StringWithAggregatesFilter<'Event'> | string;
    date?: DateTimeWithAggregatesFilter<'Event'> | Date | string;
    location?: StringWithAggregatesFilter<'Event'> | string;
    folderId?: StringNullableWithAggregatesFilter<'Event'> | string | null;
    tagAssistedId?: StringWithAggregatesFilter<'Event'> | string;
    tagConfirmedId?: StringWithAggregatesFilter<'Event'> | string;
    supraEventId?: StringNullableWithAggregatesFilter<'Event'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'Event'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Event'> | Date | string;
  };

  export type EventFolderWhereInput = {
    AND?: EventFolderWhereInput | EventFolderWhereInput[];
    OR?: EventFolderWhereInput[];
    NOT?: EventFolderWhereInput | EventFolderWhereInput[];
    id?: StringFilter<'EventFolder'> | string;
    name?: StringFilter<'EventFolder'> | string;
    color?: StringFilter<'EventFolder'> | string;
    created_at?: DateTimeFilter<'EventFolder'> | Date | string;
    updated_at?: DateTimeFilter<'EventFolder'> | Date | string;
    events?: EventListRelationFilter;
  };

  export type EventFolderOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    events?: EventOrderByRelationAggregateInput;
  };

  export type EventFolderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventFolderWhereInput | EventFolderWhereInput[];
      OR?: EventFolderWhereInput[];
      NOT?: EventFolderWhereInput | EventFolderWhereInput[];
      name?: StringFilter<'EventFolder'> | string;
      color?: StringFilter<'EventFolder'> | string;
      created_at?: DateTimeFilter<'EventFolder'> | Date | string;
      updated_at?: DateTimeFilter<'EventFolder'> | Date | string;
      events?: EventListRelationFilter;
    },
    'id'
  >;

  export type EventFolderOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: EventFolderCountOrderByAggregateInput;
    _max?: EventFolderMaxOrderByAggregateInput;
    _min?: EventFolderMinOrderByAggregateInput;
  };

  export type EventFolderScalarWhereWithAggregatesInput = {
    AND?:
      | EventFolderScalarWhereWithAggregatesInput
      | EventFolderScalarWhereWithAggregatesInput[];
    OR?: EventFolderScalarWhereWithAggregatesInput[];
    NOT?:
      | EventFolderScalarWhereWithAggregatesInput
      | EventFolderScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'EventFolder'> | string;
    name?: StringWithAggregatesFilter<'EventFolder'> | string;
    color?: StringWithAggregatesFilter<'EventFolder'> | string;
    created_at?: DateTimeWithAggregatesFilter<'EventFolder'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'EventFolder'> | Date | string;
  };

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[];
    OR?: MessageWhereInput[];
    NOT?: MessageWhereInput | MessageWhereInput[];
    id?: StringFilter<'Message'> | string;
    wamId?: StringFilter<'Message'> | string;
    message?: JsonFilter<'Message'>;
    profilePhoneNumber?: StringFilter<'Message'> | string;
    state?: EnumMessageStateFilter<'Message'> | $Enums.MessageState;
    created_at?: DateTimeFilter<'Message'> | Date | string;
    updated_at?: DateTimeFilter<'Message'> | Date | string;
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput>;
  };

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    message?: SortOrder;
    profilePhoneNumber?: SortOrder;
    state?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    profile?: ProfileOrderByWithRelationInput;
  };

  export type MessageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      wamId?: string;
      AND?: MessageWhereInput | MessageWhereInput[];
      OR?: MessageWhereInput[];
      NOT?: MessageWhereInput | MessageWhereInput[];
      message?: JsonFilter<'Message'>;
      profilePhoneNumber?: StringFilter<'Message'> | string;
      state?: EnumMessageStateFilter<'Message'> | $Enums.MessageState;
      created_at?: DateTimeFilter<'Message'> | Date | string;
      updated_at?: DateTimeFilter<'Message'> | Date | string;
      profile?: XOR<ProfileRelationFilter, ProfileWhereInput>;
    },
    'id' | 'wamId'
  >;

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    message?: SortOrder;
    profilePhoneNumber?: SortOrder;
    state?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
  };

  export type MessageScalarWhereWithAggregatesInput = {
    AND?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    OR?: MessageScalarWhereWithAggregatesInput[];
    NOT?:
      | MessageScalarWhereWithAggregatesInput
      | MessageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Message'> | string;
    wamId?: StringWithAggregatesFilter<'Message'> | string;
    message?: JsonWithAggregatesFilter<'Message'>;
    profilePhoneNumber?: StringWithAggregatesFilter<'Message'> | string;
    state?:
      | EnumMessageStateWithAggregatesFilter<'Message'>
      | $Enums.MessageState;
    created_at?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Message'> | Date | string;
  };

  export type CannedResponseWhereInput = {
    AND?: CannedResponseWhereInput | CannedResponseWhereInput[];
    OR?: CannedResponseWhereInput[];
    NOT?: CannedResponseWhereInput | CannedResponseWhereInput[];
    id?: StringFilter<'CannedResponse'> | string;
    name?: StringFilter<'CannedResponse'> | string;
    content?: StringFilter<'CannedResponse'> | string;
    created_at?: DateTimeFilter<'CannedResponse'> | Date | string;
    updated_at?: DateTimeFilter<'CannedResponse'> | Date | string;
  };

  export type CannedResponseOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CannedResponseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CannedResponseWhereInput | CannedResponseWhereInput[];
      OR?: CannedResponseWhereInput[];
      NOT?: CannedResponseWhereInput | CannedResponseWhereInput[];
      name?: StringFilter<'CannedResponse'> | string;
      content?: StringFilter<'CannedResponse'> | string;
      created_at?: DateTimeFilter<'CannedResponse'> | Date | string;
      updated_at?: DateTimeFilter<'CannedResponse'> | Date | string;
    },
    'id'
  >;

  export type CannedResponseOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: CannedResponseCountOrderByAggregateInput;
    _max?: CannedResponseMaxOrderByAggregateInput;
    _min?: CannedResponseMinOrderByAggregateInput;
  };

  export type CannedResponseScalarWhereWithAggregatesInput = {
    AND?:
      | CannedResponseScalarWhereWithAggregatesInput
      | CannedResponseScalarWhereWithAggregatesInput[];
    OR?: CannedResponseScalarWhereWithAggregatesInput[];
    NOT?:
      | CannedResponseScalarWhereWithAggregatesInput
      | CannedResponseScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'CannedResponse'> | string;
    name?: StringWithAggregatesFilter<'CannedResponse'> | string;
    content?: StringWithAggregatesFilter<'CannedResponse'> | string;
    created_at?: DateTimeWithAggregatesFilter<'CannedResponse'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'CannedResponse'> | Date | string;
  };

  export type EnumsWhereInput = {
    AND?: EnumsWhereInput | EnumsWhereInput[];
    OR?: EnumsWhereInput[];
    NOT?: EnumsWhereInput | EnumsWhereInput[];
    id?: StringFilter<'Enums'> | string;
    templateStatus?: EnumTemplateStatusFilter<'Enums'> | $Enums.TemplateStatus;
    templateCategory?:
      | EnumTemplateCategoryFilter<'Enums'>
      | $Enums.TemplateCategory;
  };

  export type EnumsOrderByWithRelationInput = {
    id?: SortOrder;
    templateStatus?: SortOrder;
    templateCategory?: SortOrder;
  };

  export type EnumsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EnumsWhereInput | EnumsWhereInput[];
      OR?: EnumsWhereInput[];
      NOT?: EnumsWhereInput | EnumsWhereInput[];
      templateStatus?:
        | EnumTemplateStatusFilter<'Enums'>
        | $Enums.TemplateStatus;
      templateCategory?:
        | EnumTemplateCategoryFilter<'Enums'>
        | $Enums.TemplateCategory;
    },
    'id'
  >;

  export type EnumsOrderByWithAggregationInput = {
    id?: SortOrder;
    templateStatus?: SortOrder;
    templateCategory?: SortOrder;
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
    templateStatus?:
      | EnumTemplateStatusWithAggregatesFilter<'Enums'>
      | $Enums.TemplateStatus;
    templateCategory?:
      | EnumTemplateCategoryWithAggregatesFilter<'Enums'>
      | $Enums.TemplateCategory;
  };

  export type AccountCreateInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutAccountInput;
    solvableComments?: CommentCreateNestedManyWithoutSolvedByInput;
    tags?: TagCreateNestedManyWithoutAccountsInput;
    globalFilter?: TagCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountUncheckedCreateInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput;
    solvableComments?: CommentUncheckedCreateNestedManyWithoutSolvedByInput;
    tags?: TagUncheckedCreateNestedManyWithoutAccountsInput;
    globalFilter?: TagUncheckedCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutAccountNestedInput;
    solvableComments?: CommentUpdateManyWithoutSolvedByNestedInput;
    tags?: TagUpdateManyWithoutAccountsNestedInput;
    globalFilter?: TagUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput;
    solvableComments?: CommentUncheckedUpdateManyWithoutSolvedByNestedInput;
    tags?: TagUncheckedUpdateManyWithoutAccountsNestedInput;
    globalFilter?: TagUncheckedUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type AccountCreateManyInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileCreateInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutProfileInput;
    messages?: MessageCreateNestedManyWithoutProfileInput;
    tags?: TagCreateNestedManyWithoutProfilesInput;
    birthLocation?: LocationCreateNestedOneWithoutBirthProfilesInput;
    residenceLocation?: LocationCreateNestedOneWithoutResidenceProfilesInput;
  };

  export type ProfileUncheckedCreateInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput;
    messages?: MessageUncheckedCreateNestedManyWithoutProfileInput;
    tags?: TagUncheckedCreateNestedManyWithoutProfilesInput;
  };

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutProfileNestedInput;
    messages?: MessageUpdateManyWithoutProfileNestedInput;
    tags?: TagUpdateManyWithoutProfilesNestedInput;
    birthLocation?: LocationUpdateOneWithoutBirthProfilesNestedInput;
    residenceLocation?: LocationUpdateOneWithoutResidenceProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutProfileNestedInput;
    tags?: TagUncheckedUpdateManyWithoutProfilesNestedInput;
  };

  export type ProfileCreateManyInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LocationCreateInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    birthProfiles?: ProfileCreateNestedManyWithoutBirthLocationInput;
    residenceProfiles?: ProfileCreateNestedManyWithoutResidenceLocationInput;
  };

  export type LocationUncheckedCreateInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    birthProfiles?: ProfileUncheckedCreateNestedManyWithoutBirthLocationInput;
    residenceProfiles?: ProfileUncheckedCreateNestedManyWithoutResidenceLocationInput;
  };

  export type LocationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    birthProfiles?: ProfileUpdateManyWithoutBirthLocationNestedInput;
    residenceProfiles?: ProfileUpdateManyWithoutResidenceLocationNestedInput;
  };

  export type LocationUncheckedUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    birthProfiles?: ProfileUncheckedUpdateManyWithoutBirthLocationNestedInput;
    residenceProfiles?: ProfileUncheckedUpdateManyWithoutResidenceLocationNestedInput;
  };

  export type LocationCreateManyInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type LocationUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LocationUncheckedUpdateManyInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateInput = {
    id?: string;
    content: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    account: AccountCreateNestedOneWithoutCommentsInput;
    profile: ProfileCreateNestedOneWithoutCommentsInput;
    solvedBy?: AccountCreateNestedOneWithoutSolvableCommentsInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: string;
    content: string;
    createdBy: string;
    profileId: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    solvedById?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneRequiredWithoutCommentsNestedInput;
    profile?: ProfileUpdateOneRequiredWithoutCommentsNestedInput;
    solvedBy?: AccountUpdateOneWithoutSolvableCommentsNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdBy?: StringFieldUpdateOperationsInput | string;
    profileId?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    solvedById?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateManyInput = {
    id?: string;
    content: string;
    createdBy: string;
    profileId: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    solvedById?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdBy?: StringFieldUpdateOperationsInput | string;
    profileId?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    solvedById?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagCreateInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: TagGroupCreateNestedOneWithoutTagsInput;
    assistedEvent?: EventCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountCreateNestedManyWithoutTagsInput;
    profiles?: ProfileCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUncheckedCreateInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventUncheckedCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventUncheckedCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutTagsInput;
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountUncheckedCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: TagGroupUpdateOneRequiredWithoutTagsNestedInput;
    assistedEvent?: EventUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUncheckedUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUncheckedUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUncheckedUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagCreateManyInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagGroupCreateInput = {
    id?: string;
    name: string;
    color: string;
    isExclusive: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    tags?: TagCreateNestedManyWithoutGroupInput;
  };

  export type TagGroupUncheckedCreateInput = {
    id?: string;
    name: string;
    color: string;
    isExclusive: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    tags?: TagUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type TagGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    isExclusive?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutGroupNestedInput;
  };

  export type TagGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    isExclusive?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type TagGroupCreateManyInput = {
    id?: string;
    name: string;
    color: string;
    isExclusive: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TagGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    isExclusive?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    isExclusive?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    folder?: EventFolderCreateNestedOneWithoutEventsInput;
    tagAssisted: TagCreateNestedOneWithoutAssistedEventInput;
    tagConfirmed: TagCreateNestedOneWithoutConfirmedEventInput;
    supraEvent?: EventCreateNestedOneWithoutSubEventsInput;
    subEvents?: EventCreateNestedManyWithoutSupraEventInput;
  };

  export type EventUncheckedCreateInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagAssistedId: string;
    tagConfirmedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEvents?: EventUncheckedCreateNestedManyWithoutSupraEventInput;
  };

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: EventFolderUpdateOneWithoutEventsNestedInput;
    tagAssisted?: TagUpdateOneRequiredWithoutAssistedEventNestedInput;
    tagConfirmed?: TagUpdateOneRequiredWithoutConfirmedEventNestedInput;
    supraEvent?: EventUpdateOneWithoutSubEventsNestedInput;
    subEvents?: EventUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEvents?: EventUncheckedUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventCreateManyInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagAssistedId: string;
    tagConfirmedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventFolderCreateInput = {
    id?: string;
    name: string;
    color: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    events?: EventCreateNestedManyWithoutFolderInput;
  };

  export type EventFolderUncheckedCreateInput = {
    id?: string;
    name: string;
    color: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type EventFolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUpdateManyWithoutFolderNestedInput;
  };

  export type EventFolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type EventFolderCreateManyInput = {
    id?: string;
    name: string;
    color: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventFolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventFolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    state?: $Enums.MessageState;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile: ProfileCreateNestedOneWithoutMessagesInput;
  };

  export type MessageUncheckedCreateInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    profilePhoneNumber: string;
    state?: $Enums.MessageState;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneRequiredWithoutMessagesNestedInput;
  };

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    profilePhoneNumber?: StringFieldUpdateOperationsInput | string;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageCreateManyInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    profilePhoneNumber: string;
    state?: $Enums.MessageState;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    profilePhoneNumber?: StringFieldUpdateOperationsInput | string;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CannedResponseCreateInput = {
    id?: string;
    name: string;
    content: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CannedResponseUncheckedCreateInput = {
    id?: string;
    name: string;
    content: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CannedResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CannedResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CannedResponseCreateManyInput = {
    id?: string;
    name: string;
    content: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CannedResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CannedResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EnumsCreateInput = {
    id: string;
    templateStatus: $Enums.TemplateStatus;
    templateCategory: $Enums.TemplateCategory;
  };

  export type EnumsUncheckedCreateInput = {
    id: string;
    templateStatus: $Enums.TemplateStatus;
    templateCategory: $Enums.TemplateCategory;
  };

  export type EnumsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateStatus?:
      | EnumTemplateStatusFieldUpdateOperationsInput
      | $Enums.TemplateStatus;
    templateCategory?:
      | EnumTemplateCategoryFieldUpdateOperationsInput
      | $Enums.TemplateCategory;
  };

  export type EnumsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateStatus?:
      | EnumTemplateStatusFieldUpdateOperationsInput
      | $Enums.TemplateStatus;
    templateCategory?:
      | EnumTemplateCategoryFieldUpdateOperationsInput
      | $Enums.TemplateCategory;
  };

  export type EnumsCreateManyInput = {
    id: string;
    templateStatus: $Enums.TemplateStatus;
    templateCategory: $Enums.TemplateCategory;
  };

  export type EnumsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateStatus?:
      | EnumTemplateStatusFieldUpdateOperationsInput
      | $Enums.TemplateStatus;
    templateCategory?:
      | EnumTemplateCategoryFieldUpdateOperationsInput
      | $Enums.TemplateCategory;
  };

  export type EnumsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateStatus?:
      | EnumTemplateStatusFieldUpdateOperationsInput
      | $Enums.TemplateStatus;
    templateCategory?:
      | EnumTemplateCategoryFieldUpdateOperationsInput
      | $Enums.TemplateCategory;
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
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

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type TagListRelationFilter = {
    every?: TagWhereInput;
    some?: TagWhereInput;
    none?: TagWhereInput;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isGlobalFilterActive?: SortOrder;
    fcmToken?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isGlobalFilterActive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isGlobalFilterActive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type MessageListRelationFilter = {
    every?: MessageWhereInput;
    some?: MessageWhereInput;
    none?: MessageWhereInput;
  };

  export type LocationNullableRelationFilter = {
    is?: LocationWhereInput | null;
    isNot?: LocationWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    shortId?: SortOrder;
    phoneNumber?: SortOrder;
    secondaryPhoneNumber?: SortOrder;
    fullName?: SortOrder;
    fistName?: SortOrder;
    gender?: SortOrder;
    birthDate?: SortOrder;
    profilePictureUrl?: SortOrder;
    instagram?: SortOrder;
    mail?: SortOrder;
    dni?: SortOrder;
    alternativeNames?: SortOrder;
    birthLongitude?: SortOrder;
    birthLatitude?: SortOrder;
    residenceLongitude?: SortOrder;
    residenceLatitude?: SortOrder;
    isInTrash?: SortOrder;
    movedToTrashDate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ProfileAvgOrderByAggregateInput = {
    shortId?: SortOrder;
    birthLongitude?: SortOrder;
    birthLatitude?: SortOrder;
    residenceLongitude?: SortOrder;
    residenceLatitude?: SortOrder;
  };

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    shortId?: SortOrder;
    phoneNumber?: SortOrder;
    secondaryPhoneNumber?: SortOrder;
    fullName?: SortOrder;
    fistName?: SortOrder;
    gender?: SortOrder;
    birthDate?: SortOrder;
    profilePictureUrl?: SortOrder;
    instagram?: SortOrder;
    mail?: SortOrder;
    dni?: SortOrder;
    birthLongitude?: SortOrder;
    birthLatitude?: SortOrder;
    residenceLongitude?: SortOrder;
    residenceLatitude?: SortOrder;
    isInTrash?: SortOrder;
    movedToTrashDate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    shortId?: SortOrder;
    phoneNumber?: SortOrder;
    secondaryPhoneNumber?: SortOrder;
    fullName?: SortOrder;
    fistName?: SortOrder;
    gender?: SortOrder;
    birthDate?: SortOrder;
    profilePictureUrl?: SortOrder;
    instagram?: SortOrder;
    mail?: SortOrder;
    dni?: SortOrder;
    birthLongitude?: SortOrder;
    birthLatitude?: SortOrder;
    residenceLongitude?: SortOrder;
    residenceLatitude?: SortOrder;
    isInTrash?: SortOrder;
    movedToTrashDate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ProfileSumOrderByAggregateInput = {
    shortId?: SortOrder;
    birthLongitude?: SortOrder;
    birthLatitude?: SortOrder;
    residenceLongitude?: SortOrder;
    residenceLatitude?: SortOrder;
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput;
    some?: ProfileWhereInput;
    none?: ProfileWhereInput;
  };

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LocationLatitudeLongitudeCompoundUniqueInput = {
    latitude: number;
    longitude: number;
  };

  export type LocationCountOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    country?: SortOrder;
    province?: SortOrder;
    city?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type LocationAvgOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
  };

  export type LocationMaxOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    country?: SortOrder;
    province?: SortOrder;
    city?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type LocationMinOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    country?: SortOrder;
    province?: SortOrder;
    city?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type LocationSumOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type AccountRelationFilter = {
    is?: AccountWhereInput;
    isNot?: AccountWhereInput;
  };

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput;
    isNot?: ProfileWhereInput;
  };

  export type AccountNullableRelationFilter = {
    is?: AccountWhereInput | null;
    isNot?: AccountWhereInput | null;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdBy?: SortOrder;
    profileId?: SortOrder;
    isSolvable?: SortOrder;
    isSolved?: SortOrder;
    solvedAt?: SortOrder;
    solvedById?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdBy?: SortOrder;
    profileId?: SortOrder;
    isSolvable?: SortOrder;
    isSolved?: SortOrder;
    solvedAt?: SortOrder;
    solvedById?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdBy?: SortOrder;
    profileId?: SortOrder;
    isSolvable?: SortOrder;
    isSolved?: SortOrder;
    solvedAt?: SortOrder;
    solvedById?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumTagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTagTypeFilter<$PrismaModel> | $Enums.TagType;
  };

  export type TagGroupRelationFilter = {
    is?: TagGroupWhereInput;
    isNot?: TagGroupWhereInput;
  };

  export type EventNullableRelationFilter = {
    is?: EventWhereInput | null;
    isNot?: EventWhereInput | null;
  };

  export type AccountListRelationFilter = {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
  };

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    groupId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    groupId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    groupId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumTagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTagTypeWithAggregatesFilter<$PrismaModel> | $Enums.TagType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTagTypeFilter<$PrismaModel>;
    _max?: NestedEnumTagTypeFilter<$PrismaModel>;
  };

  export type TagGroupCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    isExclusive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TagGroupMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    isExclusive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TagGroupMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    isExclusive?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventFolderNullableRelationFilter = {
    is?: EventFolderWhereInput | null;
    isNot?: EventFolderWhereInput | null;
  };

  export type TagRelationFilter = {
    is?: TagWhereInput;
    isNot?: TagWhereInput;
  };

  export type EventListRelationFilter = {
    every?: EventWhereInput;
    some?: EventWhereInput;
    none?: EventWhereInput;
  };

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    folderId?: SortOrder;
    tagAssistedId?: SortOrder;
    tagConfirmedId?: SortOrder;
    supraEventId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    folderId?: SortOrder;
    tagAssistedId?: SortOrder;
    tagConfirmedId?: SortOrder;
    supraEventId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    date?: SortOrder;
    location?: SortOrder;
    folderId?: SortOrder;
    tagAssistedId?: SortOrder;
    tagConfirmedId?: SortOrder;
    supraEventId?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventFolderCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventFolderMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EventFolderMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    color?: SortOrder;
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

  export type EnumMessageStateFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageState | EnumMessageStateFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageState[]
      | ListEnumMessageStateFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageState[]
      | ListEnumMessageStateFieldRefInput<$PrismaModel>;
    not?: NestedEnumMessageStateFilter<$PrismaModel> | $Enums.MessageState;
  };

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    message?: SortOrder;
    profilePhoneNumber?: SortOrder;
    state?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    profilePhoneNumber?: SortOrder;
    state?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder;
    wamId?: SortOrder;
    profilePhoneNumber?: SortOrder;
    state?: SortOrder;
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

  export type EnumMessageStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageState | EnumMessageStateFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageState[]
      | ListEnumMessageStateFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageState[]
      | ListEnumMessageStateFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMessageStateWithAggregatesFilter<$PrismaModel>
      | $Enums.MessageState;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMessageStateFilter<$PrismaModel>;
    _max?: NestedEnumMessageStateFilter<$PrismaModel>;
  };

  export type CannedResponseCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CannedResponseMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CannedResponseMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumTemplateStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TemplateStatus
      | EnumTemplateStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTemplateStatusFilter<$PrismaModel> | $Enums.TemplateStatus;
  };

  export type EnumTemplateCategoryFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TemplateCategory
      | EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTemplateCategoryFilter<$PrismaModel>
      | $Enums.TemplateCategory;
  };

  export type EnumsCountOrderByAggregateInput = {
    id?: SortOrder;
    templateStatus?: SortOrder;
    templateCategory?: SortOrder;
  };

  export type EnumsMaxOrderByAggregateInput = {
    id?: SortOrder;
    templateStatus?: SortOrder;
    templateCategory?: SortOrder;
  };

  export type EnumsMinOrderByAggregateInput = {
    id?: SortOrder;
    templateStatus?: SortOrder;
    templateCategory?: SortOrder;
  };

  export type EnumTemplateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TemplateStatus
      | EnumTemplateStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTemplateStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TemplateStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTemplateStatusFilter<$PrismaModel>;
    _max?: NestedEnumTemplateStatusFilter<$PrismaModel>;
  };

  export type EnumTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TemplateCategory
      | EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel>
      | $Enums.TemplateCategory;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTemplateCategoryFilter<$PrismaModel>;
    _max?: NestedEnumTemplateCategoryFilter<$PrismaModel>;
  };

  export type AccountCreatefcmTokenInput = {
    set: string[];
  };

  export type CommentCreateNestedManyWithoutAccountInput = {
    create?:
      | XOR<
          CommentCreateWithoutAccountInput,
          CommentUncheckedCreateWithoutAccountInput
        >
      | CommentCreateWithoutAccountInput[]
      | CommentUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAccountInput
      | CommentCreateOrConnectWithoutAccountInput[];
    createMany?: CommentCreateManyAccountInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutSolvedByInput = {
    create?:
      | XOR<
          CommentCreateWithoutSolvedByInput,
          CommentUncheckedCreateWithoutSolvedByInput
        >
      | CommentCreateWithoutSolvedByInput[]
      | CommentUncheckedCreateWithoutSolvedByInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutSolvedByInput
      | CommentCreateOrConnectWithoutSolvedByInput[];
    createMany?: CommentCreateManySolvedByInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type TagCreateNestedManyWithoutAccountsInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsInput,
          TagUncheckedCreateWithoutAccountsInput
        >
      | TagCreateWithoutAccountsInput[]
      | TagUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsInput
      | TagCreateOrConnectWithoutAccountsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type TagCreateNestedManyWithoutAccountsGlobalFilterInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsGlobalFilterInput,
          TagUncheckedCreateWithoutAccountsGlobalFilterInput
        >
      | TagCreateWithoutAccountsGlobalFilterInput[]
      | TagUncheckedCreateWithoutAccountsGlobalFilterInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutAccountInput = {
    create?:
      | XOR<
          CommentCreateWithoutAccountInput,
          CommentUncheckedCreateWithoutAccountInput
        >
      | CommentCreateWithoutAccountInput[]
      | CommentUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAccountInput
      | CommentCreateOrConnectWithoutAccountInput[];
    createMany?: CommentCreateManyAccountInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutSolvedByInput = {
    create?:
      | XOR<
          CommentCreateWithoutSolvedByInput,
          CommentUncheckedCreateWithoutSolvedByInput
        >
      | CommentCreateWithoutSolvedByInput[]
      | CommentUncheckedCreateWithoutSolvedByInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutSolvedByInput
      | CommentCreateOrConnectWithoutSolvedByInput[];
    createMany?: CommentCreateManySolvedByInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutAccountsInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsInput,
          TagUncheckedCreateWithoutAccountsInput
        >
      | TagCreateWithoutAccountsInput[]
      | TagUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsInput
      | TagCreateOrConnectWithoutAccountsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutAccountsGlobalFilterInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsGlobalFilterInput,
          TagUncheckedCreateWithoutAccountsGlobalFilterInput
        >
      | TagCreateWithoutAccountsGlobalFilterInput[]
      | TagUncheckedCreateWithoutAccountsGlobalFilterInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type AccountUpdatefcmTokenInput = {
    set?: string[];
    push?: string | string[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CommentUpdateManyWithoutAccountNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutAccountInput,
          CommentUncheckedCreateWithoutAccountInput
        >
      | CommentCreateWithoutAccountInput[]
      | CommentUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAccountInput
      | CommentCreateOrConnectWithoutAccountInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAccountInput
      | CommentUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: CommentCreateManyAccountInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAccountInput
      | CommentUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAccountInput
      | CommentUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutSolvedByNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutSolvedByInput,
          CommentUncheckedCreateWithoutSolvedByInput
        >
      | CommentCreateWithoutSolvedByInput[]
      | CommentUncheckedCreateWithoutSolvedByInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutSolvedByInput
      | CommentCreateOrConnectWithoutSolvedByInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutSolvedByInput
      | CommentUpsertWithWhereUniqueWithoutSolvedByInput[];
    createMany?: CommentCreateManySolvedByInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutSolvedByInput
      | CommentUpdateWithWhereUniqueWithoutSolvedByInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutSolvedByInput
      | CommentUpdateManyWithWhereWithoutSolvedByInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type TagUpdateManyWithoutAccountsNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsInput,
          TagUncheckedCreateWithoutAccountsInput
        >
      | TagCreateWithoutAccountsInput[]
      | TagUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsInput
      | TagCreateOrConnectWithoutAccountsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutAccountsInput
      | TagUpsertWithWhereUniqueWithoutAccountsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutAccountsInput
      | TagUpdateWithWhereUniqueWithoutAccountsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutAccountsInput
      | TagUpdateManyWithWhereWithoutAccountsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type TagUpdateManyWithoutAccountsGlobalFilterNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsGlobalFilterInput,
          TagUncheckedCreateWithoutAccountsGlobalFilterInput
        >
      | TagCreateWithoutAccountsGlobalFilterInput[]
      | TagUncheckedCreateWithoutAccountsGlobalFilterInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutAccountsGlobalFilterInput
      | TagUpsertWithWhereUniqueWithoutAccountsGlobalFilterInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutAccountsGlobalFilterInput
      | TagUpdateWithWhereUniqueWithoutAccountsGlobalFilterInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutAccountsGlobalFilterInput
      | TagUpdateManyWithWhereWithoutAccountsGlobalFilterInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutAccountNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutAccountInput,
          CommentUncheckedCreateWithoutAccountInput
        >
      | CommentCreateWithoutAccountInput[]
      | CommentUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAccountInput
      | CommentCreateOrConnectWithoutAccountInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAccountInput
      | CommentUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: CommentCreateManyAccountInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAccountInput
      | CommentUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAccountInput
      | CommentUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutSolvedByNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutSolvedByInput,
          CommentUncheckedCreateWithoutSolvedByInput
        >
      | CommentCreateWithoutSolvedByInput[]
      | CommentUncheckedCreateWithoutSolvedByInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutSolvedByInput
      | CommentCreateOrConnectWithoutSolvedByInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutSolvedByInput
      | CommentUpsertWithWhereUniqueWithoutSolvedByInput[];
    createMany?: CommentCreateManySolvedByInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutSolvedByInput
      | CommentUpdateWithWhereUniqueWithoutSolvedByInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutSolvedByInput
      | CommentUpdateManyWithWhereWithoutSolvedByInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsInput,
          TagUncheckedCreateWithoutAccountsInput
        >
      | TagCreateWithoutAccountsInput[]
      | TagUncheckedCreateWithoutAccountsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsInput
      | TagCreateOrConnectWithoutAccountsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutAccountsInput
      | TagUpsertWithWhereUniqueWithoutAccountsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutAccountsInput
      | TagUpdateWithWhereUniqueWithoutAccountsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutAccountsInput
      | TagUpdateManyWithWhereWithoutAccountsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutAccountsGlobalFilterNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutAccountsGlobalFilterInput,
          TagUncheckedCreateWithoutAccountsGlobalFilterInput
        >
      | TagCreateWithoutAccountsGlobalFilterInput[]
      | TagUncheckedCreateWithoutAccountsGlobalFilterInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput
      | TagCreateOrConnectWithoutAccountsGlobalFilterInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutAccountsGlobalFilterInput
      | TagUpsertWithWhereUniqueWithoutAccountsGlobalFilterInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutAccountsGlobalFilterInput
      | TagUpdateWithWhereUniqueWithoutAccountsGlobalFilterInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutAccountsGlobalFilterInput
      | TagUpdateManyWithWhereWithoutAccountsGlobalFilterInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type ProfileCreatealternativeNamesInput = {
    set: string[];
  };

  export type CommentCreateNestedManyWithoutProfileInput = {
    create?:
      | XOR<
          CommentCreateWithoutProfileInput,
          CommentUncheckedCreateWithoutProfileInput
        >
      | CommentCreateWithoutProfileInput[]
      | CommentUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutProfileInput
      | CommentCreateOrConnectWithoutProfileInput[];
    createMany?: CommentCreateManyProfileInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type MessageCreateNestedManyWithoutProfileInput = {
    create?:
      | XOR<
          MessageCreateWithoutProfileInput,
          MessageUncheckedCreateWithoutProfileInput
        >
      | MessageCreateWithoutProfileInput[]
      | MessageUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutProfileInput
      | MessageCreateOrConnectWithoutProfileInput[];
    createMany?: MessageCreateManyProfileInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type TagCreateNestedManyWithoutProfilesInput = {
    create?:
      | XOR<
          TagCreateWithoutProfilesInput,
          TagUncheckedCreateWithoutProfilesInput
        >
      | TagCreateWithoutProfilesInput[]
      | TagUncheckedCreateWithoutProfilesInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutProfilesInput
      | TagCreateOrConnectWithoutProfilesInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type LocationCreateNestedOneWithoutBirthProfilesInput = {
    create?: XOR<
      LocationCreateWithoutBirthProfilesInput,
      LocationUncheckedCreateWithoutBirthProfilesInput
    >;
    connectOrCreate?: LocationCreateOrConnectWithoutBirthProfilesInput;
    connect?: LocationWhereUniqueInput;
  };

  export type LocationCreateNestedOneWithoutResidenceProfilesInput = {
    create?: XOR<
      LocationCreateWithoutResidenceProfilesInput,
      LocationUncheckedCreateWithoutResidenceProfilesInput
    >;
    connectOrCreate?: LocationCreateOrConnectWithoutResidenceProfilesInput;
    connect?: LocationWhereUniqueInput;
  };

  export type CommentUncheckedCreateNestedManyWithoutProfileInput = {
    create?:
      | XOR<
          CommentCreateWithoutProfileInput,
          CommentUncheckedCreateWithoutProfileInput
        >
      | CommentCreateWithoutProfileInput[]
      | CommentUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutProfileInput
      | CommentCreateOrConnectWithoutProfileInput[];
    createMany?: CommentCreateManyProfileInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type MessageUncheckedCreateNestedManyWithoutProfileInput = {
    create?:
      | XOR<
          MessageCreateWithoutProfileInput,
          MessageUncheckedCreateWithoutProfileInput
        >
      | MessageCreateWithoutProfileInput[]
      | MessageUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutProfileInput
      | MessageCreateOrConnectWithoutProfileInput[];
    createMany?: MessageCreateManyProfileInputEnvelope;
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutProfilesInput = {
    create?:
      | XOR<
          TagCreateWithoutProfilesInput,
          TagUncheckedCreateWithoutProfilesInput
        >
      | TagCreateWithoutProfilesInput[]
      | TagUncheckedCreateWithoutProfilesInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutProfilesInput
      | TagCreateOrConnectWithoutProfilesInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
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

  export type ProfileUpdatealternativeNamesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type CommentUpdateManyWithoutProfileNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutProfileInput,
          CommentUncheckedCreateWithoutProfileInput
        >
      | CommentCreateWithoutProfileInput[]
      | CommentUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutProfileInput
      | CommentCreateOrConnectWithoutProfileInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutProfileInput
      | CommentUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: CommentCreateManyProfileInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutProfileInput
      | CommentUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutProfileInput
      | CommentUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type MessageUpdateManyWithoutProfileNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutProfileInput,
          MessageUncheckedCreateWithoutProfileInput
        >
      | MessageCreateWithoutProfileInput[]
      | MessageUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutProfileInput
      | MessageCreateOrConnectWithoutProfileInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutProfileInput
      | MessageUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: MessageCreateManyProfileInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutProfileInput
      | MessageUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutProfileInput
      | MessageUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type TagUpdateManyWithoutProfilesNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutProfilesInput,
          TagUncheckedCreateWithoutProfilesInput
        >
      | TagCreateWithoutProfilesInput[]
      | TagUncheckedCreateWithoutProfilesInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutProfilesInput
      | TagCreateOrConnectWithoutProfilesInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutProfilesInput
      | TagUpsertWithWhereUniqueWithoutProfilesInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutProfilesInput
      | TagUpdateWithWhereUniqueWithoutProfilesInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutProfilesInput
      | TagUpdateManyWithWhereWithoutProfilesInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type LocationUpdateOneWithoutBirthProfilesNestedInput = {
    create?: XOR<
      LocationCreateWithoutBirthProfilesInput,
      LocationUncheckedCreateWithoutBirthProfilesInput
    >;
    connectOrCreate?: LocationCreateOrConnectWithoutBirthProfilesInput;
    upsert?: LocationUpsertWithoutBirthProfilesInput;
    disconnect?: LocationWhereInput | boolean;
    delete?: LocationWhereInput | boolean;
    connect?: LocationWhereUniqueInput;
    update?: XOR<
      XOR<
        LocationUpdateToOneWithWhereWithoutBirthProfilesInput,
        LocationUpdateWithoutBirthProfilesInput
      >,
      LocationUncheckedUpdateWithoutBirthProfilesInput
    >;
  };

  export type LocationUpdateOneWithoutResidenceProfilesNestedInput = {
    create?: XOR<
      LocationCreateWithoutResidenceProfilesInput,
      LocationUncheckedCreateWithoutResidenceProfilesInput
    >;
    connectOrCreate?: LocationCreateOrConnectWithoutResidenceProfilesInput;
    upsert?: LocationUpsertWithoutResidenceProfilesInput;
    disconnect?: LocationWhereInput | boolean;
    delete?: LocationWhereInput | boolean;
    connect?: LocationWhereUniqueInput;
    update?: XOR<
      XOR<
        LocationUpdateToOneWithWhereWithoutResidenceProfilesInput,
        LocationUpdateWithoutResidenceProfilesInput
      >,
      LocationUncheckedUpdateWithoutResidenceProfilesInput
    >;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CommentUncheckedUpdateManyWithoutProfileNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutProfileInput,
          CommentUncheckedCreateWithoutProfileInput
        >
      | CommentCreateWithoutProfileInput[]
      | CommentUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutProfileInput
      | CommentCreateOrConnectWithoutProfileInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutProfileInput
      | CommentUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: CommentCreateManyProfileInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutProfileInput
      | CommentUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutProfileInput
      | CommentUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type MessageUncheckedUpdateManyWithoutProfileNestedInput = {
    create?:
      | XOR<
          MessageCreateWithoutProfileInput,
          MessageUncheckedCreateWithoutProfileInput
        >
      | MessageCreateWithoutProfileInput[]
      | MessageUncheckedCreateWithoutProfileInput[];
    connectOrCreate?:
      | MessageCreateOrConnectWithoutProfileInput
      | MessageCreateOrConnectWithoutProfileInput[];
    upsert?:
      | MessageUpsertWithWhereUniqueWithoutProfileInput
      | MessageUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: MessageCreateManyProfileInputEnvelope;
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[];
    update?:
      | MessageUpdateWithWhereUniqueWithoutProfileInput
      | MessageUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?:
      | MessageUpdateManyWithWhereWithoutProfileInput
      | MessageUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?:
      | XOR<
          TagCreateWithoutProfilesInput,
          TagUncheckedCreateWithoutProfilesInput
        >
      | TagCreateWithoutProfilesInput[]
      | TagUncheckedCreateWithoutProfilesInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutProfilesInput
      | TagCreateOrConnectWithoutProfilesInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutProfilesInput
      | TagUpsertWithWhereUniqueWithoutProfilesInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutProfilesInput
      | TagUpdateWithWhereUniqueWithoutProfilesInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutProfilesInput
      | TagUpdateManyWithWhereWithoutProfilesInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type ProfileCreateNestedManyWithoutBirthLocationInput = {
    create?:
      | XOR<
          ProfileCreateWithoutBirthLocationInput,
          ProfileUncheckedCreateWithoutBirthLocationInput
        >
      | ProfileCreateWithoutBirthLocationInput[]
      | ProfileUncheckedCreateWithoutBirthLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutBirthLocationInput
      | ProfileCreateOrConnectWithoutBirthLocationInput[];
    createMany?: ProfileCreateManyBirthLocationInputEnvelope;
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
  };

  export type ProfileCreateNestedManyWithoutResidenceLocationInput = {
    create?:
      | XOR<
          ProfileCreateWithoutResidenceLocationInput,
          ProfileUncheckedCreateWithoutResidenceLocationInput
        >
      | ProfileCreateWithoutResidenceLocationInput[]
      | ProfileUncheckedCreateWithoutResidenceLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutResidenceLocationInput
      | ProfileCreateOrConnectWithoutResidenceLocationInput[];
    createMany?: ProfileCreateManyResidenceLocationInputEnvelope;
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedManyWithoutBirthLocationInput = {
    create?:
      | XOR<
          ProfileCreateWithoutBirthLocationInput,
          ProfileUncheckedCreateWithoutBirthLocationInput
        >
      | ProfileCreateWithoutBirthLocationInput[]
      | ProfileUncheckedCreateWithoutBirthLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutBirthLocationInput
      | ProfileCreateOrConnectWithoutBirthLocationInput[];
    createMany?: ProfileCreateManyBirthLocationInputEnvelope;
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedManyWithoutResidenceLocationInput = {
    create?:
      | XOR<
          ProfileCreateWithoutResidenceLocationInput,
          ProfileUncheckedCreateWithoutResidenceLocationInput
        >
      | ProfileCreateWithoutResidenceLocationInput[]
      | ProfileUncheckedCreateWithoutResidenceLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutResidenceLocationInput
      | ProfileCreateOrConnectWithoutResidenceLocationInput[];
    createMany?: ProfileCreateManyResidenceLocationInputEnvelope;
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProfileUpdateManyWithoutBirthLocationNestedInput = {
    create?:
      | XOR<
          ProfileCreateWithoutBirthLocationInput,
          ProfileUncheckedCreateWithoutBirthLocationInput
        >
      | ProfileCreateWithoutBirthLocationInput[]
      | ProfileUncheckedCreateWithoutBirthLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutBirthLocationInput
      | ProfileCreateOrConnectWithoutBirthLocationInput[];
    upsert?:
      | ProfileUpsertWithWhereUniqueWithoutBirthLocationInput
      | ProfileUpsertWithWhereUniqueWithoutBirthLocationInput[];
    createMany?: ProfileCreateManyBirthLocationInputEnvelope;
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    update?:
      | ProfileUpdateWithWhereUniqueWithoutBirthLocationInput
      | ProfileUpdateWithWhereUniqueWithoutBirthLocationInput[];
    updateMany?:
      | ProfileUpdateManyWithWhereWithoutBirthLocationInput
      | ProfileUpdateManyWithWhereWithoutBirthLocationInput[];
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
  };

  export type ProfileUpdateManyWithoutResidenceLocationNestedInput = {
    create?:
      | XOR<
          ProfileCreateWithoutResidenceLocationInput,
          ProfileUncheckedCreateWithoutResidenceLocationInput
        >
      | ProfileCreateWithoutResidenceLocationInput[]
      | ProfileUncheckedCreateWithoutResidenceLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutResidenceLocationInput
      | ProfileCreateOrConnectWithoutResidenceLocationInput[];
    upsert?:
      | ProfileUpsertWithWhereUniqueWithoutResidenceLocationInput
      | ProfileUpsertWithWhereUniqueWithoutResidenceLocationInput[];
    createMany?: ProfileCreateManyResidenceLocationInputEnvelope;
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    update?:
      | ProfileUpdateWithWhereUniqueWithoutResidenceLocationInput
      | ProfileUpdateWithWhereUniqueWithoutResidenceLocationInput[];
    updateMany?:
      | ProfileUpdateManyWithWhereWithoutResidenceLocationInput
      | ProfileUpdateManyWithWhereWithoutResidenceLocationInput[];
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateManyWithoutBirthLocationNestedInput = {
    create?:
      | XOR<
          ProfileCreateWithoutBirthLocationInput,
          ProfileUncheckedCreateWithoutBirthLocationInput
        >
      | ProfileCreateWithoutBirthLocationInput[]
      | ProfileUncheckedCreateWithoutBirthLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutBirthLocationInput
      | ProfileCreateOrConnectWithoutBirthLocationInput[];
    upsert?:
      | ProfileUpsertWithWhereUniqueWithoutBirthLocationInput
      | ProfileUpsertWithWhereUniqueWithoutBirthLocationInput[];
    createMany?: ProfileCreateManyBirthLocationInputEnvelope;
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    update?:
      | ProfileUpdateWithWhereUniqueWithoutBirthLocationInput
      | ProfileUpdateWithWhereUniqueWithoutBirthLocationInput[];
    updateMany?:
      | ProfileUpdateManyWithWhereWithoutBirthLocationInput
      | ProfileUpdateManyWithWhereWithoutBirthLocationInput[];
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateManyWithoutResidenceLocationNestedInput = {
    create?:
      | XOR<
          ProfileCreateWithoutResidenceLocationInput,
          ProfileUncheckedCreateWithoutResidenceLocationInput
        >
      | ProfileCreateWithoutResidenceLocationInput[]
      | ProfileUncheckedCreateWithoutResidenceLocationInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutResidenceLocationInput
      | ProfileCreateOrConnectWithoutResidenceLocationInput[];
    upsert?:
      | ProfileUpsertWithWhereUniqueWithoutResidenceLocationInput
      | ProfileUpsertWithWhereUniqueWithoutResidenceLocationInput[];
    createMany?: ProfileCreateManyResidenceLocationInputEnvelope;
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    update?:
      | ProfileUpdateWithWhereUniqueWithoutResidenceLocationInput
      | ProfileUpdateWithWhereUniqueWithoutResidenceLocationInput[];
    updateMany?:
      | ProfileUpdateManyWithWhereWithoutResidenceLocationInput
      | ProfileUpdateManyWithWhereWithoutResidenceLocationInput[];
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
  };

  export type AccountCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      AccountCreateWithoutCommentsInput,
      AccountUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutCommentsInput;
    connect?: AccountWhereUniqueInput;
  };

  export type ProfileCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      ProfileCreateWithoutCommentsInput,
      ProfileUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type AccountCreateNestedOneWithoutSolvableCommentsInput = {
    create?: XOR<
      AccountCreateWithoutSolvableCommentsInput,
      AccountUncheckedCreateWithoutSolvableCommentsInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutSolvableCommentsInput;
    connect?: AccountWhereUniqueInput;
  };

  export type AccountUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      AccountCreateWithoutCommentsInput,
      AccountUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutCommentsInput;
    upsert?: AccountUpsertWithoutCommentsInput;
    connect?: AccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AccountUpdateToOneWithWhereWithoutCommentsInput,
        AccountUpdateWithoutCommentsInput
      >,
      AccountUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type ProfileUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      ProfileCreateWithoutCommentsInput,
      ProfileUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput;
    upsert?: ProfileUpsertWithoutCommentsInput;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutCommentsInput,
        ProfileUpdateWithoutCommentsInput
      >,
      ProfileUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type AccountUpdateOneWithoutSolvableCommentsNestedInput = {
    create?: XOR<
      AccountCreateWithoutSolvableCommentsInput,
      AccountUncheckedCreateWithoutSolvableCommentsInput
    >;
    connectOrCreate?: AccountCreateOrConnectWithoutSolvableCommentsInput;
    upsert?: AccountUpsertWithoutSolvableCommentsInput;
    disconnect?: AccountWhereInput | boolean;
    delete?: AccountWhereInput | boolean;
    connect?: AccountWhereUniqueInput;
    update?: XOR<
      XOR<
        AccountUpdateToOneWithWhereWithoutSolvableCommentsInput,
        AccountUpdateWithoutSolvableCommentsInput
      >,
      AccountUncheckedUpdateWithoutSolvableCommentsInput
    >;
  };

  export type TagGroupCreateNestedOneWithoutTagsInput = {
    create?: XOR<
      TagGroupCreateWithoutTagsInput,
      TagGroupUncheckedCreateWithoutTagsInput
    >;
    connectOrCreate?: TagGroupCreateOrConnectWithoutTagsInput;
    connect?: TagGroupWhereUniqueInput;
  };

  export type EventCreateNestedOneWithoutTagAssistedInput = {
    create?: XOR<
      EventCreateWithoutTagAssistedInput,
      EventUncheckedCreateWithoutTagAssistedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagAssistedInput;
    connect?: EventWhereUniqueInput;
  };

  export type EventCreateNestedOneWithoutTagConfirmedInput = {
    create?: XOR<
      EventCreateWithoutTagConfirmedInput,
      EventUncheckedCreateWithoutTagConfirmedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagConfirmedInput;
    connect?: EventWhereUniqueInput;
  };

  export type AccountCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<
          AccountCreateWithoutTagsInput,
          AccountUncheckedCreateWithoutTagsInput
        >
      | AccountCreateWithoutTagsInput[]
      | AccountUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutTagsInput
      | AccountCreateOrConnectWithoutTagsInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type ProfileCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<
          ProfileCreateWithoutTagsInput,
          ProfileUncheckedCreateWithoutTagsInput
        >
      | ProfileCreateWithoutTagsInput[]
      | ProfileUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutTagsInput
      | ProfileCreateOrConnectWithoutTagsInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
  };

  export type AccountCreateNestedManyWithoutGlobalFilterInput = {
    create?:
      | XOR<
          AccountCreateWithoutGlobalFilterInput,
          AccountUncheckedCreateWithoutGlobalFilterInput
        >
      | AccountCreateWithoutGlobalFilterInput[]
      | AccountUncheckedCreateWithoutGlobalFilterInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutGlobalFilterInput
      | AccountCreateOrConnectWithoutGlobalFilterInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type EventUncheckedCreateNestedOneWithoutTagAssistedInput = {
    create?: XOR<
      EventCreateWithoutTagAssistedInput,
      EventUncheckedCreateWithoutTagAssistedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagAssistedInput;
    connect?: EventWhereUniqueInput;
  };

  export type EventUncheckedCreateNestedOneWithoutTagConfirmedInput = {
    create?: XOR<
      EventCreateWithoutTagConfirmedInput,
      EventUncheckedCreateWithoutTagConfirmedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagConfirmedInput;
    connect?: EventWhereUniqueInput;
  };

  export type AccountUncheckedCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<
          AccountCreateWithoutTagsInput,
          AccountUncheckedCreateWithoutTagsInput
        >
      | AccountCreateWithoutTagsInput[]
      | AccountUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutTagsInput
      | AccountCreateOrConnectWithoutTagsInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<
          ProfileCreateWithoutTagsInput,
          ProfileUncheckedCreateWithoutTagsInput
        >
      | ProfileCreateWithoutTagsInput[]
      | ProfileUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutTagsInput
      | ProfileCreateOrConnectWithoutTagsInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
  };

  export type AccountUncheckedCreateNestedManyWithoutGlobalFilterInput = {
    create?:
      | XOR<
          AccountCreateWithoutGlobalFilterInput,
          AccountUncheckedCreateWithoutGlobalFilterInput
        >
      | AccountCreateWithoutGlobalFilterInput[]
      | AccountUncheckedCreateWithoutGlobalFilterInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutGlobalFilterInput
      | AccountCreateOrConnectWithoutGlobalFilterInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type EnumTagTypeFieldUpdateOperationsInput = {
    set?: $Enums.TagType;
  };

  export type TagGroupUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<
      TagGroupCreateWithoutTagsInput,
      TagGroupUncheckedCreateWithoutTagsInput
    >;
    connectOrCreate?: TagGroupCreateOrConnectWithoutTagsInput;
    upsert?: TagGroupUpsertWithoutTagsInput;
    connect?: TagGroupWhereUniqueInput;
    update?: XOR<
      XOR<
        TagGroupUpdateToOneWithWhereWithoutTagsInput,
        TagGroupUpdateWithoutTagsInput
      >,
      TagGroupUncheckedUpdateWithoutTagsInput
    >;
  };

  export type EventUpdateOneWithoutTagAssistedNestedInput = {
    create?: XOR<
      EventCreateWithoutTagAssistedInput,
      EventUncheckedCreateWithoutTagAssistedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagAssistedInput;
    upsert?: EventUpsertWithoutTagAssistedInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutTagAssistedInput,
        EventUpdateWithoutTagAssistedInput
      >,
      EventUncheckedUpdateWithoutTagAssistedInput
    >;
  };

  export type EventUpdateOneWithoutTagConfirmedNestedInput = {
    create?: XOR<
      EventCreateWithoutTagConfirmedInput,
      EventUncheckedCreateWithoutTagConfirmedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagConfirmedInput;
    upsert?: EventUpsertWithoutTagConfirmedInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutTagConfirmedInput,
        EventUpdateWithoutTagConfirmedInput
      >,
      EventUncheckedUpdateWithoutTagConfirmedInput
    >;
  };

  export type AccountUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutTagsInput,
          AccountUncheckedCreateWithoutTagsInput
        >
      | AccountCreateWithoutTagsInput[]
      | AccountUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutTagsInput
      | AccountCreateOrConnectWithoutTagsInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutTagsInput
      | AccountUpsertWithWhereUniqueWithoutTagsInput[];
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutTagsInput
      | AccountUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutTagsInput
      | AccountUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type ProfileUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<
          ProfileCreateWithoutTagsInput,
          ProfileUncheckedCreateWithoutTagsInput
        >
      | ProfileCreateWithoutTagsInput[]
      | ProfileUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutTagsInput
      | ProfileCreateOrConnectWithoutTagsInput[];
    upsert?:
      | ProfileUpsertWithWhereUniqueWithoutTagsInput
      | ProfileUpsertWithWhereUniqueWithoutTagsInput[];
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    update?:
      | ProfileUpdateWithWhereUniqueWithoutTagsInput
      | ProfileUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | ProfileUpdateManyWithWhereWithoutTagsInput
      | ProfileUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
  };

  export type AccountUpdateManyWithoutGlobalFilterNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutGlobalFilterInput,
          AccountUncheckedCreateWithoutGlobalFilterInput
        >
      | AccountCreateWithoutGlobalFilterInput[]
      | AccountUncheckedCreateWithoutGlobalFilterInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutGlobalFilterInput
      | AccountCreateOrConnectWithoutGlobalFilterInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutGlobalFilterInput
      | AccountUpsertWithWhereUniqueWithoutGlobalFilterInput[];
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutGlobalFilterInput
      | AccountUpdateWithWhereUniqueWithoutGlobalFilterInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutGlobalFilterInput
      | AccountUpdateManyWithWhereWithoutGlobalFilterInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type EventUncheckedUpdateOneWithoutTagAssistedNestedInput = {
    create?: XOR<
      EventCreateWithoutTagAssistedInput,
      EventUncheckedCreateWithoutTagAssistedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagAssistedInput;
    upsert?: EventUpsertWithoutTagAssistedInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutTagAssistedInput,
        EventUpdateWithoutTagAssistedInput
      >,
      EventUncheckedUpdateWithoutTagAssistedInput
    >;
  };

  export type EventUncheckedUpdateOneWithoutTagConfirmedNestedInput = {
    create?: XOR<
      EventCreateWithoutTagConfirmedInput,
      EventUncheckedCreateWithoutTagConfirmedInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutTagConfirmedInput;
    upsert?: EventUpsertWithoutTagConfirmedInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutTagConfirmedInput,
        EventUpdateWithoutTagConfirmedInput
      >,
      EventUncheckedUpdateWithoutTagConfirmedInput
    >;
  };

  export type AccountUncheckedUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutTagsInput,
          AccountUncheckedCreateWithoutTagsInput
        >
      | AccountCreateWithoutTagsInput[]
      | AccountUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutTagsInput
      | AccountCreateOrConnectWithoutTagsInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutTagsInput
      | AccountUpsertWithWhereUniqueWithoutTagsInput[];
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutTagsInput
      | AccountUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutTagsInput
      | AccountUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<
          ProfileCreateWithoutTagsInput,
          ProfileUncheckedCreateWithoutTagsInput
        >
      | ProfileCreateWithoutTagsInput[]
      | ProfileUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | ProfileCreateOrConnectWithoutTagsInput
      | ProfileCreateOrConnectWithoutTagsInput[];
    upsert?:
      | ProfileUpsertWithWhereUniqueWithoutTagsInput
      | ProfileUpsertWithWhereUniqueWithoutTagsInput[];
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[];
    update?:
      | ProfileUpdateWithWhereUniqueWithoutTagsInput
      | ProfileUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | ProfileUpdateManyWithWhereWithoutTagsInput
      | ProfileUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
  };

  export type AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutGlobalFilterInput,
          AccountUncheckedCreateWithoutGlobalFilterInput
        >
      | AccountCreateWithoutGlobalFilterInput[]
      | AccountUncheckedCreateWithoutGlobalFilterInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutGlobalFilterInput
      | AccountCreateOrConnectWithoutGlobalFilterInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutGlobalFilterInput
      | AccountUpsertWithWhereUniqueWithoutGlobalFilterInput[];
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutGlobalFilterInput
      | AccountUpdateWithWhereUniqueWithoutGlobalFilterInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutGlobalFilterInput
      | AccountUpdateManyWithWhereWithoutGlobalFilterInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type TagCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput>
      | TagCreateWithoutGroupInput[]
      | TagUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutGroupInput
      | TagCreateOrConnectWithoutGroupInput[];
    createMany?: TagCreateManyGroupInputEnvelope;
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type TagUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput>
      | TagCreateWithoutGroupInput[]
      | TagUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutGroupInput
      | TagCreateOrConnectWithoutGroupInput[];
    createMany?: TagCreateManyGroupInputEnvelope;
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type TagUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput>
      | TagCreateWithoutGroupInput[]
      | TagUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutGroupInput
      | TagCreateOrConnectWithoutGroupInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutGroupInput
      | TagUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: TagCreateManyGroupInputEnvelope;
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutGroupInput
      | TagUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutGroupInput
      | TagUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type TagUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<TagCreateWithoutGroupInput, TagUncheckedCreateWithoutGroupInput>
      | TagCreateWithoutGroupInput[]
      | TagUncheckedCreateWithoutGroupInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutGroupInput
      | TagCreateOrConnectWithoutGroupInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutGroupInput
      | TagUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: TagCreateManyGroupInputEnvelope;
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutGroupInput
      | TagUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutGroupInput
      | TagUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type EventFolderCreateNestedOneWithoutEventsInput = {
    create?: XOR<
      EventFolderCreateWithoutEventsInput,
      EventFolderUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: EventFolderCreateOrConnectWithoutEventsInput;
    connect?: EventFolderWhereUniqueInput;
  };

  export type TagCreateNestedOneWithoutAssistedEventInput = {
    create?: XOR<
      TagCreateWithoutAssistedEventInput,
      TagUncheckedCreateWithoutAssistedEventInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutAssistedEventInput;
    connect?: TagWhereUniqueInput;
  };

  export type TagCreateNestedOneWithoutConfirmedEventInput = {
    create?: XOR<
      TagCreateWithoutConfirmedEventInput,
      TagUncheckedCreateWithoutConfirmedEventInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutConfirmedEventInput;
    connect?: TagWhereUniqueInput;
  };

  export type EventCreateNestedOneWithoutSubEventsInput = {
    create?: XOR<
      EventCreateWithoutSubEventsInput,
      EventUncheckedCreateWithoutSubEventsInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutSubEventsInput;
    connect?: EventWhereUniqueInput;
  };

  export type EventCreateNestedManyWithoutSupraEventInput = {
    create?:
      | XOR<
          EventCreateWithoutSupraEventInput,
          EventUncheckedCreateWithoutSupraEventInput
        >
      | EventCreateWithoutSupraEventInput[]
      | EventUncheckedCreateWithoutSupraEventInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutSupraEventInput
      | EventCreateOrConnectWithoutSupraEventInput[];
    createMany?: EventCreateManySupraEventInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type EventUncheckedCreateNestedManyWithoutSupraEventInput = {
    create?:
      | XOR<
          EventCreateWithoutSupraEventInput,
          EventUncheckedCreateWithoutSupraEventInput
        >
      | EventCreateWithoutSupraEventInput[]
      | EventUncheckedCreateWithoutSupraEventInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutSupraEventInput
      | EventCreateOrConnectWithoutSupraEventInput[];
    createMany?: EventCreateManySupraEventInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type EventFolderUpdateOneWithoutEventsNestedInput = {
    create?: XOR<
      EventFolderCreateWithoutEventsInput,
      EventFolderUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: EventFolderCreateOrConnectWithoutEventsInput;
    upsert?: EventFolderUpsertWithoutEventsInput;
    disconnect?: EventFolderWhereInput | boolean;
    delete?: EventFolderWhereInput | boolean;
    connect?: EventFolderWhereUniqueInput;
    update?: XOR<
      XOR<
        EventFolderUpdateToOneWithWhereWithoutEventsInput,
        EventFolderUpdateWithoutEventsInput
      >,
      EventFolderUncheckedUpdateWithoutEventsInput
    >;
  };

  export type TagUpdateOneRequiredWithoutAssistedEventNestedInput = {
    create?: XOR<
      TagCreateWithoutAssistedEventInput,
      TagUncheckedCreateWithoutAssistedEventInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutAssistedEventInput;
    upsert?: TagUpsertWithoutAssistedEventInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<
        TagUpdateToOneWithWhereWithoutAssistedEventInput,
        TagUpdateWithoutAssistedEventInput
      >,
      TagUncheckedUpdateWithoutAssistedEventInput
    >;
  };

  export type TagUpdateOneRequiredWithoutConfirmedEventNestedInput = {
    create?: XOR<
      TagCreateWithoutConfirmedEventInput,
      TagUncheckedCreateWithoutConfirmedEventInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutConfirmedEventInput;
    upsert?: TagUpsertWithoutConfirmedEventInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<
        TagUpdateToOneWithWhereWithoutConfirmedEventInput,
        TagUpdateWithoutConfirmedEventInput
      >,
      TagUncheckedUpdateWithoutConfirmedEventInput
    >;
  };

  export type EventUpdateOneWithoutSubEventsNestedInput = {
    create?: XOR<
      EventCreateWithoutSubEventsInput,
      EventUncheckedCreateWithoutSubEventsInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutSubEventsInput;
    upsert?: EventUpsertWithoutSubEventsInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutSubEventsInput,
        EventUpdateWithoutSubEventsInput
      >,
      EventUncheckedUpdateWithoutSubEventsInput
    >;
  };

  export type EventUpdateManyWithoutSupraEventNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutSupraEventInput,
          EventUncheckedCreateWithoutSupraEventInput
        >
      | EventCreateWithoutSupraEventInput[]
      | EventUncheckedCreateWithoutSupraEventInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutSupraEventInput
      | EventCreateOrConnectWithoutSupraEventInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutSupraEventInput
      | EventUpsertWithWhereUniqueWithoutSupraEventInput[];
    createMany?: EventCreateManySupraEventInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutSupraEventInput
      | EventUpdateWithWhereUniqueWithoutSupraEventInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutSupraEventInput
      | EventUpdateManyWithWhereWithoutSupraEventInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type EventUncheckedUpdateManyWithoutSupraEventNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutSupraEventInput,
          EventUncheckedCreateWithoutSupraEventInput
        >
      | EventCreateWithoutSupraEventInput[]
      | EventUncheckedCreateWithoutSupraEventInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutSupraEventInput
      | EventCreateOrConnectWithoutSupraEventInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutSupraEventInput
      | EventUpsertWithWhereUniqueWithoutSupraEventInput[];
    createMany?: EventCreateManySupraEventInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutSupraEventInput
      | EventUpdateWithWhereUniqueWithoutSupraEventInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutSupraEventInput
      | EventUpdateManyWithWhereWithoutSupraEventInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type EventCreateNestedManyWithoutFolderInput = {
    create?:
      | XOR<
          EventCreateWithoutFolderInput,
          EventUncheckedCreateWithoutFolderInput
        >
      | EventCreateWithoutFolderInput[]
      | EventUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutFolderInput
      | EventCreateOrConnectWithoutFolderInput[];
    createMany?: EventCreateManyFolderInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type EventUncheckedCreateNestedManyWithoutFolderInput = {
    create?:
      | XOR<
          EventCreateWithoutFolderInput,
          EventUncheckedCreateWithoutFolderInput
        >
      | EventCreateWithoutFolderInput[]
      | EventUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutFolderInput
      | EventCreateOrConnectWithoutFolderInput[];
    createMany?: EventCreateManyFolderInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type EventUpdateManyWithoutFolderNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutFolderInput,
          EventUncheckedCreateWithoutFolderInput
        >
      | EventCreateWithoutFolderInput[]
      | EventUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutFolderInput
      | EventCreateOrConnectWithoutFolderInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutFolderInput
      | EventUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: EventCreateManyFolderInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutFolderInput
      | EventUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutFolderInput
      | EventUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type EventUncheckedUpdateManyWithoutFolderNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutFolderInput,
          EventUncheckedCreateWithoutFolderInput
        >
      | EventCreateWithoutFolderInput[]
      | EventUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutFolderInput
      | EventCreateOrConnectWithoutFolderInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutFolderInput
      | EventUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: EventCreateManyFolderInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutFolderInput
      | EventUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutFolderInput
      | EventUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type ProfileCreateNestedOneWithoutMessagesInput = {
    create?: XOR<
      ProfileCreateWithoutMessagesInput,
      ProfileUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutMessagesInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type EnumMessageStateFieldUpdateOperationsInput = {
    set?: $Enums.MessageState;
  };

  export type ProfileUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<
      ProfileCreateWithoutMessagesInput,
      ProfileUncheckedCreateWithoutMessagesInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutMessagesInput;
    upsert?: ProfileUpsertWithoutMessagesInput;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutMessagesInput,
        ProfileUpdateWithoutMessagesInput
      >,
      ProfileUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type EnumTemplateStatusFieldUpdateOperationsInput = {
    set?: $Enums.TemplateStatus;
  };

  export type EnumTemplateCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TemplateCategory;
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumTagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTagTypeFilter<$PrismaModel> | $Enums.TagType;
  };

  export type NestedEnumTagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTagTypeWithAggregatesFilter<$PrismaModel> | $Enums.TagType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTagTypeFilter<$PrismaModel>;
    _max?: NestedEnumTagTypeFilter<$PrismaModel>;
  };

  export type NestedEnumMessageStateFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageState | EnumMessageStateFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.MessageState[]
      | ListEnumMessageStateFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MessageState[]
      | ListEnumMessageStateFieldRefInput<$PrismaModel>;
    not?: NestedEnumMessageStateFilter<$PrismaModel> | $Enums.MessageState;
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

  export type NestedEnumMessageStateWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.MessageState
        | EnumMessageStateFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.MessageState[]
        | ListEnumMessageStateFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.MessageState[]
        | ListEnumMessageStateFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumMessageStateWithAggregatesFilter<$PrismaModel>
        | $Enums.MessageState;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumMessageStateFilter<$PrismaModel>;
      _max?: NestedEnumMessageStateFilter<$PrismaModel>;
    };

  export type NestedEnumTemplateStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TemplateStatus
      | EnumTemplateStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTemplateStatusFilter<$PrismaModel> | $Enums.TemplateStatus;
  };

  export type NestedEnumTemplateCategoryFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TemplateCategory
      | EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTemplateCategoryFilter<$PrismaModel>
      | $Enums.TemplateCategory;
  };

  export type NestedEnumTemplateStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TemplateStatus
      | EnumTemplateStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateStatus[]
      | ListEnumTemplateStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTemplateStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TemplateStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTemplateStatusFilter<$PrismaModel>;
    _max?: NestedEnumTemplateStatusFilter<$PrismaModel>;
  };

  export type NestedEnumTemplateCategoryWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TemplateCategory
      | EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TemplateCategory[]
      | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel>
      | $Enums.TemplateCategory;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTemplateCategoryFilter<$PrismaModel>;
    _max?: NestedEnumTemplateCategoryFilter<$PrismaModel>;
  };

  export type CommentCreateWithoutAccountInput = {
    id?: string;
    content: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profile: ProfileCreateNestedOneWithoutCommentsInput;
    solvedBy?: AccountCreateNestedOneWithoutSolvableCommentsInput;
  };

  export type CommentUncheckedCreateWithoutAccountInput = {
    id?: string;
    content: string;
    profileId: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    solvedById?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentCreateOrConnectWithoutAccountInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutAccountInput,
      CommentUncheckedCreateWithoutAccountInput
    >;
  };

  export type CommentCreateManyAccountInputEnvelope = {
    data: CommentCreateManyAccountInput | CommentCreateManyAccountInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutSolvedByInput = {
    id?: string;
    content: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    account: AccountCreateNestedOneWithoutCommentsInput;
    profile: ProfileCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateWithoutSolvedByInput = {
    id?: string;
    content: string;
    createdBy: string;
    profileId: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentCreateOrConnectWithoutSolvedByInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutSolvedByInput,
      CommentUncheckedCreateWithoutSolvedByInput
    >;
  };

  export type CommentCreateManySolvedByInputEnvelope = {
    data: CommentCreateManySolvedByInput | CommentCreateManySolvedByInput[];
    skipDuplicates?: boolean;
  };

  export type TagCreateWithoutAccountsInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: TagGroupCreateNestedOneWithoutTagsInput;
    assistedEvent?: EventCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventCreateNestedOneWithoutTagConfirmedInput;
    profiles?: ProfileCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUncheckedCreateWithoutAccountsInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventUncheckedCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventUncheckedCreateNestedOneWithoutTagConfirmedInput;
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountUncheckedCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagCreateOrConnectWithoutAccountsInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutAccountsInput,
      TagUncheckedCreateWithoutAccountsInput
    >;
  };

  export type TagCreateWithoutAccountsGlobalFilterInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: TagGroupCreateNestedOneWithoutTagsInput;
    assistedEvent?: EventCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountCreateNestedManyWithoutTagsInput;
    profiles?: ProfileCreateNestedManyWithoutTagsInput;
  };

  export type TagUncheckedCreateWithoutAccountsGlobalFilterInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventUncheckedCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventUncheckedCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutTagsInput;
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;
  };

  export type TagCreateOrConnectWithoutAccountsGlobalFilterInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutAccountsGlobalFilterInput,
      TagUncheckedCreateWithoutAccountsGlobalFilterInput
    >;
  };

  export type CommentUpsertWithWhereUniqueWithoutAccountInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutAccountInput,
      CommentUncheckedUpdateWithoutAccountInput
    >;
    create: XOR<
      CommentCreateWithoutAccountInput,
      CommentUncheckedCreateWithoutAccountInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutAccountInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutAccountInput,
      CommentUncheckedUpdateWithoutAccountInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutAccountInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutAccountInput
    >;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: StringFilter<'Comment'> | string;
    content?: StringFilter<'Comment'> | string;
    createdBy?: StringFilter<'Comment'> | string;
    profileId?: StringFilter<'Comment'> | string;
    isSolvable?: BoolFilter<'Comment'> | boolean;
    isSolved?: BoolFilter<'Comment'> | boolean;
    solvedAt?: DateTimeNullableFilter<'Comment'> | Date | string | null;
    solvedById?: StringNullableFilter<'Comment'> | string | null;
    created_at?: DateTimeFilter<'Comment'> | Date | string;
    updated_at?: DateTimeFilter<'Comment'> | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutSolvedByInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutSolvedByInput,
      CommentUncheckedUpdateWithoutSolvedByInput
    >;
    create: XOR<
      CommentCreateWithoutSolvedByInput,
      CommentUncheckedCreateWithoutSolvedByInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutSolvedByInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutSolvedByInput,
      CommentUncheckedUpdateWithoutSolvedByInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutSolvedByInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutSolvedByInput
    >;
  };

  export type TagUpsertWithWhereUniqueWithoutAccountsInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutAccountsInput,
      TagUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      TagCreateWithoutAccountsInput,
      TagUncheckedCreateWithoutAccountsInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutAccountsInput = {
    where: TagWhereUniqueInput;
    data: XOR<
      TagUpdateWithoutAccountsInput,
      TagUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type TagUpdateManyWithWhereWithoutAccountsInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutAccountsInput
    >;
  };

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[];
    OR?: TagScalarWhereInput[];
    NOT?: TagScalarWhereInput | TagScalarWhereInput[];
    id?: StringFilter<'Tag'> | string;
    name?: StringFilter<'Tag'> | string;
    type?: EnumTagTypeFilter<'Tag'> | $Enums.TagType;
    groupId?: StringFilter<'Tag'> | string;
    created_at?: DateTimeFilter<'Tag'> | Date | string;
    updated_at?: DateTimeFilter<'Tag'> | Date | string;
  };

  export type TagUpsertWithWhereUniqueWithoutAccountsGlobalFilterInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutAccountsGlobalFilterInput,
      TagUncheckedUpdateWithoutAccountsGlobalFilterInput
    >;
    create: XOR<
      TagCreateWithoutAccountsGlobalFilterInput,
      TagUncheckedCreateWithoutAccountsGlobalFilterInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutAccountsGlobalFilterInput = {
    where: TagWhereUniqueInput;
    data: XOR<
      TagUpdateWithoutAccountsGlobalFilterInput,
      TagUncheckedUpdateWithoutAccountsGlobalFilterInput
    >;
  };

  export type TagUpdateManyWithWhereWithoutAccountsGlobalFilterInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutAccountsGlobalFilterInput
    >;
  };

  export type CommentCreateWithoutProfileInput = {
    id?: string;
    content: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    account: AccountCreateNestedOneWithoutCommentsInput;
    solvedBy?: AccountCreateNestedOneWithoutSolvableCommentsInput;
  };

  export type CommentUncheckedCreateWithoutProfileInput = {
    id?: string;
    content: string;
    createdBy: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    solvedById?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentCreateOrConnectWithoutProfileInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutProfileInput,
      CommentUncheckedCreateWithoutProfileInput
    >;
  };

  export type CommentCreateManyProfileInputEnvelope = {
    data: CommentCreateManyProfileInput | CommentCreateManyProfileInput[];
    skipDuplicates?: boolean;
  };

  export type MessageCreateWithoutProfileInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    state?: $Enums.MessageState;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MessageUncheckedCreateWithoutProfileInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    state?: $Enums.MessageState;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MessageCreateOrConnectWithoutProfileInput = {
    where: MessageWhereUniqueInput;
    create: XOR<
      MessageCreateWithoutProfileInput,
      MessageUncheckedCreateWithoutProfileInput
    >;
  };

  export type MessageCreateManyProfileInputEnvelope = {
    data: MessageCreateManyProfileInput | MessageCreateManyProfileInput[];
    skipDuplicates?: boolean;
  };

  export type TagCreateWithoutProfilesInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: TagGroupCreateNestedOneWithoutTagsInput;
    assistedEvent?: EventCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUncheckedCreateWithoutProfilesInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventUncheckedCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventUncheckedCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountUncheckedCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagCreateOrConnectWithoutProfilesInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutProfilesInput,
      TagUncheckedCreateWithoutProfilesInput
    >;
  };

  export type LocationCreateWithoutBirthProfilesInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    residenceProfiles?: ProfileCreateNestedManyWithoutResidenceLocationInput;
  };

  export type LocationUncheckedCreateWithoutBirthProfilesInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    residenceProfiles?: ProfileUncheckedCreateNestedManyWithoutResidenceLocationInput;
  };

  export type LocationCreateOrConnectWithoutBirthProfilesInput = {
    where: LocationWhereUniqueInput;
    create: XOR<
      LocationCreateWithoutBirthProfilesInput,
      LocationUncheckedCreateWithoutBirthProfilesInput
    >;
  };

  export type LocationCreateWithoutResidenceProfilesInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    birthProfiles?: ProfileCreateNestedManyWithoutBirthLocationInput;
  };

  export type LocationUncheckedCreateWithoutResidenceProfilesInput = {
    latitude: number;
    longitude: number;
    country: string;
    province: string;
    city: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    birthProfiles?: ProfileUncheckedCreateNestedManyWithoutBirthLocationInput;
  };

  export type LocationCreateOrConnectWithoutResidenceProfilesInput = {
    where: LocationWhereUniqueInput;
    create: XOR<
      LocationCreateWithoutResidenceProfilesInput,
      LocationUncheckedCreateWithoutResidenceProfilesInput
    >;
  };

  export type CommentUpsertWithWhereUniqueWithoutProfileInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutProfileInput,
      CommentUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      CommentCreateWithoutProfileInput,
      CommentUncheckedCreateWithoutProfileInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutProfileInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutProfileInput,
      CommentUncheckedUpdateWithoutProfileInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutProfileInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutProfileInput
    >;
  };

  export type MessageUpsertWithWhereUniqueWithoutProfileInput = {
    where: MessageWhereUniqueInput;
    update: XOR<
      MessageUpdateWithoutProfileInput,
      MessageUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      MessageCreateWithoutProfileInput,
      MessageUncheckedCreateWithoutProfileInput
    >;
  };

  export type MessageUpdateWithWhereUniqueWithoutProfileInput = {
    where: MessageWhereUniqueInput;
    data: XOR<
      MessageUpdateWithoutProfileInput,
      MessageUncheckedUpdateWithoutProfileInput
    >;
  };

  export type MessageUpdateManyWithWhereWithoutProfileInput = {
    where: MessageScalarWhereInput;
    data: XOR<
      MessageUpdateManyMutationInput,
      MessageUncheckedUpdateManyWithoutProfileInput
    >;
  };

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[];
    OR?: MessageScalarWhereInput[];
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[];
    id?: StringFilter<'Message'> | string;
    wamId?: StringFilter<'Message'> | string;
    message?: JsonFilter<'Message'>;
    profilePhoneNumber?: StringFilter<'Message'> | string;
    state?: EnumMessageStateFilter<'Message'> | $Enums.MessageState;
    created_at?: DateTimeFilter<'Message'> | Date | string;
    updated_at?: DateTimeFilter<'Message'> | Date | string;
  };

  export type TagUpsertWithWhereUniqueWithoutProfilesInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutProfilesInput,
      TagUncheckedUpdateWithoutProfilesInput
    >;
    create: XOR<
      TagCreateWithoutProfilesInput,
      TagUncheckedCreateWithoutProfilesInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutProfilesInput = {
    where: TagWhereUniqueInput;
    data: XOR<
      TagUpdateWithoutProfilesInput,
      TagUncheckedUpdateWithoutProfilesInput
    >;
  };

  export type TagUpdateManyWithWhereWithoutProfilesInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutProfilesInput
    >;
  };

  export type LocationUpsertWithoutBirthProfilesInput = {
    update: XOR<
      LocationUpdateWithoutBirthProfilesInput,
      LocationUncheckedUpdateWithoutBirthProfilesInput
    >;
    create: XOR<
      LocationCreateWithoutBirthProfilesInput,
      LocationUncheckedCreateWithoutBirthProfilesInput
    >;
    where?: LocationWhereInput;
  };

  export type LocationUpdateToOneWithWhereWithoutBirthProfilesInput = {
    where?: LocationWhereInput;
    data: XOR<
      LocationUpdateWithoutBirthProfilesInput,
      LocationUncheckedUpdateWithoutBirthProfilesInput
    >;
  };

  export type LocationUpdateWithoutBirthProfilesInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    residenceProfiles?: ProfileUpdateManyWithoutResidenceLocationNestedInput;
  };

  export type LocationUncheckedUpdateWithoutBirthProfilesInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    residenceProfiles?: ProfileUncheckedUpdateManyWithoutResidenceLocationNestedInput;
  };

  export type LocationUpsertWithoutResidenceProfilesInput = {
    update: XOR<
      LocationUpdateWithoutResidenceProfilesInput,
      LocationUncheckedUpdateWithoutResidenceProfilesInput
    >;
    create: XOR<
      LocationCreateWithoutResidenceProfilesInput,
      LocationUncheckedCreateWithoutResidenceProfilesInput
    >;
    where?: LocationWhereInput;
  };

  export type LocationUpdateToOneWithWhereWithoutResidenceProfilesInput = {
    where?: LocationWhereInput;
    data: XOR<
      LocationUpdateWithoutResidenceProfilesInput,
      LocationUncheckedUpdateWithoutResidenceProfilesInput
    >;
  };

  export type LocationUpdateWithoutResidenceProfilesInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    birthProfiles?: ProfileUpdateManyWithoutBirthLocationNestedInput;
  };

  export type LocationUncheckedUpdateWithoutResidenceProfilesInput = {
    latitude?: FloatFieldUpdateOperationsInput | number;
    longitude?: FloatFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    province?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    birthProfiles?: ProfileUncheckedUpdateManyWithoutBirthLocationNestedInput;
  };

  export type ProfileCreateWithoutBirthLocationInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutProfileInput;
    messages?: MessageCreateNestedManyWithoutProfileInput;
    tags?: TagCreateNestedManyWithoutProfilesInput;
    residenceLocation?: LocationCreateNestedOneWithoutResidenceProfilesInput;
  };

  export type ProfileUncheckedCreateWithoutBirthLocationInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput;
    messages?: MessageUncheckedCreateNestedManyWithoutProfileInput;
    tags?: TagUncheckedCreateNestedManyWithoutProfilesInput;
  };

  export type ProfileCreateOrConnectWithoutBirthLocationInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutBirthLocationInput,
      ProfileUncheckedCreateWithoutBirthLocationInput
    >;
  };

  export type ProfileCreateManyBirthLocationInputEnvelope = {
    data:
      | ProfileCreateManyBirthLocationInput
      | ProfileCreateManyBirthLocationInput[];
    skipDuplicates?: boolean;
  };

  export type ProfileCreateWithoutResidenceLocationInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutProfileInput;
    messages?: MessageCreateNestedManyWithoutProfileInput;
    tags?: TagCreateNestedManyWithoutProfilesInput;
    birthLocation?: LocationCreateNestedOneWithoutBirthProfilesInput;
  };

  export type ProfileUncheckedCreateWithoutResidenceLocationInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput;
    messages?: MessageUncheckedCreateNestedManyWithoutProfileInput;
    tags?: TagUncheckedCreateNestedManyWithoutProfilesInput;
  };

  export type ProfileCreateOrConnectWithoutResidenceLocationInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutResidenceLocationInput,
      ProfileUncheckedCreateWithoutResidenceLocationInput
    >;
  };

  export type ProfileCreateManyResidenceLocationInputEnvelope = {
    data:
      | ProfileCreateManyResidenceLocationInput
      | ProfileCreateManyResidenceLocationInput[];
    skipDuplicates?: boolean;
  };

  export type ProfileUpsertWithWhereUniqueWithoutBirthLocationInput = {
    where: ProfileWhereUniqueInput;
    update: XOR<
      ProfileUpdateWithoutBirthLocationInput,
      ProfileUncheckedUpdateWithoutBirthLocationInput
    >;
    create: XOR<
      ProfileCreateWithoutBirthLocationInput,
      ProfileUncheckedCreateWithoutBirthLocationInput
    >;
  };

  export type ProfileUpdateWithWhereUniqueWithoutBirthLocationInput = {
    where: ProfileWhereUniqueInput;
    data: XOR<
      ProfileUpdateWithoutBirthLocationInput,
      ProfileUncheckedUpdateWithoutBirthLocationInput
    >;
  };

  export type ProfileUpdateManyWithWhereWithoutBirthLocationInput = {
    where: ProfileScalarWhereInput;
    data: XOR<
      ProfileUpdateManyMutationInput,
      ProfileUncheckedUpdateManyWithoutBirthLocationInput
    >;
  };

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
    OR?: ProfileScalarWhereInput[];
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[];
    id?: StringFilter<'Profile'> | string;
    shortId?: IntFilter<'Profile'> | number;
    phoneNumber?: StringFilter<'Profile'> | string;
    secondaryPhoneNumber?: StringNullableFilter<'Profile'> | string | null;
    fullName?: StringFilter<'Profile'> | string;
    fistName?: StringNullableFilter<'Profile'> | string | null;
    gender?: StringNullableFilter<'Profile'> | string | null;
    birthDate?: DateTimeNullableFilter<'Profile'> | Date | string | null;
    profilePictureUrl?: StringNullableFilter<'Profile'> | string | null;
    instagram?: StringNullableFilter<'Profile'> | string | null;
    mail?: StringNullableFilter<'Profile'> | string | null;
    dni?: StringNullableFilter<'Profile'> | string | null;
    alternativeNames?: StringNullableListFilter<'Profile'>;
    birthLongitude?: FloatNullableFilter<'Profile'> | number | null;
    birthLatitude?: FloatNullableFilter<'Profile'> | number | null;
    residenceLongitude?: FloatNullableFilter<'Profile'> | number | null;
    residenceLatitude?: FloatNullableFilter<'Profile'> | number | null;
    isInTrash?: BoolFilter<'Profile'> | boolean;
    movedToTrashDate?: DateTimeNullableFilter<'Profile'> | Date | string | null;
    created_at?: DateTimeFilter<'Profile'> | Date | string;
    updated_at?: DateTimeFilter<'Profile'> | Date | string;
  };

  export type ProfileUpsertWithWhereUniqueWithoutResidenceLocationInput = {
    where: ProfileWhereUniqueInput;
    update: XOR<
      ProfileUpdateWithoutResidenceLocationInput,
      ProfileUncheckedUpdateWithoutResidenceLocationInput
    >;
    create: XOR<
      ProfileCreateWithoutResidenceLocationInput,
      ProfileUncheckedCreateWithoutResidenceLocationInput
    >;
  };

  export type ProfileUpdateWithWhereUniqueWithoutResidenceLocationInput = {
    where: ProfileWhereUniqueInput;
    data: XOR<
      ProfileUpdateWithoutResidenceLocationInput,
      ProfileUncheckedUpdateWithoutResidenceLocationInput
    >;
  };

  export type ProfileUpdateManyWithWhereWithoutResidenceLocationInput = {
    where: ProfileScalarWhereInput;
    data: XOR<
      ProfileUpdateManyMutationInput,
      ProfileUncheckedUpdateManyWithoutResidenceLocationInput
    >;
  };

  export type AccountCreateWithoutCommentsInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    solvableComments?: CommentCreateNestedManyWithoutSolvedByInput;
    tags?: TagCreateNestedManyWithoutAccountsInput;
    globalFilter?: TagCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountUncheckedCreateWithoutCommentsInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    solvableComments?: CommentUncheckedCreateNestedManyWithoutSolvedByInput;
    tags?: TagUncheckedCreateNestedManyWithoutAccountsInput;
    globalFilter?: TagUncheckedCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountCreateOrConnectWithoutCommentsInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutCommentsInput,
      AccountUncheckedCreateWithoutCommentsInput
    >;
  };

  export type ProfileCreateWithoutCommentsInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    messages?: MessageCreateNestedManyWithoutProfileInput;
    tags?: TagCreateNestedManyWithoutProfilesInput;
    birthLocation?: LocationCreateNestedOneWithoutBirthProfilesInput;
    residenceLocation?: LocationCreateNestedOneWithoutResidenceProfilesInput;
  };

  export type ProfileUncheckedCreateWithoutCommentsInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    messages?: MessageUncheckedCreateNestedManyWithoutProfileInput;
    tags?: TagUncheckedCreateNestedManyWithoutProfilesInput;
  };

  export type ProfileCreateOrConnectWithoutCommentsInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutCommentsInput,
      ProfileUncheckedCreateWithoutCommentsInput
    >;
  };

  export type AccountCreateWithoutSolvableCommentsInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutAccountInput;
    tags?: TagCreateNestedManyWithoutAccountsInput;
    globalFilter?: TagCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountUncheckedCreateWithoutSolvableCommentsInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput;
    tags?: TagUncheckedCreateNestedManyWithoutAccountsInput;
    globalFilter?: TagUncheckedCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountCreateOrConnectWithoutSolvableCommentsInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutSolvableCommentsInput,
      AccountUncheckedCreateWithoutSolvableCommentsInput
    >;
  };

  export type AccountUpsertWithoutCommentsInput = {
    update: XOR<
      AccountUpdateWithoutCommentsInput,
      AccountUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      AccountCreateWithoutCommentsInput,
      AccountUncheckedCreateWithoutCommentsInput
    >;
    where?: AccountWhereInput;
  };

  export type AccountUpdateToOneWithWhereWithoutCommentsInput = {
    where?: AccountWhereInput;
    data: XOR<
      AccountUpdateWithoutCommentsInput,
      AccountUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type AccountUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    solvableComments?: CommentUpdateManyWithoutSolvedByNestedInput;
    tags?: TagUpdateManyWithoutAccountsNestedInput;
    globalFilter?: TagUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type AccountUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    solvableComments?: CommentUncheckedUpdateManyWithoutSolvedByNestedInput;
    tags?: TagUncheckedUpdateManyWithoutAccountsNestedInput;
    globalFilter?: TagUncheckedUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type ProfileUpsertWithoutCommentsInput = {
    update: XOR<
      ProfileUpdateWithoutCommentsInput,
      ProfileUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      ProfileCreateWithoutCommentsInput,
      ProfileUncheckedCreateWithoutCommentsInput
    >;
    where?: ProfileWhereInput;
  };

  export type ProfileUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProfileWhereInput;
    data: XOR<
      ProfileUpdateWithoutCommentsInput,
      ProfileUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type ProfileUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUpdateManyWithoutProfileNestedInput;
    tags?: TagUpdateManyWithoutProfilesNestedInput;
    birthLocation?: LocationUpdateOneWithoutBirthProfilesNestedInput;
    residenceLocation?: LocationUpdateOneWithoutResidenceProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: MessageUncheckedUpdateManyWithoutProfileNestedInput;
    tags?: TagUncheckedUpdateManyWithoutProfilesNestedInput;
  };

  export type AccountUpsertWithoutSolvableCommentsInput = {
    update: XOR<
      AccountUpdateWithoutSolvableCommentsInput,
      AccountUncheckedUpdateWithoutSolvableCommentsInput
    >;
    create: XOR<
      AccountCreateWithoutSolvableCommentsInput,
      AccountUncheckedCreateWithoutSolvableCommentsInput
    >;
    where?: AccountWhereInput;
  };

  export type AccountUpdateToOneWithWhereWithoutSolvableCommentsInput = {
    where?: AccountWhereInput;
    data: XOR<
      AccountUpdateWithoutSolvableCommentsInput,
      AccountUncheckedUpdateWithoutSolvableCommentsInput
    >;
  };

  export type AccountUpdateWithoutSolvableCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutAccountNestedInput;
    tags?: TagUpdateManyWithoutAccountsNestedInput;
    globalFilter?: TagUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type AccountUncheckedUpdateWithoutSolvableCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput;
    tags?: TagUncheckedUpdateManyWithoutAccountsNestedInput;
    globalFilter?: TagUncheckedUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type TagGroupCreateWithoutTagsInput = {
    id?: string;
    name: string;
    color: string;
    isExclusive: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TagGroupUncheckedCreateWithoutTagsInput = {
    id?: string;
    name: string;
    color: string;
    isExclusive: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TagGroupCreateOrConnectWithoutTagsInput = {
    where: TagGroupWhereUniqueInput;
    create: XOR<
      TagGroupCreateWithoutTagsInput,
      TagGroupUncheckedCreateWithoutTagsInput
    >;
  };

  export type EventCreateWithoutTagAssistedInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    folder?: EventFolderCreateNestedOneWithoutEventsInput;
    tagConfirmed: TagCreateNestedOneWithoutConfirmedEventInput;
    supraEvent?: EventCreateNestedOneWithoutSubEventsInput;
    subEvents?: EventCreateNestedManyWithoutSupraEventInput;
  };

  export type EventUncheckedCreateWithoutTagAssistedInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagConfirmedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEvents?: EventUncheckedCreateNestedManyWithoutSupraEventInput;
  };

  export type EventCreateOrConnectWithoutTagAssistedInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutTagAssistedInput,
      EventUncheckedCreateWithoutTagAssistedInput
    >;
  };

  export type EventCreateWithoutTagConfirmedInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    folder?: EventFolderCreateNestedOneWithoutEventsInput;
    tagAssisted: TagCreateNestedOneWithoutAssistedEventInput;
    supraEvent?: EventCreateNestedOneWithoutSubEventsInput;
    subEvents?: EventCreateNestedManyWithoutSupraEventInput;
  };

  export type EventUncheckedCreateWithoutTagConfirmedInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagAssistedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEvents?: EventUncheckedCreateNestedManyWithoutSupraEventInput;
  };

  export type EventCreateOrConnectWithoutTagConfirmedInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutTagConfirmedInput,
      EventUncheckedCreateWithoutTagConfirmedInput
    >;
  };

  export type AccountCreateWithoutTagsInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutAccountInput;
    solvableComments?: CommentCreateNestedManyWithoutSolvedByInput;
    globalFilter?: TagCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountUncheckedCreateWithoutTagsInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput;
    solvableComments?: CommentUncheckedCreateNestedManyWithoutSolvedByInput;
    globalFilter?: TagUncheckedCreateNestedManyWithoutAccountsGlobalFilterInput;
  };

  export type AccountCreateOrConnectWithoutTagsInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutTagsInput,
      AccountUncheckedCreateWithoutTagsInput
    >;
  };

  export type ProfileCreateWithoutTagsInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutProfileInput;
    messages?: MessageCreateNestedManyWithoutProfileInput;
    birthLocation?: LocationCreateNestedOneWithoutBirthProfilesInput;
    residenceLocation?: LocationCreateNestedOneWithoutResidenceProfilesInput;
  };

  export type ProfileUncheckedCreateWithoutTagsInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput;
    messages?: MessageUncheckedCreateNestedManyWithoutProfileInput;
  };

  export type ProfileCreateOrConnectWithoutTagsInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutTagsInput,
      ProfileUncheckedCreateWithoutTagsInput
    >;
  };

  export type AccountCreateWithoutGlobalFilterInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutAccountInput;
    solvableComments?: CommentCreateNestedManyWithoutSolvedByInput;
    tags?: TagCreateNestedManyWithoutAccountsInput;
  };

  export type AccountUncheckedCreateWithoutGlobalFilterInput = {
    id?: string;
    username: string;
    password: string;
    role?: $Enums.Role;
    isGlobalFilterActive?: boolean;
    fcmToken?: AccountCreatefcmTokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput;
    solvableComments?: CommentUncheckedCreateNestedManyWithoutSolvedByInput;
    tags?: TagUncheckedCreateNestedManyWithoutAccountsInput;
  };

  export type AccountCreateOrConnectWithoutGlobalFilterInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutGlobalFilterInput,
      AccountUncheckedCreateWithoutGlobalFilterInput
    >;
  };

  export type TagGroupUpsertWithoutTagsInput = {
    update: XOR<
      TagGroupUpdateWithoutTagsInput,
      TagGroupUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      TagGroupCreateWithoutTagsInput,
      TagGroupUncheckedCreateWithoutTagsInput
    >;
    where?: TagGroupWhereInput;
  };

  export type TagGroupUpdateToOneWithWhereWithoutTagsInput = {
    where?: TagGroupWhereInput;
    data: XOR<
      TagGroupUpdateWithoutTagsInput,
      TagGroupUncheckedUpdateWithoutTagsInput
    >;
  };

  export type TagGroupUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    isExclusive?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagGroupUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    isExclusive?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUpsertWithoutTagAssistedInput = {
    update: XOR<
      EventUpdateWithoutTagAssistedInput,
      EventUncheckedUpdateWithoutTagAssistedInput
    >;
    create: XOR<
      EventCreateWithoutTagAssistedInput,
      EventUncheckedCreateWithoutTagAssistedInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutTagAssistedInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutTagAssistedInput,
      EventUncheckedUpdateWithoutTagAssistedInput
    >;
  };

  export type EventUpdateWithoutTagAssistedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: EventFolderUpdateOneWithoutEventsNestedInput;
    tagConfirmed?: TagUpdateOneRequiredWithoutConfirmedEventNestedInput;
    supraEvent?: EventUpdateOneWithoutSubEventsNestedInput;
    subEvents?: EventUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutTagAssistedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEvents?: EventUncheckedUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUpsertWithoutTagConfirmedInput = {
    update: XOR<
      EventUpdateWithoutTagConfirmedInput,
      EventUncheckedUpdateWithoutTagConfirmedInput
    >;
    create: XOR<
      EventCreateWithoutTagConfirmedInput,
      EventUncheckedCreateWithoutTagConfirmedInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutTagConfirmedInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutTagConfirmedInput,
      EventUncheckedUpdateWithoutTagConfirmedInput
    >;
  };

  export type EventUpdateWithoutTagConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: EventFolderUpdateOneWithoutEventsNestedInput;
    tagAssisted?: TagUpdateOneRequiredWithoutAssistedEventNestedInput;
    supraEvent?: EventUpdateOneWithoutSubEventsNestedInput;
    subEvents?: EventUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutTagConfirmedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEvents?: EventUncheckedUpdateManyWithoutSupraEventNestedInput;
  };

  export type AccountUpsertWithWhereUniqueWithoutTagsInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutTagsInput,
      AccountUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      AccountCreateWithoutTagsInput,
      AccountUncheckedCreateWithoutTagsInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutTagsInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutTagsInput,
      AccountUncheckedUpdateWithoutTagsInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutTagsInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutTagsInput
    >;
  };

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[];
    OR?: AccountScalarWhereInput[];
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[];
    id?: StringFilter<'Account'> | string;
    username?: StringFilter<'Account'> | string;
    password?: StringFilter<'Account'> | string;
    role?: EnumRoleFilter<'Account'> | $Enums.Role;
    isGlobalFilterActive?: BoolFilter<'Account'> | boolean;
    fcmToken?: StringNullableListFilter<'Account'>;
    created_at?: DateTimeFilter<'Account'> | Date | string;
    updated_at?: DateTimeFilter<'Account'> | Date | string;
  };

  export type ProfileUpsertWithWhereUniqueWithoutTagsInput = {
    where: ProfileWhereUniqueInput;
    update: XOR<
      ProfileUpdateWithoutTagsInput,
      ProfileUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      ProfileCreateWithoutTagsInput,
      ProfileUncheckedCreateWithoutTagsInput
    >;
  };

  export type ProfileUpdateWithWhereUniqueWithoutTagsInput = {
    where: ProfileWhereUniqueInput;
    data: XOR<
      ProfileUpdateWithoutTagsInput,
      ProfileUncheckedUpdateWithoutTagsInput
    >;
  };

  export type ProfileUpdateManyWithWhereWithoutTagsInput = {
    where: ProfileScalarWhereInput;
    data: XOR<
      ProfileUpdateManyMutationInput,
      ProfileUncheckedUpdateManyWithoutTagsInput
    >;
  };

  export type AccountUpsertWithWhereUniqueWithoutGlobalFilterInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutGlobalFilterInput,
      AccountUncheckedUpdateWithoutGlobalFilterInput
    >;
    create: XOR<
      AccountCreateWithoutGlobalFilterInput,
      AccountUncheckedCreateWithoutGlobalFilterInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutGlobalFilterInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutGlobalFilterInput,
      AccountUncheckedUpdateWithoutGlobalFilterInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutGlobalFilterInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutGlobalFilterInput
    >;
  };

  export type TagCreateWithoutGroupInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountCreateNestedManyWithoutTagsInput;
    profiles?: ProfileCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUncheckedCreateWithoutGroupInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventUncheckedCreateNestedOneWithoutTagAssistedInput;
    confirmedEvent?: EventUncheckedCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutTagsInput;
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountUncheckedCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagCreateOrConnectWithoutGroupInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutGroupInput,
      TagUncheckedCreateWithoutGroupInput
    >;
  };

  export type TagCreateManyGroupInputEnvelope = {
    data: TagCreateManyGroupInput | TagCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type TagUpsertWithWhereUniqueWithoutGroupInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutGroupInput,
      TagUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      TagCreateWithoutGroupInput,
      TagUncheckedCreateWithoutGroupInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutGroupInput = {
    where: TagWhereUniqueInput;
    data: XOR<TagUpdateWithoutGroupInput, TagUncheckedUpdateWithoutGroupInput>;
  };

  export type TagUpdateManyWithWhereWithoutGroupInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutGroupInput
    >;
  };

  export type EventFolderCreateWithoutEventsInput = {
    id?: string;
    name: string;
    color: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventFolderUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    color: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventFolderCreateOrConnectWithoutEventsInput = {
    where: EventFolderWhereUniqueInput;
    create: XOR<
      EventFolderCreateWithoutEventsInput,
      EventFolderUncheckedCreateWithoutEventsInput
    >;
  };

  export type TagCreateWithoutAssistedEventInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: TagGroupCreateNestedOneWithoutTagsInput;
    confirmedEvent?: EventCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountCreateNestedManyWithoutTagsInput;
    profiles?: ProfileCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUncheckedCreateWithoutAssistedEventInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    confirmedEvent?: EventUncheckedCreateNestedOneWithoutTagConfirmedInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutTagsInput;
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountUncheckedCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagCreateOrConnectWithoutAssistedEventInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutAssistedEventInput,
      TagUncheckedCreateWithoutAssistedEventInput
    >;
  };

  export type TagCreateWithoutConfirmedEventInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: TagGroupCreateNestedOneWithoutTagsInput;
    assistedEvent?: EventCreateNestedOneWithoutTagAssistedInput;
    accounts?: AccountCreateNestedManyWithoutTagsInput;
    profiles?: ProfileCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagUncheckedCreateWithoutConfirmedEventInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    groupId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assistedEvent?: EventUncheckedCreateNestedOneWithoutTagAssistedInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutTagsInput;
    profiles?: ProfileUncheckedCreateNestedManyWithoutTagsInput;
    accountsGlobalFilter?: AccountUncheckedCreateNestedManyWithoutGlobalFilterInput;
  };

  export type TagCreateOrConnectWithoutConfirmedEventInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutConfirmedEventInput,
      TagUncheckedCreateWithoutConfirmedEventInput
    >;
  };

  export type EventCreateWithoutSubEventsInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    folder?: EventFolderCreateNestedOneWithoutEventsInput;
    tagAssisted: TagCreateNestedOneWithoutAssistedEventInput;
    tagConfirmed: TagCreateNestedOneWithoutConfirmedEventInput;
    supraEvent?: EventCreateNestedOneWithoutSubEventsInput;
  };

  export type EventUncheckedCreateWithoutSubEventsInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagAssistedId: string;
    tagConfirmedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventCreateOrConnectWithoutSubEventsInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutSubEventsInput,
      EventUncheckedCreateWithoutSubEventsInput
    >;
  };

  export type EventCreateWithoutSupraEventInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    folder?: EventFolderCreateNestedOneWithoutEventsInput;
    tagAssisted: TagCreateNestedOneWithoutAssistedEventInput;
    tagConfirmed: TagCreateNestedOneWithoutConfirmedEventInput;
    subEvents?: EventCreateNestedManyWithoutSupraEventInput;
  };

  export type EventUncheckedCreateWithoutSupraEventInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagAssistedId: string;
    tagConfirmedId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEvents?: EventUncheckedCreateNestedManyWithoutSupraEventInput;
  };

  export type EventCreateOrConnectWithoutSupraEventInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutSupraEventInput,
      EventUncheckedCreateWithoutSupraEventInput
    >;
  };

  export type EventCreateManySupraEventInputEnvelope = {
    data: EventCreateManySupraEventInput | EventCreateManySupraEventInput[];
    skipDuplicates?: boolean;
  };

  export type EventFolderUpsertWithoutEventsInput = {
    update: XOR<
      EventFolderUpdateWithoutEventsInput,
      EventFolderUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      EventFolderCreateWithoutEventsInput,
      EventFolderUncheckedCreateWithoutEventsInput
    >;
    where?: EventFolderWhereInput;
  };

  export type EventFolderUpdateToOneWithWhereWithoutEventsInput = {
    where?: EventFolderWhereInput;
    data: XOR<
      EventFolderUpdateWithoutEventsInput,
      EventFolderUncheckedUpdateWithoutEventsInput
    >;
  };

  export type EventFolderUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventFolderUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUpsertWithoutAssistedEventInput = {
    update: XOR<
      TagUpdateWithoutAssistedEventInput,
      TagUncheckedUpdateWithoutAssistedEventInput
    >;
    create: XOR<
      TagCreateWithoutAssistedEventInput,
      TagUncheckedCreateWithoutAssistedEventInput
    >;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutAssistedEventInput = {
    where?: TagWhereInput;
    data: XOR<
      TagUpdateWithoutAssistedEventInput,
      TagUncheckedUpdateWithoutAssistedEventInput
    >;
  };

  export type TagUpdateWithoutAssistedEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: TagGroupUpdateOneRequiredWithoutTagsNestedInput;
    confirmedEvent?: EventUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateWithoutAssistedEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedEvent?: EventUncheckedUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUncheckedUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUpsertWithoutConfirmedEventInput = {
    update: XOR<
      TagUpdateWithoutConfirmedEventInput,
      TagUncheckedUpdateWithoutConfirmedEventInput
    >;
    create: XOR<
      TagCreateWithoutConfirmedEventInput,
      TagUncheckedCreateWithoutConfirmedEventInput
    >;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutConfirmedEventInput = {
    where?: TagWhereInput;
    data: XOR<
      TagUpdateWithoutConfirmedEventInput,
      TagUncheckedUpdateWithoutConfirmedEventInput
    >;
  };

  export type TagUpdateWithoutConfirmedEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: TagGroupUpdateOneRequiredWithoutTagsNestedInput;
    assistedEvent?: EventUpdateOneWithoutTagAssistedNestedInput;
    accounts?: AccountUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateWithoutConfirmedEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUncheckedUpdateOneWithoutTagAssistedNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUncheckedUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type EventUpsertWithoutSubEventsInput = {
    update: XOR<
      EventUpdateWithoutSubEventsInput,
      EventUncheckedUpdateWithoutSubEventsInput
    >;
    create: XOR<
      EventCreateWithoutSubEventsInput,
      EventUncheckedCreateWithoutSubEventsInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutSubEventsInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutSubEventsInput,
      EventUncheckedUpdateWithoutSubEventsInput
    >;
  };

  export type EventUpdateWithoutSubEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: EventFolderUpdateOneWithoutEventsNestedInput;
    tagAssisted?: TagUpdateOneRequiredWithoutAssistedEventNestedInput;
    tagConfirmed?: TagUpdateOneRequiredWithoutConfirmedEventNestedInput;
    supraEvent?: EventUpdateOneWithoutSubEventsNestedInput;
  };

  export type EventUncheckedUpdateWithoutSubEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUpsertWithWhereUniqueWithoutSupraEventInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutSupraEventInput,
      EventUncheckedUpdateWithoutSupraEventInput
    >;
    create: XOR<
      EventCreateWithoutSupraEventInput,
      EventUncheckedCreateWithoutSupraEventInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutSupraEventInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutSupraEventInput,
      EventUncheckedUpdateWithoutSupraEventInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutSupraEventInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutSupraEventInput
    >;
  };

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[];
    OR?: EventScalarWhereInput[];
    NOT?: EventScalarWhereInput | EventScalarWhereInput[];
    id?: StringFilter<'Event'> | string;
    name?: StringFilter<'Event'> | string;
    date?: DateTimeFilter<'Event'> | Date | string;
    location?: StringFilter<'Event'> | string;
    folderId?: StringNullableFilter<'Event'> | string | null;
    tagAssistedId?: StringFilter<'Event'> | string;
    tagConfirmedId?: StringFilter<'Event'> | string;
    supraEventId?: StringNullableFilter<'Event'> | string | null;
    created_at?: DateTimeFilter<'Event'> | Date | string;
    updated_at?: DateTimeFilter<'Event'> | Date | string;
  };

  export type EventCreateWithoutFolderInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tagAssisted: TagCreateNestedOneWithoutAssistedEventInput;
    tagConfirmed: TagCreateNestedOneWithoutConfirmedEventInput;
    supraEvent?: EventCreateNestedOneWithoutSubEventsInput;
    subEvents?: EventCreateNestedManyWithoutSupraEventInput;
  };

  export type EventUncheckedCreateWithoutFolderInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    tagAssistedId: string;
    tagConfirmedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subEvents?: EventUncheckedCreateNestedManyWithoutSupraEventInput;
  };

  export type EventCreateOrConnectWithoutFolderInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutFolderInput,
      EventUncheckedCreateWithoutFolderInput
    >;
  };

  export type EventCreateManyFolderInputEnvelope = {
    data: EventCreateManyFolderInput | EventCreateManyFolderInput[];
    skipDuplicates?: boolean;
  };

  export type EventUpsertWithWhereUniqueWithoutFolderInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutFolderInput,
      EventUncheckedUpdateWithoutFolderInput
    >;
    create: XOR<
      EventCreateWithoutFolderInput,
      EventUncheckedCreateWithoutFolderInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutFolderInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutFolderInput,
      EventUncheckedUpdateWithoutFolderInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutFolderInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutFolderInput
    >;
  };

  export type ProfileCreateWithoutMessagesInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentCreateNestedManyWithoutProfileInput;
    tags?: TagCreateNestedManyWithoutProfilesInput;
    birthLocation?: LocationCreateNestedOneWithoutBirthProfilesInput;
    residenceLocation?: LocationCreateNestedOneWithoutResidenceProfilesInput;
  };

  export type ProfileUncheckedCreateWithoutMessagesInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutProfileInput;
    tags?: TagUncheckedCreateNestedManyWithoutProfilesInput;
  };

  export type ProfileCreateOrConnectWithoutMessagesInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutMessagesInput,
      ProfileUncheckedCreateWithoutMessagesInput
    >;
  };

  export type ProfileUpsertWithoutMessagesInput = {
    update: XOR<
      ProfileUpdateWithoutMessagesInput,
      ProfileUncheckedUpdateWithoutMessagesInput
    >;
    create: XOR<
      ProfileCreateWithoutMessagesInput,
      ProfileUncheckedCreateWithoutMessagesInput
    >;
    where?: ProfileWhereInput;
  };

  export type ProfileUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ProfileWhereInput;
    data: XOR<
      ProfileUpdateWithoutMessagesInput,
      ProfileUncheckedUpdateWithoutMessagesInput
    >;
  };

  export type ProfileUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutProfileNestedInput;
    tags?: TagUpdateManyWithoutProfilesNestedInput;
    birthLocation?: LocationUpdateOneWithoutBirthProfilesNestedInput;
    residenceLocation?: LocationUpdateOneWithoutResidenceProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput;
    tags?: TagUncheckedUpdateManyWithoutProfilesNestedInput;
  };

  export type CommentCreateManyAccountInput = {
    id?: string;
    content: string;
    profileId: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    solvedById?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentCreateManySolvedByInput = {
    id?: string;
    content: string;
    createdBy: string;
    profileId: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneRequiredWithoutCommentsNestedInput;
    solvedBy?: AccountUpdateOneWithoutSolvableCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    profileId?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    solvedById?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    profileId?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    solvedById?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneRequiredWithoutCommentsNestedInput;
    profile?: ProfileUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdBy?: StringFieldUpdateOperationsInput | string;
    profileId?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdBy?: StringFieldUpdateOperationsInput | string;
    profileId?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: TagGroupUpdateOneRequiredWithoutTagsNestedInput;
    assistedEvent?: EventUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUpdateOneWithoutTagConfirmedNestedInput;
    profiles?: ProfileUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUncheckedUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUncheckedUpdateOneWithoutTagConfirmedNestedInput;
    profiles?: ProfileUncheckedUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUpdateWithoutAccountsGlobalFilterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: TagGroupUpdateOneRequiredWithoutTagsNestedInput;
    assistedEvent?: EventUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUpdateManyWithoutTagsNestedInput;
  };

  export type TagUncheckedUpdateWithoutAccountsGlobalFilterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUncheckedUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUncheckedUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUncheckedUpdateManyWithoutTagsNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutAccountsGlobalFilterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateManyProfileInput = {
    id?: string;
    content: string;
    createdBy: string;
    isSolvable?: boolean;
    isSolved?: boolean;
    solvedAt?: Date | string | null;
    solvedById?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MessageCreateManyProfileInput = {
    id?: string;
    wamId: string;
    message: JsonNullValueInput | InputJsonValue;
    state?: $Enums.MessageState;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CommentUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: AccountUpdateOneRequiredWithoutCommentsNestedInput;
    solvedBy?: AccountUpdateOneWithoutSolvableCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdBy?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    solvedById?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdBy?: StringFieldUpdateOperationsInput | string;
    isSolvable?: BoolFieldUpdateOperationsInput | boolean;
    isSolved?: BoolFieldUpdateOperationsInput | boolean;
    solvedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    solvedById?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MessageUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    wamId?: StringFieldUpdateOperationsInput | string;
    message?: JsonNullValueInput | InputJsonValue;
    state?: EnumMessageStateFieldUpdateOperationsInput | $Enums.MessageState;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: TagGroupUpdateOneRequiredWithoutTagsNestedInput;
    assistedEvent?: EventUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUncheckedUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUncheckedUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    groupId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileCreateManyBirthLocationInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    residenceLongitude?: number | null;
    residenceLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ProfileCreateManyResidenceLocationInput = {
    id?: string;
    shortId: number;
    phoneNumber: string;
    secondaryPhoneNumber?: string | null;
    fullName: string;
    fistName?: string | null;
    gender?: string | null;
    birthDate?: Date | string | null;
    profilePictureUrl?: string | null;
    instagram?: string | null;
    mail?: string | null;
    dni?: string | null;
    alternativeNames?: ProfileCreatealternativeNamesInput | string[];
    birthLongitude?: number | null;
    birthLatitude?: number | null;
    isInTrash?: boolean;
    movedToTrashDate?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ProfileUpdateWithoutBirthLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutProfileNestedInput;
    messages?: MessageUpdateManyWithoutProfileNestedInput;
    tags?: TagUpdateManyWithoutProfilesNestedInput;
    residenceLocation?: LocationUpdateOneWithoutResidenceProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateWithoutBirthLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutProfileNestedInput;
    tags?: TagUncheckedUpdateManyWithoutProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateManyWithoutBirthLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileUpdateWithoutResidenceLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutProfileNestedInput;
    messages?: MessageUpdateManyWithoutProfileNestedInput;
    tags?: TagUpdateManyWithoutProfilesNestedInput;
    birthLocation?: LocationUpdateOneWithoutBirthProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateWithoutResidenceLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutProfileNestedInput;
    tags?: TagUncheckedUpdateManyWithoutProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateManyWithoutResidenceLocationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutAccountNestedInput;
    solvableComments?: CommentUpdateManyWithoutSolvedByNestedInput;
    globalFilter?: TagUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type AccountUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput;
    solvableComments?: CommentUncheckedUpdateManyWithoutSolvedByNestedInput;
    globalFilter?: TagUncheckedUpdateManyWithoutAccountsGlobalFilterNestedInput;
  };

  export type AccountUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutProfileNestedInput;
    messages?: MessageUpdateManyWithoutProfileNestedInput;
    birthLocation?: LocationUpdateOneWithoutBirthProfilesNestedInput;
    residenceLocation?: LocationUpdateOneWithoutResidenceProfilesNestedInput;
  };

  export type ProfileUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutProfileNestedInput;
    messages?: MessageUncheckedUpdateManyWithoutProfileNestedInput;
  };

  export type ProfileUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    shortId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    fullName?: StringFieldUpdateOperationsInput | string;
    fistName?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profilePictureUrl?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    mail?: NullableStringFieldUpdateOperationsInput | string | null;
    dni?: NullableStringFieldUpdateOperationsInput | string | null;
    alternativeNames?: ProfileUpdatealternativeNamesInput | string[];
    birthLongitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    birthLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    residenceLongitude?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null;
    residenceLatitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    isInTrash?: BoolFieldUpdateOperationsInput | boolean;
    movedToTrashDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUpdateWithoutGlobalFilterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutAccountNestedInput;
    solvableComments?: CommentUpdateManyWithoutSolvedByNestedInput;
    tags?: TagUpdateManyWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateWithoutGlobalFilterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput;
    solvableComments?: CommentUncheckedUpdateManyWithoutSolvedByNestedInput;
    tags?: TagUncheckedUpdateManyWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateManyWithoutGlobalFilterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    isGlobalFilterActive?: BoolFieldUpdateOperationsInput | boolean;
    fcmToken?: AccountUpdatefcmTokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagCreateManyGroupInput = {
    id?: string;
    name: string;
    type?: $Enums.TagType;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TagUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assistedEvent?: EventUncheckedUpdateOneWithoutTagAssistedNestedInput;
    confirmedEvent?: EventUncheckedUpdateOneWithoutTagConfirmedNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutTagsNestedInput;
    profiles?: ProfileUncheckedUpdateManyWithoutTagsNestedInput;
    accountsGlobalFilter?: AccountUncheckedUpdateManyWithoutGlobalFilterNestedInput;
  };

  export type TagUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateManySupraEventInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    folderId?: string | null;
    tagAssistedId: string;
    tagConfirmedId: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventUpdateWithoutSupraEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    folder?: EventFolderUpdateOneWithoutEventsNestedInput;
    tagAssisted?: TagUpdateOneRequiredWithoutAssistedEventNestedInput;
    tagConfirmed?: TagUpdateOneRequiredWithoutConfirmedEventNestedInput;
    subEvents?: EventUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutSupraEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEvents?: EventUncheckedUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateManyWithoutSupraEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    folderId?: NullableStringFieldUpdateOperationsInput | string | null;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateManyFolderInput = {
    id?: string;
    name: string;
    date: Date | string;
    location: string;
    tagAssistedId: string;
    tagConfirmedId: string;
    supraEventId?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type EventUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tagAssisted?: TagUpdateOneRequiredWithoutAssistedEventNestedInput;
    tagConfirmed?: TagUpdateOneRequiredWithoutConfirmedEventNestedInput;
    supraEvent?: EventUpdateOneWithoutSubEventsNestedInput;
    subEvents?: EventUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    subEvents?: EventUncheckedUpdateManyWithoutSupraEventNestedInput;
  };

  export type EventUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    location?: StringFieldUpdateOperationsInput | string;
    tagAssistedId?: StringFieldUpdateOperationsInput | string;
    tagConfirmedId?: StringFieldUpdateOperationsInput | string;
    supraEventId?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AccountCountOutputTypeDefaultArgs instead
   */
  export type AccountCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AccountCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProfileCountOutputTypeDefaultArgs instead
   */
  export type ProfileCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ProfileCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LocationCountOutputTypeDefaultArgs instead
   */
  export type LocationCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = LocationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TagCountOutputTypeDefaultArgs instead
   */
  export type TagCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TagCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TagGroupCountOutputTypeDefaultArgs instead
   */
  export type TagGroupCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TagGroupCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventCountOutputTypeDefaultArgs instead
   */
  export type EventCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EventCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventFolderCountOutputTypeDefaultArgs instead
   */
  export type EventFolderCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EventFolderCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AccountDefaultArgs instead
   */
  export type AccountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AccountDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProfileDefaultArgs instead
   */
  export type ProfileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ProfileDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LocationDefaultArgs instead
   */
  export type LocationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = LocationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CommentDefaultArgs instead
   */
  export type CommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CommentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TagDefaultArgs instead
   */
  export type TagArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TagDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TagGroupDefaultArgs instead
   */
  export type TagGroupArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TagGroupDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventDefaultArgs instead
   */
  export type EventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EventDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventFolderDefaultArgs instead
   */
  export type EventFolderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = EventFolderDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MessageDefaultArgs instead
   */
  export type MessageArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = MessageDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CannedResponseDefaultArgs instead
   */
  export type CannedResponseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CannedResponseDefaultArgs<ExtArgs>;
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
