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
exports.AssetRatingsController = void 0;
const common_1 = require("@nestjs/common");
const asset_ratings_service_1 = require("./asset_ratings.service");
const create_asset_rating_dto_1 = require("./dto/create-asset_rating.dto");
const update_asset_rating_dto_1 = require("./dto/update-asset_rating.dto");
let AssetRatingsController = class AssetRatingsController {
    constructor(assetRatingsService) {
        this.assetRatingsService = assetRatingsService;
    }
    create(createAssetRatingDto) {
        return this.assetRatingsService.create(createAssetRatingDto);
    }
    findAll() {
        return this.assetRatingsService.findAll();
    }
    findOne(id) {
        return this.assetRatingsService.findOne(+id);
    }
    update(id, updateAssetRatingDto) {
        return this.assetRatingsService.update(+id, updateAssetRatingDto);
    }
    remove(id) {
        return this.assetRatingsService.remove(+id);
    }
};
exports.AssetRatingsController = AssetRatingsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asset_rating_dto_1.CreateAssetRatingDto]),
    __metadata("design:returntype", void 0)
], AssetRatingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AssetRatingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetRatingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asset_rating_dto_1.UpdateAssetRatingDto]),
    __metadata("design:returntype", void 0)
], AssetRatingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssetRatingsController.prototype, "remove", null);
exports.AssetRatingsController = AssetRatingsController = __decorate([
    (0, common_1.Controller)('asset-ratings'),
    __metadata("design:paramtypes", [asset_ratings_service_1.AssetRatingsService])
], AssetRatingsController);
//# sourceMappingURL=asset_ratings.controller.js.map