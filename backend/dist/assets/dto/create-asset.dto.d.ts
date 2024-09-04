/// <reference types="multer" />
import { AssetFileType } from '../../shared/status.enum';
export declare class CreateAssetDto {
    readonly name: string;
    asset_file_type: AssetFileType.CONFIDENTIAL | AssetFileType.PUBLIC;
    asset_types: number[];
    asset_sectors: number[];
    asset_technologies: number[];
    asset_business: number[];
    asset_portfolios: number[];
    asset_groups: number[];
    readonly short_description: string;
    readonly description: string;
    readonly customer_issues: string;
    readonly benifits: string;
    readonly solutions: string;
    logo: Express.Multer.File;
    source_code: Express.Multer.File;
    links: string;
    platform_requirements: string;
    logistics_information: string;
    tools: string;
    last_events: string;
    industry_partnership: string;
    setup_documentation: string;
    asset_files: Express.Multer.File[];
    readonly tags: string;
}
