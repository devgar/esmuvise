/*
  Warnings:

  - You are about to drop the column `starsAt` on the `evaluation` table. All the data in the column will be lost.
  - Added the required column `startsAt` to the `Evaluation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `evaluation` DROP COLUMN `starsAt`,
    ADD COLUMN `startsAt` DATETIME(3) NOT NULL;
