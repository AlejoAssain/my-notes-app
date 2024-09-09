import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  categories: string[];


  @IsBoolean()
  active: boolean;
}
