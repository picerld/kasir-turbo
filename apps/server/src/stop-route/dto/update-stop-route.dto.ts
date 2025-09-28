import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateStopRouteDto {
  @IsString()
  @IsOptional()
  routeId?: string;

  @IsString()
  @IsOptional()
  stopId?: string;

  @IsInt()
  @IsOptional()
  stopOrder?: number;
}
