import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MailService } from './../mail/mail.service';
export declare class UsersService {
    private mailService;
    private readonly UserRepository;
    constructor(mailService: MailService, UserRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    verifyUser(token: string): Promise<boolean>;
    findUserByEmail(email: string): Promise<User>;
    findAll(page?: number, pageSize?: number): Promise<any>;
    changeUserStatus(userId: number, status: string, approverId: number): Promise<User>;
    findOne(id: number): Promise<User | undefined>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): Promise<void>;
    generateRandomString(length: number): string;
    comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
}
