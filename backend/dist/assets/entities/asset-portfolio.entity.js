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
exports.AssetPortfolio = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("./asset.entity");
const portfolio_entity_1 = require("../../portfolios/entities/portfolio.entity");
let AssetPortfolio = class AssetPortfolio {
};
exports.AssetPortfolio = AssetPortfolio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssetPortfolio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asset_entity_1.Asset, (asset) => asset.assetPortfolio),
    (0, typeorm_1.JoinColumn)({ name: 'asset_id' }),
    __metadata("design:type", asset_entity_1.Asset)
], AssetPortfolio.prototype, "form", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => portfolio_entity_1.Portfolio, (portfolio) => portfolio.assetPortfolio),
    (0, typeorm_1.JoinColumn)({ name: 'portfolio_id' }),
    __metadata("design:type", portfolio_entity_1.Portfolio)
], AssetPortfolio.prototype, "portfolio", void 0);
exports.AssetPortfolio = AssetPortfolio = __decorate([
    (0, typeorm_1.Entity)('asset_portfolios')
], AssetPortfolio);
//# sourceMappingURL=asset-portfolio.entity.js.map