import { IsUUID, IsInt, Min } from 'class-validator';

export class CreateScheduleStopDto {
  @IsUUID()
  scheduleId: string;

  @IsUUID()
  stopId: string;

  @IsInt()
  @Min(1)
  stopOrder: number;

  arrivalTime: Date;
  departureTime: Date;
}
