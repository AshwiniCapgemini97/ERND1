import { Test, TestingModule } from '@nestjs/testing';
import { TechnologiesService } from './technologies.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Technology } from './entities/technology.entity';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { NotFoundException } from '@nestjs/common';
import { TechnologyStatus } from '../shared/status.enum';

describe('TechnologiesService', () => {
  let service: TechnologiesService;
  let repository: Repository<Technology>;

  const mockTechnologyRepository = {
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
        TechnologiesService,
        {
          provide: getRepositoryToken(Technology),
          useValue: mockTechnologyRepository,
        },
      ],
    }).compile();

    service = module.get<TechnologiesService>(TechnologiesService);
    repository = module.get<Repository<Technology>>(getRepositoryToken(Technology));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new technology', async () => {
      const createTechnologyDto: CreateTechnologyDto = { title: 'New Technology', status: TechnologyStatus.ACTIVE };
      const savedTechnology = { id: 1, ...createTechnologyDto };

      mockTechnologyRepository.create.mockReturnValue(createTechnologyDto);
      mockTechnologyRepository.save.mockResolvedValue(savedTechnology);

      const result = await service.create(createTechnologyDto);

      expect(result).toEqual(savedTechnology);
      expect(repository.create).toHaveBeenCalledWith(createTechnologyDto);
      expect(repository.save).toHaveBeenCalledWith(createTechnologyDto);
    });
  });

  describe('findAll', () => {
    it('should return all technologies without pagination', async () => {
      const technologies = [{ id: 1, title: 'Technology 1', status: 'active' }];
      const total = 1;

      mockTechnologyRepository.findAndCount.mockResolvedValue([technologies, total]);

      const result = await service.findAll();

      expect(result).toEqual({ data: technologies, total });
    });

    it('should return technologies with pagination', async () => {
      const technologies = [{ id: 1, title: 'Technology 1', status: 'active' }];
      const total = 1;

      mockTechnologyRepository.findAndCount.mockResolvedValue([technologies, total]);

      const result = await service.findAll(1, 10, '');

      expect(result).toEqual({ data: technologies, total });
    });

    it('should return technologies with search query', async () => {
      const technologies = [{ id: 1, title: 'Technology 1', status: 'active' }];
      const total = 1;

      mockTechnologyRepository.findAndCount.mockResolvedValue([technologies, total]);

      const result = await service.findAll(1, 10, 'Technology');

      expect(result).toEqual({ data: technologies, total });
      expect(repository.findAndCount).toHaveBeenCalledWith({
        where: { title: expect.any(Object) },
        skip: 0,
        take: 10,
      });
    });
  });

  describe('findOne', () => {
    it('should return a single technology', async () => {
      const technology = { id: 1, title: 'Technology 1', status: 'active' };

      mockTechnologyRepository.findOne.mockResolvedValue(technology);

      const result = await service.findOne(1);

      expect(result).toEqual(technology);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw an error if technology not found', async () => {
      mockTechnologyRepository.findOne.mockResolvedValue(null);

      await expect(service.findOne(1)).rejects.toThrow(
        new NotFoundException(`Technology with ID 1 not found`)
      );
    });
  });

  describe('update', () => {
    it('should update a technology', async () => {
      const updateTechnologyDto: UpdateTechnologyDto = { title: 'Updated Technology', status: TechnologyStatus.ACTIVE };
      const result = { affected: 1 };

      mockTechnologyRepository.update.mockResolvedValue(result);

      const response = await service.update(1, updateTechnologyDto);

      expect(response).toEqual(result);
      expect(repository.update).toHaveBeenCalledWith(1, updateTechnologyDto);
    });

    it('should throw an error if technology not found', async () => {
      mockTechnologyRepository.update.mockResolvedValue({ affected: 0 });

      await expect(service.update(1, {})).rejects.toThrow(
        new NotFoundException(`Technology with ID 1 not found`)
      );
    });
  });

  describe('remove', () => {
    it('should remove a technology', async () => {
      const result = { affected: 1 };

      mockTechnologyRepository.delete.mockResolvedValue(result);

      await expect(service.remove(1)).resolves.toBeUndefined();
      expect(repository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw an error if technology not found', async () => {
      mockTechnologyRepository.delete.mockResolvedValue({ affected: 0 });

      await expect(service.remove(1)).rejects.toThrow(
        new NotFoundException(`Technology with ID 1 not found`)
      );
    });
  });
});
