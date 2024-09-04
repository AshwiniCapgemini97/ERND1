import { AssetTypeStatus } from '../../shared/status.enum';
import { AssetsAssetType } from '../../assets/entities/asset-asset-type.entity';
export declare class AssetType {
    id: number;
    title: string;
    logo: string;
    status: AssetTypeStatus;
    assetsAssetType: AssetsAssetType[];
    created_at: Date;
    updated_at: Date;
}
