import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';
import { AssetPortfolio } from '../assets/entities/asset-portfolio.entity';

@Injectable()
export class PortfoliosService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepository: Repository<Portfolio>,

    @InjectRepository(AssetPortfolio)
    private readonly assetPortfolioRepo: Repository<AssetPortfolio>
  ) { }
  create(createPortfolioDto: CreatePortfolioDto) {
    return 'This action adds a new portfolio';
  }

  async findAll(page: number = 1, pageSize: number = 10): Promise<any> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await this.portfolioRepository.findAndCount({
      skip,
      take: pageSize,
    });
    return {
      data,
      total
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} portfolio`;
  }

  update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
    return `This action updates a #${id} portfolio`;
  }

//   remove(id: number) {
//     return `This action removes a #${id} portfolio`;
//   }
// }

async remove(id: number): Promise<void> {
  // Delete associated portfolio sector first
  const deleteAssetsResult = await this.assetPortfolioRepo.delete({ portfolio: { id } });
  console.log("Deleted asset sector:", deleteAssetsResult);

  const result = await this.portfolioRepository.delete(id);
  if (result.affected === 0) {
    throw new NotFoundException(`Portfolio with ID ${id} not found`);
  }
  return;
}
}
