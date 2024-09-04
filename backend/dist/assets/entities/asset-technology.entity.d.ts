import { Asset } from './asset.entity';
import { Technology } from '../../technologies/entities/technology.entity';
export declare class AssetTechnology {
    id: number;
    form: Asset;
    technology: Technology;
}
