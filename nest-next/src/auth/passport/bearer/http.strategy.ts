import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { AuthService } from '../../../auth/auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  public async validate(token: string) {
    const user = await this.authService.validateUser(token);
    if (!user) {
      return new UnauthorizedException();
    }
    return user;
  }
}
