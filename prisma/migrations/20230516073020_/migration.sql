-- CreateTable
CREATE TABLE `vendor` (
    `vendorID` INTEGER NOT NULL AUTO_INCREMENT,
    `vendorName` VARCHAR(191) NULL,
    `vendorAddress` VARCHAR(191) NULL,
    `vendorStatus` VARCHAR(191) NULL,

    PRIMARY KEY (`vendorID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
