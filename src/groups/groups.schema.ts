import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { students } from 'src/students/students.schema';

export type gDetail = HydratedDocument<groups>;

@Schema()
export class groups {
    @Prop()
        gID:number
    @Prop()
        gName:string
    @Prop({type: [{type :mongoose.Schema.Types.ObjectId, ref: 'students'}]})
        students:students[] 

}

export const gSchema = SchemaFactory.createForClass(groups);