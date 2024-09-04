import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { AssetTypesService } from './asset_types.service';
import { CreateAssetTypeDto } from './dto/create-asset_type.dto';
import { UpdateAssetTypeDto } from './dto/update-asset_type.dto';

@Controller('asset-types')
export class AssetTypesController {
  constructor(private readonly assetTypesService: AssetTypesService) {}

  @Post()
  create(@Body() createAssetTypeDto: CreateAssetTypeDto) {
    return this.assetTypesService.create(createAssetTypeDto);
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('pageSize') pageSize: number = 5) {
    const { data, total }: { data: any[], total: number } = await this.assetTypesService.findAll(page, pageSize);
    if (!data || data.length === 0) {
      throw new HttpException('No Assets found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total
    };
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetTypeDto: UpdateAssetTypeDto) {
    return this.assetTypesService.update(+id, updateAssetTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetTypesService.remove(+id);
  }
}
