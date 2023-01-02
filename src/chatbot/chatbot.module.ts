import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { chatSchema, chats } from './chatbot.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:chats.name, schema:chatSchema}])],
  controllers: [ChatbotController],
  providers: [ChatbotService]
})
export class ChatbotModule {}
