import { BadRequestException } from '@nestjs/common'

export class UserNotFoundException extends BadRequestException {
  constructor(username?: string) {
    super(
      username ? 
        `User with username '${username}' does not exists!` 
      : 
        'Username does not exists')
  }
}
