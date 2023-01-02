import { Module } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { SuggestionController } from './suggestion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { suggestion, suggestionSchema } from './suggestion.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:suggestion.name, schema:suggestionSchema}])],
  controllers: [SuggestionController],
  providers: [SuggestionService]
})
export class SuggestionModule {}
