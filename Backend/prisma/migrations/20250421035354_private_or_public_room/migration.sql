-- CreateEnum
CREATE TYPE "room_type" AS ENUM ('Private', 'Public');

-- AlterTable
ALTER TABLE "room" ADD COLUMN     "room_type" "room_type" NOT NULL DEFAULT 'Public';
