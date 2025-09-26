import { IsOptional, IsString } from 'class-validator';

export class UpdateOperatorDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  contactInfo?: string;
}