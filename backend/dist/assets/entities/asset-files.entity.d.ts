import { Asset } from './asset.entity';
export declare class AssetFile {
    id: number;
    file: string;
    form: Asset;
    get logoUrl(): string;
}
