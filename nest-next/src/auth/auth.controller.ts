import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiUseTags } from '@nestjs/swagger';
import { TokenDTO } from '../shared/DTOs/token';
import { AuthService } from './auth.service';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ description: 'Get Bearer Token' })
  @ApiForbiddenResponse({ description: 'Invalid username/password' })
  @Post('getToken')
  // @UsePipes(UserDTOValidationPipe)
  public getTokenByUserId(
    @Body() data: TokenDTO
  ) {
    return this.authService.createToken(data.user_name, data.password);
  }
}
