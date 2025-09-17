-- CreateTable
CREATE TABLE "public"."TransportType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TransportType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Operator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Route" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "transportTypeId" INTEGER NOT NULL,
    "operatorId" INTEGER,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Stop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Stop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StopRoute" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "stopId" INTEGER NOT NULL,
    "stopOrder" INTEGER NOT NULL,

    CONSTRAINT "StopRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Schedule" (
    "id" SERIAL NOT NULL,
    "routeId" INTEGER NOT NULL,
    "departureTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "dayOfWeek" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransportType_name_key" ON "public"."TransportType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Operator_name_key" ON "public"."Operator"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Route_code_key" ON "public"."Route"("code");

-- CreateIndex
CREATE INDEX "Route_transportTypeId_idx" ON "public"."Route"("transportTypeId");

-- CreateIndex
CREATE INDEX "Route_operatorId_idx" ON "public"."Route"("operatorId");

-- CreateIndex
CREATE INDEX "Stop_name_idx" ON "public"."Stop"("name");

-- CreateIndex
CREATE INDEX "Stop_type_idx" ON "public"."Stop"("type");

-- CreateIndex
CREATE INDEX "StopRoute_routeId_idx" ON "public"."StopRoute"("routeId");

-- CreateIndex
CREATE INDEX "StopRoute_stopId_idx" ON "public"."StopRoute"("stopId");

-- CreateIndex
CREATE UNIQUE INDEX "StopRoute_routeId_stopId_key" ON "public"."StopRoute"("routeId", "stopId");

-- CreateIndex
CREATE INDEX "Schedule_routeId_idx" ON "public"."Schedule"("routeId");

-- CreateIndex
CREATE INDEX "Schedule_dayOfWeek_idx" ON "public"."Schedule"("dayOfWeek");

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
