import { IsString } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  password: string
}