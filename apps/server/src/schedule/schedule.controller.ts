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
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedules')
export class ScheduleController {
    constructor(private readonly service: ScheduleService) { }

    // GET /schedules?routeId=uuid&code=TMB K1
    @Get()
    async findAll(
        @Query('routeId') routeId?: string,
        @Query('code') code?: string,
    ) {
        const data = await this.service.findAll(routeId, code);
        return { code: 200, success: true, message: 'Sukses ambil schedule', data };
    }

    // GET /schedules/:id
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const data = await this.service.findOne(id);
        return { code: 200, success: true, message: 'Sukses ambil schedule', data };
    }

    // POST /schedules
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() dto: CreateScheduleDto) {
        const data = await this.service.create(dto);
        return { code: 201, success: true, message: 'Schedule dibuat', data };
    }

    // PUT /schedules/:id
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async update(@Param('id') id: string, @Body() dto: UpdateScheduleDto) {
        const data = await this.service.update(id, dto);
        return { code: 200, success: true, message: 'Schedule diperbarui', data };
    }

    // DELETE /schedules/:id
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const data = await this.service.remove(id);
        return { code: 200, success: true, message: 'Schedule dihapus', data };
    }
}
