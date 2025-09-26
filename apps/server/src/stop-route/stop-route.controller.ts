import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StopRouteService } from './stop-route.service';
import { CreateStopRouteDto } from './dto/create-stop-route.dto';
import { UpdateStopRouteDto } from './dto/update-stop-route.dto';

@Controller('stop-routes')
export class StopRouteController {
  constructor(private readonly service: StopRouteService) {}

  // GET /stop-routes?routeId=uuid&stopId=uuid
  @Get()
  async findAll(
    @Query('routeId') routeId?: string,
    @Query('stopId') stopId?: string,
  ) {
    const data = await this.service.findAll(routeId, stopId);
    return {
      code: 200,
      success: true,
      message: 'Sukses mengambil data stop-route',
      data,
    };
  }

  // GET /stop-routes/:id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    return {
      code: 200,
      success: true,
      message: 'Sukses mengambil detail stop-route',
      data,
    };
  }

  // POST /stop-routes
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreateStopRouteDto) {
    const data = await this.service.create(dto);
    return {
      code: 201,
      success: true,
      message: 'Stop-route berhasil dibuat',
      data,
    };
  }

  // PUT /stop-routes/:id
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(@Param('id') id: string, @Body() dto: UpdateStopRouteDto) {
    const data = await this.service.update(id, dto);
    return {
      code: 200,
      success: true,
      message: 'Stop-route berhasil diperbarui',
      data,
    };
  }

  // DELETE /stop-routes/:id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);
    return {
      code: 200,
      success: true,
      message: 'Stop-route berhasil dihapus',
      data,
    };
  }
}
