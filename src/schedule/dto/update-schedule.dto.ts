import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleDto } from './create-schedule.dto';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
    scheduleName:string;
    Date:string;
    startTime:string;
    endTime:string;
    duration:string;
}
