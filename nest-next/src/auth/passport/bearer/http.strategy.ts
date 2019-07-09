import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../../../auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(token: string) {
    const user = await this.authService.validateUser(token);
    if (!user) {
      return new UnauthorizedException();
    }
    return user;
  }
}
