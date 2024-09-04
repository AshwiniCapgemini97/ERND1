import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetRatingDto } from './create-asset_rating.dto';

export class UpdateAssetRatingDto extends PartialType(CreateAssetRatingDto) {}
