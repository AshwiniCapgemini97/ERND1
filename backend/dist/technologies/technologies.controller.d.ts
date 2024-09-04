import { TechnologiesService } from './technologies.service';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
export declare class TechnologiesController {
    private readonly technologiesService;
    constructor(technologiesService: TechnologiesService);
    findAll(page?: number, pageSize?: number): Promise<{
        status: string;
        data: any[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateTechnologyDto: UpdateTechnologyDto): string;
    remove(id: string): string;
}
