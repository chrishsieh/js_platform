import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user_usr } from '../shared/entity/user_usr';

@Injectable()
export class UserUsrService {
  constructor(
    @InjectRepository(user_usr)
    private readonly UserRepository: Repository<user_usr>,
  ) {}

  findAll(): Promise<user_usr[]> {
    return this.UserRepository.find();
  }

  findById(id: number): Promise<user_usr> {
    return this.UserRepository.findOneOrFail(id);
  }

  getFirst(): Promise<user_usr[]> {
    return this.UserRepository.createQueryBuilder('user')
      .select('user.usr_UserName')
      .addSelect('user.usr_apiKey')
      .orderBy('user.usr_per_ID', 'DESC')
      .take(10)
      .getMany();
  }

  async getUsers(): Promise<user_usr[]> {
    return await this.UserRepository.createQueryBuilder('getUsers')
      .select('getUsers.usr_UserName')
      .addSelect('getUsers.usr_apiKey')
      .orderBy('getUsers.usr_per_ID', 'DESC')
      .getMany();
  }
}
