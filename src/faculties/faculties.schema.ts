import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type facultyDetail = HydratedDocument<faculties>;

@Schema()
export class faculties {
    @Prop()
        fID:number
    @Prop()
        name:string
    @Prop()
        department:string
    @Prop()
        designation:string
}

export const facultySchema = SchemaFactory.createForClass(faculties);