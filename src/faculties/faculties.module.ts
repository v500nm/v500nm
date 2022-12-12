import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { facultySchema, faculties } from './faculties.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: faculties.name, schema: facultySchema}])],
  controllers: [FacultiesController],
  providers: [FacultiesService]
})
export class FacultiesModule {}
