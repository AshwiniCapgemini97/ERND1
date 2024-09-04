import { TechnologyStatus } from '../../shared/status.enum';
import { AssetTechnology } from '../../assets/entities/asset-technology.entity';
export declare class Technology {
    id: number;
    title: string;
    logo: string;
    status: TechnologyStatus;
    assetTechnology: AssetTechnology[];
    created_at: Date;
    updated_at: Date;
}
