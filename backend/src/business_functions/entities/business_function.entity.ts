// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { BusinessFunctionStatus } from '../../shared/status.enum';
import { AssetBusiness } from '../../assets/entities/asset-business.entity'; // Import the AssetGroup entity

@Entity('business_functions')
export class BusinessFunction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100 })
    logo: string;

    @Column({ type: 'enum', enum: BusinessFunctionStatus, default: BusinessFunctionStatus.ACTIVE })
    status: BusinessFunctionStatus;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ManyToMany(() => AssetBusiness, (assetBusiness) => assetBusiness.businessFunction) // Establishing the Many-to-Many relationship with AssetGroup
    @JoinTable()
    assetBusiness: AssetBusiness[];


    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
