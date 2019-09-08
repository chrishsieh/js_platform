import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpStrategy } from './passport/bearer/http.strategy';
import { JwtStrategy } from './passport/jwt/jwt.strategy';

@Module({
  imports: [
    UserModule,
    // 建立jsonwebtoken時的相關資訊
    JwtModule.register({ secret: 'TestToken' }),
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [AuthController],
  providers: [HttpStrategy, AuthService, JwtStrategy],
})
export class AuthModule {}
