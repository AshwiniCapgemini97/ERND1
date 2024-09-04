import { Test, TestingModule } from '@nestjs/testing';
import { TechnologiesController } from './technologies.controller';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { TechnologyStatus } from '../shared/status.enum';

describe('TechnologyController', () => {
  let controller: TechnologiesController;
  let service: TechnologiesService;

  const mockTechnologyService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologiesController],
      providers: [
        {
          provide: TechnologiesService,
          useValue: mockTechnologyService,
        },
      ],
    }).compile();

    controller = module.get<TechnologiesController>(TechnologiesController);
    service = module.get<TechnologiesService>(TechnologiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createTechnology', () => {
    it('should create a new technology', async () => {
      const CreateTechnologyDto: CreateTechnologyDto = { title: 'New Technology', status: TechnologyStatus.ACTIVE };
      mockTechnologyService.create.mockResolvedValue(CreateTechnologyDto);

      const result = await controller.createTechnology(CreateTechnologyDto);

      expect(result).toEqual({ status: 'success', data: CreateTechnologyDto });
      expect(service.create).toHaveBeenCalledWith(CreateTechnologyDto);
    });

    it('should throw an error if technology creation fails', async () => {
      const CreateTechnologyDto: CreateTechnologyDto = { title: 'New Technology', status: TechnologyStatus.ACTIVE };
      mockTechnologyService.create.mockResolvedValue(null);

      await expect(controller.createTechnology(CreateTechnologyDto)).rejects.toThrow(
        new HttpException('Error Creating New Technology', HttpStatus.BAD_REQUEST)
      );
    });
  });

  describe('findAll', () => {
    it('should return a list of technologies', async () => {
      const technologies = [{ name: 'Technology 1' }, { name: 'Technology 2' }];
      const total = 2;
      mockTechnologyService.findAll.mockResolvedValue({ data: technologies, total });

      const result = await controller.findAll(1, 10, '');

      expect(result).toEqual({ status: 'success', data: technologies, total });
      expect(service.findAll).toHaveBeenCalledWith(1, 10, '');
    });

    it('should throw an error if no technologies are found', async () => {
      mockTechnologyService.findAll.mockResolvedValue({ data: [], total: 0 });

      await expect(controller.findAll(1, 10, '')).rejects.toThrow(
        new HttpException('No technology found.', HttpStatus.BAD_REQUEST)
      );
    });
  });

  describe('findOne', () => {
    it('should return a single technogy', async () => {
      const technology = { id: 1, name: 'Technology 1' };
      mockTechnologyService.findOne.mockResolvedValue(technology);

      const result = await controller.findOne('1');

      expect(result).toEqual(technology);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a technology', async () => {
      const udateTechnologyDto: UpdateTechnologyDto = { title: 'New Technology1', status: TechnologyStatus.ACTIVE };
      const UpdateTechnology = { id: 1, ...udateTechnologyDto };
      mockTechnologyService.update.mockResolvedValue(UpdateTechnology);

      const result = await controller.update('1', udateTechnologyDto);

      expect(result).toEqual(UpdateTechnology);
      expect(service.update).toHaveBeenCalledWith(1, udateTechnologyDto);
    });
  });

  describe('remove', () => {
    it('should remove a technology', async () => {
      const technology = { id: 1, name: 'Technology 1' };
      mockTechnologyService.remove.mockResolvedValue(technology);

      const result = await controller.remove('1');

      expect(result).toEqual(technology);
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
