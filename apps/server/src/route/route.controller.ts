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
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('routes')
export class RouteController {
    constructor(private readonly service: RouteService) { }

    // GET /routes?transportTypeId=uuid&name=Cicalengka - Padalarang&code=B
    @Get()
    async findAll(
        @Query('transportTypeId') transportTypeId?: string,
        @Query('name') name?: string,
        @Query('code') code?: string,
    ) {
        const data = await this.service.findAll({ transportTypeId, name, code });
        return {
            code: 200,
            success: true,
            message: 'Sukses mengambil data',
            data,
        };
    }

    // GET /routes/:id
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

    // POST /routes
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() dto: CreateRouteDto) {
        const data = await this.service.create(dto);
        return {
            code: 201,
            success: true,
            message: 'Data berhasil dibuat',
            data,
        };
    }

    // PUT /routes/:id
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async update(@Param('id') id: string, @Body() dto: UpdateRouteDto) {
        const data = await this.service.update(id, dto);
        return {
            code: 200,
            success: true,
            message: 'Data berhasil diperbarui',
            data,
        };
    }
    
    // DELETE /routes/:id
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
