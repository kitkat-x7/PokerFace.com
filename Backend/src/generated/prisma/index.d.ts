
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model wallet
 * 
 */
export type wallet = $Result.DefaultSelection<Prisma.$walletPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model room
 * 
 */
export type room = $Result.DefaultSelection<Prisma.$roomPayload>
/**
 * Model chat
 * 
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>
/**
 * Model details
 * 
 */
export type details = $Result.DefaultSelection<Prisma.$detailsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const notification_type: {
  Invite: 'Invite',
  Credit: 'Credit',
  Debit: 'Debit',
  General: 'General'
};

export type notification_type = (typeof notification_type)[keyof typeof notification_type]


export const transaction_type: {
  Credit: 'Credit',
  Debit: 'Debit'
};

export type transaction_type = (typeof transaction_type)[keyof typeof transaction_type]


export const room_status: {
  Not_Started: 'Not_Started',
  Live: 'Live',
  Completed: 'Completed',
  Halt: 'Halt'
};

export type room_status = (typeof room_status)[keyof typeof room_status]


export const room_type: {
  Private: 'Private',
  Public: 'Public'
};

export type room_type = (typeof room_type)[keyof typeof room_type]


export const member_type: {
  Shorthand: 'Shorthand',
  Longhand: 'Longhand'
};

export type member_type = (typeof member_type)[keyof typeof member_type]


export const pace: {
  Fast: 'Fast',
  Standard: 'Standard'
};

export type pace = (typeof pace)[keyof typeof pace]


export const room_move: {
  NotStarted: 'NotStarted',
  Dealer: 'Dealer',
  SmallBlind: 'SmallBlind',
  BigBlind: 'BigBlind',
  HoleCards: 'HoleCards',
  PreFlop: 'PreFlop',
  Flop: 'Flop',
  PreTurn: 'PreTurn',
  Turn: 'Turn',
  PreRiver: 'PreRiver',
  River: 'River',
  PreShowdown: 'PreShowdown',
  Showdown: 'Showdown'
};

export type room_move = (typeof room_move)[keyof typeof room_move]


export const player_action: {
  NotStarted: 'NotStarted',
  Fold: 'Fold',
  Check: 'Check',
  Call: 'Call',
  Raise: 'Raise',
  AllIn: 'AllIn'
};

export type player_action = (typeof player_action)[keyof typeof player_action]

}

export type notification_type = $Enums.notification_type

export const notification_type: typeof $Enums.notification_type

export type transaction_type = $Enums.transaction_type

export const transaction_type: typeof $Enums.transaction_type

export type room_status = $Enums.room_status

export const room_status: typeof $Enums.room_status

export type room_type = $Enums.room_type

export const room_type: typeof $Enums.room_type

export type member_type = $Enums.member_type

export const member_type: typeof $Enums.member_type

export type pace = $Enums.pace

export const pace: typeof $Enums.pace

export type room_move = $Enums.room_move

export const room_move: typeof $Enums.room_move

export type player_action = $Enums.player_action

export const player_action: typeof $Enums.player_action

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.walletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.chatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.details`: Exposes CRUD operations for the **details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Details
    * const details = await prisma.details.findMany()
    * ```
    */
  get details(): Prisma.detailsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    wallet: 'wallet',
    notification: 'notification',
    transaction: 'transaction',
    room: 'room',
    chat: 'chat',
    details: 'details'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "wallet" | "notification" | "transaction" | "room" | "chat" | "details"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      wallet: {
        payload: Prisma.$walletPayload<ExtArgs>
        fields: Prisma.walletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          findFirst: {
            args: Prisma.walletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          findMany: {
            args: Prisma.walletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          create: {
            args: Prisma.walletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          createMany: {
            args: Prisma.walletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.walletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          delete: {
            args: Prisma.walletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          update: {
            args: Prisma.walletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          deleteMany: {
            args: Prisma.walletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.walletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          upsert: {
            args: Prisma.walletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.walletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      room: {
        payload: Prisma.$roomPayload<ExtArgs>
        fields: Prisma.roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findFirst: {
            args: Prisma.roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findMany: {
            args: Prisma.roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          create: {
            args: Prisma.roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          createMany: {
            args: Prisma.roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          delete: {
            args: Prisma.roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          update: {
            args: Prisma.roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          deleteMany: {
            args: Prisma.roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          upsert: {
            args: Prisma.roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>
        fields: Prisma.chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      details: {
        payload: Prisma.$detailsPayload<ExtArgs>
        fields: Prisma.detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>
          }
          findFirst: {
            args: Prisma.detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>
          }
          findMany: {
            args: Prisma.detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>[]
          }
          create: {
            args: Prisma.detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>
          }
          createMany: {
            args: Prisma.detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>[]
          }
          delete: {
            args: Prisma.detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>
          }
          update: {
            args: Prisma.detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>
          }
          deleteMany: {
            args: Prisma.detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>[]
          }
          upsert: {
            args: Prisma.detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailsPayload>
          }
          aggregate: {
            args: Prisma.DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetails>
          }
          groupBy: {
            args: Prisma.detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.detailsCountArgs<ExtArgs>
            result: $Utils.Optional<DetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    wallet?: walletOmit
    notification?: notificationOmit
    transaction?: transactionOmit
    room?: roomOmit
    chat?: chatOmit
    details?: detailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notification: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    transaction: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | WalletCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    chat: number
    details: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | RoomCountOutputTypeCountChatArgs
    details?: boolean | RoomCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    wins: number | null
    matches: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    wins: number | null
    matches: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    wins: number | null
    matches: number | null
    status: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    wins: number | null
    matches: number | null
    status: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    wins: number
    matches: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    wins?: true
    matches?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    wins?: true
    matches?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    wins?: true
    matches?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    wins?: true
    matches?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    wins?: true
    matches?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    wins: number
    matches: number
    status: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    wins?: boolean
    matches?: boolean
    status?: boolean
    wallet?: boolean | user$walletArgs<ExtArgs>
    notification?: boolean | user$notificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    wins?: boolean
    matches?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    wins?: boolean
    matches?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    wins?: boolean
    matches?: boolean
    status?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "wins" | "matches" | "status", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | user$walletArgs<ExtArgs>
    notification?: boolean | user$notificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      wallet: Prisma.$walletPayload<ExtArgs> | null
      notification: Prisma.$notificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      wins: number
      matches: number
      status: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends user$walletArgs<ExtArgs> = {}>(args?: Subset<T, user$walletArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notification<T extends user$notificationArgs<ExtArgs> = {}>(args?: Subset<T, user$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly wins: FieldRef<"user", 'Int'>
    readonly matches: FieldRef<"user", 'Int'>
    readonly status: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.wallet
   */
  export type user$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    where?: walletWhereInput
  }

  /**
   * user.notification
   */
  export type user$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    balance: number | null
    userid: number | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    balance: number | null
    userid: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    balance: number | null
    userid: number | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    balance: number | null
    userid: number | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    balance: number
    userid: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    balance?: true
    userid?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    balance?: true
    userid?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    balance?: true
    userid?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    balance?: true
    userid?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    balance?: true
    userid?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet to aggregate.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type walletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletWhereInput
    orderBy?: walletOrderByWithAggregationInput | walletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: walletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: number
    balance: number
    userid: number
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends walletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type walletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    transaction?: boolean | wallet$transactionArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectScalar = {
    id?: boolean
    balance?: boolean
    userid?: boolean
  }

  export type walletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "userid", ExtArgs["result"]["wallet"]>
  export type walletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    transaction?: boolean | wallet$transactionArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type walletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type walletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $walletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallet"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      balance: number
      userid: number
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type walletGetPayload<S extends boolean | null | undefined | walletDefaultArgs> = $Result.GetResult<Prisma.$walletPayload, S>

  type walletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface walletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallet'], meta: { name: 'wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {walletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletFindUniqueArgs>(args: SelectSubset<T, walletFindUniqueArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletFindUniqueOrThrowArgs>(args: SelectSubset<T, walletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletFindFirstArgs>(args?: SelectSubset<T, walletFindFirstArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletFindFirstOrThrowArgs>(args?: SelectSubset<T, walletFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends walletFindManyArgs>(args?: SelectSubset<T, walletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {walletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends walletCreateArgs>(args: SelectSubset<T, walletCreateArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {walletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletCreateManyArgs>(args?: SelectSubset<T, walletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {walletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends walletCreateManyAndReturnArgs>(args?: SelectSubset<T, walletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {walletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends walletDeleteArgs>(args: SelectSubset<T, walletDeleteArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {walletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletUpdateArgs>(args: SelectSubset<T, walletUpdateArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletDeleteManyArgs>(args?: SelectSubset<T, walletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletUpdateManyArgs>(args: SelectSubset<T, walletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {walletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends walletUpdateManyAndReturnArgs>(args: SelectSubset<T, walletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {walletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends walletUpsertArgs>(args: SelectSubset<T, walletUpsertArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletCountArgs>(
      args?: Subset<T, walletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletGroupByArgs} args - Group by arguments.
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
      T extends walletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletGroupByArgs['orderBy'] }
        : { orderBy?: walletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, walletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallet model
   */
  readonly fields: walletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends wallet$transactionArgs<ExtArgs> = {}>(args?: Subset<T, wallet$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallet model
   */
  interface walletFieldRefs {
    readonly id: FieldRef<"wallet", 'Int'>
    readonly balance: FieldRef<"wallet", 'Float'>
    readonly userid: FieldRef<"wallet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * wallet findUnique
   */
  export type walletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet findUniqueOrThrow
   */
  export type walletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet findFirst
   */
  export type walletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet findFirstOrThrow
   */
  export type walletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet findMany
   */
  export type walletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet create
   */
  export type walletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The data needed to create a wallet.
     */
    data: XOR<walletCreateInput, walletUncheckedCreateInput>
  }

  /**
   * wallet createMany
   */
  export type walletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletCreateManyInput | walletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallet createManyAndReturn
   */
  export type walletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * The data used to create many wallets.
     */
    data: walletCreateManyInput | walletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet update
   */
  export type walletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The data needed to update a wallet.
     */
    data: XOR<walletUpdateInput, walletUncheckedUpdateInput>
    /**
     * Choose, which wallet to update.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet updateMany
   */
  export type walletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
  }

  /**
   * wallet updateManyAndReturn
   */
  export type walletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * The data used to update wallets.
     */
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet upsert
   */
  export type walletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The filter to search for the wallet to update in case it exists.
     */
    where: walletWhereUniqueInput
    /**
     * In case the wallet found by the `where` argument doesn't exist, create a new wallet with this data.
     */
    create: XOR<walletCreateInput, walletUncheckedCreateInput>
    /**
     * In case the wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletUpdateInput, walletUncheckedUpdateInput>
  }

  /**
   * wallet delete
   */
  export type walletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter which wallet to delete.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet deleteMany
   */
  export type walletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletWhereInput
    /**
     * Limit how many wallets to delete.
     */
    limit?: number
  }

  /**
   * wallet.transaction
   */
  export type wallet$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * wallet without action
   */
  export type walletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    roomid: number | null
    transactionid: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userid: number | null
    roomid: number | null
    transactionid: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userid: number | null
    type: $Enums.notification_type | null
    message: string | null
    time: Date | null
    roomid: number | null
    transactionid: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    type: $Enums.notification_type | null
    message: string | null
    time: Date | null
    roomid: number | null
    transactionid: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userid: number
    type: number
    message: number
    time: number
    roomid: number
    transactionid: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userid?: true
    roomid?: true
    transactionid?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userid?: true
    roomid?: true
    transactionid?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userid?: true
    type?: true
    message?: true
    time?: true
    roomid?: true
    transactionid?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userid?: true
    type?: true
    message?: true
    time?: true
    roomid?: true
    transactionid?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userid?: true
    type?: true
    message?: true
    time?: true
    roomid?: true
    transactionid?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userid: number
    type: $Enums.notification_type
    message: string
    time: Date
    roomid: number | null
    transactionid: number | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    type?: boolean
    message?: boolean
    time?: boolean
    roomid?: boolean
    transactionid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    type?: boolean
    message?: boolean
    time?: boolean
    roomid?: boolean
    transactionid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    type?: boolean
    message?: boolean
    time?: boolean
    roomid?: boolean
    transactionid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    userid?: boolean
    type?: boolean
    message?: boolean
    time?: boolean
    roomid?: boolean
    transactionid?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "type" | "message" | "time" | "roomid" | "transactionid", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      type: $Enums.notification_type
      message: string
      time: Date
      roomid: number | null
      transactionid: number | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
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
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly userid: FieldRef<"notification", 'Int'>
    readonly type: FieldRef<"notification", 'notification_type'>
    readonly message: FieldRef<"notification", 'String'>
    readonly time: FieldRef<"notification", 'DateTime'>
    readonly roomid: FieldRef<"notification", 'Int'>
    readonly transactionid: FieldRef<"notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    walletid: number | null
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    walletid: number | null
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    walletid: number | null
    type: $Enums.transaction_type | null
    amount: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    walletid: number | null
    type: $Enums.transaction_type | null
    amount: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    walletid: number
    type: number
    amount: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    walletid?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    walletid?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    walletid?: true
    type?: true
    amount?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    walletid?: true
    type?: true
    amount?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    walletid?: true
    type?: true
    amount?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    walletid: number
    type: $Enums.transaction_type
    amount: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletid?: boolean
    type?: boolean
    amount?: boolean
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletid?: boolean
    type?: boolean
    amount?: boolean
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletid?: boolean
    type?: boolean
    amount?: boolean
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    walletid?: boolean
    type?: boolean
    amount?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletid" | "type" | "amount", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      wallet: Prisma.$walletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      walletid: number
      type: $Enums.transaction_type
      amount: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends walletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, walletDefaultArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'Int'>
    readonly walletid: FieldRef<"transaction", 'Int'>
    readonly type: FieldRef<"transaction", 'transaction_type'>
    readonly amount: FieldRef<"transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    creatorid: number | null
    highest_bid: number | null
    blinds: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    creatorid: number | null
    highest_bid: number | null
    blinds: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    creatorid: number | null
    highest_bid: number | null
    status: $Enums.room_status | null
    room_type: $Enums.room_type | null
    blinds: number | null
    member: $Enums.member_type | null
    roompace: $Enums.pace | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    creatorid: number | null
    highest_bid: number | null
    status: $Enums.room_status | null
    room_type: $Enums.room_type | null
    blinds: number | null
    member: $Enums.member_type | null
    roompace: $Enums.pace | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    creatorid: number
    highest_bid: number
    status: number
    room_type: number
    blinds: number
    member: number
    roompace: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    creatorid?: true
    highest_bid?: true
    blinds?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    creatorid?: true
    highest_bid?: true
    blinds?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    creatorid?: true
    highest_bid?: true
    status?: true
    room_type?: true
    blinds?: true
    member?: true
    roompace?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    creatorid?: true
    highest_bid?: true
    status?: true
    room_type?: true
    blinds?: true
    member?: true
    roompace?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    creatorid?: true
    highest_bid?: true
    status?: true
    room_type?: true
    blinds?: true
    member?: true
    roompace?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room to aggregate.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
    orderBy?: roomOrderByWithAggregationInput | roomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    creatorid: number
    highest_bid: number
    status: $Enums.room_status
    room_type: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorid?: boolean
    highest_bid?: boolean
    status?: boolean
    room_type?: boolean
    blinds?: boolean
    member?: boolean
    roompace?: boolean
    chat?: boolean | room$chatArgs<ExtArgs>
    details?: boolean | room$detailsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type roomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorid?: boolean
    highest_bid?: boolean
    status?: boolean
    room_type?: boolean
    blinds?: boolean
    member?: boolean
    roompace?: boolean
  }, ExtArgs["result"]["room"]>

  export type roomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorid?: boolean
    highest_bid?: boolean
    status?: boolean
    room_type?: boolean
    blinds?: boolean
    member?: boolean
    roompace?: boolean
  }, ExtArgs["result"]["room"]>

  export type roomSelectScalar = {
    id?: boolean
    creatorid?: boolean
    highest_bid?: boolean
    status?: boolean
    room_type?: boolean
    blinds?: boolean
    member?: boolean
    roompace?: boolean
  }

  export type roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorid" | "highest_bid" | "status" | "room_type" | "blinds" | "member" | "roompace", ExtArgs["result"]["room"]>
  export type roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | room$chatArgs<ExtArgs>
    details?: boolean | room$detailsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room"
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>[]
      details: Prisma.$detailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creatorid: number
      highest_bid: number
      status: $Enums.room_status
      room_type: $Enums.room_type
      blinds: number
      member: $Enums.member_type
      roompace: $Enums.pace
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type roomGetPayload<S extends boolean | null | undefined | roomDefaultArgs> = $Result.GetResult<Prisma.$roomPayload, S>

  type roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room'], meta: { name: 'room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {roomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomFindUniqueArgs>(args: SelectSubset<T, roomFindUniqueArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(args: SelectSubset<T, roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomFindFirstArgs>(args?: SelectSubset<T, roomFindFirstArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(args?: SelectSubset<T, roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomFindManyArgs>(args?: SelectSubset<T, roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {roomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends roomCreateArgs>(args: SelectSubset<T, roomCreateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomCreateManyArgs>(args?: SelectSubset<T, roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {roomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roomCreateManyAndReturnArgs>(args?: SelectSubset<T, roomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {roomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends roomDeleteArgs>(args: SelectSubset<T, roomDeleteArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {roomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomUpdateArgs>(args: SelectSubset<T, roomUpdateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomDeleteManyArgs>(args?: SelectSubset<T, roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomUpdateManyArgs>(args: SelectSubset<T, roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {roomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roomUpdateManyAndReturnArgs>(args: SelectSubset<T, roomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {roomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends roomUpsertArgs>(args: SelectSubset<T, roomUpsertArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomCountArgs>(
      args?: Subset<T, roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomGroupByArgs} args - Group by arguments.
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
      T extends roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomGroupByArgs['orderBy'] }
        : { orderBy?: roomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room model
   */
  readonly fields: roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends room$chatArgs<ExtArgs> = {}>(args?: Subset<T, room$chatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends room$detailsArgs<ExtArgs> = {}>(args?: Subset<T, room$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room model
   */
  interface roomFieldRefs {
    readonly id: FieldRef<"room", 'Int'>
    readonly creatorid: FieldRef<"room", 'Int'>
    readonly highest_bid: FieldRef<"room", 'Int'>
    readonly status: FieldRef<"room", 'room_status'>
    readonly room_type: FieldRef<"room", 'room_type'>
    readonly blinds: FieldRef<"room", 'Int'>
    readonly member: FieldRef<"room", 'member_type'>
    readonly roompace: FieldRef<"room", 'pace'>
  }
    

  // Custom InputTypes
  /**
   * room findUnique
   */
  export type roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findUniqueOrThrow
   */
  export type roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findFirst
   */
  export type roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findFirstOrThrow
   */
  export type roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findMany
   */
  export type roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room create
   */
  export type roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to create a room.
     */
    data: XOR<roomCreateInput, roomUncheckedCreateInput>
  }

  /**
   * room createMany
   */
  export type roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room createManyAndReturn
   */
  export type roomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room update
   */
  export type roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to update a room.
     */
    data: XOR<roomUpdateInput, roomUncheckedUpdateInput>
    /**
     * Choose, which room to update.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room updateMany
   */
  export type roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * room updateManyAndReturn
   */
  export type roomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * room upsert
   */
  export type roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The filter to search for the room to update in case it exists.
     */
    where: roomWhereUniqueInput
    /**
     * In case the room found by the `where` argument doesn't exist, create a new room with this data.
     */
    create: XOR<roomCreateInput, roomUncheckedCreateInput>
    /**
     * In case the room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomUpdateInput, roomUncheckedUpdateInput>
  }

  /**
   * room delete
   */
  export type roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter which room to delete.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room deleteMany
   */
  export type roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * room.chat
   */
  export type room$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    where?: chatWhereInput
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    cursor?: chatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * room.details
   */
  export type room$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    where?: detailsWhereInput
    orderBy?: detailsOrderByWithRelationInput | detailsOrderByWithRelationInput[]
    cursor?: detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * room without action
   */
  export type roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
  }


  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
    message: string | null
    time: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
    message: string | null
    time: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    roomid: number
    playerid: number
    message: number
    time: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    message?: true
    time?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    message?: true
    time?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    message?: true
    time?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    roomid: number
    playerid: number
    message: string
    time: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    message?: boolean
    time?: boolean
    room?: boolean | roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    message?: boolean
    time?: boolean
    room?: boolean | roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    message?: boolean
    time?: boolean
    room?: boolean | roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectScalar = {
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    message?: boolean
    time?: boolean
  }

  export type chatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomid" | "playerid" | "message" | "time", ExtArgs["result"]["chat"]>
  export type chatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomDefaultArgs<ExtArgs>
  }
  export type chatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomDefaultArgs<ExtArgs>
  }
  export type chatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomDefaultArgs<ExtArgs>
  }

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat"
    objects: {
      room: Prisma.$roomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomid: number
      playerid: number
      message: string
      time: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<Prisma.$chatPayload, S>

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatFindUniqueArgs>(args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatFindFirstArgs>(args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatFindManyArgs>(args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends chatCreateArgs>(args: SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatCreateManyArgs>(args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {chatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatCreateManyAndReturnArgs>(args?: SelectSubset<T, chatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends chatDeleteArgs>(args: SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatUpdateArgs>(args: SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatDeleteManyArgs>(args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatUpdateManyArgs>(args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {chatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatUpdateManyAndReturnArgs>(args: SelectSubset<T, chatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends chatUpsertArgs>(args: SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
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
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat model
   */
  readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomDefaultArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly id: FieldRef<"chat", 'Int'>
    readonly roomid: FieldRef<"chat", 'Int'>
    readonly playerid: FieldRef<"chat", 'Int'>
    readonly message: FieldRef<"chat", 'String'>
    readonly time: FieldRef<"chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>
  }

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat createManyAndReturn
   */
  export type chatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat updateManyAndReturn
   */
  export type chatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>
  }

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
  }


  /**
   * Model details
   */

  export type AggregateDetails = {
    _count: DetailsCountAggregateOutputType | null
    _avg: DetailsAvgAggregateOutputType | null
    _sum: DetailsSumAggregateOutputType | null
    _min: DetailsMinAggregateOutputType | null
    _max: DetailsMaxAggregateOutputType | null
  }

  export type DetailsAvgAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
    bet: number | null
  }

  export type DetailsSumAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
    bet: number | null
  }

  export type DetailsMinAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
    move: $Enums.room_move | null
    action: $Enums.player_action | null
    bet: number | null
    time: Date | null
  }

  export type DetailsMaxAggregateOutputType = {
    id: number | null
    roomid: number | null
    playerid: number | null
    move: $Enums.room_move | null
    action: $Enums.player_action | null
    bet: number | null
    time: Date | null
  }

  export type DetailsCountAggregateOutputType = {
    id: number
    roomid: number
    playerid: number
    move: number
    action: number
    bet: number
    time: number
    _all: number
  }


  export type DetailsAvgAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    bet?: true
  }

  export type DetailsSumAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    bet?: true
  }

  export type DetailsMinAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    move?: true
    action?: true
    bet?: true
    time?: true
  }

  export type DetailsMaxAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    move?: true
    action?: true
    bet?: true
    time?: true
  }

  export type DetailsCountAggregateInputType = {
    id?: true
    roomid?: true
    playerid?: true
    move?: true
    action?: true
    bet?: true
    time?: true
    _all?: true
  }

  export type DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which details to aggregate.
     */
    where?: detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of details to fetch.
     */
    orderBy?: detailsOrderByWithRelationInput | detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned details
    **/
    _count?: true | DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailsMaxAggregateInputType
  }

  export type GetDetailsAggregateType<T extends DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetails[P]>
      : GetScalarType<T[P], AggregateDetails[P]>
  }




  export type detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detailsWhereInput
    orderBy?: detailsOrderByWithAggregationInput | detailsOrderByWithAggregationInput[]
    by: DetailsScalarFieldEnum[] | DetailsScalarFieldEnum
    having?: detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailsCountAggregateInputType | true
    _avg?: DetailsAvgAggregateInputType
    _sum?: DetailsSumAggregateInputType
    _min?: DetailsMinAggregateInputType
    _max?: DetailsMaxAggregateInputType
  }

  export type DetailsGroupByOutputType = {
    id: number
    roomid: number
    playerid: number
    move: $Enums.room_move
    action: $Enums.player_action
    bet: number
    time: Date
    _count: DetailsCountAggregateOutputType | null
    _avg: DetailsAvgAggregateOutputType | null
    _sum: DetailsSumAggregateOutputType | null
    _min: DetailsMinAggregateOutputType | null
    _max: DetailsMaxAggregateOutputType | null
  }

  type GetDetailsGroupByPayload<T extends detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], DetailsGroupByOutputType[P]>
        }
      >
    >


  export type detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    move?: boolean
    action?: boolean
    bet?: boolean
    time?: boolean
    room?: boolean | roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>

  export type detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    move?: boolean
    action?: boolean
    bet?: boolean
    time?: boolean
    room?: boolean | roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>

  export type detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    move?: boolean
    action?: boolean
    bet?: boolean
    time?: boolean
    room?: boolean | roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["details"]>

  export type detailsSelectScalar = {
    id?: boolean
    roomid?: boolean
    playerid?: boolean
    move?: boolean
    action?: boolean
    bet?: boolean
    time?: boolean
  }

  export type detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomid" | "playerid" | "move" | "action" | "bet" | "time", ExtArgs["result"]["details"]>
  export type detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomDefaultArgs<ExtArgs>
  }
  export type detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomDefaultArgs<ExtArgs>
  }
  export type detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomDefaultArgs<ExtArgs>
  }

  export type $detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "details"
    objects: {
      room: Prisma.$roomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomid: number
      playerid: number
      move: $Enums.room_move
      action: $Enums.player_action
      bet: number
      time: Date
    }, ExtArgs["result"]["details"]>
    composites: {}
  }

  type detailsGetPayload<S extends boolean | null | undefined | detailsDefaultArgs> = $Result.GetResult<Prisma.$detailsPayload, S>

  type detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailsCountAggregateInputType | true
    }

  export interface detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['details'], meta: { name: 'details' } }
    /**
     * Find zero or one Details that matches the filter.
     * @param {detailsFindUniqueArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detailsFindUniqueArgs>(args: SelectSubset<T, detailsFindUniqueArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detailsFindUniqueOrThrowArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailsFindFirstArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detailsFindFirstArgs>(args?: SelectSubset<T, detailsFindFirstArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailsFindFirstOrThrowArgs} args - Arguments to find a Details
     * @example
     * // Get one Details
     * const details = await prisma.details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Details
     * const details = await prisma.details.findMany()
     * 
     * // Get first 10 Details
     * const details = await prisma.details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailsWithIdOnly = await prisma.details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detailsFindManyArgs>(args?: SelectSubset<T, detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Details.
     * @param {detailsCreateArgs} args - Arguments to create a Details.
     * @example
     * // Create one Details
     * const Details = await prisma.details.create({
     *   data: {
     *     // ... data to create a Details
     *   }
     * })
     * 
     */
    create<T extends detailsCreateArgs>(args: SelectSubset<T, detailsCreateArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Details.
     * @param {detailsCreateManyArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const details = await prisma.details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detailsCreateManyArgs>(args?: SelectSubset<T, detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Details and returns the data saved in the database.
     * @param {detailsCreateManyAndReturnArgs} args - Arguments to create many Details.
     * @example
     * // Create many Details
     * const details = await prisma.details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Details and only return the `id`
     * const detailsWithIdOnly = await prisma.details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Details.
     * @param {detailsDeleteArgs} args - Arguments to delete one Details.
     * @example
     * // Delete one Details
     * const Details = await prisma.details.delete({
     *   where: {
     *     // ... filter to delete one Details
     *   }
     * })
     * 
     */
    delete<T extends detailsDeleteArgs>(args: SelectSubset<T, detailsDeleteArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Details.
     * @param {detailsUpdateArgs} args - Arguments to update one Details.
     * @example
     * // Update one Details
     * const details = await prisma.details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detailsUpdateArgs>(args: SelectSubset<T, detailsUpdateArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Details.
     * @param {detailsDeleteManyArgs} args - Arguments to filter Details to delete.
     * @example
     * // Delete a few Details
     * const { count } = await prisma.details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detailsDeleteManyArgs>(args?: SelectSubset<T, detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Details
     * const details = await prisma.details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detailsUpdateManyArgs>(args: SelectSubset<T, detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Details and returns the data updated in the database.
     * @param {detailsUpdateManyAndReturnArgs} args - Arguments to update many Details.
     * @example
     * // Update many Details
     * const details = await prisma.details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Details and only return the `id`
     * const detailsWithIdOnly = await prisma.details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Details.
     * @param {detailsUpsertArgs} args - Arguments to update or create a Details.
     * @example
     * // Update or create a Details
     * const details = await prisma.details.upsert({
     *   create: {
     *     // ... data to create a Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Details we want to update
     *   }
     * })
     */
    upsert<T extends detailsUpsertArgs>(args: SelectSubset<T, detailsUpsertArgs<ExtArgs>>): Prisma__detailsClient<$Result.GetResult<Prisma.$detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailsCountArgs} args - Arguments to filter Details to count.
     * @example
     * // Count the number of Details
     * const count = await prisma.details.count({
     *   where: {
     *     // ... the filter for the Details we want to count
     *   }
     * })
    **/
    count<T extends detailsCountArgs>(
      args?: Subset<T, detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailsAggregateArgs>(args: Subset<T, DetailsAggregateArgs>): Prisma.PrismaPromise<GetDetailsAggregateType<T>>

    /**
     * Group by Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailsGroupByArgs} args - Group by arguments.
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
      T extends detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detailsGroupByArgs['orderBy'] }
        : { orderBy?: detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the details model
   */
  readonly fields: detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomDefaultArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the details model
   */
  interface detailsFieldRefs {
    readonly id: FieldRef<"details", 'Int'>
    readonly roomid: FieldRef<"details", 'Int'>
    readonly playerid: FieldRef<"details", 'Int'>
    readonly move: FieldRef<"details", 'room_move'>
    readonly action: FieldRef<"details", 'player_action'>
    readonly bet: FieldRef<"details", 'Int'>
    readonly time: FieldRef<"details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * details findUnique
   */
  export type detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * Filter, which details to fetch.
     */
    where: detailsWhereUniqueInput
  }

  /**
   * details findUniqueOrThrow
   */
  export type detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * Filter, which details to fetch.
     */
    where: detailsWhereUniqueInput
  }

  /**
   * details findFirst
   */
  export type detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * Filter, which details to fetch.
     */
    where?: detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of details to fetch.
     */
    orderBy?: detailsOrderByWithRelationInput | detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for details.
     */
    cursor?: detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of details.
     */
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * details findFirstOrThrow
   */
  export type detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * Filter, which details to fetch.
     */
    where?: detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of details to fetch.
     */
    orderBy?: detailsOrderByWithRelationInput | detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for details.
     */
    cursor?: detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of details.
     */
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * details findMany
   */
  export type detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * Filter, which details to fetch.
     */
    where?: detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of details to fetch.
     */
    orderBy?: detailsOrderByWithRelationInput | detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing details.
     */
    cursor?: detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` details.
     */
    skip?: number
    distinct?: DetailsScalarFieldEnum | DetailsScalarFieldEnum[]
  }

  /**
   * details create
   */
  export type detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a details.
     */
    data: XOR<detailsCreateInput, detailsUncheckedCreateInput>
  }

  /**
   * details createMany
   */
  export type detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many details.
     */
    data: detailsCreateManyInput | detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * details createManyAndReturn
   */
  export type detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * The data used to create many details.
     */
    data: detailsCreateManyInput | detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * details update
   */
  export type detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a details.
     */
    data: XOR<detailsUpdateInput, detailsUncheckedUpdateInput>
    /**
     * Choose, which details to update.
     */
    where: detailsWhereUniqueInput
  }

  /**
   * details updateMany
   */
  export type detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update details.
     */
    data: XOR<detailsUpdateManyMutationInput, detailsUncheckedUpdateManyInput>
    /**
     * Filter which details to update
     */
    where?: detailsWhereInput
    /**
     * Limit how many details to update.
     */
    limit?: number
  }

  /**
   * details updateManyAndReturn
   */
  export type detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * The data used to update details.
     */
    data: XOR<detailsUpdateManyMutationInput, detailsUncheckedUpdateManyInput>
    /**
     * Filter which details to update
     */
    where?: detailsWhereInput
    /**
     * Limit how many details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * details upsert
   */
  export type detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the details to update in case it exists.
     */
    where: detailsWhereUniqueInput
    /**
     * In case the details found by the `where` argument doesn't exist, create a new details with this data.
     */
    create: XOR<detailsCreateInput, detailsUncheckedCreateInput>
    /**
     * In case the details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detailsUpdateInput, detailsUncheckedUpdateInput>
  }

  /**
   * details delete
   */
  export type detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
    /**
     * Filter which details to delete.
     */
    where: detailsWhereUniqueInput
  }

  /**
   * details deleteMany
   */
  export type detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which details to delete
     */
    where?: detailsWhereInput
    /**
     * Limit how many details to delete.
     */
    limit?: number
  }

  /**
   * details without action
   */
  export type detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the details
     */
    select?: detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the details
     */
    omit?: detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    wins: 'wins',
    matches: 'matches',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    userid: 'userid'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    type: 'type',
    message: 'message',
    time: 'time',
    roomid: 'roomid',
    transactionid: 'transactionid'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    walletid: 'walletid',
    type: 'type',
    amount: 'amount'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    creatorid: 'creatorid',
    highest_bid: 'highest_bid',
    status: 'status',
    room_type: 'room_type',
    blinds: 'blinds',
    member: 'member',
    roompace: 'roompace'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    roomid: 'roomid',
    playerid: 'playerid',
    message: 'message',
    time: 'time'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const DetailsScalarFieldEnum: {
    id: 'id',
    roomid: 'roomid',
    playerid: 'playerid',
    move: 'move',
    action: 'action',
    bet: 'bet',
    time: 'time'
  };

  export type DetailsScalarFieldEnum = (typeof DetailsScalarFieldEnum)[keyof typeof DetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'notification_type'
   */
  export type Enumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type'>
    


  /**
   * Reference to a field of type 'notification_type[]'
   */
  export type ListEnumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'transaction_type'
   */
  export type Enumtransaction_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_type'>
    


  /**
   * Reference to a field of type 'transaction_type[]'
   */
  export type ListEnumtransaction_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_type[]'>
    


  /**
   * Reference to a field of type 'room_status'
   */
  export type Enumroom_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_status'>
    


  /**
   * Reference to a field of type 'room_status[]'
   */
  export type ListEnumroom_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_status[]'>
    


  /**
   * Reference to a field of type 'room_type'
   */
  export type Enumroom_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_type'>
    


  /**
   * Reference to a field of type 'room_type[]'
   */
  export type ListEnumroom_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_type[]'>
    


  /**
   * Reference to a field of type 'member_type'
   */
  export type Enummember_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_type'>
    


  /**
   * Reference to a field of type 'member_type[]'
   */
  export type ListEnummember_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'member_type[]'>
    


  /**
   * Reference to a field of type 'pace'
   */
  export type EnumpaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pace'>
    


  /**
   * Reference to a field of type 'pace[]'
   */
  export type ListEnumpaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pace[]'>
    


  /**
   * Reference to a field of type 'room_move'
   */
  export type Enumroom_moveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_move'>
    


  /**
   * Reference to a field of type 'room_move[]'
   */
  export type ListEnumroom_moveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'room_move[]'>
    


  /**
   * Reference to a field of type 'player_action'
   */
  export type Enumplayer_actionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'player_action'>
    


  /**
   * Reference to a field of type 'player_action[]'
   */
  export type ListEnumplayer_actionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'player_action[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    wins?: IntFilter<"user"> | number
    matches?: IntFilter<"user"> | number
    status?: BoolFilter<"user"> | boolean
    wallet?: XOR<WalletNullableScalarRelationFilter, walletWhereInput> | null
    notification?: NotificationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    status?: SortOrder
    wallet?: walletOrderByWithRelationInput
    notification?: notificationOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    wins?: IntFilter<"user"> | number
    matches?: IntFilter<"user"> | number
    status?: BoolFilter<"user"> | boolean
    wallet?: XOR<WalletNullableScalarRelationFilter, walletWhereInput> | null
    notification?: NotificationListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    status?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    wins?: IntWithAggregatesFilter<"user"> | number
    matches?: IntWithAggregatesFilter<"user"> | number
    status?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type walletWhereInput = {
    AND?: walletWhereInput | walletWhereInput[]
    OR?: walletWhereInput[]
    NOT?: walletWhereInput | walletWhereInput[]
    id?: IntFilter<"wallet"> | number
    balance?: FloatFilter<"wallet"> | number
    userid?: IntFilter<"wallet"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    transaction?: TransactionListRelationFilter
  }

  export type walletOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
    user?: userOrderByWithRelationInput
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type walletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userid?: number
    AND?: walletWhereInput | walletWhereInput[]
    OR?: walletWhereInput[]
    NOT?: walletWhereInput | walletWhereInput[]
    balance?: FloatFilter<"wallet"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    transaction?: TransactionListRelationFilter
  }, "id" | "userid">

  export type walletOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
    _count?: walletCountOrderByAggregateInput
    _avg?: walletAvgOrderByAggregateInput
    _max?: walletMaxOrderByAggregateInput
    _min?: walletMinOrderByAggregateInput
    _sum?: walletSumOrderByAggregateInput
  }

  export type walletScalarWhereWithAggregatesInput = {
    AND?: walletScalarWhereWithAggregatesInput | walletScalarWhereWithAggregatesInput[]
    OR?: walletScalarWhereWithAggregatesInput[]
    NOT?: walletScalarWhereWithAggregatesInput | walletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"wallet"> | number
    balance?: FloatWithAggregatesFilter<"wallet"> | number
    userid?: IntWithAggregatesFilter<"wallet"> | number
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    userid?: IntFilter<"notification"> | number
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    message?: StringFilter<"notification"> | string
    time?: DateTimeFilter<"notification"> | Date | string
    roomid?: IntNullableFilter<"notification"> | number | null
    transactionid?: IntNullableFilter<"notification"> | number | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    roomid?: SortOrderInput | SortOrder
    transactionid?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    userid?: IntFilter<"notification"> | number
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    message?: StringFilter<"notification"> | string
    time?: DateTimeFilter<"notification"> | Date | string
    roomid?: IntNullableFilter<"notification"> | number | null
    transactionid?: IntNullableFilter<"notification"> | number | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    roomid?: SortOrderInput | SortOrder
    transactionid?: SortOrderInput | SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    userid?: IntWithAggregatesFilter<"notification"> | number
    type?: Enumnotification_typeWithAggregatesFilter<"notification"> | $Enums.notification_type
    message?: StringWithAggregatesFilter<"notification"> | string
    time?: DateTimeWithAggregatesFilter<"notification"> | Date | string
    roomid?: IntNullableWithAggregatesFilter<"notification"> | number | null
    transactionid?: IntNullableWithAggregatesFilter<"notification"> | number | null
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: IntFilter<"transaction"> | number
    walletid?: IntFilter<"transaction"> | number
    type?: Enumtransaction_typeFilter<"transaction"> | $Enums.transaction_type
    amount?: IntFilter<"transaction"> | number
    wallet?: XOR<WalletScalarRelationFilter, walletWhereInput>
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    walletid?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    wallet?: walletOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    walletid?: IntFilter<"transaction"> | number
    type?: Enumtransaction_typeFilter<"transaction"> | $Enums.transaction_type
    amount?: IntFilter<"transaction"> | number
    wallet?: XOR<WalletScalarRelationFilter, walletWhereInput>
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    walletid?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction"> | number
    walletid?: IntWithAggregatesFilter<"transaction"> | number
    type?: Enumtransaction_typeWithAggregatesFilter<"transaction"> | $Enums.transaction_type
    amount?: IntWithAggregatesFilter<"transaction"> | number
  }

  export type roomWhereInput = {
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    id?: IntFilter<"room"> | number
    creatorid?: IntFilter<"room"> | number
    highest_bid?: IntFilter<"room"> | number
    status?: Enumroom_statusFilter<"room"> | $Enums.room_status
    room_type?: Enumroom_typeFilter<"room"> | $Enums.room_type
    blinds?: IntFilter<"room"> | number
    member?: Enummember_typeFilter<"room"> | $Enums.member_type
    roompace?: EnumpaceFilter<"room"> | $Enums.pace
    chat?: ChatListRelationFilter
    details?: DetailsListRelationFilter
  }

  export type roomOrderByWithRelationInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    status?: SortOrder
    room_type?: SortOrder
    blinds?: SortOrder
    member?: SortOrder
    roompace?: SortOrder
    chat?: chatOrderByRelationAggregateInput
    details?: detailsOrderByRelationAggregateInput
  }

  export type roomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    creatorid?: IntFilter<"room"> | number
    highest_bid?: IntFilter<"room"> | number
    status?: Enumroom_statusFilter<"room"> | $Enums.room_status
    room_type?: Enumroom_typeFilter<"room"> | $Enums.room_type
    blinds?: IntFilter<"room"> | number
    member?: Enummember_typeFilter<"room"> | $Enums.member_type
    roompace?: EnumpaceFilter<"room"> | $Enums.pace
    chat?: ChatListRelationFilter
    details?: DetailsListRelationFilter
  }, "id">

  export type roomOrderByWithAggregationInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    status?: SortOrder
    room_type?: SortOrder
    blinds?: SortOrder
    member?: SortOrder
    roompace?: SortOrder
    _count?: roomCountOrderByAggregateInput
    _avg?: roomAvgOrderByAggregateInput
    _max?: roomMaxOrderByAggregateInput
    _min?: roomMinOrderByAggregateInput
    _sum?: roomSumOrderByAggregateInput
  }

  export type roomScalarWhereWithAggregatesInput = {
    AND?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    OR?: roomScalarWhereWithAggregatesInput[]
    NOT?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"room"> | number
    creatorid?: IntWithAggregatesFilter<"room"> | number
    highest_bid?: IntWithAggregatesFilter<"room"> | number
    status?: Enumroom_statusWithAggregatesFilter<"room"> | $Enums.room_status
    room_type?: Enumroom_typeWithAggregatesFilter<"room"> | $Enums.room_type
    blinds?: IntWithAggregatesFilter<"room"> | number
    member?: Enummember_typeWithAggregatesFilter<"room"> | $Enums.member_type
    roompace?: EnumpaceWithAggregatesFilter<"room"> | $Enums.pace
  }

  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    id?: IntFilter<"chat"> | number
    roomid?: IntFilter<"chat"> | number
    playerid?: IntFilter<"chat"> | number
    message?: StringFilter<"chat"> | string
    time?: DateTimeFilter<"chat"> | Date | string
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
  }

  export type chatOrderByWithRelationInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    message?: SortOrder
    time?: SortOrder
    room?: roomOrderByWithRelationInput
  }

  export type chatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    roomid?: IntFilter<"chat"> | number
    playerid?: IntFilter<"chat"> | number
    message?: StringFilter<"chat"> | string
    time?: DateTimeFilter<"chat"> | Date | string
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
  }, "id">

  export type chatOrderByWithAggregationInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    message?: SortOrder
    time?: SortOrder
    _count?: chatCountOrderByAggregateInput
    _avg?: chatAvgOrderByAggregateInput
    _max?: chatMaxOrderByAggregateInput
    _min?: chatMinOrderByAggregateInput
    _sum?: chatSumOrderByAggregateInput
  }

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    OR?: chatScalarWhereWithAggregatesInput[]
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat"> | number
    roomid?: IntWithAggregatesFilter<"chat"> | number
    playerid?: IntWithAggregatesFilter<"chat"> | number
    message?: StringWithAggregatesFilter<"chat"> | string
    time?: DateTimeWithAggregatesFilter<"chat"> | Date | string
  }

  export type detailsWhereInput = {
    AND?: detailsWhereInput | detailsWhereInput[]
    OR?: detailsWhereInput[]
    NOT?: detailsWhereInput | detailsWhereInput[]
    id?: IntFilter<"details"> | number
    roomid?: IntFilter<"details"> | number
    playerid?: IntFilter<"details"> | number
    move?: Enumroom_moveFilter<"details"> | $Enums.room_move
    action?: Enumplayer_actionFilter<"details"> | $Enums.player_action
    bet?: IntFilter<"details"> | number
    time?: DateTimeFilter<"details"> | Date | string
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
  }

  export type detailsOrderByWithRelationInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    move?: SortOrder
    action?: SortOrder
    bet?: SortOrder
    time?: SortOrder
    room?: roomOrderByWithRelationInput
  }

  export type detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detailsWhereInput | detailsWhereInput[]
    OR?: detailsWhereInput[]
    NOT?: detailsWhereInput | detailsWhereInput[]
    roomid?: IntFilter<"details"> | number
    playerid?: IntFilter<"details"> | number
    move?: Enumroom_moveFilter<"details"> | $Enums.room_move
    action?: Enumplayer_actionFilter<"details"> | $Enums.player_action
    bet?: IntFilter<"details"> | number
    time?: DateTimeFilter<"details"> | Date | string
    room?: XOR<RoomScalarRelationFilter, roomWhereInput>
  }, "id">

  export type detailsOrderByWithAggregationInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    move?: SortOrder
    action?: SortOrder
    bet?: SortOrder
    time?: SortOrder
    _count?: detailsCountOrderByAggregateInput
    _avg?: detailsAvgOrderByAggregateInput
    _max?: detailsMaxOrderByAggregateInput
    _min?: detailsMinOrderByAggregateInput
    _sum?: detailsSumOrderByAggregateInput
  }

  export type detailsScalarWhereWithAggregatesInput = {
    AND?: detailsScalarWhereWithAggregatesInput | detailsScalarWhereWithAggregatesInput[]
    OR?: detailsScalarWhereWithAggregatesInput[]
    NOT?: detailsScalarWhereWithAggregatesInput | detailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"details"> | number
    roomid?: IntWithAggregatesFilter<"details"> | number
    playerid?: IntWithAggregatesFilter<"details"> | number
    move?: Enumroom_moveWithAggregatesFilter<"details"> | $Enums.room_move
    action?: Enumplayer_actionWithAggregatesFilter<"details"> | $Enums.player_action
    bet?: IntWithAggregatesFilter<"details"> | number
    time?: DateTimeWithAggregatesFilter<"details"> | Date | string
  }

  export type userCreateInput = {
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
    wallet?: walletCreateNestedOneWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
    wallet?: walletUncheckedCreateNestedOneWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateOneWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateOneWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type walletCreateInput = {
    balance?: number
    user: userCreateNestedOneWithoutWalletInput
    transaction?: transactionCreateNestedManyWithoutWalletInput
  }

  export type walletUncheckedCreateInput = {
    id?: number
    balance?: number
    userid: number
    transaction?: transactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type walletUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutWalletNestedInput
    transaction?: transactionUpdateManyWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    transaction?: transactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type walletCreateManyInput = {
    id?: number
    balance?: number
    userid: number
  }

  export type walletUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type walletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type notificationCreateInput = {
    type?: $Enums.notification_type
    message: string
    time?: Date | string
    roomid?: number | null
    transactionid?: number | null
    user: userCreateNestedOneWithoutNotificationInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    userid: number
    type?: $Enums.notification_type
    message: string
    time?: Date | string
    roomid?: number | null
    transactionid?: number | null
  }

  export type notificationUpdateInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
    user?: userUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationCreateManyInput = {
    id?: number
    userid: number
    type?: $Enums.notification_type
    message: string
    time?: Date | string
    roomid?: number | null
    transactionid?: number | null
  }

  export type notificationUpdateManyMutationInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transactionCreateInput = {
    type: $Enums.transaction_type
    amount: number
    wallet: walletCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: number
    walletid: number
    type: $Enums.transaction_type
    amount: number
  }

  export type transactionUpdateInput = {
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
    wallet?: walletUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    walletid?: IntFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type transactionCreateManyInput = {
    id?: number
    walletid: number
    type: $Enums.transaction_type
    amount: number
  }

  export type transactionUpdateManyMutationInput = {
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    walletid?: IntFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type roomCreateInput = {
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    chat?: chatCreateNestedManyWithoutRoomInput
    details?: detailsCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateInput = {
    id?: number
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    chat?: chatUncheckedCreateNestedManyWithoutRoomInput
    details?: detailsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomUpdateInput = {
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
    chat?: chatUpdateManyWithoutRoomNestedInput
    details?: detailsUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
    chat?: chatUncheckedUpdateManyWithoutRoomNestedInput
    details?: detailsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateManyInput = {
    id?: number
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
  }

  export type roomUpdateManyMutationInput = {
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
  }

  export type roomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
  }

  export type chatCreateInput = {
    playerid: number
    message: string
    time: Date | string
    room: roomCreateNestedOneWithoutChatInput
  }

  export type chatUncheckedCreateInput = {
    id?: number
    roomid: number
    playerid: number
    message: string
    time: Date | string
  }

  export type chatUpdateInput = {
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: roomUpdateOneRequiredWithoutChatNestedInput
  }

  export type chatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomid?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatCreateManyInput = {
    id?: number
    roomid: number
    playerid: number
    message: string
    time: Date | string
  }

  export type chatUpdateManyMutationInput = {
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomid?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailsCreateInput = {
    playerid: number
    move?: $Enums.room_move
    action?: $Enums.player_action
    bet: number
    time: Date | string
    room: roomCreateNestedOneWithoutDetailsInput
  }

  export type detailsUncheckedCreateInput = {
    id?: number
    roomid: number
    playerid: number
    move?: $Enums.room_move
    action?: $Enums.player_action
    bet: number
    time: Date | string
  }

  export type detailsUpdateInput = {
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: roomUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type detailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomid?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailsCreateManyInput = {
    id?: number
    roomid: number
    playerid: number
    move?: $Enums.room_move
    action?: $Enums.player_action
    bet: number
    time: Date | string
  }

  export type detailsUpdateManyMutationInput = {
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomid?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WalletNullableScalarRelationFilter = {
    is?: walletWhereInput | null
    isNot?: walletWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    status?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    status?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
    status?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    wins?: SortOrder
    matches?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type walletCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
  }

  export type walletAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
  }

  export type walletMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
  }

  export type walletMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
  }

  export type walletSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    userid?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Enumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    roomid?: SortOrder
    transactionid?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    roomid?: SortOrder
    transactionid?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    roomid?: SortOrder
    transactionid?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    roomid?: SortOrder
    transactionid?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    roomid?: SortOrder
    transactionid?: SortOrder
  }

  export type Enumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumtransaction_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_typeFilter<$PrismaModel> | $Enums.transaction_type
  }

  export type WalletScalarRelationFilter = {
    is?: walletWhereInput
    isNot?: walletWhereInput
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    walletid?: SortOrder
    type?: SortOrder
    amount?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    walletid?: SortOrder
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    walletid?: SortOrder
    type?: SortOrder
    amount?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    walletid?: SortOrder
    type?: SortOrder
    amount?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    id?: SortOrder
    walletid?: SortOrder
    amount?: SortOrder
  }

  export type Enumtransaction_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel> | $Enums.transaction_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_typeFilter<$PrismaModel>
    _max?: NestedEnumtransaction_typeFilter<$PrismaModel>
  }

  export type Enumroom_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusFilter<$PrismaModel> | $Enums.room_status
  }

  export type Enumroom_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.room_type | Enumroom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_typeFilter<$PrismaModel> | $Enums.room_type
  }

  export type Enummember_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.member_type | Enummember_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummember_typeFilter<$PrismaModel> | $Enums.member_type
  }

  export type EnumpaceFilter<$PrismaModel = never> = {
    equals?: $Enums.pace | EnumpaceFieldRefInput<$PrismaModel>
    in?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    not?: NestedEnumpaceFilter<$PrismaModel> | $Enums.pace
  }

  export type ChatListRelationFilter = {
    every?: chatWhereInput
    some?: chatWhereInput
    none?: chatWhereInput
  }

  export type DetailsListRelationFilter = {
    every?: detailsWhereInput
    some?: detailsWhereInput
    none?: detailsWhereInput
  }

  export type chatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomCountOrderByAggregateInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    status?: SortOrder
    room_type?: SortOrder
    blinds?: SortOrder
    member?: SortOrder
    roompace?: SortOrder
  }

  export type roomAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    blinds?: SortOrder
  }

  export type roomMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    status?: SortOrder
    room_type?: SortOrder
    blinds?: SortOrder
    member?: SortOrder
    roompace?: SortOrder
  }

  export type roomMinOrderByAggregateInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    status?: SortOrder
    room_type?: SortOrder
    blinds?: SortOrder
    member?: SortOrder
    roompace?: SortOrder
  }

  export type roomSumOrderByAggregateInput = {
    id?: SortOrder
    creatorid?: SortOrder
    highest_bid?: SortOrder
    blinds?: SortOrder
  }

  export type Enumroom_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusWithAggregatesFilter<$PrismaModel> | $Enums.room_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_statusFilter<$PrismaModel>
    _max?: NestedEnumroom_statusFilter<$PrismaModel>
  }

  export type Enumroom_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_type | Enumroom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_typeWithAggregatesFilter<$PrismaModel> | $Enums.room_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_typeFilter<$PrismaModel>
    _max?: NestedEnumroom_typeFilter<$PrismaModel>
  }

  export type Enummember_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_type | Enummember_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummember_typeWithAggregatesFilter<$PrismaModel> | $Enums.member_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummember_typeFilter<$PrismaModel>
    _max?: NestedEnummember_typeFilter<$PrismaModel>
  }

  export type EnumpaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pace | EnumpaceFieldRefInput<$PrismaModel>
    in?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    not?: NestedEnumpaceWithAggregatesFilter<$PrismaModel> | $Enums.pace
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaceFilter<$PrismaModel>
    _max?: NestedEnumpaceFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: roomWhereInput
    isNot?: roomWhereInput
  }

  export type chatCountOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    message?: SortOrder
    time?: SortOrder
  }

  export type chatAvgOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
  }

  export type chatMaxOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    message?: SortOrder
    time?: SortOrder
  }

  export type chatMinOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    message?: SortOrder
    time?: SortOrder
  }

  export type chatSumOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
  }

  export type Enumroom_moveFilter<$PrismaModel = never> = {
    equals?: $Enums.room_move | Enumroom_moveFieldRefInput<$PrismaModel>
    in?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_moveFilter<$PrismaModel> | $Enums.room_move
  }

  export type Enumplayer_actionFilter<$PrismaModel = never> = {
    equals?: $Enums.player_action | Enumplayer_actionFieldRefInput<$PrismaModel>
    in?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    notIn?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    not?: NestedEnumplayer_actionFilter<$PrismaModel> | $Enums.player_action
  }

  export type detailsCountOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    move?: SortOrder
    action?: SortOrder
    bet?: SortOrder
    time?: SortOrder
  }

  export type detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    bet?: SortOrder
  }

  export type detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    move?: SortOrder
    action?: SortOrder
    bet?: SortOrder
    time?: SortOrder
  }

  export type detailsMinOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    move?: SortOrder
    action?: SortOrder
    bet?: SortOrder
    time?: SortOrder
  }

  export type detailsSumOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    playerid?: SortOrder
    bet?: SortOrder
  }

  export type Enumroom_moveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_move | Enumroom_moveFieldRefInput<$PrismaModel>
    in?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_moveWithAggregatesFilter<$PrismaModel> | $Enums.room_move
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_moveFilter<$PrismaModel>
    _max?: NestedEnumroom_moveFilter<$PrismaModel>
  }

  export type Enumplayer_actionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.player_action | Enumplayer_actionFieldRefInput<$PrismaModel>
    in?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    notIn?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    not?: NestedEnumplayer_actionWithAggregatesFilter<$PrismaModel> | $Enums.player_action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplayer_actionFilter<$PrismaModel>
    _max?: NestedEnumplayer_actionFilter<$PrismaModel>
  }

  export type walletCreateNestedOneWithoutUserInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
    connectOrCreate?: walletCreateOrConnectWithoutUserInput
    connect?: walletWhereUniqueInput
  }

  export type notificationCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type walletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
    connectOrCreate?: walletCreateOrConnectWithoutUserInput
    connect?: walletWhereUniqueInput
  }

  export type notificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type walletUpdateOneWithoutUserNestedInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
    connectOrCreate?: walletCreateOrConnectWithoutUserInput
    upsert?: walletUpsertWithoutUserInput
    disconnect?: walletWhereInput | boolean
    delete?: walletWhereInput | boolean
    connect?: walletWhereUniqueInput
    update?: XOR<XOR<walletUpdateToOneWithWhereWithoutUserInput, walletUpdateWithoutUserInput>, walletUncheckedUpdateWithoutUserInput>
  }

  export type notificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type walletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
    connectOrCreate?: walletCreateOrConnectWithoutUserInput
    upsert?: walletUpsertWithoutUserInput
    disconnect?: walletWhereInput | boolean
    delete?: walletWhereInput | boolean
    connect?: walletWhereUniqueInput
    update?: XOR<XOR<walletUpdateToOneWithWhereWithoutUserInput, walletUpdateWithoutUserInput>, walletUncheckedUpdateWithoutUserInput>
  }

  export type notificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutWalletInput = {
    create?: XOR<userCreateWithoutWalletInput, userUncheckedCreateWithoutWalletInput>
    connectOrCreate?: userCreateOrConnectWithoutWalletInput
    connect?: userWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<transactionCreateWithoutWalletInput, transactionUncheckedCreateWithoutWalletInput> | transactionCreateWithoutWalletInput[] | transactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutWalletInput | transactionCreateOrConnectWithoutWalletInput[]
    createMany?: transactionCreateManyWalletInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<transactionCreateWithoutWalletInput, transactionUncheckedCreateWithoutWalletInput> | transactionCreateWithoutWalletInput[] | transactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutWalletInput | transactionCreateOrConnectWithoutWalletInput[]
    createMany?: transactionCreateManyWalletInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<userCreateWithoutWalletInput, userUncheckedCreateWithoutWalletInput>
    connectOrCreate?: userCreateOrConnectWithoutWalletInput
    upsert?: userUpsertWithoutWalletInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWalletInput, userUpdateWithoutWalletInput>, userUncheckedUpdateWithoutWalletInput>
  }

  export type transactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<transactionCreateWithoutWalletInput, transactionUncheckedCreateWithoutWalletInput> | transactionCreateWithoutWalletInput[] | transactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutWalletInput | transactionCreateOrConnectWithoutWalletInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutWalletInput | transactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: transactionCreateManyWalletInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutWalletInput | transactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutWalletInput | transactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<transactionCreateWithoutWalletInput, transactionUncheckedCreateWithoutWalletInput> | transactionCreateWithoutWalletInput[] | transactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutWalletInput | transactionCreateOrConnectWithoutWalletInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutWalletInput | transactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: transactionCreateManyWalletInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutWalletInput | transactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutWalletInput | transactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutNotificationInput = {
    create?: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationInput
    connect?: userWhereUniqueInput
  }

  export type Enumnotification_typeFieldUpdateOperationsInput = {
    set?: $Enums.notification_type
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationInput
    upsert?: userUpsertWithoutNotificationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotificationInput, userUpdateWithoutNotificationInput>, userUncheckedUpdateWithoutNotificationInput>
  }

  export type walletCreateNestedOneWithoutTransactionInput = {
    create?: XOR<walletCreateWithoutTransactionInput, walletUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: walletCreateOrConnectWithoutTransactionInput
    connect?: walletWhereUniqueInput
  }

  export type Enumtransaction_typeFieldUpdateOperationsInput = {
    set?: $Enums.transaction_type
  }

  export type walletUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<walletCreateWithoutTransactionInput, walletUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: walletCreateOrConnectWithoutTransactionInput
    upsert?: walletUpsertWithoutTransactionInput
    connect?: walletWhereUniqueInput
    update?: XOR<XOR<walletUpdateToOneWithWhereWithoutTransactionInput, walletUpdateWithoutTransactionInput>, walletUncheckedUpdateWithoutTransactionInput>
  }

  export type chatCreateNestedManyWithoutRoomInput = {
    create?: XOR<chatCreateWithoutRoomInput, chatUncheckedCreateWithoutRoomInput> | chatCreateWithoutRoomInput[] | chatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: chatCreateOrConnectWithoutRoomInput | chatCreateOrConnectWithoutRoomInput[]
    createMany?: chatCreateManyRoomInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type detailsCreateNestedManyWithoutRoomInput = {
    create?: XOR<detailsCreateWithoutRoomInput, detailsUncheckedCreateWithoutRoomInput> | detailsCreateWithoutRoomInput[] | detailsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: detailsCreateOrConnectWithoutRoomInput | detailsCreateOrConnectWithoutRoomInput[]
    createMany?: detailsCreateManyRoomInputEnvelope
    connect?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
  }

  export type chatUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<chatCreateWithoutRoomInput, chatUncheckedCreateWithoutRoomInput> | chatCreateWithoutRoomInput[] | chatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: chatCreateOrConnectWithoutRoomInput | chatCreateOrConnectWithoutRoomInput[]
    createMany?: chatCreateManyRoomInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type detailsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<detailsCreateWithoutRoomInput, detailsUncheckedCreateWithoutRoomInput> | detailsCreateWithoutRoomInput[] | detailsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: detailsCreateOrConnectWithoutRoomInput | detailsCreateOrConnectWithoutRoomInput[]
    createMany?: detailsCreateManyRoomInputEnvelope
    connect?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
  }

  export type Enumroom_statusFieldUpdateOperationsInput = {
    set?: $Enums.room_status
  }

  export type Enumroom_typeFieldUpdateOperationsInput = {
    set?: $Enums.room_type
  }

  export type Enummember_typeFieldUpdateOperationsInput = {
    set?: $Enums.member_type
  }

  export type EnumpaceFieldUpdateOperationsInput = {
    set?: $Enums.pace
  }

  export type chatUpdateManyWithoutRoomNestedInput = {
    create?: XOR<chatCreateWithoutRoomInput, chatUncheckedCreateWithoutRoomInput> | chatCreateWithoutRoomInput[] | chatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: chatCreateOrConnectWithoutRoomInput | chatCreateOrConnectWithoutRoomInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutRoomInput | chatUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: chatCreateManyRoomInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutRoomInput | chatUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: chatUpdateManyWithWhereWithoutRoomInput | chatUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type detailsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<detailsCreateWithoutRoomInput, detailsUncheckedCreateWithoutRoomInput> | detailsCreateWithoutRoomInput[] | detailsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: detailsCreateOrConnectWithoutRoomInput | detailsCreateOrConnectWithoutRoomInput[]
    upsert?: detailsUpsertWithWhereUniqueWithoutRoomInput | detailsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: detailsCreateManyRoomInputEnvelope
    set?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    disconnect?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    delete?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    connect?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    update?: detailsUpdateWithWhereUniqueWithoutRoomInput | detailsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: detailsUpdateManyWithWhereWithoutRoomInput | detailsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: detailsScalarWhereInput | detailsScalarWhereInput[]
  }

  export type chatUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<chatCreateWithoutRoomInput, chatUncheckedCreateWithoutRoomInput> | chatCreateWithoutRoomInput[] | chatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: chatCreateOrConnectWithoutRoomInput | chatCreateOrConnectWithoutRoomInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutRoomInput | chatUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: chatCreateManyRoomInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutRoomInput | chatUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: chatUpdateManyWithWhereWithoutRoomInput | chatUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type detailsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<detailsCreateWithoutRoomInput, detailsUncheckedCreateWithoutRoomInput> | detailsCreateWithoutRoomInput[] | detailsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: detailsCreateOrConnectWithoutRoomInput | detailsCreateOrConnectWithoutRoomInput[]
    upsert?: detailsUpsertWithWhereUniqueWithoutRoomInput | detailsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: detailsCreateManyRoomInputEnvelope
    set?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    disconnect?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    delete?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    connect?: detailsWhereUniqueInput | detailsWhereUniqueInput[]
    update?: detailsUpdateWithWhereUniqueWithoutRoomInput | detailsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: detailsUpdateManyWithWhereWithoutRoomInput | detailsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: detailsScalarWhereInput | detailsScalarWhereInput[]
  }

  export type roomCreateNestedOneWithoutChatInput = {
    create?: XOR<roomCreateWithoutChatInput, roomUncheckedCreateWithoutChatInput>
    connectOrCreate?: roomCreateOrConnectWithoutChatInput
    connect?: roomWhereUniqueInput
  }

  export type roomUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<roomCreateWithoutChatInput, roomUncheckedCreateWithoutChatInput>
    connectOrCreate?: roomCreateOrConnectWithoutChatInput
    upsert?: roomUpsertWithoutChatInput
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutChatInput, roomUpdateWithoutChatInput>, roomUncheckedUpdateWithoutChatInput>
  }

  export type roomCreateNestedOneWithoutDetailsInput = {
    create?: XOR<roomCreateWithoutDetailsInput, roomUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: roomCreateOrConnectWithoutDetailsInput
    connect?: roomWhereUniqueInput
  }

  export type Enumroom_moveFieldUpdateOperationsInput = {
    set?: $Enums.room_move
  }

  export type Enumplayer_actionFieldUpdateOperationsInput = {
    set?: $Enums.player_action
  }

  export type roomUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<roomCreateWithoutDetailsInput, roomUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: roomCreateOrConnectWithoutDetailsInput
    upsert?: roomUpsertWithoutDetailsInput
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutDetailsInput, roomUpdateWithoutDetailsInput>, roomUncheckedUpdateWithoutDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumtransaction_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_typeFilter<$PrismaModel> | $Enums.transaction_type
  }

  export type NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_type | Enumtransaction_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_type[] | ListEnumtransaction_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_typeWithAggregatesFilter<$PrismaModel> | $Enums.transaction_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_typeFilter<$PrismaModel>
    _max?: NestedEnumtransaction_typeFilter<$PrismaModel>
  }

  export type NestedEnumroom_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusFilter<$PrismaModel> | $Enums.room_status
  }

  export type NestedEnumroom_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.room_type | Enumroom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_typeFilter<$PrismaModel> | $Enums.room_type
  }

  export type NestedEnummember_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.member_type | Enummember_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummember_typeFilter<$PrismaModel> | $Enums.member_type
  }

  export type NestedEnumpaceFilter<$PrismaModel = never> = {
    equals?: $Enums.pace | EnumpaceFieldRefInput<$PrismaModel>
    in?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    not?: NestedEnumpaceFilter<$PrismaModel> | $Enums.pace
  }

  export type NestedEnumroom_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_status | Enumroom_statusFieldRefInput<$PrismaModel>
    in?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_status[] | ListEnumroom_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_statusWithAggregatesFilter<$PrismaModel> | $Enums.room_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_statusFilter<$PrismaModel>
    _max?: NestedEnumroom_statusFilter<$PrismaModel>
  }

  export type NestedEnumroom_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_type | Enumroom_typeFieldRefInput<$PrismaModel>
    in?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_type[] | ListEnumroom_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_typeWithAggregatesFilter<$PrismaModel> | $Enums.room_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_typeFilter<$PrismaModel>
    _max?: NestedEnumroom_typeFilter<$PrismaModel>
  }

  export type NestedEnummember_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.member_type | Enummember_typeFieldRefInput<$PrismaModel>
    in?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.member_type[] | ListEnummember_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummember_typeWithAggregatesFilter<$PrismaModel> | $Enums.member_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummember_typeFilter<$PrismaModel>
    _max?: NestedEnummember_typeFilter<$PrismaModel>
  }

  export type NestedEnumpaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pace | EnumpaceFieldRefInput<$PrismaModel>
    in?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.pace[] | ListEnumpaceFieldRefInput<$PrismaModel>
    not?: NestedEnumpaceWithAggregatesFilter<$PrismaModel> | $Enums.pace
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaceFilter<$PrismaModel>
    _max?: NestedEnumpaceFilter<$PrismaModel>
  }

  export type NestedEnumroom_moveFilter<$PrismaModel = never> = {
    equals?: $Enums.room_move | Enumroom_moveFieldRefInput<$PrismaModel>
    in?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_moveFilter<$PrismaModel> | $Enums.room_move
  }

  export type NestedEnumplayer_actionFilter<$PrismaModel = never> = {
    equals?: $Enums.player_action | Enumplayer_actionFieldRefInput<$PrismaModel>
    in?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    notIn?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    not?: NestedEnumplayer_actionFilter<$PrismaModel> | $Enums.player_action
  }

  export type NestedEnumroom_moveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.room_move | Enumroom_moveFieldRefInput<$PrismaModel>
    in?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    notIn?: $Enums.room_move[] | ListEnumroom_moveFieldRefInput<$PrismaModel>
    not?: NestedEnumroom_moveWithAggregatesFilter<$PrismaModel> | $Enums.room_move
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroom_moveFilter<$PrismaModel>
    _max?: NestedEnumroom_moveFilter<$PrismaModel>
  }

  export type NestedEnumplayer_actionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.player_action | Enumplayer_actionFieldRefInput<$PrismaModel>
    in?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    notIn?: $Enums.player_action[] | ListEnumplayer_actionFieldRefInput<$PrismaModel>
    not?: NestedEnumplayer_actionWithAggregatesFilter<$PrismaModel> | $Enums.player_action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumplayer_actionFilter<$PrismaModel>
    _max?: NestedEnumplayer_actionFilter<$PrismaModel>
  }

  export type walletCreateWithoutUserInput = {
    balance?: number
    transaction?: transactionCreateNestedManyWithoutWalletInput
  }

  export type walletUncheckedCreateWithoutUserInput = {
    id?: number
    balance?: number
    transaction?: transactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type walletCreateOrConnectWithoutUserInput = {
    where: walletWhereUniqueInput
    create: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
  }

  export type notificationCreateWithoutUserInput = {
    type?: $Enums.notification_type
    message: string
    time?: Date | string
    roomid?: number | null
    transactionid?: number | null
  }

  export type notificationUncheckedCreateWithoutUserInput = {
    id?: number
    type?: $Enums.notification_type
    message: string
    time?: Date | string
    roomid?: number | null
    transactionid?: number | null
  }

  export type notificationCreateOrConnectWithoutUserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationCreateManyUserInputEnvelope = {
    data: notificationCreateManyUserInput | notificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type walletUpsertWithoutUserInput = {
    update: XOR<walletUpdateWithoutUserInput, walletUncheckedUpdateWithoutUserInput>
    create: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
    where?: walletWhereInput
  }

  export type walletUpdateToOneWithWhereWithoutUserInput = {
    where?: walletWhereInput
    data: XOR<walletUpdateWithoutUserInput, walletUncheckedUpdateWithoutUserInput>
  }

  export type walletUpdateWithoutUserInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    transaction?: transactionUpdateManyWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transaction?: transactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type notificationUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: IntFilter<"notification"> | number
    userid?: IntFilter<"notification"> | number
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    message?: StringFilter<"notification"> | string
    time?: DateTimeFilter<"notification"> | Date | string
    roomid?: IntNullableFilter<"notification"> | number | null
    transactionid?: IntNullableFilter<"notification"> | number | null
  }

  export type userCreateWithoutWalletInput = {
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
    notification?: notificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutWalletInput = {
    id?: number
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutWalletInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWalletInput, userUncheckedCreateWithoutWalletInput>
  }

  export type transactionCreateWithoutWalletInput = {
    type: $Enums.transaction_type
    amount: number
  }

  export type transactionUncheckedCreateWithoutWalletInput = {
    id?: number
    type: $Enums.transaction_type
    amount: number
  }

  export type transactionCreateOrConnectWithoutWalletInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutWalletInput, transactionUncheckedCreateWithoutWalletInput>
  }

  export type transactionCreateManyWalletInputEnvelope = {
    data: transactionCreateManyWalletInput | transactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutWalletInput = {
    update: XOR<userUpdateWithoutWalletInput, userUncheckedUpdateWithoutWalletInput>
    create: XOR<userCreateWithoutWalletInput, userUncheckedCreateWithoutWalletInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWalletInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWalletInput, userUncheckedUpdateWithoutWalletInput>
  }

  export type userUpdateWithoutWalletInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    notification?: notificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type transactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutWalletInput, transactionUncheckedUpdateWithoutWalletInput>
    create: XOR<transactionCreateWithoutWalletInput, transactionUncheckedCreateWithoutWalletInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutWalletInput, transactionUncheckedUpdateWithoutWalletInput>
  }

  export type transactionUpdateManyWithWhereWithoutWalletInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: IntFilter<"transaction"> | number
    walletid?: IntFilter<"transaction"> | number
    type?: Enumtransaction_typeFilter<"transaction"> | $Enums.transaction_type
    amount?: IntFilter<"transaction"> | number
  }

  export type userCreateWithoutNotificationInput = {
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
    wallet?: walletCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutNotificationInput = {
    id?: number
    email: string
    password: string
    name: string
    wins?: number
    matches?: number
    status?: boolean
    wallet?: walletUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutNotificationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
  }

  export type userUpsertWithoutNotificationInput = {
    update: XOR<userUpdateWithoutNotificationInput, userUncheckedUpdateWithoutNotificationInput>
    create: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotificationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotificationInput, userUncheckedUpdateWithoutNotificationInput>
  }

  export type userUpdateWithoutNotificationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    matches?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type walletCreateWithoutTransactionInput = {
    balance?: number
    user: userCreateNestedOneWithoutWalletInput
  }

  export type walletUncheckedCreateWithoutTransactionInput = {
    id?: number
    balance?: number
    userid: number
  }

  export type walletCreateOrConnectWithoutTransactionInput = {
    where: walletWhereUniqueInput
    create: XOR<walletCreateWithoutTransactionInput, walletUncheckedCreateWithoutTransactionInput>
  }

  export type walletUpsertWithoutTransactionInput = {
    update: XOR<walletUpdateWithoutTransactionInput, walletUncheckedUpdateWithoutTransactionInput>
    create: XOR<walletCreateWithoutTransactionInput, walletUncheckedCreateWithoutTransactionInput>
    where?: walletWhereInput
  }

  export type walletUpdateToOneWithWhereWithoutTransactionInput = {
    where?: walletWhereInput
    data: XOR<walletUpdateWithoutTransactionInput, walletUncheckedUpdateWithoutTransactionInput>
  }

  export type walletUpdateWithoutTransactionInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type chatCreateWithoutRoomInput = {
    playerid: number
    message: string
    time: Date | string
  }

  export type chatUncheckedCreateWithoutRoomInput = {
    id?: number
    playerid: number
    message: string
    time: Date | string
  }

  export type chatCreateOrConnectWithoutRoomInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutRoomInput, chatUncheckedCreateWithoutRoomInput>
  }

  export type chatCreateManyRoomInputEnvelope = {
    data: chatCreateManyRoomInput | chatCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type detailsCreateWithoutRoomInput = {
    playerid: number
    move?: $Enums.room_move
    action?: $Enums.player_action
    bet: number
    time: Date | string
  }

  export type detailsUncheckedCreateWithoutRoomInput = {
    id?: number
    playerid: number
    move?: $Enums.room_move
    action?: $Enums.player_action
    bet: number
    time: Date | string
  }

  export type detailsCreateOrConnectWithoutRoomInput = {
    where: detailsWhereUniqueInput
    create: XOR<detailsCreateWithoutRoomInput, detailsUncheckedCreateWithoutRoomInput>
  }

  export type detailsCreateManyRoomInputEnvelope = {
    data: detailsCreateManyRoomInput | detailsCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type chatUpsertWithWhereUniqueWithoutRoomInput = {
    where: chatWhereUniqueInput
    update: XOR<chatUpdateWithoutRoomInput, chatUncheckedUpdateWithoutRoomInput>
    create: XOR<chatCreateWithoutRoomInput, chatUncheckedCreateWithoutRoomInput>
  }

  export type chatUpdateWithWhereUniqueWithoutRoomInput = {
    where: chatWhereUniqueInput
    data: XOR<chatUpdateWithoutRoomInput, chatUncheckedUpdateWithoutRoomInput>
  }

  export type chatUpdateManyWithWhereWithoutRoomInput = {
    where: chatScalarWhereInput
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutRoomInput>
  }

  export type chatScalarWhereInput = {
    AND?: chatScalarWhereInput | chatScalarWhereInput[]
    OR?: chatScalarWhereInput[]
    NOT?: chatScalarWhereInput | chatScalarWhereInput[]
    id?: IntFilter<"chat"> | number
    roomid?: IntFilter<"chat"> | number
    playerid?: IntFilter<"chat"> | number
    message?: StringFilter<"chat"> | string
    time?: DateTimeFilter<"chat"> | Date | string
  }

  export type detailsUpsertWithWhereUniqueWithoutRoomInput = {
    where: detailsWhereUniqueInput
    update: XOR<detailsUpdateWithoutRoomInput, detailsUncheckedUpdateWithoutRoomInput>
    create: XOR<detailsCreateWithoutRoomInput, detailsUncheckedCreateWithoutRoomInput>
  }

  export type detailsUpdateWithWhereUniqueWithoutRoomInput = {
    where: detailsWhereUniqueInput
    data: XOR<detailsUpdateWithoutRoomInput, detailsUncheckedUpdateWithoutRoomInput>
  }

  export type detailsUpdateManyWithWhereWithoutRoomInput = {
    where: detailsScalarWhereInput
    data: XOR<detailsUpdateManyMutationInput, detailsUncheckedUpdateManyWithoutRoomInput>
  }

  export type detailsScalarWhereInput = {
    AND?: detailsScalarWhereInput | detailsScalarWhereInput[]
    OR?: detailsScalarWhereInput[]
    NOT?: detailsScalarWhereInput | detailsScalarWhereInput[]
    id?: IntFilter<"details"> | number
    roomid?: IntFilter<"details"> | number
    playerid?: IntFilter<"details"> | number
    move?: Enumroom_moveFilter<"details"> | $Enums.room_move
    action?: Enumplayer_actionFilter<"details"> | $Enums.player_action
    bet?: IntFilter<"details"> | number
    time?: DateTimeFilter<"details"> | Date | string
  }

  export type roomCreateWithoutChatInput = {
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    details?: detailsCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutChatInput = {
    id?: number
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    details?: detailsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutChatInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutChatInput, roomUncheckedCreateWithoutChatInput>
  }

  export type roomUpsertWithoutChatInput = {
    update: XOR<roomUpdateWithoutChatInput, roomUncheckedUpdateWithoutChatInput>
    create: XOR<roomCreateWithoutChatInput, roomUncheckedCreateWithoutChatInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutChatInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutChatInput, roomUncheckedUpdateWithoutChatInput>
  }

  export type roomUpdateWithoutChatInput = {
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
    details?: detailsUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
    details?: detailsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateWithoutDetailsInput = {
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    chat?: chatCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutDetailsInput = {
    id?: number
    creatorid: number
    highest_bid?: number
    status?: $Enums.room_status
    room_type?: $Enums.room_type
    blinds: number
    member: $Enums.member_type
    roompace: $Enums.pace
    chat?: chatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutDetailsInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutDetailsInput, roomUncheckedCreateWithoutDetailsInput>
  }

  export type roomUpsertWithoutDetailsInput = {
    update: XOR<roomUpdateWithoutDetailsInput, roomUncheckedUpdateWithoutDetailsInput>
    create: XOR<roomCreateWithoutDetailsInput, roomUncheckedCreateWithoutDetailsInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutDetailsInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutDetailsInput, roomUncheckedUpdateWithoutDetailsInput>
  }

  export type roomUpdateWithoutDetailsInput = {
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
    chat?: chatUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorid?: IntFieldUpdateOperationsInput | number
    highest_bid?: IntFieldUpdateOperationsInput | number
    status?: Enumroom_statusFieldUpdateOperationsInput | $Enums.room_status
    room_type?: Enumroom_typeFieldUpdateOperationsInput | $Enums.room_type
    blinds?: IntFieldUpdateOperationsInput | number
    member?: Enummember_typeFieldUpdateOperationsInput | $Enums.member_type
    roompace?: EnumpaceFieldUpdateOperationsInput | $Enums.pace
    chat?: chatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type notificationCreateManyUserInput = {
    id?: number
    type?: $Enums.notification_type
    message: string
    time?: Date | string
    roomid?: number | null
    transactionid?: number | null
  }

  export type notificationUpdateWithoutUserInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    roomid?: NullableIntFieldUpdateOperationsInput | number | null
    transactionid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transactionCreateManyWalletInput = {
    id?: number
    type: $Enums.transaction_type
    amount: number
  }

  export type transactionUpdateWithoutWalletInput = {
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUncheckedUpdateWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUncheckedUpdateManyWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumtransaction_typeFieldUpdateOperationsInput | $Enums.transaction_type
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type chatCreateManyRoomInput = {
    id?: number
    playerid: number
    message: string
    time: Date | string
  }

  export type detailsCreateManyRoomInput = {
    id?: number
    playerid: number
    move?: $Enums.room_move
    action?: $Enums.player_action
    bet: number
    time: Date | string
  }

  export type chatUpdateWithoutRoomInput = {
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailsUpdateWithoutRoomInput = {
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailsUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailsUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerid?: IntFieldUpdateOperationsInput | number
    move?: Enumroom_moveFieldUpdateOperationsInput | $Enums.room_move
    action?: Enumplayer_actionFieldUpdateOperationsInput | $Enums.player_action
    bet?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}