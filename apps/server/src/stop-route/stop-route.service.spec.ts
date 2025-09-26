import { Test, TestingModule } from '@nestjs/testing';
import { StopRouteService } from './stop-route.service';

describe('StopRouteService', () => {
  let service: StopRouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StopRouteService],
    }).compile();

    service = module.get<StopRouteService>(StopRouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
