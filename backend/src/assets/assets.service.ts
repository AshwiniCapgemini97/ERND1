import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager, DataSource, LessThan, In } from 'typeorm';
import { Asset } from './entities/asset.entity';
import { AssetGroup } from './entities/asset-group.entity';
import { AssetTechnology } from './entities/asset-technology.entity';
import { AssetSector } from './entities/asset-sector.entity';
import { AssetsAssetType } from './entities/asset-asset-type.entity';
import { AssetBusiness } from './entities/asset-business.entity';
import { AssetPortfolio } from './entities/asset-portfolio.entity';
import { AssetFile } from './entities/asset-files.entity';
import { Sector } from '../sectors/entities/sector.entity';
import { Technology } from '../technologies/entities/technology.entity';
import { Portfolio } from '../portfolios/entities/portfolio.entity';
import { Group } from '../groups/entities/group.entity';
import { BusinessFunction } from '../business_functions/entities/business_function.entity';
import { AssetType } from '../asset_types/entities/asset_type.entity';
import * as fs from 'fs';
import * as path from 'path';
import { promises as fsPromises } from 'fs';
import { AssetStatus } from '../shared/status.enum';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
    @InjectRepository(AssetGroup)
    private readonly assetGroupRepository: Repository<AssetGroup>,
    @InjectRepository(AssetTechnology)
    private readonly assetTechnologyRepository: Repository<AssetTechnology>,
    @InjectRepository(AssetSector)
    private readonly assetSectorRepository: Repository<AssetSector>,
    @InjectRepository(AssetsAssetType)
    private readonly assetsAssetTypeRepository: Repository<AssetsAssetType>,
    @InjectRepository(AssetBusiness)
    private readonly assetBusinessRepository: Repository<AssetBusiness>,
    @InjectRepository(AssetPortfolio)
    private readonly assetPortfolioRepository: Repository<AssetPortfolio>,
    @InjectRepository(AssetFile)
    private readonly assetfileRepository: Repository<AssetFile>,
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
    @InjectRepository(Technology)
    private readonly technologyRepository: Repository<Technology>,
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @InjectRepository(Portfolio)
    private readonly portfolioRepository: Repository<Portfolio>,
    @InjectRepository(BusinessFunction)
    private readonly businessFunctionRepository: Repository<BusinessFunction>,
    @InjectRepository(AssetType)
    private readonly assetTypeRepository: Repository<AssetType>,
    private readonly dataSource: DataSource, // Inject DataSource
  ) {}

  async create(createAssetDto: CreateAssetDto): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    //let sourceCodePath;
    let savedForm: any;
    try {
      // const logoFilePath = await this.saveBase64File(createAssetDto.logo, 'logo');
      // if(createAssetDto.source_code) {
      //   sourceCodePath = await this.uploadFile(createAssetDto.source_code);
      // }
      
      // Create form entity
      // const form = this.assetRepository.create({
      //   ...createAssetDto,
      //   logo: logoFilePath,
      //   source_code: sourceCodePath,
      // });

      // const savedForm = await queryRunner.manager.save(Asset, form);
      const asset = this.assetRepository.create({
        ...createAssetDto,
      });
      savedForm = await queryRunner.manager.save(Asset, asset);
      if (createAssetDto.asset_types && createAssetDto.asset_types.length > 0) {
        const assetTypes = createAssetDto.asset_types.map((assetTypeId) => {
          const assetType = this.assetsAssetTypeRepository.create({
            form: savedForm,
            assetType: { id: assetTypeId },
          });
          return assetType;
        });
        await queryRunner.manager.save(AssetsAssetType, assetTypes);
      }

      // if (createAssetDto.asset_files && createAssetDto.asset_files.length > 0) {
      //   const assetFiles = await Promise.all(
      //     createAssetDto.asset_files.map(async (fileData) => {
      //       const filePath = await this.uploadFile(fileData);
      //       const assetFile = this.assetfileRepository.create({
      //         form: savedForm,
      //         file: filePath,
      //       });
      //       return assetFile;
      //     }),
      //   );
      //   await queryRunner.manager.save(AssetFile, assetFiles);
      // }

      if (createAssetDto.asset_groups && createAssetDto.asset_groups.length > 0) {
        const assetGroups = createAssetDto.asset_groups.map((groupId) => {
          const assetGroup = this.assetGroupRepository.create({
            form: savedForm,
            group: { id: groupId },
          });
          return assetGroup;
        });

        await queryRunner.manager.save(AssetGroup, assetGroups);
      }

      if (createAssetDto.asset_technologies && createAssetDto.asset_technologies.length > 0) {
        const assetTechnologies = createAssetDto.asset_technologies.map((techId) => {
          const assetTechnology = this.assetTechnologyRepository.create({
            form: savedForm,
            technology: { id: techId },
          });
          return assetTechnology;
        });

        await queryRunner.manager.save(AssetTechnology, assetTechnologies);
      }

      if (createAssetDto.asset_sectors && createAssetDto.asset_sectors.length > 0) {
        const assetSectors = createAssetDto.asset_sectors.map((sectorId) => {
          const assetSector = this.assetSectorRepository.create({
            form: savedForm,
            sector: { id: sectorId },
          });
          return assetSector;
        });
        await queryRunner.manager.save(AssetSector, assetSectors);
      }

      if (createAssetDto.asset_business && createAssetDto.asset_business.length > 0) {
        const assetBusinesses = createAssetDto.asset_business.map((businessId) => {
          const assetBusiness = this.assetBusinessRepository.create({
            form: savedForm,
            businessFunction: { id: businessId },
          });
          return assetBusiness;
        });
        await queryRunner.manager.save(AssetBusiness, assetBusinesses);
      }

      if (createAssetDto.asset_portfolios && createAssetDto.asset_portfolios.length > 0) {
        const assetPortfolios = createAssetDto.asset_portfolios.map((portfolioId) => {
          const assetPortfolio = this.assetPortfolioRepository.create({
            form: savedForm,
            portfolio: { id: portfolioId },
          });
          return assetPortfolio;
        });
        await queryRunner.manager.save(AssetPortfolio, assetPortfolios);
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException('Failed to create form: ' + error);
    } finally {
      await queryRunner.release();
    }
  }

  // private async uploadFile(file: Express.Multer.File): Promise<string> {
  //   const uploadDir = path.join(__dirname, '..', 'uploads');
  //   await fsPromises.mkdir(uploadDir, { recursive: true });

  //   const filePath = path.join(uploadDir, `${Date.now()}_${file.originalname}`);
  //   await fsPromises.writeFile(filePath, file.buffer);

  //   return `${Date.now()}_${file.originalname}`;
  // }

  async findAll(filterDto: any): Promise<any> {
    // const { page, pageSize } = filterDto;
    // const skip = (page - 1) * pageSize;
    // const where: any = {};
    // where['assetGroups.group.idd'] = groups;
    // const [data, total] = await this.assetRepository.findAndCount({
    //   where: {
    //     assetGroups: {
    //       group: {
    //         id: In(groups),
    //       },
    //     },
    //     assetBusiness: {
    //       businessFunction: {
    //         id: In(business),
    //       },
    //     },
    //     assetTechnology: {
    //       technology: {
    //         id: In(technology),
    //       },
    //     },
    //     // assetSector: {
    //     //   sector: {
    //     //     id: In(sector),
    //     //   }
    //     // }
    //   },
    //   relations: [
    //     'assetsAssetType',
    //     'assetsAssetType.assetType',
    //     'assetGroups',
    //     'assetGroups.group',
    //     'assetBusiness',
    //     'assetBusiness.businessFunction',
    //     'assetPortfolio',
    //     'assetPortfolio.portfolio',
    //     'assetSector',
    //     'assetSector.sector',
    //     'assetTechnology',
    //     'assetTechnology.technology',
    //     'assetFile',
    //   ],

    //   // where: {
    //   //   'status': AssetStatus.INACTIVE
    //   //  },
    //   skip,
    //   take: pageSize,
    // });
    // data.forEach((asset) => {
    //  //asset.logo = asset.logoUrl;
    //   asset.assetFile.forEach((assetFile) => {
    //     assetFile.file = assetFile.logoUrl;
    //   });
    //   return AssetFile;
    // });
    let data: any[], total: number;
  
    if (filterDto.page == null && filterDto.pageSize == null) {
      [data, total] = await this.assetRepository.findAndCount();
    } else {
      const validatedPage = filterDto.page || 1;
      const validatedPageSize = filterDto.pageSize || 10;
      const skip = (validatedPage - 1) * validatedPageSize;
  
      [data, total] = await this.assetRepository.findAndCount({
        skip,
        take: validatedPageSize,
      });
    }
  
    return {
      data,
      total
    };
  }

  
  async findOne(id: number): Promise<any> {
    const asset = await this.assetRepository.find({
      where: { id },
      relations: [
        'assetGroups',
        'assetBusiness',
        'assetPortfolio',
        'assetFile',
        'assetSector',
        'assetTechnology',
        'assetsAssetType',
      ],
    });

    if (!asset) {
      throw new NotFoundException(`Asset with ID ${id} not found`);
    }
    const assetSectors = await this.assetSectorRepository
      .createQueryBuilder('assetSector')
      .leftJoinAndSelect('assetSector.sector', 'sector')
      .select(['assetSector.id', 'sector.id', 'sector.title'])
      .where('assetSector.asset_id = :id', { id })
      .getMany();

    const sectorsWithNames = assetSectors.map((as) => ({
      Id: as.sector.id,
      Name: as.sector.title,
    }));
    const assetTechnologies = await this.assetTechnologyRepository
    .createQueryBuilder('assetTechnology')
    .leftJoinAndSelect('assetTechnology.technology', 'technology')
    .select(['assetTechnology.id', 'technology.id', 'technology.title'])
    .where('assetTechnology.asset_id = :id', { id })
    .getMany();

    const technologiesWithNames = assetTechnologies.map((as) => ({
      Id: as.technology.id,
      Name: as.technology.title,
    }));

    const assetPortfolio= await this.assetPortfolioRepository
    .createQueryBuilder('assetportfolio')
    .leftJoinAndSelect('assetportfolio.portfolio', 'portfolio')
    .select(['assetportfolio.id', 'portfolio.id', 'portfolio.title'])
    .where('assetportfolio.asset_id = :id', { id })
    .getMany();

    const portfoliosWithNames = assetPortfolio.map((as) => ({
      Id: as.portfolio.id,
      Name: as.portfolio.title,
    }));

    const assetGroups= await this.assetGroupRepository
    .createQueryBuilder('assetGroup')
    .leftJoinAndSelect('assetGroup.group', 'group')
    .select(['assetGroup.id', 'group.id', 'group.title'])
    .where('assetGroup.asset_id = :id', { id })
    .getMany();

    const groupsWithNames = assetGroups.map((as) => ({
      Id: as.group.id,
      Name: as.group.title,
    }));

    const assetBusiness= await this.assetBusinessRepository
    .createQueryBuilder('assetBusiness')
    .leftJoinAndSelect('assetBusiness.businessFunction', 'businessFunction')
    .select(['assetBusiness.id', 'businessFunction.id', 'businessFunction.title'])
    .where('assetBusiness.asset_id = :id', { id })
    .getMany();

    const businessWithNames = assetBusiness.map((as) => ({
      Id: as.businessFunction.id,
      Name: as.businessFunction.title,
    }));

    const assetTypes= await this.assetsAssetTypeRepository
    .createQueryBuilder('assetAssetTypes')
    .leftJoinAndSelect('assetAssetTypes.assetType', 'assetType')
    .select(['assetAssetTypes.id', 'assetType.id', 'assetType.title'])
    .where('assetAssetTypes.asset_id = :id', { id })
    .getMany();

    const typesWithNames = assetTypes.map((as) => ({
      Id: as.assetType.id,
      Name: as.assetType.title,
    }));
    
    return {
      asset,
      sectors: sectorsWithNames,
      technologies: technologiesWithNames,
      portfolios: portfoliosWithNames,
      groups: groupsWithNames,
      business: businessWithNames,
      types: typesWithNames
    };
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }

  private async handleFileUpload(
    file: any,
    fieldName: string,
  ): Promise<string> {
    // Handle file upload logic (e.g., save to storage, generate unique filename)
    // You can use any file storage service (AWS S3, Google Cloud Storage, local storage, etc.)
    // Return the file path or URL after successful upload
    // For simplicity, we'll assume the file is stored locally in an "uploads" folder

    const fileName = `${fieldName}_${Date.now()}_${file.originalname}`;
    const filePath = `uploads/${fileName}`;

    // Move the file to the uploads folder
    await fs.promises.writeFile(filePath, file.buffer);

    return filePath;
  }
}
