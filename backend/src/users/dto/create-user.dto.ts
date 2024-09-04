import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name should not be empty' })
    @IsString()
    readonly name: string;

    @IsNotEmpty({ message: 'Email should not be empty' })
    @IsEmail()
    @IsString()
    readonly email: string;

    readonly account_name: string;


    readonly project_name: string;

    readonly project_id: string;

    readonly project_manager: string;

    @IsNotEmpty({ message: 'Password should not be empty' })
    @IsString()
    readonly password: string;
}
