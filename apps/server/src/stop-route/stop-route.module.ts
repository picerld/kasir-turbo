import { Module } from '@nestjs/common';
import { StopRouteService } from './stop-route.service';
import { StopRouteController } from './stop-route.controller';

@Module({
  providers: [StopRouteService],
  controllers: [StopRouteController]
})
export class StopRouteModule {}
