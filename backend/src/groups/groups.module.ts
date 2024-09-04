import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Group } from './entities/group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetGroup } from '../assets/entities/asset-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, AssetGroup])], // Include the Task repository in the module
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule { }
