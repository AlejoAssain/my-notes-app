import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto';
import { User } from './entities';
import { UserNotFoundException } from './exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  filterUser(user: User) {
    return {
      username: user.username,
      name: user.name
    }
  }

  async create(createUserDto: CreateUserDto) {
    // TODO - generate new user
    const newUser = this.userRepository.create({
      name: createUserDto.name,
      username: createUserDto.username,
      password: createUserDto.password,
    });

    try {
      return await this.userRepository.save(newUser);
    } catch (e) {
      throw new InternalServerErrorException(
        'Internal server error: ' + e.message,
      );
    }
  }

  async userExists(username: string) {
    const user = await this.userRepository.findOneBy({username: username});
    return user ? true : false;
  }

  async getUserByUsername(username: string) {
    const user = await this.userRepository.findOneBy({username});

    if (!user) throw new UserNotFoundException(username);
    
    return user;
  }
}
