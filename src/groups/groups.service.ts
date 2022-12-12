import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { gDetail, groups } from './groups.schema';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(groups.name) private gModel:Model<gDetail>){}

  create(createGroupDto: CreateGroupDto) {
    const createdGroup= new this.gModel(createGroupDto)
    return createdGroup.save();
  }

  async findAll(): Promise<groups[]> {
    return this.gModel.find().populate('students').exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
