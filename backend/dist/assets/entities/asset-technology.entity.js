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
exports.AssetTechnology = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("./asset.entity");
const technology_entity_1 = require("../../technologies/entities/technology.entity");
let AssetTechnology = class AssetTechnology {
};
exports.AssetTechnology = AssetTechnology;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssetTechnology.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asset_entity_1.Asset, (asset) => asset.assetTechnology),
    (0, typeorm_1.JoinColumn)({ name: 'asset_id' }),
    __metadata("design:type", asset_entity_1.Asset)
], AssetTechnology.prototype, "form", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => technology_entity_1.Technology, (technology) => technology.assetTechnology),
    (0, typeorm_1.JoinColumn)({ name: 'technology_id' }),
    __metadata("design:type", technology_entity_1.Technology)
], AssetTechnology.prototype, "technology", void 0);
exports.AssetTechnology = AssetTechnology = __decorate([
    (0, typeorm_1.Entity)('asset_technologies')
], AssetTechnology);
//# sourceMappingURL=asset-technology.entity.js.map