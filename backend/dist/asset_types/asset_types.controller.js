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
exports.AssetTypesController = void 0;
const common_1 = require("@nestjs/common");
const asset_types_service_1 = require("./asset_types.service");
const create_asset_type_dto_1 = require("./dto/create-asset_type.dto");
const update_asset_type_dto_1 = require("./dto/update-asset_type.dto");
let AssetTypesController = class AssetTypesController {
    constructor(assetTypesService) {
        this.assetTypesService = assetTypesService;
    }
    create(createAssetTypeDto) {
        return this.assetTypesService.create(createAssetTypeDto);
    }
    async findAll(page = 1, pageSize = 5) {
        const { data, total } = await this.assetTypesService.findAll(page, pageSize);
        console.log("aset type: "+ data);
        if (!data || data.length === 0) {
            throw new common_1.HttpException('No Assets found.', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            status: 'success',
            data,
            total
        };
    }
    findOne(id) {
        return this.assetTypesService.findOne(+id);
    }
    update(id, updateAssetTypeDto) {
        return this.assetTypesService.update(+id, updateAssetTypeDto);
    }
    remove(id) {
        return this.assetTypesService.remove(+id);
    }
};
exports.AssetTypesController = AssetTypesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asset_type_dto_1.CreateAssetTypeDto]),
    __metadata("design:returntype", void 0)
], AssetTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AssetTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asset_type_dto_1.UpdateAssetTypeDto]),
    __metadata("design:returntype", void 0)
], AssetTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetTypesController.prototype, "remove", null);
exports.AssetTypesController = AssetTypesController = __decorate([
    (0, common_1.Controller)('asset-types'),
    __metadata("design:paramtypes", [asset_types_service_1.AssetTypesService])
], AssetTypesController);
//# sourceMappingURL=asset_types.controller.js.map