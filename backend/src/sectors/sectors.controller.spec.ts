import { Test, TestingModule } from '@nestjs/testing';
import { SectorsController } from './sectors.controller';
import { SectorsService } from './sectors.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { SectorStatus } from '../shared/status.enum';

describe('SectorsController', () => {
  let controller: SectorsController;
  let service: SectorsService;

  const mockSectorsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectorsController],
      providers: [
        {
          provide: SectorsService,
          useValue: mockSectorsService,
        },
      ],
    }).compile();

    controller = module.get<SectorsController>(SectorsController);
    service = module.get<SectorsService>(SectorsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createSector', () => {
    it('should create a new sector', async () => {
      const createSectorDto: CreateSectorDto = { title: 'New Sector', status: SectorStatus.ACTIVE };
      mockSectorsService.create.mockResolvedValue(createSectorDto);

      const result = await controller.createSector(createSectorDto);

      expect(result).toEqual({ status: 'success', data: createSectorDto });
      expect(service.create).toHaveBeenCalledWith(createSectorDto);
    });

    it('should throw an error if sector creation fails', async () => {
      const createSectorDto: CreateSectorDto = { title: 'New Sector', status: SectorStatus.ACTIVE };
      mockSectorsService.create.mockResolvedValue(null);

      await expect(controller.createSector(createSectorDto)).rejects.toThrow(
        new HttpException('Error Creating New Sector', HttpStatus.BAD_REQUEST)
      );
    });
  });

  describe('findAll', () => {
    it('should return a list of sectors', async () => {
      const sectors = [{ name: 'Sector 1' }, { name: 'Sector 2' }];
      const total = 2;
      mockSectorsService.findAll.mockResolvedValue({ data: sectors, total });

      const result = await controller.findAll(1, 10, '');

      expect(result).toEqual({ status: 'success', data: sectors, total });
      expect(service.findAll).toHaveBeenCalledWith(1, 10, '');
    });

    it('should throw an error if no sectors are found', async () => {
      mockSectorsService.findAll.mockResolvedValue({ data: [], total: 0 });

      await expect(controller.findAll(1, 10, '')).rejects.toThrow(
        new HttpException('No Sectors found.', HttpStatus.BAD_REQUEST)
      );
    });
  });

  describe('findOne', () => {
    it('should return a single sector', async () => {
      const sector = { id: 1, name: 'Sector 1' };
      mockSectorsService.findOne.mockResolvedValue(sector);

      const result = await controller.findOne('1');

      expect(result).toEqual(sector);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a sector', async () => {
      const updateSectorDto: UpdateSectorDto = { title: 'New Sector1', status: SectorStatus.ACTIVE };
      const updatedSector = { id: 1, ...updateSectorDto };
      mockSectorsService.update.mockResolvedValue(updatedSector);

      const result = await controller.update('1', updateSectorDto);

      expect(result).toEqual(updatedSector);
      expect(service.update).toHaveBeenCalledWith(1, updateSectorDto);
    });
  });

  describe('remove', () => {
    it('should remove a sector', async () => {
      const sector = { id: 1, name: 'Sector 1' };
      mockSectorsService.remove.mockResolvedValue(sector);

      const result = await controller.remove('1');

      expect(result).toEqual(sector);
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
