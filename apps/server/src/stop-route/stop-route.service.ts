import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreateStopRouteDto } from './dto/create-stop-route.dto';
import { UpdateStopRouteDto } from './dto/update-stop-route.dto';

@Injectable()
export class StopRouteService {
  private prisma = new PrismaClient();

  async findAll(routeId?: string, stopId?: string) {
    return this.prisma.stopRoute.findMany({
      where: {
        ...(routeId ? { routeId } : {}),
        ...(stopId ? { stopId } : {}),
      },
      include: {
        route: true,
        stop: true,
      },
      orderBy: { stopOrder: 'asc' },
    });
  }

  async findOne(id: string) {
    const data = await this.prisma.stopRoute.findUnique({
      where: { id },
      include: { route: true, stop: true },
    });
    if (!data) throw new NotFoundException('StopRoute tidak ditemukan');
    return data;
  }

  async create(dto: CreateStopRouteDto) {
    return this.prisma.stopRoute.create({
      data: {
        id: uuidv4(),
        routeId: dto.routeId,
        stopId: dto.stopId,
        stopOrder: dto.stopOrder,
      },
    });
  }

  async update(id: string, dto: UpdateStopRouteDto) {
    return this.prisma.stopRoute.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.stopRoute.delete({
      where: { id },
    });
  }
}
