import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { InjectConnection, TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { userEntities } from '../shared/entity';
import { UserController } from './db.controller';
import { UserUsrService } from './db.service';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'bearer' }),
    // 指定strategy，不用在AuthGuard裡特別指定
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature(userEntities),
  ],
  providers: [UserUsrService],
  controllers: [UserController],
})
export class DatabaseModule {}
