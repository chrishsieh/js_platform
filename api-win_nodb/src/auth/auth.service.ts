import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../shared/services/users.service';
import { UserDTO } from '../shared/DTOs/userDTO';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) { }

	async createToken(user_name: string) {
		// 驗證使用者，用最簡單舉例
		//console.log(user_name, 'get Token.');

		// 檢查是否已有使用者, 沒有則註冊
		const check_usr = await this.usersService.findOneByUsrName(user_name);
		const user = { user_name };
		const expiration = 60 * 60;
		// 將使用者資訊加密
		const accessToken = this.jwtService.sign(user, {
			expiresIn: expiration,
			//algorithm:'RS256', // default是HMAC SHA256，也可以指定別的
		});
		const user_data: UserDTO = {
			usr_UserName: user_name
		};
		if (check_usr) {
			console.log(user_name, 'UpdateToken');
		} else {
			await this.usersService.addUser(user_data);
			console.log(user_name, 'CreateToken');
		}
		return {
			accessToken,
		};
	}

	async validateUser(token: string): Promise<any> {
		const usr = await this.usersService.findOneByToken(token);
		if (!usr) {
			throw new UnauthorizedException();
		}
		return usr;
	}

	async validateJWTUser(payload: any): Promise<any> {
		const usr = await this.usersService.findOneByUsrName(payload.user_name);
		if (!usr) {
			throw new UnauthorizedException();
		}
		return usr;
	}

	async validateBasicUser(username: string, password: string): Promise<any> {
		//console.log('In validateBasicUser');
		if ((username === process.env.USER) && (password === process.env.PWD)) {
			return {};
		} else {
			throw new UnauthorizedException();
		}
	}
}
