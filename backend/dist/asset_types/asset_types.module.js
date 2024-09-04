"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetTypesModule = void 0;
const common_1 = require("@nestjs/common");
const asset_types_service_1 = require("./asset_types.service");
const asset_types_controller_1 = require("./asset_types.controller");
const typeorm_1 = require("@nestjs/typeorm");
const asset_type_entity_1 = require("./entities/asset_type.entity");
let AssetTypesModule = class AssetTypesModule {
};
exports.AssetTypesModule = AssetTypesModule;
exports.AssetTypesModule = AssetTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([asset_type_entity_1.AssetType])],
        controllers: [asset_types_controller_1.AssetTypesController],
        providers: [asset_types_service_1.AssetTypesService],
    })
], AssetTypesModule);
//# sourceMappingURL=asset_types.module.js.map