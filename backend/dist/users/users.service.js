"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const mail_service_1 = require("./../mail/mail.service");
const status_enum_1 = require("../../src/shared/status.enum");
let UsersService = class UsersService {
    constructor(mailService, UserRepository) {
        this.mailService = mailService;
        this.UserRepository = UserRepository;
    }
    async create(createUserDto) {
        console.log('createUserDto', createUserDto);
        let { password } = createUserDto;
        console.log(password);
        const hashedPassword = await this.hashPassword(password);
        console.log({ ...createUserDto, password: hashedPassword });
        const verificationToken = this.generateRandomString(32);
        const user = this.UserRepository.create({
            ...createUserDto,
            password: hashedPassword,
            token: verificationToken,
        });
        return this.UserRepository.save(user);
    }
    async verifyUser(token) {
        const user = await this.UserRepository.findOne({ where: { token } });
        if (!user) {
            return false;
        }
        user.status = status_enum_1.UserStatus.ACTIVE;
        await this.UserRepository.save(user);
        return true;
    }
    async findUserByEmail(email) {
        return this.UserRepository.findOne({ where: { email } });
    }
    async findAll(page = 1, pageSize = 10) {
        const skip = (page - 1) * pageSize;
        const [dataNew, total] = await this.UserRepository.findAndCount({
            relations: ['approver'],
            skip,
            take: pageSize,
        });
        const data = await dataNew.map((item) => ({
            id: item.id,
            name: item.name,
            status: item.status,
            email: item.email,
            created_at: item.created_at,
            approver_name: item.approver ? item.approver.name : null,
            approved_at: item.approved_date,
        }));
        console.log('updatedData', data);
        return {
            data,
            total,
        };
    }
    async changeUserStatus(userId, status, approverId) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
            select: ['id', 'name', 'email', 'status', 'created_at'],
        });
        if (!user) {
            throw new Error('User not found');
        }
        const statusEnumValue = status_enum_1.UserStatus[status.toUpperCase()];
        user.status = statusEnumValue;
        user.approved_by = approverId;
        const updatedUser = await this.UserRepository.save(user);
        return updatedUser;
    }
    async findOne(id) {
        return await this.UserRepository.findOne({ where: { id } });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async remove(id) {
        await this.UserRepository.delete(id);
    }
    generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString;
    }
    async comparePasswords(plainTextPassword, hashedPassword) {
        return await bcrypt.compare(plainTextPassword, hashedPassword);
    }
    async hashPassword(password) {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [mail_service_1.MailService,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map