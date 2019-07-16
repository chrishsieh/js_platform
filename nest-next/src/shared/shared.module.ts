import { HttpExceptionFilter } from './filters/httpexception.filter';
import { Module } from '@nestjs/common';
import { SimpleAuthGuard } from './guards/simple-auth.guard';
import { TransformResInterceptor } from './interceptors/transformRes.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDTOValidationPipe } from './pipes/userDTOValidation.pipe';
import { userEntities } from './entity';
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
