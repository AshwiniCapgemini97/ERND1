import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { Repository } from 'typeorm';
import { Technology } from './entities/technology.entity';
export declare class TechnologiesService {
    private readonly TechnologyRepository;
    constructor(TechnologyRepository: Repository<Technology>);
    findAll(page?: number, pageSize?: number): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateTechnologyDto: UpdateTechnologyDto): string;
    remove(id: number): string;
}
