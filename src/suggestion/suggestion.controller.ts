import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Post()
  createSuggestion(@Body() createSuggestionDto: CreateSuggestionDto) {
    return this.suggestionService.createSuggestion(createSuggestionDto);
  }

  @Get()
  findAllSuggestion() {
    return this.suggestionService.findAllSuggestion();
  }

  @Get(':id')
  findOneSuggestion(@Param('id') id: string) {
    return this.suggestionService.findOneSuggestion(+id);
  }

  @Patch(':id')
  updateSuggestion(@Param('id') id: string, @Body() updateSuggestionDto: UpdateSuggestionDto) {
    return this.suggestionService.updateSuggestion(+id, updateSuggestionDto);
  }

  @Delete(':id')
  removeSuggestion(@Param('id') id: string) {
    return this.suggestionService.removeSuggestion(+id);
  }
}
