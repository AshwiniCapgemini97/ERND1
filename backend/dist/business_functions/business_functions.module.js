"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessFunctionsModule = void 0;
const common_1 = require("@nestjs/common");
const business_functions_service_1 = require("./business_functions.service");
const business_functions_controller_1 = require("./business_functions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const business_function_entity_1 = require("./entities/business_function.entity");
let BusinessFunctionsModule = class BusinessFunctionsModule {
};
exports.BusinessFunctionsModule = BusinessFunctionsModule;
exports.BusinessFunctionsModule = BusinessFunctionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([business_function_entity_1.BusinessFunction])],
        controllers: [business_functions_controller_1.BusinessFunctionsController],
        providers: [business_functions_service_1.BusinessFunctionsService],
    })
], BusinessFunctionsModule);
//# sourceMappingURL=business_functions.module.js.map