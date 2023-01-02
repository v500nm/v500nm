import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type suggestionDetail = HydratedDocument<suggestion>;

@Schema()
export class suggestion {
    @Prop()
        sugID:number
    @Prop()
        suggestions:string
}

export const suggestionSchema = SchemaFactory.createForClass(suggestion);