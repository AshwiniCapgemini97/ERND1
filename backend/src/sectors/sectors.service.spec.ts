import { Test, TestingModule } from '@nestjs/testing';
import { SectorsService } from './sectors.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sector } from './entities/sector.entity';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { NotFoundException } from '@nestjs/common';
import { SectorStatus } from '../shared/status.enum';

describe('SectorsService', () => {
  let service: SectorsService;
  let repository: Repository<Sector>;

  const mockSectorRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findAndCount: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SectorsService,
        {
          provide: getRepositoryToken(Sector),
          useValue: mockSectorRepository,
        },
      ],
    }).compile();

    service = module.get<SectorsService>(SectorsService);
    repository = module.get<Repository<Sector>>(getRepositoryToken(Sector));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new sector', async () => {
      const createSectorDto: CreateSectorDto = { title: 'New Sector', status: SectorStatus.ACTIVE };
      const savedSector = { id: 1, ...createSectorDto };

      mockSectorRepository.create.mockReturnValue(createSectorDto);
      mockSectorRepository.save.mockResolvedValue(savedSector);

      const result = await service.create(createSectorDto);

      expect(result).toEqual(savedSector);
      expect(repository.create).toHaveBeenCalledWith(createSectorDto);
      expect(repository.save).toHaveBeenCalledWith(createSectorDto);
    });
  });

  describe('findAll', () => {
    it('should return all sectors without pagination', async () => {
      const sectors = [{ id: 1, title: 'Sector 1', status: 'active' }];
      const total = 1;

      mockSectorRepository.findAndCount.mockResolvedValue([sectors, total]);

      const result = await service.findAll();

      expect(result).toEqual({ data: sectors, total });
    });

    it('should return sectors with pagination', async () => {
      const sectors = [{ id: 1, title: 'Sector 1', status: 'active' }];
      const total = 1;

      mockSectorRepository.findAndCount.mockResolvedValue([sectors, total]);

      const result = await service.findAll(1, 10, '');

      expect(result).toEqual({ data: sectors, total });
    });

    it('should return sectors with search query', async () => {
      const sectors = [{ id: 1, title: 'Sector 1', status: 'active' }];
      const total = 1;

      mockSectorRepository.findAndCount.mockResolvedValue([sectors, total]);

      const result = await service.findAll(1, 10, 'Sector');

      expect(result).toEqual({ data: sectors, total });
      expect(repository.findAndCount).toHaveBeenCalledWith({
        where: { title: expect.any(Object) },
        skip: 0,
        take: 10,
      });
    });
  });

  describe('findOne', () => {
    it('should return a single sector', async () => {
      const sector = { id: 1, title: 'Sector 1', status: 'active' };

      mockSectorRepository.findOne.mockResolvedValue(sector);

      const result = await service.findOne(1);

      expect(result).toEqual(sector);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw an error if sector not found', async () => {
      mockSectorRepository.findOne.mockResolvedValue(null);

      await expect(service.findOne(1)).rejects.toThrow(
        new NotFoundException(`Sector with ID 1 not found`)
      );
    });
  });

  describe('update', () => {
    it('should update a sector', async () => {
      const updateSectorDto: UpdateSectorDto = { title: 'Updated Sector', status: SectorStatus.ACTIVE };
      const result = { affected: 1 };

      mockSectorRepository.update.mockResolvedValue(result);

      const response = await service.update(1, updateSectorDto);

      expect(response).toEqual(result);
      expect(repository.update).toHaveBeenCalledWith(1, updateSectorDto);
    });

    it('should throw an error if sector not found', async () => {
      mockSectorRepository.update.mockResolvedValue({ affected: 0 });

      await expect(service.update(1, {})).rejects.toThrow(
        new NotFoundException(`Sector with ID 1 not found`)
      );
    });
  });

  describe('remove', () => {
    it('should remove a sector', async () => {
      const result = { affected: 1 };

      mockSectorRepository.delete.mockResolvedValue(result);

      await expect(service.remove(1)).resolves.toBeUndefined();
      expect(repository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw an error if sector not found', async () => {
      mockSectorRepository.delete.mockResolvedValue({ affected: 0 });

      await expect(service.remove(1)).rejects.toThrow(
        new NotFoundException(`Sector with ID 1 not found`)
      );
    });
  });
});
