import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { UserUsrService } from './db.service';
import { UserController } from './db.controller';
import { userEntities } from '../shared/entity';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(userEntities)],
  providers: [UserUsrService],
  controllers: [UserController],
})
export class DatabaseModule {
  constructor(
    @InjectConnection('default')
    private readonly connection: Connection,
  ) {}
}
