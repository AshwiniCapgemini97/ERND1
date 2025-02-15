import { AssetTypeStatus, AssetFileType } from '../../shared/status.enum';
import { AssetGroup } from './asset-group.entity';
import { AssetBusiness } from './asset-business.entity';
import { AssetPortfolio } from './asset-portfolio.entity';
import { AssetFile } from './asset-files.entity';
import { AssetSector } from './asset-sector.entity';
import { AssetTechnology } from './asset-technology.entity';
import { AssetsAssetType } from './asset-asset-type.entity';
export declare class Asset {
    id: number;
    name: string;
    short_description: string;
    description: string;
    customer_issues: string;
    benifits: string;
    solutions: string;
    logo: string;
    source_code: string;
    tags: string;
    links: string;
    platform_requirements: string;
    logistics_information: string;
    tools: string;
    last_events: string;
    industry_partnership: string;
    setup_documentation: string;
    asset_file_type: AssetFileType;
    status: AssetTypeStatus;
    assetsAssetType: AssetsAssetType[];
    assetGroups: AssetGroup[];
    assetBusiness: AssetBusiness[];
    assetFile: AssetFile[];
    assetPortfolio: AssetPortfolio[];
    assetSector: AssetSector[];
    assetTechnology: AssetTechnology[];
    created_at: Date;
    updated_at: Date;
    get logoUrl(): string;
}
