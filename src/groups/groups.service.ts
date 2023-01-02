import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { gDetail, groups } from './groups.schema';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(groups.name) private gModel:Model<gDetail>){}

  async create(createGroupDto: CreateGroupDto) {
    const createdGroup= new this.gModel(createGroupDto)
    return createdGroup.save();
  }

  async findAll(): Promise<groups[]> {
    return this.gModel.find().populate('students').exec()
  }

  async findOne(gID: number) {
    return this.gModel.findOne({'gID':gID}).exec();
  }

  async update(gID: number, updateGroupDto: UpdateGroupDto) {
    return this.gModel.findOneAndUpdate({'gID':gID}, updateGroupDto).exec();
  }

  async remove(gID: number) {
    return this.gModel.findOneAndRemove({'gID':gID}).exec();
  }
}
