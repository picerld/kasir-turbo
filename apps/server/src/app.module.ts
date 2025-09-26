import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransportTypeModule } from './transport-type/transport-type.module';
import { OperatorModule } from './operator/operator.module';
import { RouteModule } from './route/route.module';
import { StopModule } from './stop/stop.module';
import { StopRouteModule } from './stop-route/stop-route.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ScheduleStopModule } from './schedule-stop/schedule-stop.module';

@Module({
  imports: [TransportTypeModule, OperatorModule, RouteModule, StopModule, StopRouteModule, ScheduleModule, ScheduleStopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
