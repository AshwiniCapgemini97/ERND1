import { CreateAssetRatingDto } from './dto/create-asset_rating.dto';
import { UpdateAssetRatingDto } from './dto/update-asset_rating.dto';
export declare class AssetRatingsService {
    create(createAssetRatingDto: CreateAssetRatingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAssetRatingDto: UpdateAssetRatingDto): string;
    remove(id: number): string;
}
