import { CreateBusinessFunctionDto } from './dto/create-business_function.dto';
import { UpdateBusinessFunctionDto } from './dto/update-business_function.dto';
import { Repository } from 'typeorm';
import { BusinessFunction } from './entities/business_function.entity';
export declare class BusinessFunctionsService {
    private readonly BusinessFunctionRepository;
    constructor(BusinessFunctionRepository: Repository<BusinessFunction>);
    create(createBusinessFunctionDto: CreateBusinessFunctionDto): string;
    findAll(page?: number, pageSize?: number): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateBusinessFunctionDto: UpdateBusinessFunctionDto): string;
    remove(id: number): string;
}
