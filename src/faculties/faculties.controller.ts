import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  addFaculty(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.addFaculty(createFacultyDto);
  }

  @Get()
  getAllFaculties() {
    return this.facultiesService.getAllFaculties();
  }

  @Get('/:fID')
  getFaculty(@Param('fID') fID: number) {
    return this.facultiesService.getFaculty(+fID);
  }

  @Put('/:fID')
  updateFaculty(@Param('fID') fID: number, @Body() updateFacultyDto: UpdateFacultyDto) {
    return this.facultiesService.updateFaculty(+fID, updateFacultyDto);
  }

  @Delete('/:fID')
  removeFaculty(@Param('fID') fID: number) {
    return this.facultiesService.removeFaculty(+fID);
  }
}
