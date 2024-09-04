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
exports.CreateAssetDto = void 0;
const class_validator_1 = require("class-validator");
const status_enum_1 = require("../../shared/status.enum");
class CreateAssetDto {
    constructor() {
        this.asset_file_type = status_enum_1.AssetFileType.CONFIDENTIAL;
    }
}
exports.CreateAssetDto = CreateAssetDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name should not be empty' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(status_enum_1.AssetFileType, { message: 'Invalid AssetFileType value' }),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "asset_file_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'asset_types should not be empty' }),
    (0, class_validator_1.IsArray)({ message: 'asset_types should be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'asset_types Array should not be empty' }),
    __metadata("design:type", Array)
], CreateAssetDto.prototype, "asset_types", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'sectors should not be empty' }),
    (0, class_validator_1.IsArray)({ message: 'sectors should be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'sectors Array should not be empty' }),
    __metadata("design:type", Array)
], CreateAssetDto.prototype, "asset_sectors", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'technologies should not be empty' }),
    (0, class_validator_1.IsArray)({ message: 'technologies should be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'technologies Array should not be empty' }),
    __metadata("design:type", Array)
], CreateAssetDto.prototype, "asset_technologies", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'business_functions should not be empty' }),
    (0, class_validator_1.IsArray)({ message: 'business_functions should be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'business_functions Array should not be empty' }),
    __metadata("design:type", Array)
], CreateAssetDto.prototype, "asset_business", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'portfolios should not be empty' }),
    (0, class_validator_1.IsArray)({ message: 'portfolios should be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'portfolios Array should not be empty' }),
    __metadata("design:type", Array)
], CreateAssetDto.prototype, "asset_portfolios", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Group should not be empty' }),
    (0, class_validator_1.IsArray)({ message: 'Group should be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Group Array should not be empty' }),
    __metadata("design:type", Array)
], CreateAssetDto.prototype, "asset_groups", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Shot description should not be empty' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "short_description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Description should not be empty' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'customer_issues should not be empty' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "customer_issues", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Benifits should not be empty' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "benifits", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Soultionss should not be empty' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "solutions", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "links", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "platform_requirements", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "logistics_information", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "tools", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "last_events", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "industry_partnership", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "setup_documentation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetDto.prototype, "tags", void 0);
//# sourceMappingURL=create-asset.dto.js.map