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
exports.AssetSector = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("./asset.entity");
const sector_entity_1 = require("../../sectors/entities/sector.entity");
let AssetSector = class AssetSector {
};
exports.AssetSector = AssetSector;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssetSector.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asset_entity_1.Asset, (asset) => asset.assetSector),
    (0, typeorm_1.JoinColumn)({ name: 'asset_id' }),
    __metadata("design:type", asset_entity_1.Asset)
], AssetSector.prototype, "form", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sector_entity_1.Sector, (sector) => sector.assetSector),
    (0, typeorm_1.JoinColumn)({ name: 'sector_id' }),
    __metadata("design:type", sector_entity_1.Sector)
], AssetSector.prototype, "sector", void 0);
exports.AssetSector = AssetSector = __decorate([
    (0, typeorm_1.Entity)('asset_sectors')
], AssetSector);
//# sourceMappingURL=asset-sector.entity.js.map