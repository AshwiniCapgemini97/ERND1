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
exports.Technology = void 0;
const typeorm_1 = require("typeorm");
const status_enum_1 = require("../../shared/status.enum");
const asset_technology_entity_1 = require("../../assets/entities/asset-technology.entity");
let Technology = class Technology {
};
exports.Technology = Technology;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Technology.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Technology.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Technology.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: status_enum_1.TechnologyStatus, default: status_enum_1.TechnologyStatus.ACTIVE }),
    __metadata("design:type", String)
], Technology.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => asset_technology_entity_1.AssetTechnology, (assetTechnology) => assetTechnology),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Technology.prototype, "assetTechnology", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Technology.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Technology.prototype, "updated_at", void 0);
exports.Technology = Technology = __decorate([
    (0, typeorm_1.Entity)('technologies')
], Technology);
//# sourceMappingURL=technology.entity.js.map