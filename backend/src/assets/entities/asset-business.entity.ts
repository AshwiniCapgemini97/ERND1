import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Asset } from './asset.entity';
import { BusinessFunction } from '../../business_functions/entities/business_function.entity';

@Entity('asset_businesses')
export class AssetBusiness {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset, (asset) => asset.assetBusiness)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    @ManyToOne(() => BusinessFunction, (businessFunction) => businessFunction.assetBusiness)
    @JoinColumn({ name: 'business_id' })
    businessFunction: BusinessFunction;
}