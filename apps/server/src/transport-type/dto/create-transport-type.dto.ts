import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTransportTypeDto {
  @IsString()
  @IsNotEmpty({ message: 'Name tidak boleh kosong' })
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}