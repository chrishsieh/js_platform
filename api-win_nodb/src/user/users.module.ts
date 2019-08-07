import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { controllersForUser } from './controllers';
import { servicesForUser } from '../shared/services';
// 資料庫使用
//import { TypeOrmModule } from '@nestjs/typeorm';
//import { userEntities } from '../shared/entity';

@Module({
  imports: [
    SharedModule, // import shared module
//    TypeOrmModule.forFeature([...userEntities]), // forFeature告訴nest.js在typeorm要存取相關的entity
  ],
  controllers: [...controllersForUser],
  providers: [...servicesForUser],
  exports: [...servicesForUser],
})
export class UserModule {}
