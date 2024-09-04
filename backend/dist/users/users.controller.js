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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const change_user_status_dto_1 = require("./dto/change-user-status.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
const authorization_guard_1 = require("../guards/authorization.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async signup(createUserDto) {
        const { email } = createUserDto;
        const existingUser = await this.userService.findUserByEmail(email);
        if (existingUser) {
            console.log('existingUser', existingUser);
            throw new common_1.HttpException('Uses Already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.create(createUserDto);
        return {
            status: 'success',
            user: user,
        };
    }
    async findAll(page = 1, pageSize = 5) {
        console.log('await this.userService.findAll(page, pageSize)', await this.userService.findAll(page, pageSize));
        const { data, total } = await this.userService.findAll(page, pageSize);
        if (!data || data.length === 0) {
            throw new common_1.HttpException('No Users found.', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            status: 'success',
            data,
            total,
        };
    }
    async changeUserStatus(id, changeUserStatusDto, req) {
        const approverId = req.user.id;
        const user = await this.userService.changeUserStatus(id, changeUserStatusDto.status, approverId);
        return {
            status: 'success',
            user: user,
        };
    }
    findOne(id) {
        console.log('called');
        return this.userService.findOne(id);
    }
    update(id, updateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }
    async verifyAccount(token) {
        const success = await this.userService.verifyUser(token);
        if (success) {
            return 'Your account has been verified successfully.';
        }
        else {
            return 'Invalid or expired token.';
        }
    }
    async remove(id) {
        await this.userService.remove(+id);
        return { userId: id, message: 'User deleted successfully' };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('getallUsers'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(['Admin']),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, authorization_guard_1.AuthorizationGuard),
    (0, common_1.Put)(':id/update-status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, change_user_status_dto_1.ChangeUserStatusDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyAccount", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map