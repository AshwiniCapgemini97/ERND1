import { Module } from '@nestjs/common';
import { SectorsController } from './sectors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectorsService } from './sectors.service';
import { Sector } from './entities/sector.entity';
import { AssetSector } from '../assets/entities/asset-sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sector, AssetSector])], // Include the Task repository in the module
  controllers: [SectorsController],
  providers: [SectorsService],
})
export class SectorsModule {}
