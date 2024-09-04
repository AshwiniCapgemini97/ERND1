"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRatingsModule = void 0;
const common_1 = require("@nestjs/common");
const asset_ratings_service_1 = require("./asset_ratings.service");
const asset_ratings_controller_1 = require("./asset_ratings.controller");
let AssetRatingsModule = class AssetRatingsModule {
};
exports.AssetRatingsModule = AssetRatingsModule;
exports.AssetRatingsModule = AssetRatingsModule = __decorate([
    (0, common_1.Module)({
        controllers: [asset_ratings_controller_1.AssetRatingsController],
        providers: [asset_ratings_service_1.AssetRatingsService],
    })
], AssetRatingsModule);
//# sourceMappingURL=asset_ratings.module.js.map