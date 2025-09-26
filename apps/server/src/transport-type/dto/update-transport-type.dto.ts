import { IsOptional, IsString } from 'class-validator';

export class UpdateTransportTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}