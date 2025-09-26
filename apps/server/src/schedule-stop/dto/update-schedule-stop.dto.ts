import { IsOptional, IsString, IsInt, IsDateString } from 'class-validator';

export class UpdateScheduleStopDto {
  @IsString()
  @IsOptional()
  scheduleId?: string;

  @IsInt()
  @IsOptional()
  stopOrder?: number;

  @IsDateString()
  @IsOptional()
  arrivalTime?: Date;

  @IsDateString()
  @IsOptional()
  departureTime?: Date;

  @IsString()
  @IsOptional()
  stopId?: string;
}
