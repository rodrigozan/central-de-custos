-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "nm_user" VARCHAR(255) NOT NULL,
    "of_user" VARCHAR(255) NOT NULL,
    "department_id" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Department" (
    "id_department" SERIAL NOT NULL,
    "nm_department" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id_department")
);

-- CreateTable
CREATE TABLE "CostsCentral" (
    "id_costs_central" SERIAL NOT NULL,
    "nm_costs_central" VARCHAR(255) NOT NULL,
    "dc_costs_central" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostsCentral_pkey" PRIMARY KEY ("id_costs_central")
);

-- CreateTable
CREATE TABLE "_DepartmentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CostsCentralToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CostsCentralToDepartment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentToUser_AB_unique" ON "_DepartmentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentToUser_B_index" ON "_DepartmentToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CostsCentralToUser_AB_unique" ON "_CostsCentralToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CostsCentralToUser_B_index" ON "_CostsCentralToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CostsCentralToDepartment_AB_unique" ON "_CostsCentralToDepartment"("A", "B");

-- CreateIndex
CREATE INDEX "_CostsCentralToDepartment_B_index" ON "_CostsCentralToDepartment"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id_department") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostsCentral" ADD CONSTRAINT "CostsCentral_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostsCentral" ADD CONSTRAINT "CostsCentral_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id_department") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToUser" ADD FOREIGN KEY ("A") REFERENCES "Department"("id_department") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CostsCentralToUser" ADD FOREIGN KEY ("A") REFERENCES "CostsCentral"("id_costs_central") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CostsCentralToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CostsCentralToDepartment" ADD FOREIGN KEY ("A") REFERENCES "CostsCentral"("id_costs_central") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CostsCentralToDepartment" ADD FOREIGN KEY ("B") REFERENCES "Department"("id_department") ON DELETE CASCADE ON UPDATE CASCADE;
