import { IsUUID, IsInt, Min } from 'class-validator';

export class CreateStopRouteDto {
  @IsUUID()
  routeId: string;

  @IsUUID()
  stopId: string;

  @IsInt()
  @Min(1)
  stopOrder: number;
}
