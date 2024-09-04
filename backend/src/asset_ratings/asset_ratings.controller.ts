import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetRatingsService } from './asset_ratings.service';
import { CreateAssetRatingDto } from './dto/create-asset_rating.dto';
import { UpdateAssetRatingDto } from './dto/update-asset_rating.dto';

@Controller('asset-ratings')
export class AssetRatingsController {
  constructor(private readonly assetRatingsService: AssetRatingsService) {}

  @Post()
  create(@Body() createAssetRatingDto: CreateAssetRatingDto) {
    return this.assetRatingsService.create(createAssetRatingDto);
  }

  @Get()
  findAll() {
    return this.assetRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetRatingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetRatingDto: UpdateAssetRatingDto) {
    return this.assetRatingsService.update(+id, updateAssetRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetRatingsService.remove(+id);
  }
}
