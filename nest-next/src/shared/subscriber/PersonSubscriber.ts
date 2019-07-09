import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { user_usr } from '../entity/user_usr';

@EventSubscriber()
export class PersonSubscriber implements EntitySubscriberInterface<user_usr> {
  listenTo() {
    return user_usr;
  }

  async beforeInsert(event: InsertEvent<user_usr>) {
    Logger.log(`-----Before Insert------`);
    Logger.log(event.entity);
    event.entity.usr_LastLogin = new Date();
  }

  async afterInsert(event: InsertEvent<user_usr>) {
    Logger.log(`-----After Insert------`);

    event.manager
      .createQueryBuilder(user_usr, 'u')
      .relation('roles')
      .of(event.entity);
  }
}
