import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  Patch,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from '../../shared/DTOs/userDTO';
import { UsersService } from '../../shared/services/users.service';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiUseTags('API')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
//@UseGuards(SimpleAuthGuard, AuthGuard('jwt')) // for debug
@UseGuards(AuthGuard('jwt'))
@Controller('api')
export class UsersController {
/*
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ description: 'Return Users Array' })
  @Get('users')
  userList() {
    return this.usersService.getUsers();
  }

  @Post('adduser')
  @ApiCreatedResponse({ description: 'User Created' })
  @ApiInternalServerErrorResponse({ description: 'Invalid Input' })
  create(@Body() userDTO: UserDTO) {
    return this.usersService.addUser(userDTO);
  }

  @Get('user/:userId')
  getUserById(@Param('userId') id: number) {
    return this.usersService.getUserById(id);
  }

  @Get('user')
  getUserByQId(@Query('userId') id: number) {
    return this.usersService.getUserById(id);
  }

  @Patch('user/:userId')
  updateUserById(@Param('userId') id: number, @Body() userDTO: UserDTO) {
    return this.usersService.updateUserById(id, userDTO);
  }

  @Delete('user/:userId')
  delete(@Param('userId') id: number) {
    return this.usersService.deleteUser(id);
  }
*/
}
