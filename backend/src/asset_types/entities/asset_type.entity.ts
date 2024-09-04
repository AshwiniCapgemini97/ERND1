// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { AssetTypeStatus } from '../../shared/status.enum';
import { AssetsAssetType } from '../../assets/entities/asset-asset-type.entity'; // Import the AssetGroup entity

@Entity('asset_types')
export class AssetType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100 })
    logo: string;

    @Column({ type: 'enum', enum: AssetTypeStatus, default: AssetTypeStatus.ACTIVE })
    status: AssetTypeStatus;

    @ManyToMany(() => AssetsAssetType, (assetsAssetType) => assetsAssetType.assetType) // Establishing the Many-to-Many relationship with AssetGroup
    @JoinTable()
    assetsAssetType: AssetsAssetType[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
