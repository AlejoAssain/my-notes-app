import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user-response.dto';

export class LoginResponseDto {
  @ApiProperty({
    example: { username: 'exampleUsername', name: 'Example Name' },
  })
  user: UserResponseDto;

  @ApiProperty({ example: 'your-jwt-token' })
  token: string;
}
