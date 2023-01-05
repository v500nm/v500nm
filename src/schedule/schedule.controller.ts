import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Put } from '@nestjs/common/decorators';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  createSchedule(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.createSchedule(createScheduleDto);
  }

  @Get()
  findAllSchedule() {
    return this.scheduleService.findAllSchedule();
  }

  @Get(':id')
  findOneSchedule(@Param('id') id: string) {
    return this.scheduleService.findOneSchedule(+id);
  }

  @Put(':id')
  updateSchedule(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.updateSchedule(+id, updateScheduleDto);
  }

  @Delete(':id')
  removeSchedule(@Param('id') id: string) {
    return this.scheduleService.removeSchedule(+id);
  }
}
