import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { AttStatus } from './dto/create-attendance.dto';
import { schedules } from 'src/schedule/schedule.schema';

export type attDetail = HydratedDocument<attendance>;

@Schema()
export class attendance {
    @Prop()
    attID:number
    
    @Prop({ type: String, enum: AttStatus, default: AttStatus.present })
    stats:AttStatus

    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref:'schedules'}]})
    schedule:schedules[]

}

export const attSchema = SchemaFactory.createForClass(attendance);