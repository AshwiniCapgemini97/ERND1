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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessFunctionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_function_entity_1 = require("./entities/business_function.entity");
let BusinessFunctionsService = class BusinessFunctionsService {
    constructor(BusinessFunctionRepository) {
        this.BusinessFunctionRepository = BusinessFunctionRepository;
    }
    create(createBusinessFunctionDto) {
        return 'This action adds a new businessFunction';
    }
    async findAll(page = 1, pageSize = 10) {
        const skip = (page - 1) * pageSize;
        const [data, total] = await this.BusinessFunctionRepository.findAndCount({
            skip,
            take: pageSize,
        });
        return {
            data,
            total
        };
    }
    findOne(id) {
        return `This action returns a #${id} businessFunction`;
    }
    update(id, updateBusinessFunctionDto) {
        return `This action updates a #${id} businessFunction`;
    }
    remove(id) {
        return `This action removes a #${id} businessFunction`;
    }
};
exports.BusinessFunctionsService = BusinessFunctionsService;
exports.BusinessFunctionsService = BusinessFunctionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(business_function_entity_1.BusinessFunction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BusinessFunctionsService);
//# sourceMappingURL=business_functions.service.js.map