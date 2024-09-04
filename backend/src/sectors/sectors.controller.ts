import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Controller('sectors')
export class SectorsController {
  constructor(private readonly sectorsService: SectorsService) { }

  @Post()
  async createSector(@Body() createSectorDto: CreateSectorDto) {
    const data = await this.sectorsService.create(createSectorDto);
    if (!data) {
      throw new HttpException('Error Creating New Sector', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
    };
  }
  @Get()
  async findAll(@Query('page') page: number, @Query('pageSize') pageSize: number, @Query('search') search: string) {
    const { data, total }: { data: any[], total: number } = await this.sectorsService.findAll(page, pageSize, search);
    if (!data || data.length === 0) {
      throw new HttpException('No Sectors found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sectorsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSectorDto: UpdateSectorDto) {
    return await this.sectorsService.update(+id, updateSectorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sectorsService.remove(+id);
  }
}
