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
import { ScheduleStopService } from './schedule-stop.service';
import { CreateScheduleStopDto } from './dto/create-schedule-stop.dto';
import { UpdateScheduleStopDto } from './dto/update-schedule-stop.dto';

@Controller('schedule-stops')
export class ScheduleStopController {
    constructor(private readonly service: ScheduleStopService) { }

    // GET /schedule-stops?scheduleId=uuid&stopId=uuid
    @Get()
    async findAll(
        @Query('scheduleId') scheduleId?: string,
        @Query('stopId') stopId?: string,
    ) {
        const data = await this.service.findAll(scheduleId, stopId);
        return { code: 200, success: true, message: 'Sukses ambil schedule-stop', data };
    }

    // GET /schedule-stops/:id
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const data = await this.service.findOne(id);
        return { code: 200, success: true, message: 'Sukses ambil schedule-stop', data };
    }

    // POST /schedule-stops
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() dto: CreateScheduleStopDto) {
        const data = await this.service.create(dto);
        return { code: 201, success: true, message: 'Schedule-stop dibuat', data };
    }

    // PUT /schedule-stops/:id
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async update(@Param('id') id: string, @Body() dto: UpdateScheduleStopDto) {
        const data = await this.service.update(id, dto);
        return { code: 200, success: true, message: 'Schedule-stop diperbarui', data };
    }

    // DELETE /schedule-stops/:id
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const data = await this.service.remove(id);
        return { code: 200, success: true, message: 'Schedule-stop dihapus', data };
    }
}
