import { Controller, UseGuards, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiBearerAuth, ApiForbiddenResponse, ApiUnauthorizedResponse, } from '@nestjs/swagger';

@ApiUseTags('API')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
//@UseGuards(SimpleAuthGuard, AuthGuard('jwt')) // for debug
@UseGuards(AuthGuard('jwt'))
@Controller('api')
export class UsersController {

}
