-- CreateTable
CREATE TABLE `Student` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `dni` VARCHAR(191) NOT NULL,
    `roadType` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nameVLC` VARCHAR(191) NOT NULL,
    `nameCAS` VARCHAR(191) NOT NULL,
    `troncal` BOOLEAN NOT NULL,

    UNIQUE INDEX `Subject_nameVLC_key`(`nameVLC`),
    UNIQUE INDEX `Subject_nameCAS_key`(`nameCAS`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
