import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStopDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  @IsNotEmpty()
  type: string;
}
