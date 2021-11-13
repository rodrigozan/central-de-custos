-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "nm_user" VARCHAR(256) NOT NULL,
    "of_user" VARCHAR(256) NOT NULL,
    "department_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Department" (
    "id_department" SERIAL NOT NULL,
    "nm_department" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id_department")
);

-- CreateTable
CREATE TABLE "CostsCentral" (
    "id_costs_central" SERIAL NOT NULL,
    "nm_costs_central" VARCHAR(256) NOT NULL,
    "de_costs_central" VARCHAR(256) NOT NULL,
    "pr_costs_central" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CostsCentral_pkey" PRIMARY KEY ("id_costs_central")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id_department") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostsCentral" ADD CONSTRAINT "CostsCentral_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CostsCentral" ADD CONSTRAINT "CostsCentral_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id_department") ON DELETE RESTRICT ON UPDATE CASCADE;
