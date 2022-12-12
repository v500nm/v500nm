import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { scSchema, schedules } from './schedule.schema'; 

@Module({
  imports:[MongooseModule.forFeature([{ name: schedules.name, schema: scSchema }])],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}
