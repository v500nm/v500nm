import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { questionSchema, questions } from './question.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:questions.name, schema:questionSchema}])],
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}
