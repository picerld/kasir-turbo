import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { OperatorService } from './operator.service';
import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';

@Controller('operators')
export class OperatorController {
  constructor(private readonly service: OperatorService) { }

  // GET /operators?name=damri
  @Get()
  async findAll(@Query('name') name?: string) {
    const data = await this.service.findAll(name);
    return {
      code: 200,
      success: true,
      message: 'Sukses mengambil data',
      data,
    };
  }

  // GET /operators/:id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    if (!data) {
      throw new HttpException('Data tidak ditemukan', HttpStatus.NOT_FOUND);
    }
    return {
      code: 200,
      success: true,
      message: 'Sukses mengambil data',
      data,
    };
  }

  // POST /operators
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreateOperatorDto) {
    const data = await this.service.create(dto);
    return {
      code: 201,
      success: true,
      message: 'Data berhasil dibuat',
      data,
    };
  }

  // PUT /operators/:id
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(@Param('id') id: string, @Body() dto: UpdateOperatorDto) {
    const data = await this.service.update(id, dto);
    return {
      code: 200,
      success: true,
      message: 'Data berhasil diperbarui',
      data,
    };
  }

  // DELETE /operators/:id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);
    return {
      code: 200,
      success: true,
      message: 'Data berhasil dihapus',
      data,
    };
  }
}
