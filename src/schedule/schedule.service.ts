import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { scDetail, schedules } from './schedule.schema';

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(schedules.name) private scModel:Model<scDetail>){}
  
  async createSchedule(createScheduleDto: CreateScheduleDto): Promise<schedules> {
    const createdschedule = new this.scModel(createScheduleDto);
    return createdschedule.save();
  }

  async findAllSchedule(): Promise<schedules[]> {
    return this.scModel.find().populate(['groups','faculties','subjects']).exec();
  }

  async findOneSchedule(scID: number) {
    return this.scModel.findOne({'scID':scID}).exec();
  }

  async updateSchedule(scID: number, updateScheduleDto: UpdateScheduleDto): Promise<schedules> {
    return this.scModel.findOneAndUpdate({'scID':scID},UpdateScheduleDto);
  }

  async removeSchedule(scID: number): Promise<schedules> {
    return this.scModel.findOneAndRemove({'scID':scID}).exec();
  }
}
