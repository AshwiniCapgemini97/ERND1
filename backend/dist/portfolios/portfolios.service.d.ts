import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';
export declare class PortfoliosService {
    private readonly GroupRepository;
    constructor(GroupRepository: Repository<Portfolio>);
    create(createPortfolioDto: CreatePortfolioDto): string;
    findAll(page?: number, pageSize?: number): Promise<any>;
    findOne(id: number): string;
    update(id: number, updatePortfolioDto: UpdatePortfolioDto): string;
    remove(id: number): string;
}
