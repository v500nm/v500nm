import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  postAtt(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.postAtt(createAttendanceDto);
  }

  @Get()
  findAllAtt() {
    return this.attendanceService.findAllAtt();
  }

  @Get(':id')
  findOneAtt(@Param('id') id: string) {
    return this.attendanceService.findOneAtt(+id);
  }

  @Put(':id')
  updateAtt(@Param('id') id: string, @Body() updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceService.updateAtt(+id, updateAttendanceDto);
  }

  @Delete(':id')
  removeAtt(@Param('id') id: string) {
    return this.attendanceService.removeAtt(+id);
  }
}
