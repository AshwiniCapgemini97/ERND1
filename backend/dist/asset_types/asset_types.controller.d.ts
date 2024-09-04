import { AssetTypesService } from './asset_types.service';
import { CreateAssetTypeDto } from './dto/create-asset_type.dto';
import { UpdateAssetTypeDto } from './dto/update-asset_type.dto';
export declare class AssetTypesController {
    private readonly assetTypesService;
    constructor(assetTypesService: AssetTypesService);
    create(createAssetTypeDto: CreateAssetTypeDto): string;
    findAll(page?: number, pageSize?: number): Promise<{
        status: string;
        data: any[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateAssetTypeDto: UpdateAssetTypeDto): string;
    remove(id: string): string;
}
