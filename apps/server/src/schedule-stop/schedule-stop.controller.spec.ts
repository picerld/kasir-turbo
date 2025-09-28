import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleStopController } from './schedule-stop.controller';

describe('ScheduleStopController', () => {
  let controller: ScheduleStopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleStopController],
    }).compile();

    controller = module.get<ScheduleStopController>(ScheduleStopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
