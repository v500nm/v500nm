import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendanceDto } from './create-attendance.dto';

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto) {
    stats:AttStatus
}
export enum AttStatus{
    present="P",
    absent="A"
}
