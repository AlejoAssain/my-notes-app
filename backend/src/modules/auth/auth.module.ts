import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      // get JWT_SECRET from .env file
      inject: [ConfigService],
      async useFactory(config: ConfigService) {
        const jwtConfig = {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
        return jwtConfig;
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
