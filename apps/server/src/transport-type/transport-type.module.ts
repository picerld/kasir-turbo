import { Module } from '@nestjs/common';
import { TransportTypeService } from './transport-type.service';
import { TransportTypeController } from './transport-type.controller';

@Module({
  providers: [TransportTypeService],
  controllers: [TransportTypeController]
})
export class TransportTypeModule {}
