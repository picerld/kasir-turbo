import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto';

@Injectable()
export class TransportTypeService {
  private prisma = new PrismaClient();

  async findAll(name?: string) {
    return this.prisma.transportType.findMany({
      where: {
        ...(name ? { name: { contains: name, mode: 'insensitive' } } : {}),
      },
      include: {
        routes: true,

      },
    });
  }

  async findOne(id: string) {
    const data = await this.prisma.transportType.findUnique({
      where: { id },
      include: { routes: true },
    });
    if (!data) throw new NotFoundException('TransportType tidak ditemukan');
    return data;
  }

  async create(dto: CreateTransportTypeDto) {
    return this.prisma.transportType.create({
      data: {
        id: uuidv4(),
        name: dto.name,
        description: dto.description,
      },
    });
  }

  async update(id: string, dto: UpdateTransportTypeDto) {
    return this.prisma.transportType.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.transportType.delete({
      where: { id },
    });
  }
}
