import { Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { UserDTO } from '../DTOs/userDTO';
import { UserQueryDTO } from '../DTOs/userQueryDTO';
import { user_usr } from '../entity/user_usr';

@Injectable()
export class UsersService {
  constructor(
    //    @InjectRepository(user_usr)
    //    private readonly userRepo: Repository<user_usr>,

    @InjectEntityManager()
    private readonly em: EntityManager
  ) {}
  public async addUser(data: UserDTO) {
    const user = new user_usr();

    user.usr_UserName = data.usr_UserName;
    let userId: number = 10000;
    await this.em
      .createQueryBuilder()
      .insert()
      .into(user_usr)
      .values(user)
      .execute()
      .then((result) => {
        Logger.log(result); // 到console看回傳的格式

        userId = result.identifiers[0].id; // 取得新增後回傳的id
        // 以下更新關聯資料
        //        this.em
        //          .createQueryBuilder()
        //          .relation(user_usr, 'dep')
        //          .of(userId)
        //          .set(data.depId)
        //
        //          .then(() => {
        //            if (data.roleIds)
        //              this.em
        //                .createQueryBuilder()
        //                .relation(User, 'roles')
        //                .of(userId)
        //                .add(data.roleIds);
        //          });
      });

    return this.getUserById(userId);
  }
  public async getUsers(pageInfo: UserQueryDTO): Promise<user_usr[]> {
    return await this.em
      .createQueryBuilder(user_usr, 'u')
      .select(['u.usr_UserName', 'u.usr_LastLogin', 'u.usr_apiKey'])
      .skip((pageInfo.page - 1) * pageInfo.pageSize)
      .take(pageInfo.pageSize)
      .cache(60000) // 1 min
      .getMany(); //
  }
  public async getUserById(userId: number): Promise<user_usr | undefined> {
    return await this.em
      .createQueryBuilder(user_usr, 'u')
      .whereInIds(userId)
      .select([
        'u.usr_per_ID',
        'u.usr_UserName',
        'u.usr_Admin',
        'u.usr_LastLogin',
        'u.usr_showSince',
      ])
      .getOne();
  }

  public async updateUserById(userId: number, data: UserDTO) {
    await this.em
      .createQueryBuilder() // 更新非relation相關資料
      .update(user_usr) // 指定update哪一個entity
      .set({
        // 更新資料物件
        usr_UserName: data.usr_UserName,
        usr_apiKey: data.usr_apiKey,
      })
      .whereInIds(userId)
      // .printSql() 可以用來除錯
      .execute(); // 執行query
    return this.getUserById(userId);
  }
  public async deleteUser(id: number) {
    const userDeleted = this.getUserById(id);
    return this.em
      .createQueryBuilder()
      .delete()
      .from(user_usr)
      .whereInIds(id)
      .execute()
      .then(() => userDeleted); // 回傳raw沒有資料
  }

  public async findOneByToken(token: string) {
    return await this.em
      .createQueryBuilder(user_usr, 'u')
      .where('u.usr_apiKey = :token', { token })
      .getOne();
  }
}
