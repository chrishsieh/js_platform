import {
  Injectable,
  Logger,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';

import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entity/user';
import { UserDTO } from '../DTOs/userDTO';
import md5 from 'blueimp-md5';
import { Base64 } from 'js-base64';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,

    @InjectEntityManager()
    private readonly em: EntityManager,
  ) {}
  async addUser(data: UserDTO) {
    const user = new Users();
    var userId: number = 0;
    user.usr_UserName = data.usr_UserName;
    user.usr_CreateDate = new Date();
    console.log('新增使用者', user.usr_UserName);
    await this.em
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values(user)
      .execute()
      .then(result => {
        //Logger.log(result); // 到console看回傳的格式

        userId = result.identifiers[0].usr_per_ID; // 取得新增後回傳的id
      })
      .catch(err => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });

    return this.getUserById(userId);
  }
  async getUsers(): Promise<Users[]> {
    return await this.em
      .createQueryBuilder(Users, 'u')
      .select([
        'u.usr_per_ID',
        'u.usr_UserName',
        'u.usr_CreateDate',
        'u.usr_LastLogin',
      ])
      .cache(60000) // 1 min
      .getMany()
      .catch(err => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }); //
  }
  async getUserById(userId: number): Promise<Users | undefined> {
    const get_user = await this.em
      .createQueryBuilder(Users, 'u')
      .whereInIds(userId)
      .select([
        'u.usr_per_ID',
        'u.usr_CreateDate',
        'u.usr_UserName',
        'u.usr_LastLogin',
      ])
      .getOne()
      .catch(err => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
    return get_user;
  }
  async updateUserById(userId: number, data: UserDTO) {
    await this.em
      .createQueryBuilder() // 更新非relation相關資料
      .update(Users) // 指定update哪一個entity
      .set({
        // 更新資料物件
        usr_UserName: data.usr_UserName,
      })
      .whereInIds(userId)
      // .printSql() 可以用來除錯
      .execute()
      .catch(err => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }); // 執行query
    return this.getUserById(userId);
  }
  async deleteUser(id: number) {
    const userDeleted = this.getUserById(id);
    return await this.em
      .createQueryBuilder()
      .delete()
      .from(Users)
      .whereInIds(id)
      .execute()
      .then(result => userDeleted)
      .catch(err => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }); // 回傳raw沒有資料
  }

  //  async findOneByToken(token: string) {
  //    return await this.em
  //      .createQueryBuilder(user, 'u')
  //      .getOne();
  //  }

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

  async findOneByUsrName(usr_name: string) {
    console.log('user:', usr_name, 'get data at', Date());
    const get_user = await this.em
      .createQueryBuilder(Users, 'u')
      .where('u.usr_UserName=:name', { name: usr_name })
      .select([
        'u.usr_per_ID',
        'u.usr_CreateDate',
        'u.usr_UserName',
        'u.usr_LastLogin',
      ])
      .getOne();
    return get_user;
  }
}
