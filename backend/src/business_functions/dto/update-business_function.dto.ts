import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessFunctionDto } from './create-business_function.dto';

export class UpdateBusinessFunctionDto extends PartialType(CreateBusinessFunctionDto) {}
