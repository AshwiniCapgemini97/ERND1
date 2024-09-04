import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Asset } from './asset.entity';
import { Sector } from '../../sectors/entities/sector.entity';

@Entity('asset_sectors')
export class AssetSector {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset, (asset) => asset.assetSector)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    @ManyToOne(() => Sector, (sector) => sector.assetSector)
    @JoinColumn({ name: 'sector_id' })
    sector: Sector;
}