// src/tasks/task.entity.ts
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { GroupStatus } from '../../shared/status.enum';
import { AssetGroup } from '../../assets/entities/asset-group.entity'; // Import the AssetGroup entity

@Entity('groups')
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100 })
    logo: string;

    @Column({ type: 'enum', enum: GroupStatus, default: GroupStatus.ACTIVE })
    status: GroupStatus;

    @ManyToMany(() => AssetGroup, (assetGroup) => assetGroup.group) // Establishing the Many-to-Many relationship with AssetGroup
    @JoinTable()
    assetGroups: AssetGroup[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
