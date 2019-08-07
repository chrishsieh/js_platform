import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { Users } from '../entity/user';

@EventSubscriber()
export class PersonSubscriber implements EntitySubscriberInterface<Users> {
  listenTo() {
    return Users;
  }

  async beforeInsert(event: InsertEvent<Users>) {
    Logger.log(`-----Before Insert------`);
    Logger.log(event.entity);
    event.entity.usr_LastLogin = new Date();
  }

  async afterInsert(event: InsertEvent<Users>) {
    Logger.log(`-----After Insert------`);

    //    event.manager
    //      .createQueryBuilder(user, 'u')
    //      .relation('roles')
    //      .of(event.entity);
  }
}
