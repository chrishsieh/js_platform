import { Module } from '@nestjs/common';
import { SimpleAuthGuard } from './guards/simple-auth.guard';
import { TokenDTO } from './DTOs/tokens';
// 資料庫使用
//import { userEntities } from './entity';
//import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
	imports: [
		//    資料庫設定
		//    TypeOrmModule.forRoot({
		//      name: 'default',
		//      type: 'mariadb',
		//      host: 'db',
		//      port: 3306,
		//      username: 'demo',
		//      password: 'demo_user',
		//      database: 'demo',
		//      synchronize: true,
		//      logging: false,
		//      entities: [
		//        ...userEntities, // use entity/index.ts
		//      ],
		//      migrations: ['migration/**/*.ts'],
		//      subscribers: ['subscriber/**/*.ts'],
		//	}),
	],
	providers: [
		SimpleAuthGuard,
		TokenDTO,
	],
	exports: [
		SimpleAuthGuard,
		TokenDTO,
	],
})
export class SharedModule { }
