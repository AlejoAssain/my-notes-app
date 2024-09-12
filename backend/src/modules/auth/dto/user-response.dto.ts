import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 'exampleUsername' })
  username: string;

  @ApiProperty({ example: 'Example Name' })
  name: string;
}
