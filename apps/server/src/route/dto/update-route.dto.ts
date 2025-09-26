import { IsOptional, IsString } from 'class-validator';

export class UpdateRouteDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  transportTypeId?: string;

  @IsString()
  @IsOptional()
  operatorId?: string;
}
