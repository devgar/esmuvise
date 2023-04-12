-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "roadtype" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "sex" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "nameVLC" TEXT NOT NULL,
    "nameCAS" TEXT NOT NULL,
    "troncal" BOOLEAN NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_nameVLC_key" ON "Subject"("nameVLC");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_nameCAS_key" ON "Subject"("nameCAS");
