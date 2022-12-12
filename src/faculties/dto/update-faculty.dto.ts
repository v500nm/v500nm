import { PartialType } from '@nestjs/mapped-types';
import { CreateFacultyDto } from './create-faculty.dto';

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
    name:string;
    department:string;
    designation:string;
}
