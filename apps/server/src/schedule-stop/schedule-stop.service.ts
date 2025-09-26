import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreateScheduleStopDto } from './dto/create-schedule-stop.dto';
import { UpdateScheduleStopDto } from './dto/update-schedule-stop.dto';

@Injectable()
export class ScheduleStopService {
    private prisma = new PrismaClient();

    async findAll(scheduleId?: string, stopId?: string) {
        return this.prisma.scheduleStop.findMany({
            where: {
                ...(scheduleId ? { scheduleId } : {}),
                ...(stopId ? { stopId } : {}),
            },
            include: { stop: true },
            orderBy: { stopOrder: 'asc' },
        });
    }

    async findOne(id: string) {
        const data = await this.prisma.scheduleStop.findUnique({
            where: { id },
            include: { stop: true },
        });
        if (!data) throw new NotFoundException('ScheduleStop tidak ditemukan');
        return data;
    }

    async create(dto: CreateScheduleStopDto) {
        return this.prisma.scheduleStop.create({
            data: {
                id: uuidv4(),
                scheduleId: dto.scheduleId,
                stopId: dto.stopId,
                stopOrder: dto.stopOrder,
                arrivalTime: dto.arrivalTime,
                departureTime: dto.departureTime,
            },
        });
    }

    async update(id: string, dto: UpdateScheduleStopDto) {
        return this.prisma.scheduleStop.update({
            where: { id },
            data: dto,
        });
    }

    async remove(id: string) {
        return this.prisma.scheduleStop.delete({
            where: { id },
        });
    }
}
