import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { faculties } from 'src/faculties/faculties.schema';
import { groups } from 'src/groups/groups.schema';
import { subjects } from 'src/subjects/subjects.schema';

export type scDetail = HydratedDocument<schedules>;

@Schema()
export class schedules {
    @Prop()
        scID:number
    @Prop()
    //can retrieve from subject,faculty sections
        scheduleName:string
    @Prop()
        Date:string
    @Prop()
        startTIme:string
    @Prop()
        endTime:string
    @Prop()
        duration:string
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref:'groups'}]})
        groups:groups[]
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref:'faculties'}]})
        faculties:faculties[]
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref:'subjects'}]})
        subjects:subjects[]
}

export const scSchema = SchemaFactory.createForClass(schedules);