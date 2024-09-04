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
exports.SectorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sector_entity_1 = require("./entities/sector.entity");
let SectorsService = class SectorsService {
    constructor(sectorRepository) {
        this.sectorRepository = sectorRepository;
    }
    async create(createSectorDto) {
        const { title, status } = createSectorDto;
        const newSector = this.sectorRepository.create({ title, status });
        return this.sectorRepository.save(newSector);
    }
    async findAll(page, pageSize) {
        let data, total;
        if (page == null && pageSize == null) {
            [data, total] = await this.sectorRepository.findAndCount();
        }
        else {
            const validatedPage = page || 1;
            const validatedPageSize = pageSize || 10;
            const skip = (validatedPage - 1) * validatedPageSize;
            [data, total] = await this.sectorRepository.findAndCount({
                skip,
                take: validatedPageSize,
            });
        }
        return {
            data,
            total
        };
    }
    async findOne(id) {
        const sector = await this.sectorRepository.findOne({ where: { id } });
        if (!sector) {
            throw new common_1.NotFoundException(`Sector with ID ${id} not found`);
        }
        return sector;
    }
    async update(id, updateSectorDto) {
        const result = await this.sectorRepository.update(id, updateSectorDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Sector with ID ${id} not found`);
        }
        return result;
    }
    async remove(id) {
        const result = await this.sectorRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Sector with ID ${id} not found`);
        }
        return `Sector with ID ${id} is removed`;
    }
};
exports.SectorsService = SectorsService;
exports.SectorsService = SectorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sector_entity_1.Sector)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SectorsService);
//# sourceMappingURL=sectors.service.js.map