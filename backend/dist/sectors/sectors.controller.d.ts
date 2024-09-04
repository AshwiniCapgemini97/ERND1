import { SectorsService } from './sectors.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Sector } from './entities/sector.entity';
export declare class SectorsController {
    private readonly sectorsService;
    constructor(sectorsService: SectorsService);
    createSector(createSectorDto: CreateSectorDto): Promise<{
        status: string;
        data: Sector;
    }>;
    findAll(page: number, pageSize: number): Promise<{
        status: string;
        data: any[];
        total: number;
    }>;
    findOne(id: string): Promise<Sector>;
    update(id: string, updateSectorDto: UpdateSectorDto): Promise<any>;
    remove(id: string): Promise<string>;
}
