import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { suggestion, suggestionDetail } from './suggestion.schema';
import { Model } from 'mongoose';

@Injectable()
export class SuggestionService {
  constructor(@InjectModel(suggestion.name) private sugModel:Model<suggestionDetail>){}

  async create(createSuggestionDto: CreateSuggestionDto): Promise<suggestion> {
    const insertSuggestion= new this.sugModel(createSuggestionDto);
    return insertSuggestion.save();
  }

  async findAll(): Promise<suggestion[]> {
    return this.sugModel.find().exec();
  }

  async findOne(sugID: number) {
    return this.sugModel.findOne({'sugID':sugID}).exec()
  }

  async update(sugID: number, updateSuggestionDto: UpdateSuggestionDto): Promise<suggestion> {
    return this.sugModel.findOneAndUpdate({'sugID':sugID},updateSuggestionDto).exec();
  }

  async remove(sugID: number) {
    return this.sugModel.findOneAndRemove({'sugID':sugID}).exec();
  }
}
