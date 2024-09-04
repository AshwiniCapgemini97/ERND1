import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: string): string;
    signIn(createAuthDto: CreateAuthDto): Promise<{
        access_token: string;
    }>;
    remove(id: string): string;
}
