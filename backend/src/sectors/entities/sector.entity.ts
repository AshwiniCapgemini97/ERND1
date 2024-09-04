// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { SectorStatus } from '../../shared/status.enum';
import { AssetSector } from '../../assets/entities/asset-sector.entity'

@Entity('sectors')
export class Sector {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 225, nullable: true })
    logo: string;

    @Column({ type: 'enum', enum: SectorStatus, default: SectorStatus.ACTIVE })
    status: SectorStatus;

    @ManyToMany(() => AssetSector, (assetSector) => assetSector.sector) // Establishing the Many-to-Many relationship with AssetGroup
    @JoinTable()
    assetSector: AssetSector[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
