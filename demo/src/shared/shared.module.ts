//import { HttpExceptionFilter } from './filters/httpexception.filter';
import { Module } from '@nestjs/common';
import { SimpleAuthGuard } from './guards/simple-auth.guard';
import { HttpAuthGuard } from './guards/passport.guard';
import { TransformResInterceptor } from './interceptors/transformRes.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDTOValidationPipe } from './pipes/userDTOValidation.pipe';
import { userEntities } from './entity';
import { TokenDTO } from './DTOs/tokens';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mariadb',
      host: 'db',
      port: 3306,
      username: 'demo',
      password: 'demo_user',
      database: 'demo',
      synchronize: true,
      logging: false,
      entities: [
        ...userEntities, // use entity/index.ts
      ],
      migrations: ['migration/**/*.ts'],
      subscribers: ['subscriber/**/*.ts'],
    }),
  ],
  providers: [
    UserDTOValidationPipe,
    SimpleAuthGuard,
    HttpAuthGuard,
    //    HttpExceptionFilter,
    TransformResInterceptor,
    TokenDTO,
  ],
  exports: [
    UserDTOValidationPipe,
    SimpleAuthGuard,
    HttpAuthGuard,
    //    HttpExceptionFilter,
    TransformResInterceptor,
    TokenDTO,
  ],
})
export class SharedModule {}
