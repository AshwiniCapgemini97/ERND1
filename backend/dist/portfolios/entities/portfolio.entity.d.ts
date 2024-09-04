import { PortfolioStatus } from '../../shared/status.enum';
import { AssetPortfolio } from '../../assets/entities/asset-portfolio.entity';
export declare class Portfolio {
    id: number;
    title: string;
    logo: string;
    status: PortfolioStatus;
    assetPortfolio: AssetPortfolio[];
    created_at: Date;
    updated_at: Date;
}
