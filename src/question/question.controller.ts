import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(createQuestionDto);
  }

  @Get()
  findAllQuestion() {
    return this.questionService.findAllQuestion();
  }

  @Get(':id')
  findOneQuestion(@Param('id') id: string) {
    return this.questionService.findOneQuestion(+id);
  }

  @Patch(':id')
  updateQuestion(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.updateQuestion(+id, updateQuestionDto);
  }

  @Delete(':id')
  removeQuestion(@Param('id') id: string) {
    return this.questionService.removeQuestion(+id);
  }
}
