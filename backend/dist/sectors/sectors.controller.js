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
exports.SectorsController = void 0;
const common_1 = require("@nestjs/common");
const sectors_service_1 = require("./sectors.service");
const create_sector_dto_1 = require("./dto/create-sector.dto");
const update_sector_dto_1 = require("./dto/update-sector.dto");
let SectorsController = class SectorsController {
    constructor(sectorsService) {
        this.sectorsService = sectorsService;
    }
    async createSector(createSectorDto) {
        const data = await this.sectorsService.create(createSectorDto);
        if (!data) {
            throw new common_1.HttpException('Error Creating New Sector', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            status: 'success',
            data,
        };
    }
    async findAll(page, pageSize) {
        const { data, total } = await this.sectorsService.findAll(page, pageSize);
        if (!data || data.length === 0) {
            throw new common_1.HttpException('No Sectors found.', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            status: 'success',
            data,
            total
        };
    }
    async findOne(id) {
        return await this.sectorsService.findOne(+id);
    }
    async update(id, updateSectorDto) {
        return await this.sectorsService.update(+id, updateSectorDto);
    }
    async remove(id) {
        const deletedMessage = await this.sectorsService.remove(+id);
        return deletedMessage;
    }
};
exports.SectorsController = SectorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sector_dto_1.CreateSectorDto]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "createSector", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sector_dto_1.UpdateSectorDto]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectorsController.prototype, "remove", null);
exports.SectorsController = SectorsController = __decorate([
    (0, common_1.Controller)('sectors'),
    __metadata("design:paramtypes", [sectors_service_1.SectorsService])
], SectorsController);
//# sourceMappingURL=sectors.controller.js.map