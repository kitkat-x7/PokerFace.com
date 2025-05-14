
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  wins: 'wins',
  matches: 'matches',
  status: 'status'
};

exports.Prisma.WalletScalarFieldEnum = {
  id: 'id',
  balance: 'balance',
  userid: 'userid'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  type: 'type',
  message: 'message',
  time: 'time',
  roomid: 'roomid',
  transactionid: 'transactionid'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  walletid: 'walletid',
  type: 'type',
  amount: 'amount'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  creatorid: 'creatorid',
  highest_bid: 'highest_bid',
  status: 'status',
  room_type: 'room_type',
  blinds: 'blinds',
  member: 'member',
  roompace: 'roompace'
};

exports.Prisma.ChatScalarFieldEnum = {
  id: 'id',
  roomid: 'roomid',
  playerid: 'playerid',
  message: 'message',
  time: 'time'
};

exports.Prisma.DetailsScalarFieldEnum = {
  id: 'id',
  roomid: 'roomid',
  playerid: 'playerid',
  move: 'move',
  action: 'action',
  bet: 'bet',
  time: 'time'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.notification_type = exports.$Enums.notification_type = {
  Invite: 'Invite',
  Credit: 'Credit',
  Debit: 'Debit',
  General: 'General'
};

exports.transaction_type = exports.$Enums.transaction_type = {
  Credit: 'Credit',
  Debit: 'Debit'
};

exports.room_status = exports.$Enums.room_status = {
  Not_Started: 'Not_Started',
  Live: 'Live',
  Completed: 'Completed',
  Halt: 'Halt'
};

exports.room_type = exports.$Enums.room_type = {
  Private: 'Private',
  Public: 'Public'
};

exports.member_type = exports.$Enums.member_type = {
  Shorthand: 'Shorthand',
  Longhand: 'Longhand'
};

exports.pace = exports.$Enums.pace = {
  Fast: 'Fast',
  Standard: 'Standard'
};

exports.room_move = exports.$Enums.room_move = {
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

exports.player_action = exports.$Enums.player_action = {
  NotStarted: 'NotStarted',
  Fold: 'Fold',
  Check: 'Check',
  Call: 'Call',
  Raise: 'Raise',
  AllIn: 'AllIn'
};

exports.Prisma.ModelName = {
  user: 'user',
  wallet: 'wallet',
  notification: 'notification',
  transaction: 'transaction',
  room: 'room',
  chat: 'chat',
  details: 'details'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
