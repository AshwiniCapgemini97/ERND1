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
exports.Portfolio = void 0;
const typeorm_1 = require("typeorm");
const status_enum_1 = require("../../shared/status.enum");
const asset_portfolio_entity_1 = require("../../assets/entities/asset-portfolio.entity");
let Portfolio = class Portfolio {
};
exports.Portfolio = Portfolio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Portfolio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Portfolio.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Portfolio.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: status_enum_1.PortfolioStatus, default: status_enum_1.PortfolioStatus.ACTIVE }),
    __metadata("design:type", String)
], Portfolio.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => asset_portfolio_entity_1.AssetPortfolio, (assetPortfolio) => assetPortfolio.portfolio),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Portfolio.prototype, "assetPortfolio", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Portfolio.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Portfolio.prototype, "updated_at", void 0);
exports.Portfolio = Portfolio = __decorate([
    (0, typeorm_1.Entity)('portfolios')
], Portfolio);
//# sourceMappingURL=portfolio.entity.js.map