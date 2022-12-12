import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { groups } from 'src/groups/groups.schema';

export type stuDetail = HydratedDocument<students>;

@Schema()
export class students {
    @Prop()
        roll:number
    
    @Prop()
        name:string     
    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref:'groups'}]})
    groups:groups[]
}

export const stuSchema = SchemaFactory.createForClass(students);