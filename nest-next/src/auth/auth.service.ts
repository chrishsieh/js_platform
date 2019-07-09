import {
  Inject,
  Injectable,
  forwardRef,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../shared/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(user_name: string, password: string) {
    // 驗證使用者，用最簡單舉例
    if (user_name !== password) {
      throw new UnauthorizedException();
    }

    const user = { user_name };
    const expiration = 60 * 60;
    // 將使用者資訊加密
    const accessToken = this.jwtService.sign(user, {
      expiresIn: expiration,
      issuer: 'http://localhost',
      //algorithm:'RS256', // default是HMAC SHA256，也可以指定別的
    });
    return {
      expiration,
      accessToken,
    };
  }

  async validateUser(payload: string) {
    return await this.usersService.findOneByToken(payload);
  }
}
