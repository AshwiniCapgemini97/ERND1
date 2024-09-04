import { CreateAssetTypeDto } from './dto/create-asset_type.dto';
import { UpdateAssetTypeDto } from './dto/update-asset_type.dto';
import { Repository } from 'typeorm';
import { AssetType } from './entities/asset_type.entity';
export declare class AssetTypesService {
    private readonly AssetTypesRepository;
    constructor(AssetTypesRepository: Repository<AssetType>);
    create(createAssetTypeDto: CreateAssetTypeDto): string;
    findAll(page?: number, pageSize?: number): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateAssetTypeDto: UpdateAssetTypeDto): string;
    remove(id: number): string;
}
