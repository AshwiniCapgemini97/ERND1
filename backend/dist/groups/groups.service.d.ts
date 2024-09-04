import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
export declare class GroupsService {
    private readonly GroupRepository;
    constructor(GroupRepository: Repository<Group>);
    create(createGroupDto: CreateGroupDto): string;
    findAll(page?: number, pageSize?: number): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateGroupDto: UpdateGroupDto): string;
    remove(id: number): string;
}
