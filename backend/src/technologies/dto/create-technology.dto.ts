import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TechnologyStatus } from '../../shared/status.enum';
export class CreateTechnologyDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    @IsEnum(TechnologyStatus, { message: 'Invalid status value' })
    readonly status: TechnologyStatus.ACTIVE | TechnologyStatus.INACTIVE;
}
