import { BusinessFunctionsService } from './business_functions.service';
import { CreateBusinessFunctionDto } from './dto/create-business_function.dto';
import { UpdateBusinessFunctionDto } from './dto/update-business_function.dto';
export declare class BusinessFunctionsController {
    private readonly businessFunctionsService;
    constructor(businessFunctionsService: BusinessFunctionsService);
    create(createBusinessFunctionDto: CreateBusinessFunctionDto): string;
    findAll(page?: number, pageSize?: number): Promise<{
        status: string;
        data: any[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateBusinessFunctionDto: UpdateBusinessFunctionDto): string;
    remove(id: string): string;
}
