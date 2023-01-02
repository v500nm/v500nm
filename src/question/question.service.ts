import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { questionDetail, questions } from './question.schema';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(questions.name) private qModel:Model<questionDetail>){}

  async create(createQuestionDto: CreateQuestionDto): Promise<questions> {
    const insertQuestion= new this.qModel(createQuestionDto);
    return insertQuestion.save();
  }

  async findAll(): Promise<questions[]> {
    return this.qModel.find().populate('suggestion').exec();
  }

  async findOne(qID: number) {
    return this.qModel.findOne({'qID':qID}).exec()
  }

  async update(qID: number, updateQuestionDto: UpdateQuestionDto): Promise<questions> {
    return this.qModel.findOneAndUpdate({'qID':qID},updateQuestionDto).exec();
  }

  async remove(qID: number) {
    return this.qModel.findOneAndRemove({'qID':qID}).exec();
  }
}
