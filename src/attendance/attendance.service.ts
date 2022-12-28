import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { attDetail, attendance } from './attendance.schema';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(@InjectModel(attendance.name) private attModel:Model<attDetail>){}
  create(createAttendanceDto: CreateAttendanceDto): Promise<attendance> {
    const markedAtt= new this.attModel(createAttendanceDto);
    return markedAtt.save();
  }

  findAll(): Promise<attendance[]> {
    return this.attModel.find().populate('schedule').exec();
  }

  findOne(attID: number) { 
    return this.attModel.findOne({'attID':attID}).exec();
  }

  update(attID: number, updateAttendanceDto: UpdateAttendanceDto): Promise<attendance> {
    return this.attModel.findOneAndUpdate({'attID':attID},updateAttendanceDto).exec();
  }

  remove(attID: number): Promise<attendance> {
    return this.attModel.findOneAndRemove({'attID':attID}).exec();
  }
}
