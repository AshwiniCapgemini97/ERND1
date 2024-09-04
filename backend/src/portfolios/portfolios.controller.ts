import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) { }

  @Post()
  create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfoliosService.create(createPortfolioDto);
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('pageSize') pageSize: number = 5) {
    const { data, total }: { data: any[], total: number } = await this.portfoliosService.findAll(page, pageSize);
    if (!data || data.length === 0) {
      throw new HttpException('No Portfoilio found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portfoliosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortfolioDto: UpdatePortfolioDto) {
    return this.portfoliosService.update(+id, updatePortfolioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log("id: " + id);
    return this.portfoliosService.remove(+id);

  }
}
