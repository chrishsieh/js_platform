import { Injectable } from '@nestjs/common';
import { AuthService } from '../../../auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

@Injectable()
export class HttpBasicStrategy extends PassportStrategy(BasicStrategy) {
	constructor(private readonly authService: AuthService) {
		super();
	}
	async validate(username: string, password: string, done: CallableFunction) {
		//console.log('Check Basic.', username, ':', password);
		return await this.authService
			.validateBasicUser(username, password)
			.then(signedUser => {
				done(null, signedUser);
			})
			.catch(err => {
				done(err);
			});
	}
}
