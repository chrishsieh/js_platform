import {
  Controller,
  Get,
  Post,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiUseTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiImplicitBody,
} from '@nestjs/swagger';
import { TokenDTO } from '../shared/DTOs/token';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ description: 'Get Bearer Token' })
  @ApiForbiddenResponse({ description: 'Invalid username/password' })
  @Post('getToken')
  //@UsePipes(UserDTOValidationPipe)
  getTokenByUserId(
    @Body() data: TokenDTO,
  ) {
    return this.authService.createToken(data.user_name, data.password);
  }
}
