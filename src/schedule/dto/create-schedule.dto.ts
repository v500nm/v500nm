export class CreateScheduleDto {
    schedule:Ischedule[]
}
export interface Ischedule{
    scID:number;
    scheduleName:string;
    Date:string;
    startTime:string;
    endTime:string;
    duration:string;
}
