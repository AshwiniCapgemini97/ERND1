import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateAuthDto {
    @IsNotEmpty() readonly email: string;
    @IsNotEmpty() readonly password: string;
}
