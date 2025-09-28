import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class CreateScheduleDto {
  @IsUUID()
  routeId: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  startTime: Date;
  endTime: Date;
}
