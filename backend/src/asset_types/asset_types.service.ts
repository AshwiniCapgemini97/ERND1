import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAssetTypeDto } from './dto/create-asset_type.dto';
import { UpdateAssetTypeDto } from './dto/update-asset_type.dto';
import { Repository } from 'typeorm';
import { AssetType } from './entities/asset_type.entity';

@Injectable()
export class AssetTypesService {
  constructor(
    @InjectRepository(AssetType)
    private readonly AssetTypesRepository: Repository<AssetType>,
  ) { }
  create(createAssetTypeDto: CreateAssetTypeDto) {
    return 'This action adds a new assetType';
  }


  async findAll(page: number = 1, pageSize: number = 10): Promise<any> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await this.AssetTypesRepository.findAndCount({
      skip,
      take: pageSize,
    });
    return {
      data,
      total
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} assetType`;
  }

  update(id: number, updateAssetTypeDto: UpdateAssetTypeDto) {
    return `This action updates a #${id} assetType`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetType`;
  }
}
