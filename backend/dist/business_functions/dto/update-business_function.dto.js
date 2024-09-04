"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessFunctionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_business_function_dto_1 = require("./create-business_function.dto");
class UpdateBusinessFunctionDto extends (0, mapped_types_1.PartialType)(create_business_function_dto_1.CreateBusinessFunctionDto) {
}
exports.UpdateBusinessFunctionDto = UpdateBusinessFunctionDto;
//# sourceMappingURL=update-business_function.dto.js.map