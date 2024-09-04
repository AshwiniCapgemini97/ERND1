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
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asset_entity_1 = require("./entities/asset.entity");
const asset_group_entity_1 = require("./entities/asset-group.entity");
const asset_technology_entity_1 = require("./entities/asset-technology.entity");
const asset_sector_entity_1 = require("./entities/asset-sector.entity");
const asset_asset_type_entity_1 = require("./entities/asset-asset-type.entity");
const asset_business_entity_1 = require("./entities/asset-business.entity");
const asset_portfolio_entity_1 = require("./entities/asset-portfolio.entity");
const asset_files_entity_1 = require("./entities/asset-files.entity");
const fs = require("fs");
const path = require("path");
const fs_1 = require("fs");
let AssetsService = class AssetsService {
    constructor(assetRepository, assetGroupRepository, assetTechnologyRepository, assetSectorRepository, assetsAssetTypeRepository, assetBusinessRepository, assetPortfolioRepository, assetfileRepository, dataSource) {
        this.assetRepository = assetRepository;
        this.assetGroupRepository = assetGroupRepository;
        this.assetTechnologyRepository = assetTechnologyRepository;
        this.assetSectorRepository = assetSectorRepository;
        this.assetsAssetTypeRepository = assetsAssetTypeRepository;
        this.assetBusinessRepository = assetBusinessRepository;
        this.assetPortfolioRepository = assetPortfolioRepository;
        this.assetfileRepository = assetfileRepository;
        this.dataSource = dataSource;
    }
    async create(createAssetDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const logoFilePath = await this.uploadFile(createAssetDto.logo);
            const sorurcCodePath = await this.uploadFile(createAssetDto.source_code);
            const form = this.assetRepository.create({
                ...createAssetDto,
                logo: logoFilePath,
                source_code: sorurcCodePath,
            });
            console.log('form', form);
            const savedForm = await queryRunner.manager.save(asset_entity_1.Asset, form);
            if (createAssetDto.asset_types && createAssetDto.asset_types.length > 0) {
                const assetTypes = createAssetDto.asset_types.map((assetTypeId) => {
                    const assetType = this.assetsAssetTypeRepository.create({
                        form: savedForm,
                        assetType: { id: assetTypeId },
                    });
                    return assetType;
                });
                await queryRunner.manager.save(asset_asset_type_entity_1.AssetsAssetType, assetTypes);
            }
            if (createAssetDto.asset_files && createAssetDto.asset_files.length > 0) {
                console.log('createAssetDto.asset_files', createAssetDto.asset_files);
                const assetFiles = await Promise.all(createAssetDto.asset_files.map(async (fileData) => {
                    const filePath = await this.uploadFile(fileData);
                    const assetFile = this.assetfileRepository.create({
                        form: savedForm,
                        file: filePath,
                    });
                    return assetFile;
                }));
                console.log('assetFiles', assetFiles);
                await queryRunner.manager.save(asset_files_entity_1.AssetFile, assetFiles);
            }
            if (createAssetDto.asset_groups &&
                createAssetDto.asset_groups.length > 0) {
                const assetGroups = createAssetDto.asset_groups.map((groupId) => {
                    const assetGroup = this.assetGroupRepository.create({
                        form: savedForm,
                        group: { id: groupId },
                    });
                    return assetGroup;
                });
                await queryRunner.manager.save(asset_group_entity_1.AssetGroup, assetGroups);
            }
            if (createAssetDto.asset_technologies &&
                createAssetDto.asset_technologies.length > 0) {
                const assetTechnologies = createAssetDto.asset_technologies.map((techId) => {
                    const assetTechnology = this.assetTechnologyRepository.create({
                        form: savedForm,
                        technology: { id: techId },
                    });
                    return assetTechnology;
                });
                await queryRunner.manager.save(asset_technology_entity_1.AssetTechnology, assetTechnologies);
            }
            if (createAssetDto.asset_sectors &&
                createAssetDto.asset_sectors.length > 0) {
                const assetSectors = createAssetDto.asset_sectors.map((sectorId) => {
                    const assetSector = this.assetSectorRepository.create({
                        form: savedForm,
                        sector: { id: sectorId },
                    });
                    return assetSector;
                });
                await queryRunner.manager.save(asset_sector_entity_1.AssetSector, assetSectors);
            }
            if (createAssetDto.asset_business &&
                createAssetDto.asset_business.length > 0) {
                const assetBusinesses = createAssetDto.asset_sectors.map((businessId) => {
                    const assetBusiness = this.assetBusinessRepository.create({
                        form: savedForm,
                        businessFunction: { id: businessId },
                    });
                    return assetBusiness;
                });
                await queryRunner.manager.save(asset_business_entity_1.AssetBusiness, assetBusinesses);
            }
            if (createAssetDto.asset_portfolios &&
                createAssetDto.asset_portfolios.length > 0) {
                const assetPortfolios = createAssetDto.asset_portfolios.map((portfolioId) => {
                    const assetPortfolio = this.assetPortfolioRepository.create({
                        form: savedForm,
                        portfolio: { id: portfolioId },
                    });
                    return assetPortfolio;
                });
                await queryRunner.manager.save(asset_portfolio_entity_1.AssetPortfolio, assetPortfolios);
            }
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create form.' + error);
        }
        finally {
            await queryRunner.release();
        }
    }
    async uploadFile(file) {
        const uploadDir = path.join(__dirname, '..', 'uploads');
        console.log('uploadDir', uploadDir);
        try {
            await fs_1.promises.mkdir(uploadDir, { recursive: true });
            const filePath = path.join(uploadDir, `${Date.now()}_${file.originalname}`);
            console.log('filePath', filePath);
            console.log('file.buffer', file.buffer);
            await fs_1.promises.writeFile(filePath, file.buffer);
            return `${Date.now()}_${file.originalname}`;
        }
        catch (error) {
            console.error('Failed to upload file:', error);
            throw new Error('Failed to upload file');
        }
    }
    async findAll(filterDto) {
        const { page, pageSize, groups, business, technology, sector } = filterDto;
        console.log(typeof page);
        console.log(typeof pageSize);
        const skip = (page - 1) * pageSize;
        console.log(typeof skip);
        const where = {};
        console.log('groups', groups);
        const [data, total] = await this.assetRepository.findAndCount({
            where: {
                assetGroups: {
                    group: {
                        id: (0, typeorm_2.In)(groups),
                    },
                },
                assetBusiness: {
                    businessFunction: {
                        id: (0, typeorm_2.In)(business),
                    },
                },
                assetTechnology: {
                    technology: {
                        id: (0, typeorm_2.In)(technology),
                    },
                },
            },
            relations: [
                'assetsAssetType',
                'assetsAssetType.assetType',
                'assetGroups',
                'assetGroups.group',
                'assetBusiness',
                'assetBusiness.businessFunction',
                'assetPortfolio',
                'assetPortfolio.portfolio',
                'assetSector',
                'assetSector.sector',
                'assetTechnology',
                'assetTechnology.technology',
                'assetFile',
            ],
            skip,
            take: pageSize,
        });
        data.forEach((asset) => {
            asset.logo = asset.logoUrl;
            asset.assetFile.forEach((assetFile) => {
                assetFile.file = assetFile.logoUrl;
            });
            return asset_files_entity_1.AssetFile;
        });
        return {
            data,
            total,
        };
    }
    findOne(id) {
        return `This action returns a #${id} asset`;
    }
    update(id, updateAssetDto) {
        return `This action updates a #${id} asset`;
    }
    remove(id) {
        return `This action removes a #${id} asset`;
    }
    async handleFileUpload(file, fieldName) {
        const fileName = `${fieldName}_${Date.now()}_${file.originalname}`;
        const filePath = `uploads/${fileName}`;
        await fs.promises.writeFile(filePath, file.buffer);
        return filePath;
    }
};
exports.AssetsService = AssetsService;
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asset_entity_1.Asset)),
    __param(1, (0, typeorm_1.InjectRepository)(asset_group_entity_1.AssetGroup)),
    __param(2, (0, typeorm_1.InjectRepository)(asset_technology_entity_1.AssetTechnology)),
    __param(3, (0, typeorm_1.InjectRepository)(asset_sector_entity_1.AssetSector)),
    __param(4, (0, typeorm_1.InjectRepository)(asset_asset_type_entity_1.AssetsAssetType)),
    __param(5, (0, typeorm_1.InjectRepository)(asset_business_entity_1.AssetBusiness)),
    __param(6, (0, typeorm_1.InjectRepository)(asset_portfolio_entity_1.AssetPortfolio)),
    __param(7, (0, typeorm_1.InjectRepository)(asset_files_entity_1.AssetFile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], AssetsService);
//# sourceMappingURL=assets.service.js.map