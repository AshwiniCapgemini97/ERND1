import { BusinessFunctionStatus } from '../../shared/status.enum';
import { AssetBusiness } from '../../assets/entities/asset-business.entity';
export declare class BusinessFunction {
    id: number;
    title: string;
    logo: string;
    status: BusinessFunctionStatus;
    created_at: Date;
    assetBusiness: AssetBusiness[];
    updated_at: Date;
}
