import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.addSubject(createSubjectDto);
  }

  @Get()
  findAll() {
    return this.subjectsService.findAllSubjects();
  }

  @Get('/:subID')
  findOne(@Param('subID') subID: number) {
    return this.subjectsService.findSubject(+subID);
  }

  @Patch('/:subID')
  update(@Param('subID') subID: number, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.updateSubject(+subID, updateSubjectDto);
  }

  @Delete('/:subID')
  remove(@Param('subID') subID: number) {
    return this.subjectsService.removeSubject(+subID);
  }
}
