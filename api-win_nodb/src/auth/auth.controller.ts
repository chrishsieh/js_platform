import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiUseTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { TokenDTO } from '../shared/DTOs/tokens';
import { AuthGuard } from '@nestjs/passport';
import { SimpleAuthGuard } from '../shared/guards/simple-auth.guard';
import passport = require('passport');

@ApiUseTags('auth')
//@UseGuards(SimpleAuthGuard, AuthGuard('bearer'))
//@UseGuards(SimpleAuthGuard, AuthGuard('basic'))
@UseGuards(AuthGuard('basic'))
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Get Bearer Token' })
  @ApiForbiddenResponse({ description: 'Invalid username/password' })
  @Post('getToken')
  getTokenByUserNameAndPass(@Body() payload: TokenDTO) {
    return this.authService.createToken(payload.userName);
  }
}
