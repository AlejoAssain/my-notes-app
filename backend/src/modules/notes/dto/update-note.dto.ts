import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  categories: string[];

  @IsOptional()
  @IsBoolean()
  active: boolean;
  
}
