import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { BusinessFunctionsService } from './business_functions.service';
import { CreateBusinessFunctionDto } from './dto/create-business_function.dto';
import { UpdateBusinessFunctionDto } from './dto/update-business_function.dto';

@Controller('business-functions')
export class BusinessFunctionsController {
  constructor(private readonly businessFunctionsService: BusinessFunctionsService) { }

  @Post()
  create(@Body() createBusinessFunctionDto: CreateBusinessFunctionDto) {
    return this.businessFunctionsService.create(createBusinessFunctionDto);
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('pageSize') pageSize: number = 5) {
    const { data, total }: { data: any[], total: number } = await this.businessFunctionsService.findAll(page, pageSize);
    if (!data || data.length === 0) {
      throw new HttpException('No Business Function found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessFunctionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessFunctionDto: UpdateBusinessFunctionDto) {
    return this.businessFunctionsService.update(+id, updateBusinessFunctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessFunctionsService.remove(+id);
  }
}
