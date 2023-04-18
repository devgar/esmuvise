/*
  Warnings:

  - The primary key for the `student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `student` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.
  - The primary key for the `subject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `subject` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.

*/
-- AlterTable
ALTER TABLE `student` DROP PRIMARY KEY,
    MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `dni` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `roadType` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `address` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `postalCode` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `city` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `telephone` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `birthDate` DATETIME(3) NULL,
    MODIFY `sex` VARCHAR(191) NOT NULL DEFAULT '',
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `subject` DROP PRIMARY KEY,
    MODIFY `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `troncal` BOOLEAN NOT NULL DEFAULT false,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Enrollment` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `course` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` BIGINT UNSIGNED NOT NULL,
    `subjectId` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `Enrollment_id_year_studentId_subjectId_key`(`id`, `year`, `studentId`, `subjectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
