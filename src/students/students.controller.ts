import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  registerStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.registerStudent(createStudentDto);
  }

  @Get()
  findAllStudents() {
    return this.studentsService.findAllStudents();
  }

  @Get('/:roll')
  getStudent(@Param('roll') roll: number) {
    return this.studentsService.getStudent(+roll);
  }

  @Put('/:roll')
  updateStudent(@Param('roll') roll: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.updateStudent(+roll, updateStudentDto);
  }
  @Delete('/:roll')
  removeStudent(@Param('roll') roll:number){
    return this.studentsService.removeStudent(+roll);
  }


}
