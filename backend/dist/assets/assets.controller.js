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
exports.AssetsController = void 0;
const common_1 = require("@nestjs/common");
const assets_service_1 = require("./assets.service");
const create_asset_dto_1 = require("./dto/create-asset.dto");
const update_asset_dto_1 = require("./dto/update-asset.dto");
const platform_express_1 = require("@nestjs/platform-express");
const filter_dto_1 = require("./dto/filter.dto");
let AssetsController = class AssetsController {
    constructor(assetsService) {
        this.assetsService = assetsService;
    }
    async create(files, createAssetDto) {
        const logo = files['logo'] ? files['logo'][0] : null;
        const source_code = files['source_code'] ? files['source_code'][0] : null;
        const asset_files = files['asset_files'] ? files['asset_files'] : null;
        if (!source_code) {
            throw new common_1.HttpException('Soruce Code file is required', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!logo) {
            throw new common_1.HttpException('Logo file is required', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!asset_files) {
            throw new common_1.HttpException('Asset file is required', common_1.HttpStatus.BAD_REQUEST);
        }
        createAssetDto.source_code = source_code;
        createAssetDto.logo = logo;
        createAssetDto.asset_files = asset_files;
        await this.assetsService.create(createAssetDto);
        return {
            status: 'success',
            message: "Asset has been added"
        };
    }
    async findAll(filterDto) {
        const { data, total } = await this.assetsService.findAll(filterDto);
        if (!data || data.length === 0) {
            throw new common_1.HttpException('No Sectors found.', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            data,
            total
        };
    }
    findOne(id) {
        return this.assetsService.findOne(+id);
    }
    update(id, updateAssetDto) {
        return this.assetsService.update(+id, updateAssetDto);
    }
    remove(id) {
        return this.assetsService.remove(+id);
    }
};
exports.AssetsController = AssetsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'logo', maxCount: 1 },
        { name: 'source_code', maxCount: 1 },
        { name: 'asset_files', maxCount: 4 },
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        create_asset_dto_1.CreateAssetDto]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asset_dto_1.UpdateAssetDto]),
    __metadata("design:returntype", void 0)
], AssetsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetsController.prototype, "remove", null);
exports.AssetsController = AssetsController = __decorate([
    (0, common_1.Controller)('assets'),
    __metadata("design:paramtypes", [assets_service_1.AssetsService])
], AssetsController);
//# sourceMappingURL=assets.controller.js.map