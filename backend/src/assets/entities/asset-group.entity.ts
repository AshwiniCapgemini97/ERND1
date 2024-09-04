import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Asset } from './asset.entity';
import { Group } from '../../groups/entities/group.entity';

@Entity('asset_groups')
export class AssetGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset, (asset) => asset.assetGroups)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    @ManyToOne(() => Group, (group) => group.assetGroups)
    @JoinColumn({ name: 'group_id' })
    group: Group;
}