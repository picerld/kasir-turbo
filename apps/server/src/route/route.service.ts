import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RouteService {
    private prisma = new PrismaClient();

    async findAll(filters?: { transportTypeId?: string; name?: string; code?: string }) {
        const where: any = {};

        if (filters?.transportTypeId) where.transportTypeId = filters.transportTypeId;
        if (filters?.name) {
            where.name = { contains: filters.name, mode: 'insensitive' };
        }
        if (filters?.code) {
            where.code = { contains: filters.code, mode: 'insensitive' };
        }

        return this.prisma.route.findMany({
            where,
            include: {
                transportType: true,
                operator: true,
                stops: true,
                schedules: true,
            },
        });
    }

    async findOne(id: string) {
        return this.prisma.route.findUnique({
            where: { id },
            include: {
                transportType: true,
                operator: true,
                stops: true,
                schedules: true,
            },
        });
    }

    async create(data: CreateRouteDto) {
        return this.prisma.route.create({
            data: {
                id: uuidv4(),
                ...data,
            },
        });
    }

    async update(id: string, data: UpdateRouteDto) {
        return this.prisma.route.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.route.delete({
            where: { id },
        });
    }
}
