import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { UpdateChatbotDto } from './dto/update-chatbot.dto';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  createbot(@Body() createChatbotDto: CreateChatbotDto) {
    return this.chatbotService.createbot(createChatbotDto);
  }

  @Get()
  findAllbot() {
    return this.chatbotService.findAllbot();
  }

  @Get(':id')
  findOnebot(@Param('id') id: string) {
    return this.chatbotService.findOnebot(+id);
  }

  @Patch(':id')
  updatebot(@Param('id') id: string, @Body() updateChatbotDto: UpdateChatbotDto) {
    return this.chatbotService.updatebot(+id, updateChatbotDto);
  }

  @Delete(':id')
  removebot(@Param('id') id: string) {
    return this.chatbotService.removebot(+id);
  }
}
