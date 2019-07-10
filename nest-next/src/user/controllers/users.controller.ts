import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ReflectMetadata,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  UseInterceptors,
  CacheInterceptor,
  Catch,
  Response,
  Next,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { SimpleAuthGuard } from '../../shared/guards/simple-auth.guard';
import { HttpAuthGuard } from '../../shared/guards/passport.guard';
import { UserDTO } from '../../shared/DTOs/userDTO';
import { UserDTOValidationPipe } from '../../shared/pipes/userDTOValidation.pipe';
import { UserQueryDTO } from '../../shared/DTOs/userQueryDTO';
import { UsersService } from '../../shared/services/users.service';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
  ApiResponse,
} from '@nestjs/swagger';

// UseGuards()傳入@nest/passport下的AuthGuard
// strategy
@ApiUseTags('U')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
//@UseGuards(SimpleAuthGuard, AuthGuard('bearer'))
@UseGuards(AuthGuard('bearer'))
//@UseGuards(HttpAuthGuard)
//@UseInterceptors(CacheInterceptor)
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ description: 'Return Users Array' })
  @Get()
  userList(@Query() query: UserQueryDTO) {
    return this.usersService.getUsers(query);
  }

  @Get('query')
  getUsers(@Query() pageInfo: UserQueryDTO) {
    return this.usersService.getUsers(pageInfo);
  }

  @Post()
  @ApiCreatedResponse({ description: 'User Created' })
  @ApiInternalServerErrorResponse({ description: 'Invalid Input' })
  @UsePipes(UserDTOValidationPipe)
  @ReflectMetadata('roles', ['admin', 'superuser'])
  create(@Body() userDTO: UserDTO) {
    //throw new HttpException('糟糕!您的要求有問題，請洽系統管理員', HttpStatus.BAD_REQUEST);
    return this.usersService.addUser(userDTO);
    //return this.userRepo.createAndSave(userDTO); not work
  }

  @Get(':userId')
  getUserById(@Param('userId') id: number) {
    console.log('In Users.Controller', +id);
    return this.usersService.getUserById(id);
  }

  @Put(':userId')
  updateUserById(@Param('userId') id: number, @Body() userDTO: UserDTO) {
    return this.usersService.updateUserById(id, userDTO);
  }

  @Delete(':userId')
  delete(@Param('userId') id: number) {
    return this.usersService.deleteUser(id);
  }
}
