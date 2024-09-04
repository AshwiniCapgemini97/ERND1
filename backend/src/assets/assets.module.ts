import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { AssetGroup } from './entities/asset-group.entity';
import { AssetsAssetType } from './entities/asset-asset-type.entity';
import { AssetBusiness } from './entities/asset-business.entity';
import { AssetPortfolio } from './entities/asset-portfolio.entity';
import { AssetSector } from './entities/asset-sector.entity';
import { AssetTechnology } from './entities/asset-technology.entity';
import { AssetFile } from './entities/asset-files.entity';
import { Sector } from '../sectors/entities/sector.entity';
import { Technology } from '../technologies/entities/technology.entity';
import { Portfolio } from '../portfolios/entities/portfolio.entity';
import { Group } from '../groups/entities/group.entity';
import { BusinessFunction } from '../business_functions/entities/business_function.entity';
import { AssetType } from '../asset_types/entities/asset_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asset,
     AssetGroup,
     AssetsAssetType,
     AssetBusiness,
     AssetPortfolio,
     AssetSector,
     AssetTechnology,
     AssetFile,
     Sector,
     Technology,
     Group,
     Portfolio,
     BusinessFunction,
     AssetType
    ])], // Include the Task repository in the module
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule { }
