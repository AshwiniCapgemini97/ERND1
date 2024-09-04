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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const status_enum_1 = require("../../src/shared/status.enum");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    create() {
        return 'This action adds a new auth';
    }
    async signIn(email, password) {
        const user = await this.usersService.findUserByEmail(email);
        if (user) {
            if (user.status == status_enum_1.UserStatus.INACTIVE) {
                throw new common_1.HttpException('User is not active.', common_1.HttpStatus.BAD_REQUEST);
            }
            const isPasswordMatch = await this.usersService.comparePasswords(password, user.password);
            if (!isPasswordMatch) {
                throw new common_1.UnauthorizedException();
            }
            const payload = { name: user.name, email: user.email, id: user.id, role_id: user.role_id, role: user.role_id == 2 ? 'User' : 'Admin' };
            const accestToken = await this.jwtService.signAsync(payload);
            return {
                ...payload, 'access_token': accestToken
            };
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map