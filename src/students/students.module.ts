import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { stuSchema, students } from './students.schema'; 

@Module({
  imports: [MongooseModule.forFeature([{ name: students.name, schema: stuSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
