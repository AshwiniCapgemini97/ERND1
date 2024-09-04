import { Module } from '@nestjs/common';
import { AssetRatingsService } from './asset_ratings.service';
import { AssetRatingsController } from './asset_ratings.controller';

@Module({
  controllers: [AssetRatingsController],
  providers: [AssetRatingsService],
})
export class AssetRatingsModule {}
