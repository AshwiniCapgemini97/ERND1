import { AssetRatingsService } from './asset_ratings.service';
import { CreateAssetRatingDto } from './dto/create-asset_rating.dto';
import { UpdateAssetRatingDto } from './dto/update-asset_rating.dto';
export declare class AssetRatingsController {
    private readonly assetRatingsService;
    constructor(assetRatingsService: AssetRatingsService);
    create(createAssetRatingDto: CreateAssetRatingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAssetRatingDto: UpdateAssetRatingDto): string;
    remove(id: string): string;
}
