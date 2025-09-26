import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOperatorDto {
  @IsString()
  @IsNotEmpty({ message: 'Name tidak boleh kosong' })
  name: string;

  @IsString()
  @IsOptional()
  contactInfo?: string;
}