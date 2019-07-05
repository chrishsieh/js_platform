import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { DatabaseModule } from './db/db.module';
import { person_per } from '../entities/person_per';
import { Connection } from 'typeorm';

@Module({
  imports: [
    RenderModule,
    CacheModule,
    ConfigModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
        "name": "default",
        "type": "mariadb",
        "host": "db",
        "port": 3306,
        "username": "churchcrm",
        "password": "changeme",
        "database": "churchcrm",
        "synchronize": false,
        "entities": [person_per]
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    @InjectConnection('default')
    private readonly connection: Connection,
  ) {}
}
