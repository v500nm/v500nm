import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { suggestion, suggestionDetail } from './suggestion.schema';
import { Model } from 'mongoose';

@Injectable()
export class SuggestionService {
  constructor(@InjectModel(suggestion.name) private sugModel:Model<suggestionDetail>){}

  async createSuggestion(createSuggestionDto: CreateSuggestionDto): Promise<suggestion> {
    const insertSuggestion= new this.sugModel(createSuggestionDto);
    return insertSuggestion.save();
  }

  async findAllSuggestion(): Promise<suggestion[]> {
    return this.sugModel.find().exec();
  }

  async findOneSuggestion(sugID: number) {
    return this.sugModel.findOne({'sugID':sugID}).exec()
  }

  async updateSuggestion(sugID: number, updateSuggestionDto: UpdateSuggestionDto): Promise<suggestion> {
    return this.sugModel.findOneAndUpdate({'sugID':sugID},updateSuggestionDto).exec();
  }

  async removeSuggestion(sugID: number) {
    return this.sugModel.findOneAndRemove({'sugID':sugID}).exec();
  }
}
