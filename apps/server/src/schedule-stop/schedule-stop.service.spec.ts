import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleStopService } from './schedule-stop.service';

describe('ScheduleStopService', () => {
  let service: ScheduleStopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleStopService],
    }).compile();

    service = module.get<ScheduleStopService>(ScheduleStopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
