import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class HttpAuthGuard extends AuthGuard('bearer') {
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.

    if (super.canActivate(context)) {
      console.log('123');
      return true;
    } else {
      console.log('345');
      return false;
    }
  }
/*
  handleRequest(err: any, user: any, info: any) {
    console.log('In Passport', JSON.stringify(err));
    console.log('In Passport', JSON.stringify(user));
    console.log('In Passport', JSON.stringify(info));
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
*/
}
