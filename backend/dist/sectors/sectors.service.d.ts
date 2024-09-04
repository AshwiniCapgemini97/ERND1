import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Repository } from 'typeorm';
import { Sector } from './entities/sector.entity';
export declare class SectorsService {
    private readonly sectorRepository;
    constructor(sectorRepository: Repository<Sector>);
    create(createSectorDto: CreateSectorDto): Promise<Sector>;
    findAll(page?: number, pageSize?: number): Promise<any>;
    findOne(id: number): Promise<Sector>;
    update(id: number, updateSectorDto: UpdateSectorDto): Promise<any>;
    remove(id: number): Promise<string>;
}
