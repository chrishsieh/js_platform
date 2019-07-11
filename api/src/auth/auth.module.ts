import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { HttpStrategy } from './passport/bearer/http.strategy';

import { UserModule } from '../user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './passport/jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({ secret: 'InitialScret' }),
    SharedModule,
  ],
  controllers: [AuthController],
  providers: [HttpStrategy, AuthService, JwtStrategy],
})
export class AuthModule {}
