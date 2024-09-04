import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Like, Repository } from 'typeorm';
import { Sector } from './entities/sector.entity';
import { AssetSector } from '../assets/entities/asset-sector.entity';

@Injectable()
export class SectorsService {
  constructor(
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,

    @InjectRepository(AssetSector)
    private readonly assetSectorRepo: Repository<AssetSector>,
    ) { }

  async create(createSectorDto: CreateSectorDto): Promise<Sector> {
    const { title, status } = createSectorDto;
    const newSector = this.sectorRepository.create({ title, status });
    return this.sectorRepository.save(newSector);
  }

  async findAll(page?: number, pageSize?: number, search?: string): Promise<any> {
    let data: any[], total: number;
  
    if (page == null && pageSize == null) {
      [data, total] = await this.sectorRepository.findAndCount({ where: search ? { title: Like(`%${search}%`) } : {}});
    } else {
      const validatedPage = page || 1;
      const validatedPageSize = pageSize || 10;
      const skip = (validatedPage - 1) * validatedPageSize;
  
      [data, total] = await this.sectorRepository.findAndCount({
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
  

  async findOne(id: number): Promise<Sector> {
    const sector = await this.sectorRepository.findOne({ where: { id } });
    if (!sector) {
      throw new NotFoundException(`Sector with ID ${id} not found`);
    }
    return sector;
  }

  async update(id: number, updateSectorDto: UpdateSectorDto): Promise<any> {
    const result = await this.sectorRepository.update(id, updateSectorDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Sector with ID ${id} not found`);
    }
    return result;
  }

  async remove(id: number): Promise<void> {
    // Delete associated asset sector first
    const deleteAssetsResult = await this.assetSectorRepo.delete({ sector: { id } });
    console.log("Deleted asset sector:", deleteAssetsResult);

    const result = await this.sectorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sector with ID ${id} not found`);
    }
    return;
  }
}
