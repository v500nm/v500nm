import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { subjects, subSchema } from './subjects.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: subjects.name, schema: subSchema}])],
  controllers: [SubjectsController],
  providers: [SubjectsService]
})
export class SubjectsModule {}
