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
exports.Asset = void 0;
const typeorm_1 = require("typeorm");
const status_enum_1 = require("../../shared/status.enum");
const asset_group_entity_1 = require("./asset-group.entity");
const asset_business_entity_1 = require("./asset-business.entity");
const asset_portfolio_entity_1 = require("./asset-portfolio.entity");
const asset_files_entity_1 = require("./asset-files.entity");
const asset_sector_entity_1 = require("./asset-sector.entity");
const asset_technology_entity_1 = require("./asset-technology.entity");
const asset_asset_type_entity_1 = require("./asset-asset-type.entity");
let Asset = class Asset {
    get logoUrl() {
        const baseUrl = 'http://localhost:3000';
        return `${baseUrl}/uploads/${this.logo}`;
    }
};
exports.Asset = Asset;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Asset.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Asset.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "short_description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "customer_issues", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "benifits", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "solutions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "source_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "links", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "platform_requirements", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "logistics_information", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "tools", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "last_events", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "industry_partnership", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "setup_documentation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: status_enum_1.AssetFileType, default: status_enum_1.AssetFileType.CONFIDENTIAL }),
    __metadata("design:type", String)
], Asset.prototype, "asset_file_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: status_enum_1.AssetTypeStatus, default: status_enum_1.AssetTypeStatus.ACTIVE }),
    __metadata("design:type", String)
], Asset.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_asset_type_entity_1.AssetsAssetType, (assetsAssetType) => assetsAssetType.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetsAssetType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_group_entity_1.AssetGroup, (assetGroup) => assetGroup.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetGroups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_business_entity_1.AssetBusiness, (assetBusiness) => assetBusiness.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetBusiness", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_files_entity_1.AssetFile, (assetFile) => assetFile.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetFile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_portfolio_entity_1.AssetPortfolio, (assetPortfolio) => assetPortfolio.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetPortfolio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_sector_entity_1.AssetSector, (assetSector) => assetSector.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetSector", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => asset_technology_entity_1.AssetTechnology, (assetTechnology) => assetTechnology.form),
    __metadata("design:type", Array)
], Asset.prototype, "assetTechnology", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Asset.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Asset.prototype, "updated_at", void 0);
exports.Asset = Asset = __decorate([
    (0, typeorm_1.Entity)('assets')
], Asset);
//# sourceMappingURL=asset.entity.js.map