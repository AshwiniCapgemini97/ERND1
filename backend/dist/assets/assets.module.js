"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsModule = void 0;
const common_1 = require("@nestjs/common");
const assets_service_1 = require("./assets.service");
const assets_controller_1 = require("./assets.controller");
const typeorm_1 = require("@nestjs/typeorm");
const asset_entity_1 = require("./entities/asset.entity");
const asset_group_entity_1 = require("./entities/asset-group.entity");
const asset_asset_type_entity_1 = require("./entities/asset-asset-type.entity");
const asset_business_entity_1 = require("./entities/asset-business.entity");
const asset_portfolio_entity_1 = require("./entities/asset-portfolio.entity");
const asset_sector_entity_1 = require("./entities/asset-sector.entity");
const asset_technology_entity_1 = require("./entities/asset-technology.entity");
const asset_files_entity_1 = require("./entities/asset-files.entity");
let AssetsModule = class AssetsModule {
};
exports.AssetsModule = AssetsModule;
exports.AssetsModule = AssetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([asset_entity_1.Asset,
                asset_group_entity_1.AssetGroup,
                asset_asset_type_entity_1.AssetsAssetType,
                asset_business_entity_1.AssetBusiness,
                asset_portfolio_entity_1.AssetPortfolio,
                asset_sector_entity_1.AssetSector,
                asset_technology_entity_1.AssetTechnology,
                asset_files_entity_1.AssetFile
            ])],
        controllers: [assets_controller_1.AssetsController],
        providers: [assets_service_1.AssetsService],
    })
], AssetsModule);
//# sourceMappingURL=assets.module.js.map