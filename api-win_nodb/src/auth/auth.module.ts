import { Module } from '@nestjs/common';
import { UserModule } from '../user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from '../shared/shared.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpBasicStrategy } from './passport/bearer/basic.stategy';
import { HttpStrategy } from './passport/bearer/http.strategy';
import { JwtStrategy } from './passport/jwt/jwt.strategy';

@Module({
	imports: [
		UserModule,
		JwtModule.register({ secret: 'ChangeJWTsecret' }),
		SharedModule,
	],
	controllers: [AuthController],
	providers: [HttpStrategy, AuthService, JwtStrategy, HttpBasicStrategy],
})
export class AuthModule { }
