import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { Like, Repository } from 'typeorm';
import { Technology } from './entities/technology.entity';
import { AssetTechnology } from '../assets/entities/asset-technology.entity'

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(Technology)
    private readonly technologyRepository: Repository<Technology>,
    @InjectRepository(AssetTechnology)
    private readonly assetTechnologyRepo: Repository<AssetTechnology>,
  ) { }

  async create(CreateTechnologyDto: CreateTechnologyDto): Promise<Technology> {
    const { title, status } = CreateTechnologyDto;
    const newSector = this.technologyRepository.create({ title, status });
    return this.technologyRepository.save(newSector);
  }

  async findAll(page?: number, pageSize?: number, search?: string): Promise<any> {
    let data: any[], total: number;

    if (page == null && pageSize == null) {
      [data, total] = await this.technologyRepository.findAndCount({ where: search ? { title: Like(`%${search}%`) } : {} });
    } else {
      const validatedPage = page || 1;
      const validatedPageSize = pageSize || 10;
      const skip = (validatedPage - 1) * validatedPageSize;

      [data, total] = await this.technologyRepository.findAndCount({
        where: search && { title: Like(`%${search}%`) },
        skip,
        take: validatedPageSize,
      });
    }

    return {
      data,
      total
    };
  }

  async findOne(id: number): Promise<Technology> {
    const sector = await this.technologyRepository.findOne({ where: { id } });
    if (!sector) {
      throw new NotFoundException(`Technology with ID ${id} not found`);
    }
    return sector;
  }

  async update(id: number, UpdateTechnologyDto: UpdateTechnologyDto): Promise<any> {
    const result = await this.technologyRepository.update(id, UpdateTechnologyDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Technology with ID ${id} not found`);
    }
    return result;
  }

  async remove(id: number): Promise<void> {
    console.log("id 61: " + id);
    // await this.assetTechnologyRepo.delete(id);
    // const result = await this.technologyRepository.delete(id);

    // Delete associated asset technologies first
    const deleteAssetsResult = await this.assetTechnologyRepo.delete({ technology: { id } });
    console.log("Deleted asset technologies:", deleteAssetsResult);

    // Delete the technology
    const deleteTechResult = await this.technologyRepository.delete(id);
    console.log("Deleted technology:", deleteTechResult);

    if (deleteTechResult.affected === 0) {
      throw new NotFoundException(`Technology with ID ${id} not found`);
    }
    return;
  }
}
