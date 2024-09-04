import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Asset } from './asset.entity';
import { Technology } from '../../technologies/entities/technology.entity';

@Entity('asset_technologies')
export class AssetTechnology {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset, (asset) => asset.assetTechnology)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    @ManyToOne(() => Technology, (technology) => technology.assetTechnology)
    @JoinColumn({ name: 'technology_id' })
    technology: Technology;
}