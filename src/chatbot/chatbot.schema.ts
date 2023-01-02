import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { attendance } from 'src/attendance/attendance.schema';
import { faculties } from 'src/faculties/faculties.schema';
import { groups } from 'src/groups/groups.schema';
import { schedules } from 'src/schedule/schedule.schema';
import { students } from 'src/students/students.schema';
import { subjects } from 'src/subjects/subjects.schema';

export type chDetail = HydratedDocument<chats>;

@Schema()
export class chats {
    @Prop()
    chID:number
    
    // @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref:'attendance'},{type: mongoose.Schema.Types.ObjectId, ref:'schedules'},
    // {type: mongoose.Schema.Types.ObjectId, ref:'students'},{type: mongoose.Schema.Types.ObjectId, ref:'groups'},
    // {type: mongoose.Schema.Types.ObjectId, ref:'faculties'},{type: mongoose.Schema.Types.ObjectId, ref:'subjects'}]})
    // attendance:attendance[]
    // schedules:schedules[]
    // students:students[]
    // groups:groups[]
    // faculties:faculties[]
    // subjects:subjects[]
}

export const chatSchema = SchemaFactory.createForClass(chats);