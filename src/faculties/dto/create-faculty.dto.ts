export class CreateFacultyDto {
    faculties:IfacultyList[]
}
export interface IfacultyList{
    fID:number;
    name:string;
    department:string;
    designation:string;
}
