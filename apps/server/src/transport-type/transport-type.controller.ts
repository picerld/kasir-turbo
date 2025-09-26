import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TransportTypeService } from './transport-type.service';
import { CreateTransportTypeDto } from './dto/create-transport-type.dto';
import { UpdateTransportTypeDto } from './dto/update-transport-type.dto';

@Controller('transport-types')
export class TransportTypeController {
  constructor(private readonly service: TransportTypeService) { }

  // GET /transport-types?name=
  @Get()
  async findAll(@Query('name') name?: string) {
    const data = await this.service.findAll(name);
    return {
      code: 200,
      success: true,
      message: 'Sukses mengambil data transport-type',
      data,
    };
  }

  // GET /transport-types/:id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    return {
      code: 200,
      success: true,
      message: 'Sukses mengambil detail transport-type',
      data,
    };
  }

  // POST /transport-types
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreateTransportTypeDto) {
    const data = await this.service.create(dto);
    return {
      code: 201,
      success: true,
      message: 'Transport-type berhasil dibuat',
      data,
    };
  }

  // PUT /transport-types/:id
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(@Param('id') id: string, @Body() dto: UpdateTransportTypeDto) {
    const data = await this.service.update(id, dto);
    return {
      code: 200,
      success: true,
      message: 'Transport-type berhasil diperbarui',
      data,
    };
  }

  // DELETE /transport-types/:id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);
    return {
      code: 200,
      success: true,
      message: 'Transport-type berhasil dihapus',
      data,
    };
  }
}
