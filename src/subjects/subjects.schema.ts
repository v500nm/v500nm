import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type subDetail = HydratedDocument<subjects>;

@Schema()
export class subjects {
    @Prop()
        subID:number
          
    @Prop()
        subject:string       
}

export const subSchema = SchemaFactory.createForClass(subjects);