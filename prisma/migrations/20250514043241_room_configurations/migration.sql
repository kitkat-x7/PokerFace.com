/*
  Warnings:

  - You are about to drop the column `start_time` on the `room` table. All the data in the column will be lost.
  - Added the required column `blinds` to the `room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member` to the `room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roompace` to the `room` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "member_type" AS ENUM ('Shorthand', 'Longhand');

-- CreateEnum
CREATE TYPE "pace" AS ENUM ('Fast', 'Standard');

-- AlterEnum
ALTER TYPE "room_status" ADD VALUE 'Halt';

-- AlterTable
ALTER TABLE "room" DROP COLUMN "start_time",
ADD COLUMN     "blinds" INTEGER NOT NULL,
ADD COLUMN     "member" "member_type" NOT NULL,
ADD COLUMN     "roompace" "pace" NOT NULL;
