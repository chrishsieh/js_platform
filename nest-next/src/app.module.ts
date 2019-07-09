import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './db/db.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    SharedModule,
    RenderModule,
    CacheModule,
    ConfigModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
