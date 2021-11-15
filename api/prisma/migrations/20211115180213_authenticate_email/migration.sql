/*
  Warnings:

  - A unique constraint covering the columns `[em_user]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_em_user_key" ON "User"("em_user");
