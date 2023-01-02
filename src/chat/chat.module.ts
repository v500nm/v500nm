import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { chatSchema, chats } from 'src/chatbot/chatbot.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:chats.name, schema:chatSchema}])],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
