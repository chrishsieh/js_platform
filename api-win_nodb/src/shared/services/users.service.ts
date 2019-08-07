import { Injectable } from '@nestjs/common';
import { UserDTO } from '../DTOs/userDTO';
import md5 from 'blueimp-md5';
import { Base64 } from 'js-base64';

//資料庫使用
//import { EntityManager, Repository } from 'typeorm';
//import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
//import { Users } from '../entity/user';

@Injectable()
export class UsersService {
	constructor(
		// 資料庫設定
		//    @InjectRepository(Users)
		//    private readonly userRepo: Repository<Users>,

		//    @InjectEntityManager()
		//    private readonly em: EntityManager,
	) { }
	async addUser(data: UserDTO) {
		console.log('使用者', data.usr_UserName);
		return data;
	}

	// Http 基本驗證用
	async findOneByToken(token: string) {
		// 假定token為ironNest
		const pass_string = 'admin:ironNest';
		const hash = Base64.btoa(md5(pass_string, '', true));
		console.log('findOneByToken :', token);
		console.log('hash:', hash);
		if (token === hash) return [{ Asscess: 'Success' }];
		//this.getUserById(1);
		else return null;
	}

	// JWT驗證用
	async findOneByUsrName(usr_name: string) {
		console.log('user:', usr_name, 'get data at', Date());
		return { user_name: usr_name };
	}
}
