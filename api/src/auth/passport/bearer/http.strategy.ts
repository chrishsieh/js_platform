import { Injectable } from '@nestjs/common';

import { AuthService } from '../../../auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(token: string, done: Function) {
    //console.log('Check Http.');
    return await this.authService
      .validateUser(token)
      .then(signedUser => {
        done(null, signedUser);
      })
      .catch(err => {
        done(err, false);
      });
  }
}
