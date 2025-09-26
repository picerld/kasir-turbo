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
import { StopService } from './stop.service';
import { CreateStopDto } from './dto/create-stop.dto';
import { UpdateStopDto } from './dto/update-stop.dto';

@Controller('stops')
export class StopController {
    constructor(private readonly service: StopService) { }

    // GET /stops?type=Halte Bus&name=Batas Kota Cibereum
    @Get()
    async findAll(
        @Query('type') type?: string,
        @Query('name') name?: string,
    ) {
        const data = await this.service.findAll({ type, name });
        return {
            code: 200,
            success: true,
            message: 'Sukses mengambil data stop',
            data,
        };
    }

    // GET /stops/:id
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const data = await this.service.findOne(id);
        if (!data) {
            throw new HttpException('Stop tidak ditemukan', HttpStatus.NOT_FOUND);
        }
        return {
            code: 200,
            success: true,
            message: 'Sukses mengambil detail stop',
            data,
        };
    }

    // POST /stops
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() dto: CreateStopDto) {
        const data = await this.service.create(dto);
        return {
            code: 201,
            success: true,
            message: 'Data stop berhasil dibuat',
            data,
        };
    }

    // PUT /stops/:id
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async update(@Param('id') id: string, @Body() dto: UpdateStopDto) {
        const data = await this.service.update(id, dto);
        return {
            code: 200,
            success: true,
            message: 'Data stop berhasil diperbarui',
            data,
        };
    }

    // DELETE /stops/:id
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const data = await this.service.remove(id);
        return {
            code: 200,
            success: true,
            message: 'Data stop berhasil dihapus',
            data,
        };
    }
}
