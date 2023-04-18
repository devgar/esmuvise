/*
  Warnings:

  - Added the required column `rubricGroupId` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subject` ADD COLUMN `rubricGroupId` BIGINT UNSIGNED NOT NULL;

-- CreateTable
CREATE TABLE `Equivalence` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `max` INTEGER NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RubricGroup` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rubric` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `concept` VARCHAR(191) NOT NULL,
    `vHigh` VARCHAR(191) NOT NULL,
    `vMid` VARCHAR(191) NOT NULL,
    `vLow` VARCHAR(191) NOT NULL,
    `vFail` VARCHAR(191) NOT NULL,
    `rubricGroupId` BIGINT UNSIGNED NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evaluation` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `quarter` INTEGER NOT NULL,
    `starsAt` DATETIME(3) NOT NULL,
    `endsAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EvaluationItem` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `value` INTEGER NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `studentId` BIGINT UNSIGNED NOT NULL,
    `subjectId` BIGINT UNSIGNED NOT NULL,
    `rubricId` BIGINT UNSIGNED NOT NULL,
    `enrollmentId` BIGINT UNSIGNED NOT NULL,
    `evaluationId` BIGINT UNSIGNED NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
