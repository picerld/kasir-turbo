import { Module } from '@nestjs/common';
import { ScheduleStopService } from './schedule-stop.service';
import { ScheduleStopController } from './schedule-stop.controller';

@Module({
  providers: [ScheduleStopService],
  controllers: [ScheduleStopController]
})
export class ScheduleStopModule {}
