import {
//  CacheInterceptor,
  Controller,
  Get,
  Param,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { UserUsrService } from './db.service';

@ApiUseTags('User')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
// @UseGuards(SimpleAuthGuard)
// @UseInterceptors(CacheInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserUsrService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Render('User')
  public getFirst() {
    return this.UserService.getUsers();
  }

  @Get(':ID')
  public getPerson(@Param('ID') personID: number) {
    const person = this.UserService.findById(personID);
    return person;
  }

  //  @Get()
  //  findAll(): Promise<person_per[]> {
  //    return this.UserService.findAll();
  //  }
}
