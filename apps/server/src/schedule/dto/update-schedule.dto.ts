import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateScheduleDto {
  @IsString()
  @IsOptional()
  routeId?: string;

  @IsDateString()
  @IsOptional()
  startTime?: Date;

  @IsDateString()
  @IsOptional()
  endTime?: Date;

  @IsString()
  @IsOptional()
  code?: string;
}
