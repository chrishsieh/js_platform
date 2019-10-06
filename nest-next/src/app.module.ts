import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { CacheModule } from './cache/cache.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './db/db.module';
import { DashBoardModule } from './feature/dashboard/dashboard.module';
import { PeopleModule } from './feature/people/people.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/users.module';

@Module({
  imports: [
    SharedModule,
    AuthModule,
    UserModule,
    RenderModule,
    // CacheModule,
    ConfigModule,
    DatabaseModule,
    DashBoardModule,
    PeopleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/*
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, cors) // 要套用哪個Middleware，可以套用多個middleware，以逗點分隔
      .exclude(
        // 列舉排除的routes
        //{ path: '/', method: RequestMethod.POST },
        { path: 'users', method: RequestMethod.GET },
      )
      .forRoutes(AppController); // 指定哪些routes要套用，可以傳入Controller或是Controller陣列
  }
}
*/
