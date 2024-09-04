import { Injectable } from '@nestjs/common';
import { CreateAssetRatingDto } from './dto/create-asset_rating.dto';
import { UpdateAssetRatingDto } from './dto/update-asset_rating.dto';

@Injectable()
export class AssetRatingsService {
  create(createAssetRatingDto: CreateAssetRatingDto) {
    return 'This action adds a new assetRating';
  }

  findAll() {
    return `This action returns all assetRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assetRating`;
  }

  update(id: number, updateAssetRatingDto: UpdateAssetRatingDto) {
    return `This action updates a #${id} assetRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetRating`;
  }
}
