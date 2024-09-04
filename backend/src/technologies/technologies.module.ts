import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technology } from './entities/technology.entity';
import { AssetTechnology } from '../assets/entities/asset-technology.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Technology, AssetTechnology])], // Include the Task repository in the module
  controllers: [TechnologiesController],
  providers: [TechnologiesService],
})
export class TechnologiesModule {}
