import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { attendance, attSchema } from './attendance.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: attendance.name, schema: attSchema }])],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
