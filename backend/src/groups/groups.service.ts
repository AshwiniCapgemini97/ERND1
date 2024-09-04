import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { AssetGroup } from '../assets/entities/asset-group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,

    @InjectRepository(AssetGroup)
    private readonly assetGroupRepository: Repository<AssetGroup>,
  ) { }

  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }

  async findAll(page: number = 1, pageSize: number = 10): Promise<any> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await this.groupRepository.findAndCount({
      skip,
      take: pageSize,
    });
    return {
      data,
      total
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  //   remove(id: number) {
  //     return `This action removes a #${id} group`;
  //   }
  // }

  async remove(id: number): Promise<void> {
    // Delete associated portfolio sector first
    const deleteAssetsResult = await this.assetGroupRepository.delete({ group: { id } });
    console.log("Deleted asset sector:", deleteAssetsResult);

    const result = await this.groupRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Group with ID ${id} not found`);
    }
    return;
  }
}