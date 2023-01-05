import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  createGroup(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.createGroup(createGroupDto);
  }

  @Get()
  findAllGroup() {
    return this.groupsService.findAllGroup();
  }

  @Get(':id')
  findOneGroup(@Param('id') id: string) {
    return this.groupsService.findOneGroup(+id);
  }

  @Patch(':id')
  updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.updateGroup(+id, updateGroupDto);
  }

  @Delete(':id')
  removeGroup(@Param('id') id: string) {
    return this.groupsService.removeGroup(+id);
  }
}
