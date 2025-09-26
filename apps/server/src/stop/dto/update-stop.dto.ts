import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateStopDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;

  @IsString()
  @IsOptional()
  type?: string;
}
