import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiUseTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { TokenDTO } from '../shared/DTOs/tokens';

@ApiUseTags('auth')
//@UseGuards(SimpleAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ description: 'Get Bearer Token' })
  @ApiForbiddenResponse({ description: 'Invalid username/password' })
  @Post('getToken')
  getTokenByUserNameAndPass(@Body() payload: TokenDTO) {
    return this.authService.createToken(payload.userName, payload.passWord);
  }
}
