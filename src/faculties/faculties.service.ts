import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { facultyDetail, faculties } from './faculties.schema';

@Injectable()
export class FacultiesService {
  constructor(@InjectModel(faculties.name) private facultyModel:Model<facultyDetail>){}

  async addFaculty(createFacultyDto: CreateFacultyDto) {
    const createdFaculty= new this.facultyModel(createFacultyDto);
    return createdFaculty.save();
  }

  async getAllFaculties(): Promise<faculties[]> {
    return this.facultyModel.find().exec();
  }

  async getFaculty(fID: number){
    return this.facultyModel.findOne({'fID':fID}).exec();
  }

  async updateFaculty(fID: number, updateFacultyDto: UpdateFacultyDto): Promise<faculties> {
    return this.facultyModel.findOneAndUpdate({'fID':fID},updateFacultyDto).exec();
  }

  async removeFaculty(fID: number): Promise<faculties> {
    return this.facultyModel.findOneAndRemove({'fID':fID}).exec();  }
}
