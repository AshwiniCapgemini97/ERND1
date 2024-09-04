import { Module } from '@nestjs/common';
import { BusinessFunctionsService } from './business_functions.service';
import { BusinessFunctionsController } from './business_functions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessFunction } from './entities/business_function.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessFunction])], // Include the Task repository in the module
  controllers: [BusinessFunctionsController],
  providers: [BusinessFunctionsService],
})
export class BusinessFunctionsModule { }
