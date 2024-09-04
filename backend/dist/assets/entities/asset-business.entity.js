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
exports.AssetBusiness = void 0;
const typeorm_1 = require("typeorm");
const asset_entity_1 = require("./asset.entity");
const business_function_entity_1 = require("../../business_functions/entities/business_function.entity");
let AssetBusiness = class AssetBusiness {
};
exports.AssetBusiness = AssetBusiness;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssetBusiness.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asset_entity_1.Asset, (asset) => asset.assetBusiness),
    (0, typeorm_1.JoinColumn)({ name: 'asset_id' }),
    __metadata("design:type", asset_entity_1.Asset)
], AssetBusiness.prototype, "form", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_function_entity_1.BusinessFunction, (businessFunction) => businessFunction.assetBusiness),
    (0, typeorm_1.JoinColumn)({ name: 'business_id' }),
    __metadata("design:type", business_function_entity_1.BusinessFunction)
], AssetBusiness.prototype, "businessFunction", void 0);
exports.AssetBusiness = AssetBusiness = __decorate([
    (0, typeorm_1.Entity)('asset_businesses')
], AssetBusiness);
//# sourceMappingURL=asset-business.entity.js.map