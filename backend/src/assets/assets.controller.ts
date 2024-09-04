import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, NotFoundException, HttpException, HttpStatus, UploadedFiles, UseInterceptors, UseGuards } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { FilterDto } from './dto/filter.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) { }

  @Post()
  // @UseInterceptors(FileFieldsInterceptor([
  //   { name: 'source_code', maxCount: 1 },
  //   { name: 'asset_files', maxCount: 4 },
  // ]))
  async create(
    // @UploadedFiles() files: { [key: string]: Express.Multer.File[] },
    @Body() createAssetDto: CreateAssetDto
  ) {
    // const source_code = files['source_code'] ? files['source_code'][0] : null;
    // const asset_files = files['asset_files'] ? files['asset_files'] : null;

    // if (!source_code || !asset_files || !createAssetDto.logo) {
    //   throw new HttpException('Any one of the files(source code/asset files) is required', HttpStatus.BAD_REQUEST);
    // }

    // createAssetDto.source_code = source_code;
    // createAssetDto.asset_files = asset_files;

    await this.assetsService.create(createAssetDto);
    return {
      status: 'success',
      message: "Asset has been added"
    };
  }

  // @UseGuards(AuthenticationGuard)
  @Get()
  async findAll(@Query() filterDto: FilterDto) {
    const { data, total }: { data: any[], total: number } = await this.assetsService.findAll(filterDto);
    if (!data || data.length === 0) {
      throw new HttpException('No asset found.', HttpStatus.BAD_REQUEST);
    }
    return {
      data,
      total
    };
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetsService.update(+id, updateAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsService.remove(+id);
  }
}
