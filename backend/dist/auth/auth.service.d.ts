import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    create(): string;
    signIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
