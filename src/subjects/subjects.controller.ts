import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  addSubject(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.addSubject(createSubjectDto);
  }

  @Get()
  findAllSubjects() {
    return this.subjectsService.findAllSubjects();
  }

  @Get('/:subID')
  findSubject(@Param('subID') subID: number) {
    return this.subjectsService.findSubject(+subID);
  }

  @Patch('/:subID')
  updateSubject(@Param('subID') subID: number, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.updateSubject(+subID, updateSubjectDto);
  }

  @Delete('/:subID')
  removeSubject(@Param('subID') subID: number) {
    return this.subjectsService.removeSubject(+subID);
  }
}
