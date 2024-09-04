import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Asset } from './asset.entity';
import { Portfolio } from '../../portfolios/entities/portfolio.entity';

@Entity('asset_portfolios')
export class AssetPortfolio {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Asset, (asset) => asset.assetPortfolio)
    @JoinColumn({ name: 'asset_id' })
    form: Asset;

    @ManyToOne(() => Portfolio, (portfolio) => portfolio.assetPortfolio)
    @JoinColumn({ name: 'portfolio_id' })
    portfolio: Portfolio;
}