// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { PortfolioStatus } from '../../shared/status.enum';
import { AssetPortfolio } from '../../assets/entities/asset-portfolio.entity'; // Import the AssetGroup entity

@Entity('portfolios')
export class Portfolio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 100 })
    logo: string;

    @Column({ type: 'enum', enum: PortfolioStatus, default: PortfolioStatus.ACTIVE })
    status: PortfolioStatus;

    @ManyToMany(() => AssetPortfolio, (assetPortfolio) => assetPortfolio.portfolio) // Establishing the Many-to-Many relationship with AssetGroup
    @JoinTable()
    assetPortfolio: AssetPortfolio[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
