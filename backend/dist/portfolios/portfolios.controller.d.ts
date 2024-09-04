import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
export declare class PortfoliosController {
    private readonly portfoliosService;
    constructor(portfoliosService: PortfoliosService);
    create(createPortfolioDto: CreatePortfolioDto): string;
    findAll(page?: number, pageSize?: number): Promise<{
        status: string;
        data: any[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updatePortfolioDto: UpdatePortfolioDto): string;
    remove(id: string): string;
}
