import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { HttpStrategy } from './passport/bearer/http.strategy';

import { UserModule } from '../user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './passport/jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    // 建立jsonwebtoken時的相關資訊
    JwtModule.register({secret: 'TestToken',}),
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [AuthController],
  providers: [
    HttpStrategy,
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule {}
