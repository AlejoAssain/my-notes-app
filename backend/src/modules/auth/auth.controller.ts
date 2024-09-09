import {
  Get,
  Controller,
  Post,
  Body, Req, UseGuards
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import {JwtAuthGuard} from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getCurrentUser(@Req() request) {
    return this.authService.getCurrentUser(request.user.username);
  }

  @Post('/login')
  register(@Body() login: LoginAuthDto) {
    return this.authService.loginUser(login);
  }
}
