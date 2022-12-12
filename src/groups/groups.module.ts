import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { groups, gSchema } from './groups.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: groups.name, schema: gSchema }])],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
