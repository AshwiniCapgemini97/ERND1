"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssetTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_asset_type_dto_1 = require("./create-asset_type.dto");
class UpdateAssetTypeDto extends (0, mapped_types_1.PartialType)(create_asset_type_dto_1.CreateAssetTypeDto) {
}
exports.UpdateAssetTypeDto = UpdateAssetTypeDto;
//# sourceMappingURL=update-asset_type.dto.js.map