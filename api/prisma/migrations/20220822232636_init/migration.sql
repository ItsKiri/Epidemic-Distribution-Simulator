/*
  Warnings:

  - You are about to drop the column `condition` on the `TodoItem` table. All the data in the column will be lost.
  - Added the required column `confition` to the `TodoItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TodoItem` DROP COLUMN `condition`,
    ADD COLUMN `confition` VARCHAR(255) NOT NULL;
