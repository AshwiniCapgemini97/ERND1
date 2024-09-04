import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBusinessFunctionDto } from './dto/create-business_function.dto';
import { UpdateBusinessFunctionDto } from './dto/update-business_function.dto';
import { Repository } from 'typeorm';
import { BusinessFunction } from './entities/business_function.entity';

@Injectable()
export class BusinessFunctionsService {
  constructor(
    @InjectRepository(BusinessFunction)
    private readonly BusinessFunctionRepository: Repository<BusinessFunction>,
  ) { }
  create(createBusinessFunctionDto: CreateBusinessFunctionDto) {
    return 'This action adds a new businessFunction';
  }

  async findAll(page: number = 1, pageSize: number = 10): Promise<any> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await this.BusinessFunctionRepository.findAndCount({
      skip,
      take: pageSize,
    });
    return {
      data,
      total
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} businessFunction`;
  }

  update(id: number, updateBusinessFunctionDto: UpdateBusinessFunctionDto) {
    return `This action updates a #${id} businessFunction`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessFunction`;
  }
}
