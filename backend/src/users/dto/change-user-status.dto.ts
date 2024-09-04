// change-user-status.dto.ts

import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { UserStatus } from '../../shared/status.enum';


export class ChangeUserStatusDto {
    @IsNotEmpty()
    @IsEnum(UserStatus)
    status: UserStatus;
}
