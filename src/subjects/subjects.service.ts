import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { subDetail, subjects } from './subjects.schema';

@Injectable()
export class SubjectsService {
  
  constructor(@InjectModel(subjects.name) private subModel:Model<subDetail> ){}

  async addSubject(createSubjectDto: CreateSubjectDto): Promise<subjects> {
    const createdSubject = new this.subModel(createSubjectDto);
    return createdSubject.save();
  }

  async findAllSubjects(): Promise<subjects[]> {
    return this.subModel.find().exec();
  }

  async findSubject(subID: number): Promise<subjects> {
    return this.subModel.findOne({'subID':subID}).exec();
  }

  async updateSubject(subID: number, updateSubjectDto: UpdateSubjectDto): Promise<subjects> {
    return this.subModel.findOneAndReplace({'subID':subID},updateSubjectDto).exec();
  }

  async removeSubject(subID: number): Promise<subjects> {
    return this.subModel.findOneAndRemove({'subID':subID}).exec();
  }
}
