import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  transportTypeId: string;

  @IsString()
  @IsOptional()
  operatorId?: string;
}
