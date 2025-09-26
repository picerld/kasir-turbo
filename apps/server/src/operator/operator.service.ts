import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OperatorService {
  private prisma = new PrismaClient();

  async findAll(name?: string) {
    return this.prisma.operator.findMany({
      where: name
        ? {
            name: {
              contains: name,
              mode: 'insensitive', // case-insensitive search
            },
          }
        : undefined,
    });
  }

  async findOne(id: string) {
    return this.prisma.operator.findUnique({
      where: { id },
    });
  }

  async create(data: { name: string; contactInfo?: string }) {
    return this.prisma.operator.create({
      data: {
        id: uuidv4(),
        name: data.name,
        contactInfo: data.contactInfo,
      },
    });
  }

  async update(id: string, data: { name?: string; contactInfo?: string }) {
    return this.prisma.operator.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.operator.delete({
      where: { id },
    });
  }
}
