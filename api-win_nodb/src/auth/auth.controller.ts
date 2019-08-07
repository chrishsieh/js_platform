import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiUseTags, ApiCreatedResponse, ApiForbiddenResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TokenDTO } from '../shared/DTOs/tokens';
import { AuthGuard } from '@nestjs/passport';
import { SimpleAuthGuard } from '../shared/guards/simple-auth.guard';

@ApiUseTags('auth')
//@UseGuards(SimpleAuthGuard, AuthGuard('bearer')) //debug
//@UseGuards(SimpleAuthGuard, AuthGuard('basic')) //debug
@UseGuards(AuthGuard('basic'))
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@ApiBearerAuth()
	@ApiCreatedResponse({ description: 'Get Bearer Token' })
	@ApiForbiddenResponse({ description: 'Invalid username/password' })
	@Post('getToken')
	getTokenByUserNameAndPass(@Body() payload: TokenDTO) {
		return this.authService.createToken(payload.userName);
	}
}
