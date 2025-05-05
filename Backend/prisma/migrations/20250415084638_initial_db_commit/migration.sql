-- CreateEnum
CREATE TYPE "notification_type" AS ENUM ('Invite', 'Credit', 'Debit', 'General');

-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('Credit', 'Debit');

-- CreateEnum
CREATE TYPE "room_status" AS ENUM ('Not_Started', 'Live', 'Completed');

-- CreateEnum
CREATE TYPE "room_move" AS ENUM ('NotStarted', 'Dealer', 'SmallBlind', 'BigBlind', 'HoleCards', 'PreFlop', 'Flop', 'PreTurn', 'Turn', 'PreRiver', 'River', 'PreShowdown', 'Showdown');

-- CreateEnum
CREATE TYPE "player_action" AS ENUM ('NotStarted', 'Fold', 'Check', 'Call', 'Raise', 'AllIn');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "matches" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "id" SERIAL NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "type" "notification_type" NOT NULL DEFAULT 'General',
    "message" TEXT NOT NULL,
    "roomid" INTEGER,
    "transactionid" INTEGER,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "walletid" INTEGER NOT NULL,
    "type" "transaction_type" NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "creatorid" INTEGER NOT NULL,
    "highest_bid" INTEGER NOT NULL DEFAULT 0,
    "status" "room_status" NOT NULL DEFAULT 'Not_Started',
    "start_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "roomid" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL,
    "message" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "details" (
    "id" SERIAL NOT NULL,
    "roomid" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL,
    "move" "room_move" NOT NULL DEFAULT 'NotStarted',
    "action" "player_action" NOT NULL DEFAULT 'NotStarted',
    "bet" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "wallet_userid_key" ON "wallet"("userid");

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_walletid_fkey" FOREIGN KEY ("walletid") REFERENCES "wallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "details" ADD CONSTRAINT "details_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
