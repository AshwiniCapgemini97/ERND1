import { SectorStatus } from '../../shared/status.enum';
export declare class CreateSectorDto {
    readonly title: string;
    readonly status: SectorStatus.ACTIVE | SectorStatus.INACTIVE;
}
