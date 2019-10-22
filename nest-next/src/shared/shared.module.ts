import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { userEntities } from './entity';
import { HttpExceptionFilter } from './filters/httpexception.filter';
import { SimpleAuthGuard } from './guards/simple-auth.guard';
import { TransformResInterceptor } from './interceptors/transformRes.interceptor';
import { UserDTOValidationPipe } from './pipes/userDTOValidation.pipe';

function DatabaseOrmModule(): DynamicModule {
  const config = new ConfigService().read();
  const parameter: any = {
    name: 'default',
    type: config.DB_TYPE,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      ...userEntities, // use entity/index.ts
    ],
    migrations: ['migration/**/*.ts'],
    subscribers: ['subscriber/**/*.ts'],
  };

  return TypeOrmModule.forRoot(parameter);
}

@Module({
  imports: [
    ConfigModule,
    DatabaseOrmModule(),
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
