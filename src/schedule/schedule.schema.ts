import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const scSchema = SchemaFactory.createForClass(schedules);