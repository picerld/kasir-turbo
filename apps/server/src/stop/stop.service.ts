import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreateStopDto } from './dto/create-stop.dto';
import { UpdateStopDto } from './dto/update-stop.dto';

@Injectable()
export class StopService {
    private prisma = new PrismaClient();

    async findAll(filters?: { type?: string; name?: string }) {
        const where: any = {};
        if (filters?.type) where.type = filters.type;
        if (filters?.name) where.name = { contains: filters.name, mode: 'insensitive' };

        return this.prisma.stop.findMany({
            where,
            include: {
                routes: { include: { route: true } },
                ScheduleStop: true,
            },
        });
    }

    async findOne(id: string) {
        return this.prisma.stop.findUnique({
            where: { id },
            include: {
                routes: { include: { route: true } },
                ScheduleStop: true,
            },
        });
    }

    async create(data: CreateStopDto) {
        return this.prisma.stop.create({
            data: {
                id: uuidv4(),
                ...data,
            },
        });
    }

    async update(id: string, data: UpdateStopDto) {
        return this.prisma.stop.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.stop.delete({
            where: { id },
        });
    }
}
