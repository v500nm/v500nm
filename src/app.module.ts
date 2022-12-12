import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { StudentsModule } from './students/students.module';
import { FacultiesModule } from './faculties/faculties.module';
import { ClassroomModule } from './classroom/classroom.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AttendanceModule } from './attendance/attendance.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [ChatModule, MongooseModule.forRoot('mongodb+srv://StudData:tyit333@studdata.ykxwffq.mongodb.net/?retryWrites=true&w=majority'), StudentsModule, FacultiesModule, ClassroomModule, SubjectsModule, ScheduleModule, AttendanceModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
