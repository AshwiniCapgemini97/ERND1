import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { Portfolio } from './entities/portfolio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetPortfolio } from '../assets/entities/asset-portfolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio, AssetPortfolio])], // Include the Task repository in the module
  controllers: [PortfoliosController],
  providers: [PortfoliosService],
})
export class PortfoliosModule { }
