import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator/index.js';
import type { User } from '../../generated/prisma/client.js';
import { EditUserDto } from './dto/editUser.dto.js';
import { UserService } from './user.service.js';
import { JwtGuard } from '../auth/guard/index.js';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return `user info: ${JSON.stringify(user)}`;
  }

  @Patch('')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
