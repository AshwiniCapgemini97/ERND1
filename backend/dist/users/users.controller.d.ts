import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangeUserStatusDto } from './dto/change-user-status.dto';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    signup(createUserDto: CreateUserDto): Promise<{
        status: string;
        user: User;
    }>;
    findAll(page?: number, pageSize?: number): Promise<{
        status: string;
        data: any[];
        total: number;
    }>;
    changeUserStatus(id: number, changeUserStatusDto: ChangeUserStatusDto, req: any): Promise<any>;
    findOne(id: number): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    verifyAccount(token: string): Promise<string>;
    remove(id: string): Promise<{
        userId: string;
        message: string;
    }>;
}
