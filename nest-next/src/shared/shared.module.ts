import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntities } from './entity';
import { HttpExceptionFilter } from './filters/httpexception.filter';
import { SimpleAuthGuard } from './guards/simple-auth.guard';
import { TransformResInterceptor } from './interceptors/transformRes.interceptor';
import { UserDTOValidationPipe } from './pipes/userDTOValidation.pipe';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mariadb',
      host: 'db',
      port: 3306,
      username: 'churchcrm',
      password: 'changeme',
      database: 'churchcrm',
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
    HttpExceptionFilter,
    TransformResInterceptor,
  ],
  exports: [
    UserDTOValidationPipe,
    SimpleAuthGuard,
    HttpExceptionFilter,
    TransformResInterceptor,
  ],
})
export class SharedModule {}
