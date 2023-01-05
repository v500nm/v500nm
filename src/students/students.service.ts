import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { stuDetail, students } from './students.schema';

@Injectable()
export class StudentsService {
  
  constructor(@InjectModel(students.name) private stuModel:Model<stuDetail> ){}

  async registerStudent(createStudentDto:CreateStudentDto):Promise<students>{
    const createdStudent = new this.stuModel(createStudentDto);
    return createdStudent.save();
  }

  async findAllStudents(): Promise<students[]> {
    return this.stuModel.find().populate('groups').exec();
  }

  async getStudent(roll: number){
  return this.stuModel.findOne({'roll':roll}).exec();
  }

  async updateStudent(roll: number, updateStudentDto: UpdateStudentDto): Promise<students>{
    return this.stuModel.findOneAndUpdate({"roll":roll},updateStudentDto).exec();
  }

  async removeStudent(roll: number): Promise<students>{
    return this.stuModel.findOneAndRemove({"roll":roll}).exec();
  }
  
}
