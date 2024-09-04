import { Test, TestingModule } from '@nestjs/testing';
import { BusinessFunctionsService } from './business_functions.service';

describe('BusinessFunctionsService', () => {
  let service: BusinessFunctionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessFunctionsService],
    }).compile();

    service = module.get<BusinessFunctionsService>(BusinessFunctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
