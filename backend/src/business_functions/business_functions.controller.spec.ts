import { Test, TestingModule } from '@nestjs/testing';
import { BusinessFunctionsController } from './business_functions.controller';
import { BusinessFunctionsService } from './business_functions.service';

describe('BusinessFunctionsController', () => {
  let controller: BusinessFunctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessFunctionsController],
      providers: [BusinessFunctionsService],
    }).compile();

    controller = module.get<BusinessFunctionsController>(BusinessFunctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
