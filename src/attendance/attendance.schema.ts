import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AttStatus } from './dto/create-attendance.dto';

export type attDetail = HydratedDocument<attendance>;

@Schema()
export class attendance {
    @Prop()
    attID:number
    
    @Prop({ type: String, enum: AttStatus, default: AttStatus.present })
    stats:AttStatus

}

export const attSchema = SchemaFactory.createForClass(attendance);