import { IsNotEmpty, IsString, IsEnum, IsArray, ArrayNotEmpty, IsInt, Min, Matches, IsOptional } from 'class-validator';
import { AssetStatus, AssetFileType } from '../../shared/status.enum';

export class CreateAssetDto {
    @IsNotEmpty({ message: 'Name should not be empty' })
    @IsString()
    readonly name: string;

    @IsEnum(AssetFileType, { message: 'Invalid AssetFileType value' })
    asset_file_type: AssetFileType.CONFIDENTIAL | AssetFileType.PUBLIC = AssetFileType.CONFIDENTIAL;

    @IsNotEmpty({ message: 'asset_types should not be empty' })
    @IsArray({ message: 'asset_types should be an array' })
    @ArrayNotEmpty({ message: 'asset_types Array should not be empty' })
    // @IsInt({ each: true, message: 'Each asset_types ID should be an integer' })
    // @Min(1, { each: true, message: 'Each asset_types ID should be greater than or equal to 1' })
    asset_types: number[];

    @IsNotEmpty({ message: 'sectors should not be empty' })
    @IsArray({ message: 'sectors should be an array' })
    @ArrayNotEmpty({ message: 'sectors Array should not be empty' })
    // @IsInt({ each: true, message: 'Each sectors ID should be an integer' })
    // @Min(1, { each: true, message: 'Each sectors ID should be greater than or equal to 1' })
    asset_sectors: number[];

    @IsNotEmpty({ message: 'technologies should not be empty' })
    @IsArray({ message: 'technologies should be an array' })
    @ArrayNotEmpty({ message: 'technologies Array should not be empty' })
    // @IsInt({ each: true, message: 'Each technologies ID should be an integer' })
    // @Min(1, { each: true, message: 'Each technologies ID should be greater than or equal to 1' })
    asset_technologies: number[];

    @IsNotEmpty({ message: 'business_functions should not be empty' })
    @IsArray({ message: 'business_functions should be an array' })
    @ArrayNotEmpty({ message: 'business_functions Array should not be empty' })
    // @IsInt({ each: true, message: 'Each business_functions ID should be an integer' })
    // @Min(1, { each: true, message: 'Each business_functions ID should be greater than or equal to 1' })
    asset_business: number[];

    @IsNotEmpty({ message: 'portfolios should not be empty' })
    @IsArray({ message: 'portfolios should be an array' })
    @ArrayNotEmpty({ message: 'portfolios Array should not be empty' })
    // @IsInt({ each: true, message: 'Each portfolios ID should be an integer' })
    // @Min(1, { each: true, message: 'Each portfolios ID should be greater than or equal to 1' })
    asset_portfolios: number[];

    @IsNotEmpty({ message: 'Group should not be empty' })
    @IsArray({ message: 'Group should be an array' })
    @ArrayNotEmpty({ message: 'Group Array should not be empty' })
    // @IsInt({ each: true, message: 'Each group ID should be an integer' })
    // @Min(1, { each: true, message: 'Each Group ID should be greater than or equal to 1' })
    asset_groups: number[];

    @IsNotEmpty({ message: 'Short description should not be empty' })
    @IsString()
    readonly short_description: string;

    @IsNotEmpty({ message: 'Description should not be empty' })
    @IsString()
    readonly description: string;

    @IsNotEmpty({ message: 'Customer issues should not be empty' })
    @IsString()
    readonly customer_issues: string;

    @IsNotEmpty({ message: 'Benefits should not be empty' })
    @IsString()
    readonly benifits: string;

    @IsNotEmpty({ message: 'Solutions should not be empty' })
    @IsString()
    readonly solutions: string;

    // @IsString()
    // @IsOptional()
    // // @Matches(/^data:image\/(jpeg|png|gif);base64,[A-Za-z0-9+/=]+$/, {
    // //     message: 'Logo should be a valid base64 encoded string',
    // // })
    // logo: string;

    // @IsOptional()
    // // source_code: Express.Multer.File;
    // source_code: string;

    @IsString()
    @IsOptional()
    links: string;

    @IsString()
    @IsOptional()
    platform_requirements: string;

    @IsString()
    @IsOptional()
    logistics_information: string;

    @IsString()
    @IsOptional()
    tools: string;

    @IsString()
    @IsOptional()
    last_events: string;

    @IsString()
    @IsOptional()
    industry_partnership: string;

    @IsString()
    @IsOptional()
    setup_documentation: string;

    // @IsOptional()
    // asset_files: Express.Multer.File[];

    @IsString()
    @IsOptional()
    readonly tags: string;
}