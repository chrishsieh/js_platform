import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/users.module';
import { SharedModule } from './shared/shared.module';

@Module({
	imports: [SharedModule, AuthModule, UserModule],
	controllers: [],
	providers: [],
})
export class AppModule { }
