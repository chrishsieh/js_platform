import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  CacheInterceptor,
  Render,
  UseGuards,
} from '@nestjs/common';
import { UserUsrService } from './db.service';
import {
  ApiUseTags,
  ApiResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { SimpleAuthGuard } from '../shared/guards/simple-auth.guard';

@ApiUseTags('User')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
//@UseGuards(SimpleAuthGuard)
@UseInterceptors(CacheInterceptor)
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
  getFirst() {
    return this.UserService.getUsers();
  }

  @Get(':ID')
  getPerson(@Param('ID') person_ID: number) {
    const person = this.UserService.findById(person_ID);
    return person;
  }

  //  @Get()
  //  findAll(): Promise<person_per[]> {
  //    return this.UserService.findAll();
  //  }
}
