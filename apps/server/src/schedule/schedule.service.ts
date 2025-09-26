import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
    private prisma = new PrismaClient();

    async findAll(routeId?: string, code?: string) {
        return this.prisma.schedule.findMany({
            where: {
                ...(routeId ? { routeId } : {}),
                ...(code ? { code: { contains: code, mode: 'insensitive' } } : {}),
            },
            include: { route: true },
            orderBy: { startTime: 'asc' },
        });
    }

    async findOne(id: string) {
        const data = await this.prisma.schedule.findUnique({
            where: { id },
            include: { route: true },
        });
        if (!data) throw new NotFoundException('Schedule tidak ditemukan');
        return data;
    }

    async create(dto: CreateScheduleDto) {
        return this.prisma.schedule.create({
            data: {
                id: uuidv4(),
                routeId: dto.routeId,
                startTime: dto.startTime,
                endTime: dto.endTime,
                code: dto.code,
            },
        });
    }

    async update(id: string, dto: UpdateScheduleDto) {
        return this.prisma.schedule.update({
            where: { id },
            data: dto,
        });
    }

    async remove(id: string) {
        return this.prisma.schedule.delete({
            where: { id },
        });
    }
}
