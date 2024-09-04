// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { TechnologyStatus } from '../../shared/status.enum';
import { AssetTechnology } from '../../assets/entities/asset-technology.entity'; // Import the AssetGroup entity

@Entity('technologies')
export class Technology {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100, nullable: true })
    logo: string;

    @Column({ type: 'enum', enum: TechnologyStatus, default: TechnologyStatus.ACTIVE })
    status: TechnologyStatus;

    @ManyToMany(() => AssetTechnology, (assetTechnology) => assetTechnology) // Establishing the Many-to-Many relationship with AssetGroup
    @JoinTable()
    assetTechnology: AssetTechnology[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
