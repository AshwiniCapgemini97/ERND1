import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) { }

  @Post()
  async createTechnology(@Body() CreateTechnologyDto: CreateTechnologyDto) {
    const data = await this.technologiesService.create(CreateTechnologyDto);
    if (!data) {
      throw new HttpException('Error Creating New Technology', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
    };
  }

  @Get()
  async findAll(@Query('page') page: number, @Query('pageSize') pageSize: number, @Query('search') search: string) {
    const { data, total }: { data: any[], total: number } = await this.technologiesService.findAll(page, pageSize, search);
    if (!data || data.length === 0) {
      throw new HttpException('No technology found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technologiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechnologyDto: UpdateTechnologyDto) {
    return this.technologiesService.update(+id, updateTechnologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technologiesService.remove(+id);
  }
}
