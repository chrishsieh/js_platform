import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../../../auth/auth.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiO'
		});
	}

	async validate(payload: any, done: Function) {
		//console.log('Check JWT.');
		return await this.authService
			.validateJWTUser(payload)
			.then(signedUser => {
				done(null, signedUser);
			})
			.catch(err => {
				done(err, false);
			});
	}
}
