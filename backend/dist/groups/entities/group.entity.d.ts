import { GroupStatus } from '../../shared/status.enum';
import { AssetGroup } from '../../assets/entities/asset-group.entity';
export declare class Group {
    id: number;
    title: string;
    logo: string;
    status: GroupStatus;
    assetGroups: AssetGroup[];
    created_at: Date;
    updated_at: Date;
}
