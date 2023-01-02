import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { suggestion } from 'src/suggestion/suggestion.schema';

export type questionDetail = HydratedDocument<questions>;

@Schema()
export class questions {
    @Prop()
        qID:number
    @Prop()
        questions:string
        
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:'suggestion'}]})
    suggestion:suggestion[]
 
}

export const questionSchema = SchemaFactory.createForClass(questions);