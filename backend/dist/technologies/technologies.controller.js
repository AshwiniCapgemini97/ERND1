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
exports.TechnologiesController = void 0;
const common_1 = require("@nestjs/common");
const technologies_service_1 = require("./technologies.service");
const update_technology_dto_1 = require("./dto/update-technology.dto");
let TechnologiesController = class TechnologiesController {
    constructor(technologiesService) {
        this.technologiesService = technologiesService;
    }
    async findAll(page = 1, pageSize = 5) {
        const { data, total } = await this.technologiesService.findAll(page, pageSize);
        if (!data || data.length === 0) {
            throw new common_1.HttpException('No Technology found.', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            status: 'success',
            data,
            total
        };
    }
    findOne(id) {
        return this.technologiesService.findOne(+id);
    }
    update(id, updateTechnologyDto) {
        return this.technologiesService.update(+id, updateTechnologyDto);
    }
    remove(id) {
        return this.technologiesService.remove(+id);
    }
};
exports.TechnologiesController = TechnologiesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TechnologiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TechnologiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_technology_dto_1.UpdateTechnologyDto]),
    __metadata("design:returntype", void 0)
], TechnologiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TechnologiesController.prototype, "remove", null);
exports.TechnologiesController = TechnologiesController = __decorate([
    (0, common_1.Controller)('technologies'),
    __metadata("design:paramtypes", [technologies_service_1.TechnologiesService])
], TechnologiesController);
//# sourceMappingURL=technologies.controller.js.map