import { IsString, IsArray, IsOptional, IsNumber } from 'class-validator';

export class FilterDto {
    // @IsOptional()
    // @IsNumber()
    page: number;

    // // @IsOptional()
    // @IsNumber()
    pageSize: number;

    @IsOptional()
    @IsArray()
    groups: number[];

    // @IsOptional()
    // @IsArray()
    @IsOptional()
    business: number[];

    @IsOptional()
    technology: number[];
    
    @IsOptional()
    sector: number[];

    // @IsOptional()
    // @IsString()
    // business: string;
}