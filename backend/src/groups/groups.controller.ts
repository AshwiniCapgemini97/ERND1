import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) { }

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  async findAll(@Query('page') page: number = 1, @Query('pageSize') pageSize: number = 5) {
    const { data, total }: { data: any[], total: number } = await this.groupsService.findAll(page, pageSize);
    if (!data || data.length === 0) {
      throw new HttpException('No Groups found.', HttpStatus.BAD_REQUEST);
    }
    return {
      status: 'success',
      data,
      total
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  // remove(@Param('id') id: string) {
  // return this.groupsService.remove(+id);
  async remove(@Param('id') id: string) {
    console.log("id: " + id);
    return this.groupsService.remove(+id);

  }
}
