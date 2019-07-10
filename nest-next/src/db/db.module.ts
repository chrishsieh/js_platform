import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { UserUsrService } from './db.service';
import { UserController } from './db.controller';
import { userEntities } from '../shared/entity';
import { Connection } from 'typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    //PassportModule.register({ defaultStrategy: 'bearer' }),
    // 指定strategy，不用在AuthGuard裡特別指定
    //PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature(userEntities),
  ],
  providers: [UserUsrService],
  controllers: [UserController],
})
export class DatabaseModule {
  constructor(
    @InjectConnection('default')
    private readonly connection: Connection,
  ) {}
}
