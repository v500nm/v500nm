import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { UpdateChatbotDto } from './dto/update-chatbot.dto';
import { chDetail, chats } from './chatbot.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChatbotService {
  constructor(@InjectModel(chats.name) private chatModel:Model<chDetail>){}

  async create(createChatbotDto: CreateChatbotDto): Promise<chats> {
    const chatSTR = new this.chatModel(createChatbotDto);
    return chatSTR.save();
  }

  async findAllnPopulate(): Promise<chats[]> {
    return this.chatModel.find().exec();
  }
  async findAll(): Promise<chats[]>{
    return this.chatModel.find().exec();
  }

  async findOne(chID: number) {
    return this.chatModel.findOne({'chID':chID}).exec();
  }

  async update(chID: number, updateChatbotDto: UpdateChatbotDto): Promise<chats> {
    return this.chatModel.findOneAndUpdate({'chID':chID},updateChatbotDto).exec();
  }

  async remove(chID: number) {
    return this.chatModel.findOneAndRemove({'chID':chID}).exec();
  }
}
