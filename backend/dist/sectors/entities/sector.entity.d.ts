import { SectorStatus } from '../../shared/status.enum';
import { AssetSector } from '../../assets/entities/asset-sector.entity';
export declare class Sector {
    id: number;
    title: string;
    logo: string;
    status: SectorStatus;
    assetSector: AssetSector[];
    created_at: Date;
    updated_at: Date;
}
