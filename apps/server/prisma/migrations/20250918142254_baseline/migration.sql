/*
  Warnings:

  - The primary key for the `Operator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Route` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `operatorId` column on the `Route` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Schedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Stop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StopRoute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TransportType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Operator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Route` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `transportTypeId` on the `Route` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `routeId` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `departureTime` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `arrivalTime` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dayOfWeek` on the `Schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Stop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `StopRoute` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `routeId` on the `StopRoute` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `stopId` on the `StopRoute` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `TransportType` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."Route" DROP CONSTRAINT "Route_operatorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Route" DROP CONSTRAINT "Route_transportTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Schedule" DROP CONSTRAINT "Schedule_routeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."StopRoute" DROP CONSTRAINT "StopRoute_routeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."StopRoute" DROP CONSTRAINT "StopRoute_stopId_fkey";

-- AlterTable
ALTER TABLE "public"."Operator" DROP CONSTRAINT "Operator_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Operator_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Route" DROP CONSTRAINT "Route_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "transportTypeId",
ADD COLUMN     "transportTypeId" UUID NOT NULL,
DROP COLUMN "operatorId",
ADD COLUMN     "operatorId" UUID,
ADD CONSTRAINT "Route_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Schedule" DROP CONSTRAINT "Schedule_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "routeId",
ADD COLUMN     "routeId" UUID NOT NULL,
DROP COLUMN "departureTime",
ADD COLUMN     "departureTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "arrivalTime",
ADD COLUMN     "arrivalTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dayOfWeek",
ADD COLUMN     "dayOfWeek" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Schedule_id_seq";

-- AlterTable
ALTER TABLE "public"."Stop" DROP CONSTRAINT "Stop_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Stop_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."StopRoute" DROP CONSTRAINT "StopRoute_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "routeId",
ADD COLUMN     "routeId" UUID NOT NULL,
DROP COLUMN "stopId",
ADD COLUMN     "stopId" UUID NOT NULL,
ADD CONSTRAINT "StopRoute_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."TransportType" DROP CONSTRAINT "TransportType_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "TransportType_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "Route_transportTypeId_idx" ON "public"."Route"("transportTypeId");

-- CreateIndex
CREATE INDEX "Route_operatorId_idx" ON "public"."Route"("operatorId");

-- CreateIndex
CREATE INDEX "Schedule_routeId_idx" ON "public"."Schedule"("routeId");

-- CreateIndex
CREATE INDEX "Schedule_dayOfWeek_idx" ON "public"."Schedule"("dayOfWeek");

-- CreateIndex
CREATE INDEX "StopRoute_routeId_idx" ON "public"."StopRoute"("routeId");

-- CreateIndex
CREATE INDEX "StopRoute_stopId_idx" ON "public"."StopRoute"("stopId");

-- CreateIndex
CREATE UNIQUE INDEX "StopRoute_routeId_stopId_key" ON "public"."StopRoute"("routeId", "stopId");

-- AddForeignKey
ALTER TABLE "public"."Route" ADD CONSTRAINT "Route_transportTypeId_fkey" FOREIGN KEY ("transportTypeId") REFERENCES "public"."TransportType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Route" ADD CONSTRAINT "Route_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "public"."Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StopRoute" ADD CONSTRAINT "StopRoute_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "public"."Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StopRoute" ADD CONSTRAINT "StopRoute_stopId_fkey" FOREIGN KEY ("stopId") REFERENCES "public"."Stop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Schedule" ADD CONSTRAINT "Schedule_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "public"."Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
