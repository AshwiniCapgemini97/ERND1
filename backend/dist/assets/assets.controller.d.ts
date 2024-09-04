/// <reference types="multer" />
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { FilterDto } from './dto/filter.dto';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    create(files: Array<Express.Multer.File>, createAssetDto: CreateAssetDto): Promise<{
        status: string;
        message: string;
    }>;
    findAll(filterDto: FilterDto): Promise<{
        data: any[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateAssetDto: UpdateAssetDto): string;
    remove(id: string): string;
}
