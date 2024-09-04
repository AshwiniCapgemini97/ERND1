import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { SectorStatus } from '../../shared/status.enum';
export class CreateSectorDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    @IsEnum(SectorStatus, { message: 'Invalid status value' })
    readonly status: SectorStatus.ACTIVE | SectorStatus.INACTIVE;
}
