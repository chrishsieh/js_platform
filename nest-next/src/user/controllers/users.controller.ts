import {
  Body,
  // CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  SetMetadata,
  UsePipes,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { UserDTO } from '../../shared/DTOs/userDTO';
import { UserQueryDTO } from '../../shared/DTOs/userQueryDTO';
import { UserDTOValidationPipe } from '../../shared/pipes/userDTOValidation.pipe';
import { UsersService } from '../../shared/services/users.service';

// UseGuards()傳入@nest/passport下的AuthGuard
// strategy
@ApiUseTags('U')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
// @UseGuards(SimpleAuthGuard)
// @UseInterceptors(CacheInterceptor)
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ description: 'Return Users Array' })
  @Get()
  public userList(@Query() query: UserQueryDTO) {
    return this.usersService.getUsers(query);
  }

  @Get('query')
  public getUsers(@Query() pageInfo: UserQueryDTO) {
    return this.usersService.getUsers(pageInfo);
  }

  @Post()
  @ApiCreatedResponse({ description: 'User Created' })
  @ApiInternalServerErrorResponse({ description: 'Invalid Input' })
  @UsePipes(UserDTOValidationPipe)
  @SetMetadata('roles', ['admin', 'superuser'])
  public create(@Body() userDTO: UserDTO) {
    // throw new HttpException('糟糕!您的要求有問題，請洽系統管理員', HttpStatus.BAD_REQUEST);
    return this.usersService.addUser(userDTO);
    // return this.userRepo.createAndSave(userDTO); not work
  }

  @Get(':userId')
  public getUserById(@Param('userId') id: number) {
    return this.usersService.getUserById(id);
  }

  @Put(':userId')
  public updateUserById(@Param('userId') id: number, @Body() userDTO: UserDTO) {
    return this.usersService.updateUserById(id, userDTO);
    // return this.usersService.updateUserRolesByIds(id, userDTO);
  }

  @Delete(':userId')
  public delete(@Param('userId') id: number) {
    return this.usersService.deleteUser(id);
  }
}
