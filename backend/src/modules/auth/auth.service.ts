import {
  Injectable,
  OnApplicationBootstrap,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { LoginAuthDto, RegisterAuthDto } from './dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService implements OnApplicationBootstrap {
  salt: number;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    this.salt = 10;
  }

  async onApplicationBootstrap() {
    await this.registerTestUser();
  }

  generateToken(username) {
    const payload = { username: username };
    return this.jwtService.sign(payload);
  }

  async registerUser(registerAuthDto: RegisterAuthDto) {
    const { password: rawPassword } = registerAuthDto;

    const passwordHash = await hash(rawPassword, this.salt);

    const createdUser = await this.usersService.create({
      name: registerAuthDto.name,
      username: registerAuthDto.password,
      password: passwordHash,
    });

    const jwtToken = this.generateToken(createdUser.username);

    return {
      user: this.usersService.filterUser(createdUser),
      token: jwtToken,
    };
  }

  async registerTestUser() {
    const userExists = await this.usersService.userExists('test');
    if (userExists) {
      console.log('Test user already exists!');
    } else {
      await this.usersService.create({
        name: 'Test',
        username: 'test',
        password: await hash('test', this.salt),
      });
      console.log('Test user created!');
    }
  }

  async loginUser(loginAuthDto: LoginAuthDto) {
    const user = await this.usersService.getUserByUsername(
      loginAuthDto.username,
    );
    const passwordCheck = await compare(loginAuthDto.password, user.password);

    if (!passwordCheck) throw new UnauthorizedException('Incorrect password');

    const jwtToken = this.generateToken(user.username);

    return {
      user: this.usersService.filterUser(user),
      token: jwtToken,
    };
  }

  async getCurrentUser(username: string) {
    const user = await this.usersService.getUserByUsername(username);
    return this.usersService.filterUser(user);
  }
}
