export class CreateAttendanceDto {
    attendance:Iattendance[]
    stats:AttStatus
}
export interface Iattendance{
    attID:number;
}
export enum AttStatus{
    present="P",
    absent="A"
}
