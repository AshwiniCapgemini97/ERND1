import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Asset } from './asset.entity';
import { AssetType } from '../../asset_types/entities/asset_type.entity'

@Entity('asset_asset_types')
export class AssetsAssetType {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset, (asset) => asset.assetsAssetType)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    @ManyToOne(() => AssetType, (assetType) => assetType.assetsAssetType)
    @JoinColumn({ name: 'asset_type_id' })
    assetType: AssetType;
}