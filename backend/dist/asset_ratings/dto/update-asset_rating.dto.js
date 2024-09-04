"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssetRatingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_asset_rating_dto_1 = require("./create-asset_rating.dto");
class UpdateAssetRatingDto extends (0, mapped_types_1.PartialType)(create_asset_rating_dto_1.CreateAssetRatingDto) {
}
exports.UpdateAssetRatingDto = UpdateAssetRatingDto;
//# sourceMappingURL=update-asset_rating.dto.js.map