// src/tasks/task.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, IsNull } from 'typeorm';
import { AssetTypeStatus, AssetFileType } from '../../shared/status.enum';
import { AssetGroup } from './asset-group.entity';
import { AssetBusiness } from './asset-business.entity';
import { AssetPortfolio } from './asset-portfolio.entity';
import { AssetFile } from './asset-files.entity';
import { AssetSector } from './asset-sector.entity';
import { AssetTechnology } from './asset-technology.entity';
import { AssetsAssetType } from './asset-asset-type.entity';
import { IsOptional } from 'class-validator';

@Entity('assets')
export class Asset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    short_description: string;

    @Column()
    description: string;

    @Column()
    customer_issues: string;

    @Column({nullable: true})
    benifits: string;

    @Column()
    solutions: string;

    @Column({ default: "" })
    logo?: string;

    @Column({ default: "" })
    source_code?: string;

    @Column({ nullable: true})
    tags?: string;

    @Column({ nullable: true })
    links?: string;

    @Column({ nullable: true })
    platform_requirements?: string;

    @Column({ nullable: true })
    logistics_information: string;

    @Column({ nullable: true })
    tools: string;

    @Column({ nullable: true })
    last_events: string;

    @Column({ nullable: true })
    industry_partnership: string;

    @Column({ nullable: true })
    setup_documentation: string;

    // @Column({ type: 'enum', enum: AssetFileType, default: AssetFileType.CONFIDENTIAL })
    // asset_file_type: AssetFileType

    @Column({ type: 'enum', enum: AssetTypeStatus, default: AssetTypeStatus.INACTIVE })
    status: AssetTypeStatus;

    @OneToMany(() => AssetsAssetType, (assetsAssetType) => assetsAssetType.form)
    assetsAssetType: AssetsAssetType[];

    @OneToMany(() => AssetGroup, (assetGroup) => assetGroup.form)
    assetGroups: AssetGroup[];

    @OneToMany(() => AssetBusiness, (assetBusiness) => assetBusiness.form)
    assetBusiness: AssetBusiness[];

    @OneToMany(() => AssetFile, (assetFile) => assetFile.form)
    @IsOptional()
    assetFile: AssetFile[];

    @OneToMany(() => AssetPortfolio, (assetPortfolio) => assetPortfolio.form)
    assetPortfolio: AssetPortfolio[];

    @OneToMany(() => AssetSector, (assetSector) => assetSector.form)
    assetSector: AssetSector[];

    @OneToMany(() => AssetTechnology, (assetTechnology) => assetTechnology.form)
    assetTechnology: AssetTechnology[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    // get logoUrl(): string {
    //     const baseUrl = 'http://localhost:3000'; // Replace this with your base URL
    //     return `${baseUrl}/uploads/${this.logo}`; // Adjust the path as per your directory structure
    // }
}
