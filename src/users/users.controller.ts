import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}
  @Post()
  createUser() {
    return;
  }
}
