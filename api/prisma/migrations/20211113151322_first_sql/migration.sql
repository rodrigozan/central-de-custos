-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "nm_user" VARCHAR(256) NOT NULL,
    "office_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Office" (
    "id_office" SERIAL NOT NULL,
    "nm_office" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Office_pkey" PRIMARY KEY ("id_office")
);

-- CreateTable
CREATE TABLE "Department" (
    "id_department" SERIAL NOT NULL,
    "nm_department" VARCHAR(256) NOT NULL,
    "costs_central_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id_department")
);

-- CreateTable
CREATE TABLE "CostsCentral" (
    "id_costs_central" SERIAL NOT NULL,
    "nm_costs_central" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CostsCentral_pkey" PRIMARY KEY ("id_costs_central")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_office_id_fkey" FOREIGN KEY ("office_id") REFERENCES "Office"("id_office") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id_department") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_costs_central_id_fkey" FOREIGN KEY ("costs_central_id") REFERENCES "CostsCentral"("id_costs_central") ON DELETE RESTRICT ON UPDATE CASCADE;
